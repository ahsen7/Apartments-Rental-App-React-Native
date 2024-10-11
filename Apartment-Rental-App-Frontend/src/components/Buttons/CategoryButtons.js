import { View, TouchableOpacity, Text } from 'react-native';
import { aptcategories } from '../../AppData/ApartmentData';

const CategoryButtons = ({ Activesort, setSort }) => {
  return (
    <View className="flex-row justify-between items-center mx-4 bg-gray-100 rounded-lg p-3 mt-4">
      {aptcategories.map((sort, index) => {
        let isActive = sort === Activesort;
        return (
          <TouchableOpacity
            key={index}
            className={`flex-1 mx-1 py-3 rounded-lg ${isActive ? 'bg-[#3EC5AD]' : 'bg-gray-100'}`}
            onPress={() => setSort(sort)}
          >
            <Text className={`text-center font-semibold ${isActive ? 'text-white' : 'text-gray-600'}`} style={{ fontSize: 14, fontFamily: 'Urbanist' }}>
              {sort}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CategoryButtons;
