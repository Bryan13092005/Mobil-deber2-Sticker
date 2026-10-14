import { Text, View, StyleSheet, Image } from 'react-native';
import { useState } from 'react';
import Button from '@/components/button';
import AcercaDeEPN from '@/components/acerca-de-EPN';
import AcercaDelProyecto from '@/components/acerca-de-este';

export default function AboutScreen() {
    const [isModalVisibleEPN, setIsModalVisibleEPN] = useState<boolean>(false);
    const [isModalVisibleProyecto, setIsModalVisibleProyecto] = useState<boolean>(false);

    const onModalCloseEPN = () => {
        setIsModalVisibleEPN(false);
    };

    const onModalCloseProyecto = () => {
        setIsModalVisibleProyecto(false);
    };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Acerca de</Text>
      <Image source={require('@/assets/images/favicon.png')} style={styles.img}/>
      <AcercaDeEPN isVisible={isModalVisibleEPN} onClose={onModalCloseEPN} />
      <Button label="Acerca de la EPN" onPress={() => setIsModalVisibleEPN(true)} theme="secondary"/>

      <AcercaDelProyecto isVisible={isModalVisibleProyecto} onClose={onModalCloseProyecto} />
      <Button label="Acerca de este proyecto" onPress={() => setIsModalVisibleProyecto(true)} />
    </View>
  );
}

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
