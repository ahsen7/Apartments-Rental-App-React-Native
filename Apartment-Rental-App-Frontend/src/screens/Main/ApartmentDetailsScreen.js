import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRoute, useNavigation } from '@react-navigation/native'
import { apartmentsDetails } from '../../AppData/ApartmentData'
import { ArrowLeftIcon } from 'react-native-heroicons/outline'
import {useFonts} from 'expo-font'
import AmenitiesComponent from '../../components/Main/ApartmentDetails/Amenities'
import HeaderComponent from '../../components/Main/ApartmentDetails/HeaderComponent'
import ApartmentInfoComponent from '../../components/Main/ApartmentDetails/Info'
import ApartmentImageComponent from '../../components/Main/ApartmentDetails/Image'
import PetFriendlyBadgeComponent from '../../components/Main/ApartmentDetails/PetFriendly'
import ContactButtonComponent from '../../components/Buttons/ContactButton'

const ApartmentDetailsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { apartmentId } = route.params;

  const [fontsLoaded] = useFonts({
    'Viga' : require('../../../assets/fonts/Viga-Regular.ttf'),
    'Urbanist' : require('../../../assets/fonts/Urbanist-VariableFont_wght.ttf')

  })
  

  const apartment = apartmentsDetails.find(a => a.id === apartmentId);

  return (
    // <SafeAreaView className="bg-white flex-1">
    //   {/* Header Section */}
    //   <View className="flex-row items-center justify-between p-4 ">
    //     <TouchableOpacity onPress={() => navigation.goBack()} className="p-2 bg-white rounded-full shadow">
    //       <ArrowLeftIcon size={25} color="black" />
    //     </TouchableOpacity>
    //     <Text className="font-bold text-lg text-gray-800" style={{fontFamily: 'Viga'}}>Apartment Details</Text>
    //     <View className="w-10"></View>
    //   </View>

    //   {/* Main Content */}
    //   <ScrollView>
    //     {/* Apartment Image */}
    //     <View className="relative">
    //       <Image source={apartment.image} className="w-full h-80 object-cover rounded-b-3xl shadow-lg" />
    //       {/* Price Tag */}
    //       <View className="absolute bottom-4 left-4 bg-[#3EC5AD] p-2 rounded-lg shadow">
    //         <Text className="text-white text-lg font-semibold" style={{fontFamily: 'Viga'}}>{apartment.price}</Text>
    //       </View>
    //     </View>

    //     {/* Apartment Info */}
    //     <View className="p-6 space-y-6 bg-[#F9FAFB] rounded-t-3xl -mt-6">
    //       <Text className="text-3xl font-bold text-gray-900" style={{fontFamily: 'Viga'}}>{apartment.name}</Text>
    //       <Text className="text-base text-gray-500" style={{fontFamily: 'Urbanist'}}>{apartment.location}</Text>
    //       <Text className="text-gray-600" style={{fontFamily: 'Urbanist'}}>{apartment.areasize} - {apartment.numberofrooms} Rooms</Text>

    //       {/* Apartment Description */}
    //       <Text className="text-gray-700 leading-relaxed" style={{fontFamily: 'Urbanist'}}>{apartment.description}</Text>

    //       {/* Amenities Section */}
    //       <View className="mt-6">
    //         <Text className="text-xl font-semibold text-gray-800 mb-4" style={{fontFamily: 'Viga'}}>Amenities</Text>
    //         <View className="flex-row flex-wrap">
    //           {apartment.amenities.map((amenity, index) => (
    //             <View key={index} className="bg-[#E0F7F3] rounded-full px-4 py-2 mr-2 mb-2 shadow-sm">
    //               <Text className="text-[#3EC5AD] text-sm font-semibold" style={{fontFamily: 'Urbanist'}}>{amenity}</Text>
    //             </View>
    //           ))}
    //         </View>
    //       </View>

    //       {/* Availability & Floor */}
    //       <View className="flex-row justify-between items-center mt-6">
    //         <Text className="text-gray-800 text-lg" style={{fontFamily: 'Urbanist'}}> {apartment.availability}</Text>
    //         <Text className="text-gray-800 text-lg" style={{fontFamily: 'Urbanist'}}>Floor: {apartment.floor}</Text>
    //       </View>

    //       {/* Pet Friendly Badge */}
    //       <View className={`mt-6 p-4 rounded-lg ${apartment.petFriendly ? 'bg-green-50' : 'bg-red-50'} shadow-sm`}>
    //         <Text className={`text-lg font-semibold text-center ${apartment.petFriendly ? 'text-green-600' : 'text-red-600'}`} style={{fontFamily: 'Urbanist'}}>
    //           {apartment.petFriendly ? 'Pet Friendly' : 'No Pets Allowed'}
    //         </Text>
    //       </View>

    //       {/* Contact Button */}
    //       <TouchableOpacity className="bg-[#3EC5AD] p-4 rounded-lg mt-8 shadow-lg">
    //         <Text className="text-white font-bold text-center text-lg" style={{fontFamily: 'Urbanist'}}>Contact for Rent</Text>
    //       </TouchableOpacity>
    //     </View>
    //   </ScrollView>
    // </SafeAreaView>
    <SafeAreaView className="bg-white flex-1">
      <HeaderComponent />
      <ScrollView>
        <ApartmentImageComponent apartment={apartment} />
        <ApartmentInfoComponent apartment={apartment} />
        <AmenitiesComponent amenities={apartment.amenities} />
        <PetFriendlyBadgeComponent petFriendly={apartment.petFriendly} />
        <ContactButtonComponent />
      </ScrollView>
    </SafeAreaView>
  );
}

export default ApartmentDetailsScreen;
