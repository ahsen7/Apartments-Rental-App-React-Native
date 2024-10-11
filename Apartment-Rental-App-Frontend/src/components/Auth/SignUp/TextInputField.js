import React from 'react';
import { TextInput, Animated } from 'react-native';

const TextInputField = ({ placeholder, value, setValue, secureTextEntry = false, showPassword, setShowPassword, shakeAnimation }) => {
  return (
    <Animated.View style={{ transform: [{ translateX: shakeAnimation }] }}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={setValue}
        secureTextEntry={secureTextEntry}
        style={{
          borderBottomWidth: 2,
          marginBottom: 20,
          padding: 10,
          borderBottomColor: secureTextEntry ? 'transparent' : 'gray',
        }}
      />
    </Animated.View>
  );
};

export default TextInputField;
