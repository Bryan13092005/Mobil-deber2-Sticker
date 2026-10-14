import { ImageSourcePropType, View, StyleSheet, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useState, useEffect, useRef } from 'react';
//habilitar los gestos dentro de la pantalla del usuario
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { captureRef } from 'react-native-view-shot';
import * as MediaLibrary from 'expo-media-library/legacy';
import domtoimage from 'dom-to-image';


import ImageViewer from '@/components/image-viewer';
import Button from '@/components/button';
import IconButton from '@/components/icon-button';
import CircleButton from '@/components/circle-button';
import EmojiPicker from '@/components/emoji-picker';
import EmojiList from '@/components/emoji-list';
import EmojiSticker from '@/components/emoji-sticker';

const PlaceholderImage = require('@/assets/images/background-image.png');

// Pantalla para elegir una imagen, añadir un emoji y guardarla.
export default function Index() {
  // Referencia usada para capturar el resultado final.
  const imageRef = useRef<View>(null);
  // Solicita acceso a la biblioteca de imágenes cuando hace falta.
  const [permissionResponse, requestPermission] = ImagePicker.useMediaLibraryPermissions();
  // Estado de la imagen y de los controles de edición.
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [pickedEmoji, setPickedEmoji] = useState<ImageSourcePropType | undefined>(undefined);

  // Solicita permiso de galería al abrir la pantalla si aún no se concedió.
  useEffect(() => {
    if (!permissionResponse?.granted) {
      requestPermission();
    }
  });

  const pickImageAsync = async () => {
    // Abre la galería y guarda la imagen seleccionada para editarla.
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
      console.log(result);
    } else {
      alert('No has seleccionado ninguna imagen');
    }
  };

  const onReset = () => {
      setShowAppOptions(false);
      setPickedEmoji(undefined);
    };

    // Abre el selector para añadir una calcomanía.
    const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  // Guarda la composición con el método disponible en cada plataforma.
  const onSaveImageAsync = async () => {
    if (Platform.OS !== 'web') {
    try {
      const localUri = await captureRef(imageRef, {
        height: 440,
        quality: 1,
      });

      await MediaLibrary.saveToLibraryAsync(localUri);
      if (localUri) {
        alert('GUARDADO!');
      }
    } catch (e) {
      console.log(e);
    }
    } else {
      try {
        const dataUrl = await domtoimage.toJpeg(imageRef.current, {
          quality: 0.95,
          width: 320,
          height: 440,
        });

        let link = document.createElement('a');
        link.download = 'sticker-smash.jpeg';
        link.href = dataUrl;
        link.click();
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    // Captura la imagen junto con la calcomanía para generar el resultado.
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <View ref={imageRef} collapsable={false}>
            <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
            {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />}
          </View>
        </View>
        {/* Muestra controles de edición o acciones para iniciar. */}
        {showAppOptions ? (
          <View style={styles.optionsContainer}>
            <View style={styles.optionsRow}>
              <IconButton icon="refresh" label="Reset" onPress={onReset} />
              <CircleButton onPress={onAddSticker} />
              <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
            </View>
          </View>
        ) : (
          <View style={styles.footerContainer}>
            <Button theme="primary" label="Elige una imagen" onPress={pickImageAsync}/>
            <Button label="Usar esta imagen" onPress={()=>{setShowAppOptions(true)}}/>
          </View>
        )}
        {/* Selector modal que actualiza la calcomanía elegida. */}
        <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
          <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
        </EmojiPicker>
      </View>
    </GestureHandlerRootView>

  );
}

// Distribuye el área de imagen y los controles en la pantalla.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E2E4E9',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 2,
    paddingBottom: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionsContainer: {
    flex: 1 / 3,
    width: '75%',
    justifyContent: 'space-between',
    paddingBottom: 12,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '75%',
  },
});
