import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from './Screen/HomeScreen.jsx';
import SignUpScreen from './Screen/SignUpScreen.jsx';
import LogInScreen from './Screen/LogInScreen.jsx';
import otpScreen from './Screen/otpScreen.jsx';
import PassengerInfo from './Screen/PassengerInfo.jsx';
import TrackCreateScreen from './Screen/TrackCreateScreen.jsx';
import ConfirmBookingScreen from './Screen/ConfirmBookingScreen.jsx';
import MessageScreen from './Screen/MessageScreen.jsx';
import OfferARide from './Screen/OfferRide.jsx';
import PublishARide from './Screen/PublishARide.jsx';
export default function App() {
    const Stack = createNativeStackNavigator();
    return (
        
        <NavigationContainer>
            <Stack.Navigator initialRouteName={SignUpScreen} screenOptions={{ headerShow: false }}>

                <Stack.Screen name='SignUpScreen' component={SignUpScreen} />
                <Stack.Screen name='LogInScreen' component={LogInScreen} />
                <Stack.Screen name='otpScreen' component={otpScreen} />
                <Stack.Screen name='PassengerInfo' component={PassengerInfo} />
                <Stack.Screen name='TrackCreateScreen' component={TrackCreateScreen} />
                <Stack.Screen name='ConfirmBookingScreen' component={ConfirmBookingScreen} />
                <Stack.Screen name='MessageScreen' component={MessageScreen} />
                <Stack.Screen name='OfferRide' component={OfferARide} />
                <Stack.Screen name='PublishARide' component={PublishARide} />

            </Stack.Navigator>
           
            <StatusBar style="auto" />
        </NavigationContainer>

    );
}








