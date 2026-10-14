import { ImageSourcePropType, StyleSheet } from 'react-native';
import { Image } from 'expo-image';

type Props = {
  imgSource: ImageSourcePropType;
  selectedImage?:string
};

export default function ImageViewer({ imgSource, selectedImage }: Props) {
  // Muestra la imagen elegida o la imagen predeterminada.
  const imageSource = selectedImage ? { uri: selectedImage } : imgSource;

  return <Image source={imageSource} style={styles.image} />;
}

// Define el tamaño y los bordes de la imagen principal.
const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: '#008d4c',
  },
});
