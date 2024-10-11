import { TouchableOpacity, Text } from 'react-native';

const ContactButtonComponent = () => {
  return (
    <TouchableOpacity className="bg-[#3EC5AD] p-4 rounded-lg mt-8 shadow-lg" style={{marginHorizontal: 10,}}>
      <Text className="text-white font-bold text-center text-lg" style={{fontFamily: 'Urbanist'}}>Contact for Rent</Text>
    </TouchableOpacity>
  );
};

export default ContactButtonComponent;
