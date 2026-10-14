import { ImageSourcePropType, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

type Props = {
  imageSize: number;
  stickerSource: ImageSourcePropType;
};

export default function EmojiSticker({ imageSize, stickerSource }: Props) {
    // Valores compartidos animan el tamaño y la posición de la calcomanía.
    const scaleImage = useSharedValue(imageSize);
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);

    // Alterna el tamaño de la calcomanía al tocarla dos veces.
    const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .onStart(() => {
        if (scaleImage.value !== imageSize * 2) {
        scaleImage.value = scaleImage.value * 2;
        } else {
        scaleImage.value = Math.round(scaleImage.value / 2);
        }
    });

  // Aplica una transición suave al cambio de tamaño.
  const imageStyle = useAnimatedStyle(() => {
    return {
        width: withSpring(scaleImage.value),
        height: withSpring(scaleImage.value),
    };
    });

    // Actualiza la posición mientras se arrastra la calcomanía.
    const drag = Gesture.Pan().onChange(event => {
        translateX.value += event.changeX;
        translateY.value += event.changeY;
    });

    // Traslada el contenedor usando los valores del gesto.
    const containerStyle = useAnimatedStyle(() => {
        return {
            transform: [
            {
                translateX: translateX.value,
            },
            {
                translateY: translateY.value,
            },
            ],
        };
    });

  // Combina los gestos de arrastre y doble toque sobre la imagen.
  return (
    <GestureDetector gesture={drag}>
      <Animated.View style={[containerStyle, { top: -350 }]}>
        <GestureDetector gesture={doubleTap}>
          <Animated.Image
            source={stickerSource}
            resizeMode="contain"
            style={[{ width: imageSize, height: imageSize }, imageStyle]}
          />
        </GestureDetector>
      </Animated.View>
    </GestureDetector>
  );
}
