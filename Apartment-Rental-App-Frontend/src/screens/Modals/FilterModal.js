import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import { useFonts } from 'expo-font';

const FilterModal = ({ visible, onClose, onApply }) => {
  const [maxPrice, setMaxPrice] = useState(0); 
  const [minSize, setMinSize] = useState(0); 

  const [fontsLoaded] = useFonts({
    'Viga' : require('../../../assets/fonts/Viga-Regular.ttf'),
    'Urbanist' : require('../../../assets/fonts/Urbanist-VariableFont_wght.ttf')

  })

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View className="flex-1 justify-end" style={{backgroundColor: 'rgba(0,0,0,0.3)'}}>
        <View className="bg-white p-6 rounded-t-lg w-full">
          <Text className="text-lg font-bold mb-4">Filter Apartments</Text>

        
          <View className="mb-4">
            <Text className="text-gray-700">Max Price: ${maxPrice}</Text>
            <Slider
              style={{ width: '100%', height: 40 }}
              minimumValue={500}
              maximumValue={10000}
              step={100}
              value={maxPrice}
              onValueChange={value => setMaxPrice(value)}
              minimumTrackTintColor="#3EC5AD"
              maximumTrackTintColor="#ccc"
              thumbTintColor="#3EC5AD"
            />
          </View>

         
          <View className="mb-4">
            <Text className="text-gray-700">Min Size: {minSize} sqft</Text>
            <Slider
              style={{ width: '100%', height: 40 }}
              minimumValue={100}
              maximumValue={3000}
              step={50}
              value={minSize}
              onValueChange={value => setMinSize(value)}
              minimumTrackTintColor="#3EC5AD"
              maximumTrackTintColor="#ccc"
              thumbTintColor="#3EC5AD"
            />
          </View>

          <TouchableOpacity
            className="bg-[#3EC5AD] p-4 rounded-lg"
            onPress={() => {
              onApply({ maxPrice, minSize }); 
              onClose();
            }}
          >
            <Text className="text-white font-bold text-center" style={{fontFamily: 'Urbanist'}}>Apply Filters</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default FilterModal;
