// Modal con una descripción del propósito y las funciones del proyecto.
import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';
import { PropsWithChildren } from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

type Props = PropsWithChildren<{
  isVisible: boolean;
  onClose: () => void;
}>;

export default function AcercaDelProyecto({ isVisible, onClose }: Props) {
  return (
    <View>
      {/* El contenido y el botón de cierre se muestran cuando está visible. */}
      <Modal animationType="slide" transparent={true} visible={isVisible}>
        <View style={styles.modalContent}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Acerca de este proyecto</Text>
            <Pressable onPress={onClose} style={styles.closeButton}>
              <MaterialIcons name="close" size={22} style={styles.closeIcon} />
            </Pressable>
          </View>
            <View style={styles.body}>
              <Text style={styles.bodyText}>
                Este es un proyecto de aplicación móvil desarrollado por un estudiante de la Escuela Politécnica Nacional (EPN) que tiene como objetivo inducirnos en los conceptos basicos de expo Go para el desarrollo de aplicaciones móviles en react native.
              </Text>
              <Text style={styles.bodyText}>
                En este caso, se ha creado una aplicacion que permite seleccionar una imagen del usuario y agregarle un emoji, para posteriormente descargarla.
              </Text>
            </View>
        </View>
      </Modal>
    </View>
  );
}

// Organiza el panel, el encabezado y el texto descriptivo.
const styles = StyleSheet.create({
  modalContent: {
    height: '60%',
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    borderTopWidth: 2,
    borderColor: '#D2D6DE',
    position: 'absolute',
    bottom: 0,
    shadowColor: '#001F3F',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 8,
  },
  titleContainer: {
    height: '18%',
    backgroundColor: '#FFFFFF',
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#D2D6DE',
    paddingHorizontal: 22,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#001F3F',
    fontSize: 19,
    fontWeight: '700',
  },
  body: {
    paddingHorizontal: 22,
    paddingVertical: 18,
  },
  bodyText: {
    color: '#111111',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 12,
  },
  closeButton: {
    minWidth: 44,
    minHeight: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeIcon: {
    color: '#001F3F',
  },
});
