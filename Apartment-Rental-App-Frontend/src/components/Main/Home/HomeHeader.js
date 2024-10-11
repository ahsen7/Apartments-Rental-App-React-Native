import { View, TouchableOpacity, Image } from 'react-native';
import { Bars3Icon } from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';

const HomeHeader = () => {
  const navigation = useNavigation();
  const pp = require("../../../../assets/images/profilepic.jpg");

  return (
    <View className="flex-row justify-between">
      <TouchableOpacity className="ml-2" onPress={() => navigation.toggleDrawer()}>
        <Bars3Icon size={35} color="black" />
      </TouchableOpacity>
      <View className="flex-row space-x-3 mr-2">
        <TouchableOpacity>
          <Image source={pp} className="w-10 h-10 rounded-full" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeHeader;
