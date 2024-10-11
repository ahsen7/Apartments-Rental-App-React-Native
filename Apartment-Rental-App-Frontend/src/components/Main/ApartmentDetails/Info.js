import { View, Text } from 'react-native';

const ApartmentInfoComponent = ({ apartment }) => {
  return (
    <View className="p-6 space-y-6 bg-[#F9FAFB] rounded-t-3xl -mt-6">
      <Text className="text-3xl font-bold text-gray-900" style={{fontFamily: 'Viga'}}>{apartment.name}</Text>
      <Text className="text-base text-gray-500" style={{fontFamily: 'Urbanist'}}>{apartment.location}</Text>
      <Text className="text-gray-600" style={{fontFamily: 'Urbanist'}}>{apartment.areasize} - {apartment.numberofrooms} Rooms</Text>
      <Text className="text-gray-700 leading-relaxed" style={{fontFamily: 'Urbanist'}}>{apartment.description}</Text>
    </View>
  );
};

export default ApartmentInfoComponent;
