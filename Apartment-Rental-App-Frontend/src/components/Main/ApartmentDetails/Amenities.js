import { View, Text } from 'react-native';

const AmenitiesComponent = ({ amenities }) => {
  return (
    <View className="mt-6 ml-4">
      <Text className="text-xl font-semibold text-gray-800 mb-4" style={{fontFamily: 'Viga'}}>Amenities</Text>
      <View className="flex-row flex-wrap">
        {amenities.map((amenity, index) => (
          <View key={index} className="bg-[#E0F7F3] rounded-full px-4 py-2 mr-2 mb-2 shadow-sm">
            <Text className="text-[#3EC5AD] text-sm font-semibold" style={{fontFamily: 'Urbanist'}}>{amenity}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default AmenitiesComponent;
