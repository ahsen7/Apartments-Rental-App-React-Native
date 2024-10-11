// InputField.js
import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { EyeIcon, EyeSlashIcon } from 'react-native-heroicons/outline';

const InputField = ({ placeholder, isPassword, value, onChange, showPassword, setShowPassword, borderColor }) => {
  return (
    <View className="relative">
      <TextInput
        placeholder={placeholder}
        secureTextEntry={isPassword && !showPassword}
        className="w-full p-4 bg-gray-100 rounded-lg mb-4 pr-12"
        placeholderTextColor="gray"
        onChange={onChange}
        style={{
          borderColor: borderColor,
          borderWidth: 1,
        }}
      />
      {isPassword && (
        <TouchableOpacity className="absolute right-4 top-1/4 transform -translate-y-1/2" onPress={setShowPassword}>
          {showPassword ? <EyeIcon size={20} color="black" /> : <EyeSlashIcon size={20} color="black" />}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default InputField;
