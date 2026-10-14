//componente que permite picar un emoji de la lista anterior
import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';
import { PropsWithChildren } from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

type Props = PropsWithChildren<{
  isVisible: boolean;
  onClose: () => void;
}>;

export default function AcercaDeEPN({ isVisible, onClose }: Props) {
  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={isVisible}>
        <View style={styles.modalContent}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Acerca de la EPN</Text>
            <Pressable onPress={onClose} style={styles.closeButton}>
              <MaterialIcons name="close" size={22} style={styles.closeIcon} />
            </Pressable>
          </View>
            <View style={styles.body}>
              <Text style={styles.bodyText}>
                La Escuela Politécnica Nacional (EPN) es una institución educativa superior técnica que se destaca por su excelencia académica y su compromiso con la investigación y el desarrollo tecnológico.
              </Text>
            </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    height: '36%',
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
    height: '20%',
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
