import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import axios from 'axios';
import ApartmentForm from '../../components/Realtor/ApartmentForm';
import ApartmentList from '../../components/Realtor/ApartmentList';

const RealtorScreen = () => {
    const [apartments, setApartments] = useState([]);
    const [selectedApartment, setSelectedApartment] = useState(null);

    const fetchApartments = async () => {
        try {
            const response = await axios.get('YourUrl/api/apartments'); // Replace with your API URL
            setApartments(response.data.data);
        } catch (error) {
            console.error("Error fetching YourUrl
    };

    const handleCreateUpdateApartment = async (id, apartmentData) => {
        try {
            if (id) {
                await axios.put(`YourUrl/api/apartments/${id}`, apartmentData);
            } else {
                await axios.post('YourUrl/api/apartments', apartmentData);
            }
            fetchApartments();
            setSelectedApartment(null); // Reset selected apartment
        } catch (error) {
            console.error("Error saving apartment:", error);
        }
    };

    const handleDeleteApartment = async (id) => {
        try {
            await axios.delete(`YourUrl/api/apartments/${id}`);
            fetchApartments();
        } catch (error) {
            console.error("Error deleting apartment:", error);
        }
    };

    useEffect(() => {
        fetchApartments();
    }, []);

    return (
        <View className="flex-1 p-4">
            <ApartmentForm
                apartment={selectedApartment}
                onSubmit={handleCreateUpdateApartment}
                onCancel={() => setSelectedApartment(null)}
            />
            <ApartmentList
                apartments={apartments}
                onEdit={setSelectedApartment}
                onDelete={handleDeleteApartment}
            />
        </View>
    );
};

export default RealtorScreen;
