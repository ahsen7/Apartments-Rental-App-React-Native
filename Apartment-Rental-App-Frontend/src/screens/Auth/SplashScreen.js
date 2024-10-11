import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { AppColors } from '../../theme/Color';


const logo = require("../../../assets/images/neuron.png")
const Applogo = require("../../../assets/images/RoomlyLogo.png")

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Welcome'); 
    }, 4000); 
  }, [navigation]);

  return (
    <Animated.View
      entering={FadeIn.duration(500)}
      exiting={FadeOut.duration(500)}
      className="flex-1 justify-between items-center bg-slate-600"
      style={{backgroundColor: AppColors.bg}}
    >
     
      <View className="flex-1 justify-center items-center">
        <Image 
          source={Applogo}
          className="w-80 h-80 mb-6" 
          resizeMode="contain" 
        />
        
       
      </View>
      
    
    </Animated.View>
  );
};

export default SplashScreen;
