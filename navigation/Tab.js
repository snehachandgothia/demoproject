import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TrainerProfile from "../src/screens/auth/TrainerProfile";
import Home from "../src/screens/tabScreens/Home";

const Tab=createBottomTabNavigator();

const TabStack=()=>{
  return(
        <Tab.Navigator>
            <Tab.Screen name="Profile" component={TrainerProfile} options={{headerShown:false}}/>
            <Tab.Screen name="Home" component={Home} options={{headerShown:false}}/>
        </Tab.Navigator>
  )
};

export default TabStack;