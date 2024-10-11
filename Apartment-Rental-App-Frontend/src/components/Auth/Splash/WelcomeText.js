import { Text, View } from 'react-native';
import React from 'react';

const WelcomeText = () => {
  return (
    <View className="mb-8">
      <Text className="text-3xl text-black mb-4 font-extrabold text-center" style={{ fontFamily: 'Viga' }}>
        Welcome to Roomly!
      </Text>
      <Text className="text-base text-black text-justify px-3" style={{ fontFamily: 'Urbanist' }}>
        Your journey to finding the perfect room starts here. Explore, compare, and book your ideal living space today.
      </Text>
    </View>
  );
};

export default WelcomeText;
