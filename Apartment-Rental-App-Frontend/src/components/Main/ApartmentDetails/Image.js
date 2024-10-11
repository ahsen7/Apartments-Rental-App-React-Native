import { View, Image, Text } from 'react-native';

const ApartmentImageComponent = ({ apartment }) => {
  return (
    <View className="relative">
      <Image source={apartment.image} className="w-full h-80 object-cover rounded-b-3xl shadow-lg" />
      <View className="absolute bottom-4 left-4 bg-[#3EC5AD] p-2 rounded-lg shadow">
        <Text className="text-white text-lg font-semibold" style={{fontFamily: 'Viga'}}>{apartment.price}</Text>
      </View>
    </View>
  );
};

export default ApartmentImageComponent;
