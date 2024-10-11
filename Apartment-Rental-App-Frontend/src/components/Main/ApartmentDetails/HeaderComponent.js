import { View, Text, TouchableOpacity } from 'react-native';
import { ArrowLeftIcon } from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';

const HeaderComponent = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-row items-center justify-between p-4 ">
      <TouchableOpacity onPress={() => navigation.goBack()} className="p-2 bg-white rounded-full shadow">
        <ArrowLeftIcon size={25} color="black" />
      </TouchableOpacity>
      <Text className="font-bold text-lg text-gray-800" style={{fontFamily: 'Viga'}}>Apartment Details</Text>
      <View className="w-10"></View>
    </View>
  );
};

export default HeaderComponent;
