import { View, TextInput, TouchableOpacity } from 'react-native';
import { MagnifyingGlassIcon, AdjustmentsHorizontalIcon } from 'react-native-heroicons/outline';

const SearchBar = ({ setFilterModalVisible }) => {
  return (
    <View className="flex-row mt-2 w-[90%] p-2 bg-gray-100 rounded-lg items-center self-center">
      <MagnifyingGlassIcon size={25} color="black" />
      <TextInput
        className="flex-1 ml-2 text-center"
        placeholder="Search apartments..."
        placeholderTextColor="gray"
      />
      <TouchableOpacity
        className="rounded-lg bg-[#3EC5AD] w-10 h-10 items-center justify-center"
        onPress={() => setFilterModalVisible(true)}
      >
        <AdjustmentsHorizontalIcon size={27} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
