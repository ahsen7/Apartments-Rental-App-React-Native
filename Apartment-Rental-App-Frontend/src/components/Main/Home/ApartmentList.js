import { ScrollView, TouchableOpacity, Image, View, Text } from 'react-native';
import { apartments } from '../../../AppData/ApartmentData';

const ApartmentList = ({ navigation }) => {
  return (
    <ScrollView className="mt-10">
      {apartments.map(apartment => (
        <TouchableOpacity
          key={apartment.id}
          onPress={() => navigation.navigate('ApartmentDetails', { apartmentId: apartment.id })}
          className="bg-white m-3 rounded-lg shadow-lg"
        >
          <Image source={apartment.image} className="h-36 w-full rounded-t-lg" />
          <View className="p-4">
            <Text className="font-bold text-lg" style={{ fontFamily: 'Viga' }}>{apartment.name}</Text>
            <Text className="text-gray-500" style={{ fontFamily: 'Urbanist' }}>{apartment.location}</Text>
            <Text className="text-gray-500" style={{ fontFamily: 'Urbanist' }}>{apartment.areasize}</Text>
            <Text className="text-gray-500" style={{ fontFamily: 'Urbanist' }}>{apartment.numberofrooms} Rooms</Text>
            <Text className="text-black font-bold" style={{ fontFamily: 'Viga' }}>{apartment.price}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default ApartmentList;
