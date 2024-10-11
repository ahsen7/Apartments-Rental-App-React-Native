import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Animated, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { EyeIcon, EyeSlashIcon } from 'react-native-heroicons/outline';
import axios from 'axios';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFonts } from 'expo-font'


const Applogo = require("../../../assets/images/RoomlyLogo.png")

const LoginScreen = () => {
  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    'Ubuntu': require("../../../assets/fonts/Ubuntu-Regular.ttf")

  })

  const [email, setEmail] = useState('');
  const [emailVerify, setEmailVerify] = useState(null);

  const [password, setPassword] = useState('');
  const [passwordVerify, setPasswordVerify] = useState(null);

  const [showPassword, setShowPassword] = useState(false);

  const [isFocused, setIsFocused] = useState({});


  const emailShakeAnimation = useRef(new Animated.Value(0)).current;
  const passwordShakeAnimation = useRef(new Animated.Value(0)).current;

  const triggerShake = (animation) => {
    Animated.sequence([
      Animated.timing(animation, {
        toValue: 3,
        duration: 40,
        useNativeDriver: true,
      }),
      Animated.timing(animation, {
        toValue: -3,
        duration: 40,
        useNativeDriver: true,
      }),
      Animated.timing(animation, {
        toValue: 0,
        duration: 40,
        useNativeDriver: true,
      }),
    ]).start();
  };


  const handleEmail = (e) => {
    const emailVar = e.nativeEvent.text;
    setEmail(emailVar);
    const emailRegex = /\S+@\S+\.\S+/;
    if (emailRegex.test(emailVar)) {
      setEmailVerify(true);
    } else {
      setEmailVerify(false);

    }
  };


  const handlePassword = (e) => {
    const passwordVar = e.nativeEvent.text;
    setPassword(passwordVar);
    if (passwordVar.length >= 6) {
      setPasswordVerify(true);
    } else {
      setPasswordVerify(false);

    }
  };


  const getBorderColor = (fieldVerify, fieldName) => {
    if (isFocused[fieldName]) {
      return fieldVerify === null ? 'transparent' : fieldVerify ? 'green' : 'red';
    }
    return 'transparent';
  };


  function handleSubmit() {
    const userdata = {
      email: email,
      password: password,
    };

    axios.post("YourUrl/login-user", userdata)
      .then(res => {
        console.log(res.data);
        if (res.data.status === "OK") {
          Toast.show({
            type: 'success',
            text1: 'Login Successful',
            text2: 'Welcome back!',
          });
    
          AsyncStorage.setItem('token', res.data.data);
          
        
          const screenToNavigate = res.data.userType === 'Realtor' ? 'RealtorScreen' : 'Home';
          const redirectMessage = res.data.userType === 'Realtor' 
            ? 'Redirecting to Realtor Dashboard...' 
            : 'Redirecting to Home...';
    
       
          Toast.show({
            type: 'success',
            text1: 'Login Successful',
            text2: redirectMessage,
          });
    
          setTimeout(() => {
            navigation.navigate(screenToNavigate);
          }, 2000);
          
        }
        else {

          Toast.show({
            type: 'error',
            text1: 'Login Failed',
            text2: res.data.error || 'An unknown error occurred',
          });
        }
      })
      .catch(err => {

        console.error("Login error:", err.response ? err.response.data : err.message);
        Toast.show({
          type: 'error',
          text1: 'Login Error',
          text2: err.response ? err.response.data.error : err.message,
        });
      });
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <View className="flex-1 bg-[#FEFEFE]">
        <View className="h-1/3 bg-[#3EC5AD] rounded-b-xl justify-center items-center">
          <Image source={Applogo} className="w-32 h-32" resizeMode="contain" />
        </View>

        <View className="absolute w-full px-6 top-1/4">
          <View className="bg-white rounded-xl shadow-lg p-6">
            <View className="items-center mb-6">
              <Text className="text-2xl font-semibold text-[#041845]"style={{fontFamily: 'Viga'}}>
                Welcome Back
              </Text>
              <Text className="text-lg text-gray-500" style={{fontFamily: 'Urbanist'}}>
                Log in to your Account
              </Text>
            </View>


            <Animated.View style={{ transform: [{ translateX: emailShakeAnimation }] }}>
              <TextInput
                placeholder="Email"
                className="w-full p-4 bg-gray-100 rounded-lg mb-4"
                placeholderTextColor="gray"
                onChange={handleEmail}
                onFocus={() => setIsFocused({ ...isFocused, email: true })}
                onBlur={() => setIsFocused({ ...isFocused, email: false })}
                style={{
                  borderColor: getBorderColor(emailVerify, 'email'),
                  borderWidth: 2,
                }}
              />
            </Animated.View>

            <Animated.View style={{ transform: [{ translateX: passwordShakeAnimation }] }}>
              <View className="relative">
                <TextInput
                  placeholder="Password"
                  secureTextEntry={!showPassword}
                  className="w-full p-4 bg-gray-100 rounded-lg mb-4 pr-12"
                  placeholderTextColor="gray"
                  onChange={handlePassword}
                  onFocus={() => setIsFocused({ ...isFocused, password: true })}
                  onBlur={() => setIsFocused({ ...isFocused, password: false })}
                  style={{
                    borderColor: getBorderColor(passwordVerify, 'password'),
                    borderWidth: 2,
                  }}
                />
                <TouchableOpacity
                  className="absolute right-4 top-1/4 transform -translate-y-1/2"
                  onPress={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeIcon size={20} color="black" />
                  ) : (
                    <EyeSlashIcon size={20} color="black" />
                  )}
                </TouchableOpacity>
              </View>
            </Animated.View>

            <TouchableOpacity
              className="bg-[#3EC5AD] p-4 rounded-lg items-center"
              onPress={() => handleSubmit()}
            >
              <Text className="text-white font-bold" style={{fontFamily: 'Urbanist', fontWeight: '400'}}>LOGIN</Text>
            </TouchableOpacity>

            <View className="flex-row mt-6 justify-center">
              <TouchableOpacity>
                <Text style={{fontFamily: 'Urbanist'}}>Don't have an Account?</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                <Text style={{fontFamily: 'Viga'}} className="text-[#3EC5AD] underline">SignUp</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Toast />
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
