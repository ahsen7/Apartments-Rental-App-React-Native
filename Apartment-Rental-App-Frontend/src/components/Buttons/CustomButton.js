import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity 
      className="bg-[#3EC5AD] px-24 py-3 rounded-md" 
      onPress={onPress}
    >
      <Text className="text-white text-lg font-semibold" style={{fontFamily: 'Urbanist', fontWeight: '400'}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
