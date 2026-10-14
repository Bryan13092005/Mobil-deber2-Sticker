//componente reutilizable para botones que necesita que se envíe el texto, tema, y función que realiza
import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

type Props = {
  label: string;
  theme?: 'primary' | 'secondary';
  onPress?: () => void;
};

export default function Button({ label, theme, onPress }: Props) {
    if (theme === 'primary') {
  return (
      <View
        style={[
          styles.buttonContainer,
          styles.primaryButtonContainer,
        ]}>
        <Pressable
          style={[styles.button, styles.primaryButton]}
          onPress={onPress}>
          <FontAwesome
            name="picture-o"
            size={18}
            style={[styles.buttonIcon, styles.primaryButtonIcon]}
          />
          <Text style={[styles.buttonLabel, styles.primaryButtonLabel]}>{label}</Text>
        </Pressable>
      </View>
    );
  }

  if (theme === 'secondary') {
  return (
      <View
        style={[
          styles.buttonContainer,
          styles.primaryButtonContainer,
        ]}>
        <Pressable
          style={[styles.button, styles.primaryButton]}
          onPress={onPress}>
          <Text style={[styles.buttonLabel, styles.primaryButtonLabel]}>{label}</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  buttonIcon: {
    paddingRight: 8,
  },
  primaryButtonIcon: {
    color: '#e2e4e9',
  },
  primaryButtonContainer: {
    borderWidth: 2,
    borderColor: '#F39C12',
    borderRadius: 14,
  },
  primaryButton: {
    backgroundColor: '#123b65',
    borderRadius: 10,
  },
  primaryButtonLabel: {
    color: '#e2e4e9',
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    minHeight: 44,
    backgroundColor: '#ce3f3f',
    borderWidth: 1,
    borderColor: '#F7BF65',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonLabel: {
    color: '#001F3F',
    fontSize: 16,
  },
});
