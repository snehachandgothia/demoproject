import React from "react";
import OnBoarding from "../src/screens/OnBoarding";
import SplashScreens from "../src/screens/SplashScreens";
import SignUp from "../src/screens/auth/SignUp";
import Verify from "../src/screens/auth/Verify";
import ChooseCategory from "../src/screens/auth/ChooseCategory";
import CreateProfile from "../src/screens/auth/CreateProfile";
import Profile2 from "../src/screens/auth/Profile2";
import CreateSession from "../src/screens/auth/CreateSession";
import TrainerLocation from "../src/screens/auth/TrainerLocation";
import LocationCheckBox from "../src/components/LocationcheckBox";
import Location2 from "../src/screens/auth/Location2";
import MySessions from "../src/screens/auth/MySessions";
import TabStack from "./Tab";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Auth = createStackNavigator();

function MyStack(){
    return(
        <NavigationContainer>
            <Auth.Navigator>
                <Auth.Screen name="SplashScreens" component={SplashScreens} options={{headerShown:false}}/>
                <Auth.Screen name="OnBoarding" component={OnBoarding} options={{headerShown:false}}/>
                <Auth.Screen name="SignUp" component={SignUp} options={{headerShown:false}}/>
                <Auth.Screen name="Verify" component={Verify} options={{headerShown:false}}/>
                <Auth.Screen name="CreateProfile" component={CreateProfile} options={{headerShown:false}}/>
                <Auth.Screen name="Profile2" component={Profile2} options={{headerShown:false}}/>
                <Auth.Screen name="Choose Category" component={ChooseCategory} options={{headerShown:false}}/>
                <Auth.Screen name="Create Session" component={CreateSession} options={{headerShown:false}}/>
                <Auth.Screen name="TraninerLocation" component={TrainerLocation} options={{headerShown:false}}/>
                <Auth.Screen name="Location" component={LocationCheckBox} options={{headerShown:false}}/>
                <Auth.Screen name="Location2" component={Location2} options={{headerShown:false}}/>
                <Auth.Screen name="MySessions" component={MySessions} options={{headerShown:false}}/>
                <Auth.Screen name="Tab" component={TabStack} options={{headerShown:false}}/>
            </Auth.Navigator>
        </NavigationContainer>
    )
};

export default MyStack;