import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TrainerProfile from "../src/screens/auth/TrainerProfile";
import Home from "../src/screens/tabScreens/Home";
import Svg from "../asset/Svg";

const Tab = createBottomTabNavigator();

const TabStack = () => {


  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <Svg
                name="Home"
                color={focused ? "#000000" : "pink"} 
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Profile"
        component={TrainerProfile}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <Svg
                name="Profile"
                color={focused ? "#000000" : "pink"} 
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabStack;
