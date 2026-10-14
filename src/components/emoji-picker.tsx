//componente que permite picar un emoji de la lista anterior
import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';
import { PropsWithChildren } from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

type Props = PropsWithChildren<{
  isVisible: boolean;
  onClose: () => void;
}>;

export default function EmojiPicker({ isVisible, children, onClose }: Props) {
  return (
    <View>
      {/* Panel modal para elegir un emoji y cerrar el selector. */}
      <Modal animationType="slide" transparent={true} visible={isVisible}>
        <View style={styles.modalContent}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Elige un emoji</Text>
            <Pressable onPress={onClose} style={styles.closeButton}>
              <MaterialIcons name="close" size={22} style={styles.closeIcon} />
            </Pressable>
          </View>
          {children}
        </View>
      </Modal>
    </View>
  );
}

// Presenta el selector como una hoja en la parte inferior.
const styles = StyleSheet.create({
  modalContent: {
    height: '25%',
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    borderTopWidth: 1,
    borderColor: '#D2D6DE',
    position: 'absolute',
    bottom: 0,
  },
  titleContainer: {
    height: '16%',
    backgroundColor: '#FFFFFF',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#001F3F',
    fontSize: 16,
    fontWeight: '600',
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
