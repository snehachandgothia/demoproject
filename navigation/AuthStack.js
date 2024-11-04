import React from "react";
import OnBoarding from "../src/screens/OnBoarding";
import ChooseUser from "../src/screens/Chooseuser";
import SignUp from "../src/screens/auth/SignUp";
import OtpScreen from "../src/screens/auth/OtpScreen";
import ChooseCategory from "../src/screens/auth/ChooseCategory";
import CreateProfile from "../src/screens/auth/CreateProfile";
import UpdateProfile from "../src/screens/auth/UpdateProfile";
import CreateSession from "../src/screens/auth/CreateSession";
import TrainerLocation from "../src/screens/auth/TrainerLocation";
import LocationCheckBox from "../src/components/LocationcheckBox";
import TrainerAddress from "../src/screens/auth/TrainerAddress";
import MySessions from "../src/screens/auth/MySessions";
import UpcomingDetails from "../src/screens/tabScreens/UpcomingDetails";
import Notification from "../src/screens/auth/Notifications";
import NotificationDetail from "../src/screens/auth/NotificatonDetail";
import TabStack from "./Tab";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Auth = createStackNavigator();

function MyStack(){
    return(
        <NavigationContainer>
            <Auth.Navigator>
                <Auth.Screen name="ChooseUser" component={ChooseUser} options={{headerShown:false}}/>
                <Auth.Screen name="OnBoarding" component={OnBoarding} options={{headerShown:false}}/>
                <Auth.Screen name="SignUp" component={SignUp} options={{headerShown:false}}/>
                <Auth.Screen name="OtpScreen" component={OtpScreen} options={{headerShown:false}}/>
                <Auth.Screen name="CreateProfile" component={CreateProfile} options={{headerShown:false}}/>
                <Auth.Screen name="UpdateProfile" component={UpdateProfile} options={{headerShown:false}}/>
                <Auth.Screen name="Choose Category" component={ChooseCategory} options={{headerShown:false}}/>
                <Auth.Screen name="Create Session" component={CreateSession} options={{headerShown:false}}/>
                <Auth.Screen name="TraninerLocation" component={TrainerLocation} options={{headerShown:false}}/>
                <Auth.Screen name="Location" component={LocationCheckBox} options={{headerShown:false}}/>
                <Auth.Screen name="TrainerAddress" component={TrainerAddress} options={{headerShown:false}}/>
                <Auth.Screen name="MySessions" component={MySessions} options={{headerShown:false}}/>
                <Auth.Screen name="Tab" component={TabStack} options={{headerShown:false}}/>
                <Auth.Screen name="UpcomingDetails" component={UpcomingDetails} options={{headerShown:false}}/>
                <Auth.Screen name="Notification" component={Notification} options={{headerShown:false}}/>
                <Auth.Screen name="NotificationDetail" component={NotificationDetail} options={{headerShown:false}}/>

            </Auth.Navigator>
        </NavigationContainer>
    )
};

export default MyStack;