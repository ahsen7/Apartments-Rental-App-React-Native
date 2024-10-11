import { View, Text, SafeAreaView, TouchableOpacity, Image, TextInput, ScrollView, FlatList } from 'react-native'
import React, {useState, useEffect} from 'react'
import { HomeIcon, UserIcon, CogIcon, Bars3Icon, ArrowRightOnRectangleIcon, MagnifyingGlassIcon, AdjustmentsHorizontalIcon } from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';
import { apartmentoptions, aptcategories, apartments } from '../../AppData/ApartmentData';
import FilterModal from '../Modals/FilterModal';
import axios from 'axios';
import HomeHeader from '../../components/Main/Home/HomeHeader'
import SearchBar from '../../components/Main/Home/SearchBar';
import ApartmentOptions from '../../components/Main/Home/ApartmentOptions';
import ApartmentList from '../../components/Main/Home/ApartmentList';
import CategoryButtons from '../../components/Buttons/CategoryButtons';

const pp = require("../../../assets/images/profilepic.jpg")
const HomeScreen = () => {
  const navigation = useNavigation();
  const [Activesort, setSort] = useState('Popular');
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const [filteredApartments, setFilteredApartments] = useState(apartments); 
  const [searchQuery, setSearchQuery] = useState('');

  const fetchApartments = async () => {
    try {
      const response = await axios.get("http://192.168.0.105:3001/apartments");
      setFilteredApartments(response.data);
    } catch (error) {
      console.error("Error fetching apartments:", error);
    }
  };

  useEffect(() => {
    fetchApartments();
  }, []);

  const applyFilters = (filters) => {
    const filtered = apartments.filter(apartment => 
      apartment.price <= filters.maxPrice && apartment.areasize >= filters.minSize
    );
    setFilteredApartments(filtered);
  };






  return (
//   <SafeAreaView className="bg-white flex-1 p-4">
//     <View className="flex-row justify-between">
//     <TouchableOpacity className="ml-2" onPress={() => navigation.toggleDrawer()}>
//     <Bars3Icon size={35} color="black"/>
//     </TouchableOpacity>
//     <View className="flex-row space-x-3 mr-2">
//      <TouchableOpacity>
//       <Image source={pp} className="w-10 h-10 rounded-full"/>
//       </TouchableOpacity>
//     </View>
//     </View>

//     <View className="flex-row mt-2 w-[90%] p-2 bg-gray-100 rounded-lg items-center self-center">
//   <MagnifyingGlassIcon size={25} color="black" />
//   <TextInput
//    className="flex-1 ml-2 text-center"
//    placeholder="Search apartments..." 
//    placeholderTextColor="gray"
//   />
//  <TouchableOpacity 
//  className="rounded-lg bg-[#3EC5AD] w-10 h-10 items-center justify-center"
//  onPress={() => setFilterModalVisible(true)}
//   >
// <AdjustmentsHorizontalIcon size={27} color="white"/>
// </TouchableOpacity>
// </View>

// <ScrollView horizontal showsHorizontalScrollIndicator={false} className=" mt-6 ">
//         {apartmentoptions.map(apartment => (
//           <TouchableOpacity 
//             key={apartment.id} 
//             className="mr-4 mb-40"
//           >
//             <Image 
//               source={apartment.image} 
//               className="h-40 w-60 rounded-lg"
//             />
//           </TouchableOpacity>
//         ))}
//       </ScrollView>
//       <View className="flex-row justify-between items-center mx-4 bg-gray-100 rounded-lg p-3 mt-4">
//   {
//     aptcategories.map((sort, index) => {
//       let isActive = sort === Activesort;
//       return (
//         <TouchableOpacity 
//           key={index} 
//           className={`flex-1 mx-1 py-3 rounded-lg ${isActive ? 'bg-[#3EC5AD]' : 'bg-gray-100'}`} 
//           onPress={() => setSort(sort)}
//         >
//           <Text 
//             className={`text-center font-semibold ${isActive ? 'text-white' : 'text-gray-600'}`} 
//             style={{ fontSize: 14, fontFamily:'Urbanist' }}
//           >
//             {sort}
//           </Text>
//         </TouchableOpacity>
//       );
//     })
//   }
// </View>

//     <ScrollView className="mt-10">
//         {apartments.map(apartment => (
//           <TouchableOpacity 
//             key={apartment.id} 
//             onPress={() => navigation.navigate('ApartmentDetails', { apartmentId: apartment.id })} 
//             className="bg-white m-3 rounded-lg shadow-lg"
//           >
//             <Image 
//               source={apartment.image} 
//               className="h-36 w-full rounded-t-lg"
//             />
//             <View className="p-4">
//               <Text className="font-bold text-lg" style={{fontFamily: 'Viga'}}>{apartment.name}</Text>
//               <Text className="text-gray-500" style={{fontFamily: 'Urbanist'}}>{apartment.location}</Text>
//               <Text className="text-gray-500" style={{fontFamily: 'Urbanist'}}>{apartment.areasize}</Text>
//               <Text className="text-gray-500" style={{fontFamily: 'Urbanist'}}>{apartment.numberofrooms} Rooms</Text>
//               <Text className="text-black font-bold" style={{fontFamily: 'Viga'}}>{apartment.price}</Text>
//             </View>
//           </TouchableOpacity>
//         ))}
//       </ScrollView>

//       <FilterModal
//         visible={filterModalVisible}
//         onClose={() => setFilterModalVisible(false)}
//         onApply={applyFilters} 
//       />
//   </SafeAreaView>
<SafeAreaView className="bg-white flex-1 p-4">
      <HomeHeader />
      <SearchBar setFilterModalVisible={setFilterModalVisible} />
      <ApartmentOptions />
      <CategoryButtons Activesort={Activesort} setSort={setSort} />
      <ApartmentList navigation={navigation} />
      <FilterModal
        visible={filterModalVisible}
        onClose={() => setFilterModalVisible(false)}
        onApply={applyFilters}
      />
    </SafeAreaView>


  )
}

export default HomeScreen