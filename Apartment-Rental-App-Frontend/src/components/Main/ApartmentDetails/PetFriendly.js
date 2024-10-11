import { View, Text } from 'react-native';

const PetFriendlyBadgeComponent = ({ petFriendly }) => {
  return (
    <View className={`mt-6 p-4 rounded-lg ${petFriendly ? 'bg-green-50' : 'bg-red-50'} shadow-sm`} style={{marginHorizontal: 10,}}>
      <Text className={`text-lg font-semibold text-center ${petFriendly ? 'text-green-600' : 'text-red-600'}`} style={{fontFamily: 'Urbanist'}}>
        {petFriendly ? 'Pet Friendly' : 'No Pets Allowed'}
      </Text>
    </View>
  );
};

export default PetFriendlyBadgeComponent;
