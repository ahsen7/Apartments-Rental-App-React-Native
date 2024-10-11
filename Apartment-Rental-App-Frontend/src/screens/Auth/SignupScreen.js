import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Animated, KeyboardAvoidingView, ScrollView, Platform, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { EyeIcon, EyeSlashIcon } from 'react-native-heroicons/outline';
import axios from 'axios';
import Toast from 'react-native-toast-message';
import {useFonts} from 'expo-font'
import { RadioButton } from 'react-native-paper';
import SignUpLogo from '../../components/Auth/SignUp/Logo';
import UserTypeSelector from '../../components/Auth/SignUp/UserTypeSelector';
import TextInputField from '../../components/Auth/SignUp/TextInputField';
import SecretTextInput from '../../components/Auth/SignUp/SecretTextInput';
import SubmitButton from '../../components/Auth/SignUp/SignupButton';


const Applogo = require("../../../assets/images/RoomlyLogo.png")

const SignUpScreen = () => {
  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    'Ubuntu': require("../../../assets/fonts/Ubuntu-Regular.ttf"),
    'Viga' : require('../../../assets/fonts/Viga-Regular.ttf')

  })

  const [name, setName] = useState('');
  const [nameVerify, setNameVerify] = useState(null);

  const [email, setEmail] = useState('');
  const [emailVerify, setEmailVerify] = useState(null);

  const [mobile, setMobile] = useState('');
  const [mobileVerify, setMobileVerify] = useState(null);

  const [password, setPassword] = useState('');
  const [passwordVerify, setPasswordVerify] = useState(null);

  const [showPassword, setShowPassword] = useState(false);

  const [isFocused, setIsFocused] = useState({}); 
  const shakeAnimation = useRef(new Animated.Value(0)).current; 

  const [userType, setUserType] = useState('');
  const [secretType, setsecretType] = useState('');

  
  function handleSubmit(){
    console.log("Submit button pressed"); 
    
    const userData = {
      name: name,
      email,
      mobile,
      password,
      userType
    };

    if(nameVerify && emailVerify && mobileVerify && passwordVerify){
      if(userType == "Realtor" && secretType != 'Realtor123'){
        Toast.show({
          type: 'error',
          text1: 'Registration Failed',
          text2: 'Invalid Secret Text',
        })
      }
      axios
      .post("YourURL/register", userData)
      .then((res) => {
        console.log("Response received: ", res.data); 
        if (res.data.status === 'Ok') {
          console.log("User registered successfully");

          Toast.show({
            type: 'success',
            text1: 'Registration Successful',
            text2: 'You can now login',
          })

          setTimeout(() => {
            navigation.navigate('Login')
          }, 2000);
        } else {
          console.error("Error registering user: ", res.data.data);

          Toast.show({
            type: 'error',
            text1: 'Registration Failed',
            text2: res.data.data,
          })
        }
      })
      .catch(e => {
        console.error("Error occurred while registering user: ", e);

        Toast.show({
          type: "error",
          text1: 'Error',
          text2: "Failed to Register User"
        })
         
      });
  }
  else{
    Toast.show({
      type: 'error',
      text1: 'Error',
      text2: 'Please fill all fields correctly.',
    })
  }
    }
    
    


  const triggerShake = () => {
    Animated.sequence([
      Animated.timing(shakeAnimation, {
        toValue: 3, 
        duration: 40,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: -3, 
        duration: 40,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 0, 
        duration: 40,
        useNativeDriver: true,
      }),
    ]).start();
  };


  const handleName = (e) => {
    const nameVar = e.nativeEvent.text;
    setName(nameVar);

    if (nameVar.length > 1) {
      setNameVerify(true);
    } else {
      setNameVerify(false);
      
    }
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

  const handleMobile = (e) => {
    const mobileVar = e.nativeEvent.text;
    setMobile(mobileVar);

    if (/^\d{10}$/.test(mobileVar)) {
      setMobileVerify(true);
    } else {
      setMobileVerify(false);
    
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

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex-1 bg-white">
      
          <View className="h-1/3 bg-[#3EC5AD] rounded-b-xl justify-center items-center">
            <Image source={Applogo} className="w-32 h-32" resizeMode="contain" />
          </View>

   
          <View className="absolute w-full px-6 top-1/4">
            <View className="bg-white rounded-xl shadow-lg p-6">
            
              <View className="items-center mb-6">
                <Text className="text-2xl font-semibold text-[#041845]" style={{ fontFamily: 'Viga' }}>
                  Signup to continue
                </Text>
                <Text className="text-lg text-gray-500" style={{ fontFamily: 'Urbanist' }}>
                  Create Your Account
                </Text>
                <View className="flex-row justify-between mt-2">
                <View className="flex-row items-center">
                    <RadioButton
                      value="User"
                      status={userType === 'User' ? 'checked' : 'unchecked'}
                      onPress={() => setUserType('User')}
                      color="#3EC5AD"
                    />
                    <Text className="ml-2 text-base font-medium" style={{ fontFamily: 'Urbanist' }}>
                      User
                    </Text>
                  </View>
                  <View className="flex-row items-center">
                    <RadioButton
                      value="Realtor"
                      status={userType === 'Realtor' ? 'checked' : 'unchecked'}
                      onPress={() => setUserType('Realtor')}
                      color="#3EC5AD"
                    />
                    <Text className="ml-2 text-base font-medium" style={{ fontFamily: 'Urbanist' }}>
                      Realtor
                    </Text>
                  </View>
                </View>
              </View>


{userType == "Realtor" ?  (<Animated.View style={{ transform: [{ translateX: shakeAnimation }] }}>
                <TextInput
                  placeholder="Secret Text"
                  className="w-full p-4 bg-gray-100 rounded-lg mb-4"
                  placeholderTextColor="gray"
                 onChange={(e) => setsecretType(e.nativeEvent.text)}
               
                />
              </Animated.View>
): (
  ''
)}
             

            
              <Animated.View style={{ transform: [{ translateX: shakeAnimation }] }}>
                <TextInput
                  placeholder="Full Name"
                  className="w-full p-4 bg-gray-100 rounded-lg mb-4"
                  placeholderTextColor="gray"
                  onChange={handleName}
                  onFocus={() => setIsFocused({ ...isFocused, name: true })}
                  onBlur={() => setIsFocused({ ...isFocused, name: false })}
                  style={{
                    borderColor: getBorderColor(nameVerify, 'name'),
                    borderWidth: 2,
                  }}
                />
              </Animated.View>

          
              <Animated.View style={{ transform: [{ translateX: shakeAnimation }] }}>
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

              <Animated.View style={{ transform: [{ translateX: shakeAnimation }] }}>
                <TextInput
                  placeholder="Mobile Number"
                  className="w-full p-4 bg-gray-100 rounded-lg mb-4"
                  placeholderTextColor="gray"
                  onChange={handleMobile}
                  onFocus={() => setIsFocused({ ...isFocused, mobile: true })}
                  onBlur={() => setIsFocused({ ...isFocused, mobile: false })}
                  style={{
                    borderColor: getBorderColor(mobileVerify, 'mobile'),
                    borderWidth: 2,
                  }}
                />
              </Animated.View>

          
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

              <TouchableOpacity
                className="bg-[#3EC5AD] p-4 rounded-lg items-center"
                onPress={() => handleSubmit()}
              >
                <Text className="text-white font-bold" style={{ fontFamily: 'Urbanist' }}>SignUp</Text>
              </TouchableOpacity>

              {/* Links */}
              <View className="flex-row mt-6 justify-center">
                <TouchableOpacity>
                  <Text style={{fontFamily: 'Urbanist'}}>Already have an Account?</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                  <Text style={{fontFamily: 'Viga'}} className="text-[#3EC5AD] underline">Login</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <Toast />
    </KeyboardAvoidingView>

  );
};

export default SignUpScreen;
