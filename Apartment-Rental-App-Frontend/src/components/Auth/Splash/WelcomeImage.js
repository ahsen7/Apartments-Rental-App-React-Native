import { Image } from 'react-native';
import React from 'react';

const WelcomeImage = ({ source }) => {
  return (
    <Image
      source={source}
      style={{ width: 420, height: 420 }}
      resizeMode="contain"
    />
  );
};

export default WelcomeImage;
