import React, { useEffect, useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import axios from 'axios';

const ApartmentForm = ({ apartment, onSubmit, onCancel }) => {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');

    useEffect(() => {
        if (apartment) {
            setName(apartment.name);
            setLocation(apartment.location);
            setPrice(apartment.price.toString());
            setDescription(apartment.description);
            setImage(apartment.image);
        }
    }, [apartment]);

    const handleSubmit = () => {
        const apartmentData = { name, location, price: Number(price), description, image };
        onSubmit(apartment ? apartment._id : null, apartmentData);
        clearForm();
    };

    const clearForm = () => {
        setName('');
        setLocation('');
        setPrice('');
        setDescription('');
        setImage('');
        onCancel();
    };

    return (
        <View className="p-4 bg-white rounded-lg shadow-lg mb-4 mt-10">
            <TextInput
                placeholder="Apartment Name"
                value={name}
                onChangeText={setName}
                className="border border-gray-300 rounded p-3 mb-2 focus:outline-none focus:border-[#3EC5AD] transition-colors"
                placeholderTextColor="gray"
            />
            <TextInput
                placeholder="Location"
                value={location}
                onChangeText={setLocation}
                className="border border-gray-300 rounded p-3 mb-2 focus:outline-none focus:border-[#3EC5AD] transition-colors"
                placeholderTextColor="gray"
            />
            <TextInput
                placeholder="Price"
                value={price}
                onChangeText={setPrice}
                keyboardType="numeric"
                className="border border-gray-300 rounded p-3 mb-2 focus:outline-none focus:border-[#3EC5AD] transition-colors"
                placeholderTextColor="gray"
            />
            <TextInput
                placeholder="Description"
                value={description}
                onChangeText={setDescription}
                className="border border-gray-300 rounded p-3 mb-2 focus:outline-none focus:border-[#3EC5AD] transition-colors"
                placeholderTextColor="gray"
            />
            <TextInput
                placeholder="Image URL"
                value={image}
                onChangeText={setImage}
                className="border border-gray-300 rounded p-3 mb-4 focus:outline-none focus:border-[#3EC5AD] transition-colors"
                placeholderTextColor="gray"
            />
            <View className="flex-row justify-between">
                <TouchableOpacity
                    className="bg-[#3EC5AD] rounded-lg p-4 flex-1 mr-2 shadow hover:shadow-lg transition duration-200"
                    onPress={handleSubmit}
                >
                    <Text className="text-white text-center font-semibold"> {apartment ? 'Update Apartment' : 'Create Apartment'}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    className="bg-gray-400 rounded-lg p-4 flex-1 ml-2 shadow hover:shadow-lg transition duration-200"
                    onPress={clearForm}
                >
                    <Text className="text-white text-center font-semibold">Cancel</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ApartmentForm;
