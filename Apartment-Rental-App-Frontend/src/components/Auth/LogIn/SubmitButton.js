import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const SubmitButton = ({ onPress }) => {
  return (
    <TouchableOpacity
      className="bg-[#3EC5AD] p-4 rounded-lg items-center"
      onPress={onPress}
    >
      <Text className="text-white font-bold" style={{ fontFamily: 'Urbanist', fontWeight: '400' }}>
        LOGIN
      </Text>
    </TouchableOpacity>
  );
};

export default SubmitButton;
