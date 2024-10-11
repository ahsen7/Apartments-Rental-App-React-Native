import React from 'react';
import { View, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';

const UserTypeSelector = ({ userType, setUserType }) => {
  return (
    <View className="items-center mb-6">
      <View className="flex-row justify-between mt-2">
        <View className="flex-row items-center">
          <RadioButton
            value="User"
            status={userType === 'User' ? 'checked' : 'unchecked'}
            onPress={() => setUserType('User')}
            color="#3EC5AD"
          />
          <Text className="ml-2 text-base font-medium">User</Text>
        </View>
        <View className="flex-row items-center">
          <RadioButton
            value="Realtor"
            status={userType === 'Realtor' ? 'checked' : 'unchecked'}
            onPress={() => setUserType('Realtor')}
            color="#3EC5AD"
          />
          <Text className="ml-2 text-base font-medium">Realtor</Text>
        </View>
      </View>
    </View>
  );
};

export default UserTypeSelector;
