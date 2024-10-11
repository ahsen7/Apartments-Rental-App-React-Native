import { ScrollView, TouchableOpacity, Image } from 'react-native';
import { apartmentoptions } from '../../../AppData/ApartmentData';

const ApartmentOptions = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-6">
      {apartmentoptions.map(apartment => (
        <TouchableOpacity key={apartment.id} className="mr-4 mb-40">
          <Image source={apartment.image} className="h-40 w-60 rounded-lg" />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default ApartmentOptions;
