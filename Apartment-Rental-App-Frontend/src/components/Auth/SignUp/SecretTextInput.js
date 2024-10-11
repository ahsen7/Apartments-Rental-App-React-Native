import React from 'react';
import { TextInput, View, Animated, TouchableOpacity } from 'react-native';
import { EyeIcon, EyeSlashIcon } from 'react-native-heroicons/outline';

const SecretTextInput = ({ shakeAnimation, setSecretType }) => {
  const [showSecret, setShowSecret] = React.useState(false);
  const [secretText, setSecretText] = React.useState('');

  const getBorderColor = () => {
    return secretText === '' ? 'transparent' : secretText === 'Realtor123' ? 'green' : 'red';
  };

  return (
    <Animated.View style={{ transform: [{ translateX: shakeAnimation }] }}>
      <View>
        <TextInput
          placeholder="Secret Text"
          value={secretText}
          onChangeText={(text) => {
            setSecretText(text);
            setSecretType(text);
          }}
          secureTextEntry={!showSecret}
          style={{
            borderBottomColor: getBorderColor(),
            borderBottomWidth: 2,
            marginBottom: 20,
            padding: 10,
          }}
        />
        <TouchableOpacity onPress={() => setShowSecret(!showSecret)}>
          {showSecret ? <EyeSlashIcon size={20} color="#3EC5AD" /> : <EyeIcon size={20} color="#3EC5AD" />}
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

export default SecretTextInput;
