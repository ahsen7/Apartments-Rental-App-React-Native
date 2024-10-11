import React from 'react';
import { Image, View } from 'react-native';

const Applogo = require("../../../../assets/images/RoomlyLogo.png");

const SignUpLogo = () => {
  return (
    <View className="h-1/3 bg-[#3EC5AD] rounded-b-xl justify-center items-center">
      <Image source={Applogo} className="w-32 h-32" resizeMode="contain" />
    </View>
  );
};

export default SignUpLogo;
