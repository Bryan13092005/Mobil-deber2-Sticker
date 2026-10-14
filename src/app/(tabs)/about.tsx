import { Text, View, StyleSheet, Image } from 'react-native';
import { useState } from 'react';
import Button from '@/components/button';
import AcercaDeEPN from '@/components/acerca-de-EPN';
import AcercaDelProyecto from '@/components/acerca-de-este';

export default function AboutScreen() {
    // Cada botón controla por separado la visibilidad de su modal.
    const [isModalVisibleEPN, setIsModalVisibleEPN] = useState<boolean>(false);
    const [isModalVisibleProyecto, setIsModalVisibleProyecto] = useState<boolean>(false);

    // Cierra el modal con información de la EPN.
    const onModalCloseEPN = () => {
        setIsModalVisibleEPN(false);
    };

    // Cierra el modal con información del proyecto.
    const onModalCloseProyecto = () => {
        setIsModalVisibleProyecto(false);
    };

  return (
    <View style={styles.container}>
      {/* Encabezado e imagen identifican la pantalla informativa. */}
      <Text style={styles.text}>Acerca de</Text>
      <Image source={require('@/assets/images/favicon.png')} style={styles.img}/>

      {/* Muestra la información institucional de la EPN. */}
      <AcercaDeEPN isVisible={isModalVisibleEPN} onClose={onModalCloseEPN} />
      <Button label="Acerca de la EPN" onPress={() => setIsModalVisibleEPN(true)} theme="secondary"/>

      {/* Muestra los detalles de este proyecto. */}
      <AcercaDelProyecto isVisible={isModalVisibleProyecto} onClose={onModalCloseProyecto} />
      <Button label="Acerca de este proyecto" onPress={() => setIsModalVisibleProyecto(true)} />
    </View>
  );
}

// Estilos de distribución y presentación de la pantalla.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E2E4E9',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    gap: 14,
  },
  text: {
    color: '#001F3F',
    fontSize: 28,
    fontWeight: '700',
    lineHeight: 36,
    textAlign: 'center',
    marginBottom: 10,
  },
  img:{
        height:250,
        width:200
    },
});
