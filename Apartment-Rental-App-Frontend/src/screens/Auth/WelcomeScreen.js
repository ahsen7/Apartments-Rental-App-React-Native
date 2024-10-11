import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font'
import WelcomeImage from '../../components/Auth/Splash/WelcomeImage';
import WelcomeText from '../../components/Auth/Splash/WelcomeText';
import CustomButton from '../../components/Buttons/CustomButton';


const pic = require("../../../assets/illustrations/il-4.png");
const welcomeimg = require("../../../assets/illustrations/WelcomeScreenimg.png")

export default function WelcomeScreen() {
  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    'Bebas': require("../../../assets/fonts/BebasNeue-Regular.ttf"),
    'Montserrat': require("../../../assets/fonts/Montserrat-VariableFont_wght.ttf"),
    'Metrophobic': require("../../../assets/fonts/Metrophobic-Regular.ttf"),
    'Poppins': require("../../../assets/fonts/Poppins-Regular.ttf"),
    'AfacadFlux': require("../../../assets/fonts/AfacadFlux-Regular.ttf"),
    'Ubuntu': require("../../../assets/fonts/Ubuntu-Regular.ttf")

  })

  return (
    <View className="flex-1 bg-white justify-center items-center">
    <WelcomeImage source={welcomeimg} />
    <WelcomeText />
    <CustomButton 
      title="Get Started" 
      onPress={() => navigation.navigate("Login")} 
    />
  </View>
  );
}
