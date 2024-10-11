import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from '../screens/Auth/SplashScreen'
import WelcomeScreen from '../screens/Auth/WelcomeScreen'
import LoginScreen from '../screens/Auth/LoginScreen'
import SignupScreen from '../screens/Auth/SignupScreen'
import HomeTabs from './HomeTabs';
import DrawerNavigation from './HomeTabs';
import RealtorScreen from '../screens/Main/RealtorScreen'
import ApartmentDetailsScreen from '../screens/Main/ApartmentDetailsScreen';


const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName='Splash'>
      <Stack.Screen name='Splash' component={SplashScreen} options={{ headerShown: false }}/>
      <Stack.Screen name='Welcome' component={WelcomeScreen} options={{headerShown: false}}/>
      <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }}/>
      <Stack.Screen  name='Signup' component={SignupScreen} options={{headerShown: false}}/>
      <Stack.Screen  name='RealtorScreen' component={RealtorScreen} options={{headerShown: false}}/>
     <Stack.Screen name='Home' component={DrawerNavigation} options={{headerShown: false}}/>
     <Stack.Screen name='ApartmentDetails' component={ApartmentDetailsScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
   </NavigationContainer>
  );
};

export default AppNavigator;
