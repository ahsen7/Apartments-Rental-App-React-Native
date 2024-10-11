import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

const ApartmentList = ({ apartments, onEdit, onDelete }) => {
    return (
        <FlatList
            data={apartments}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
                <View className="p-4 border-b border-gray-300 bg-white rounded-lg shadow-md mb-4">
                    <Text className="text-lg font-bold text-gray-800">{item.name}</Text>
                    <Text className="text-gray-600">{item.location}</Text>
                    <Text className="text-gray-500 text-xl font-semibold">${item.price}</Text>
                    <View className="flex-row justify-between mt-4">
                        <TouchableOpacity 
                            className="bg-[#3EC5AD] px-4 py-2 rounded-lg shadow-lg" 
                            onPress={() => onEdit(item)}
                        >
                            <Text className="text-white font-semibold text-center">Edit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            className="bg-red-500 px-4 py-2 rounded-lg shadow-lg" 
                            onPress={() => onDelete(item._id)}
                        >
                            <Text className="text-white font-semibold text-center">Delete</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
            contentContainerStyle={{ paddingBottom: 20 }} // Add some padding at the bottom
        />
    );
};

export default ApartmentList;
