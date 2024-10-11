import { View, Text } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'

export default function ProfileScreen() {
  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: 'center' }}>
      <LottieView source={require("../../../assets/illustrations/a1.json")}
      style={{width: 200, height: 200}}
      autoPlay
      loop
      />
    </View>
  )
}