import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { HomeIcon, UserIcon, CogIcon, Bars3Icon, ArrowRightOnRectangleIcon } from 'react-native-heroicons/outline';
import HomeScreen from '../screens/Main/HomeScreen';
import SettingsScreen from '../screens/Main/SettingsScreen';
import ProfileScreen from '../screens/Main/ProfileScreen';
import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


// const CustomDrawerButton = ({ navigation }) => {
//   return (
//     <TouchableOpacity onPress={() => navigation.toggleDrawer()} className="p-3">
//       <Bars3Icon size={24} color="#041845" />
//     </TouchableOpacity>
//   );
// };


const CustomDrawerContent = (props) => {
  const navigation = useNavigation();

  return (
    <View className="flex-1">
    
      <DrawerContentScrollView {...props} className="flex-1">
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

    
      <View className="p-6 border-t border-gray-200">
        <TouchableOpacity onPress={() => navigation.navigate('Login')} className="p-3 bg-red-500 rounded-md">
          <View className="flex-row items-center justify-center">
            <ArrowRightOnRectangleIcon size={20} color="white" />
            <Text className="ml-3 text-white font-semibold">Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};


const BottomTabNavigator = ({ navigation }) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let icon;
          if (route.name === 'Home') {
            icon = <HomeIcon color={color} size={size} />;
          } else if (route.name === 'Profile') {
            icon = <UserIcon color={color} size={size} />;
          } else if (route.name === 'Settings') {
            icon = <CogIcon color={color} size={size} />;
          }
          return icon;
        },
        tabBarActiveTintColor: '#041845',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen} 
        
        options={{
          
          // headerLeft: () => (
          //   <CustomDrawerButton navigation={navigation} />
          // ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen} 
        options={{

          title: 'Profile',
          // headerLeft: () => (
          //   <CustomDrawerButton navigation={navigation} />
          // ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
        
          // headerLeft: () => (
          //   <CustomDrawerButton navigation={navigation} />
          // ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};


const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    
    >
 
      <Drawer.Screen
        name="Home"
        component={BottomTabNavigator} 
        options={{
          headerShown: false,
          drawerIcon: ({ color }) => <HomeIcon size={24} color={color} />,
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen} 
        options={{
          drawerIcon: ({ color }) => <UserIcon color={color} size={24} />,
          title: 'Profile',
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen} 
        options={{
          drawerIcon: ({ color }) => <CogIcon color={color} size={24} />,
          title: 'Settings',
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
