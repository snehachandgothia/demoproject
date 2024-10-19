import React from "react";
import { StatusBar, TouchableOpacity, View } from "react-native";
import MainText from "../../components/MainText";
import InputComponent from "../../components/InputComponent";
import NextButton from "../../components/NextButton";

const SignUp=({navigation})=>{
    return(
        <View style={{backgroundColor:"#ffffff",flex:1}}>
          <StatusBar translucent backgroundColor={"transparent"} barStyle={"dark-content"}/>
          <MainText
          text={"Let’s start with your phone number"}/>
          <InputComponent/>
          <TouchableOpacity style={{marginTop:35}}
           onPress={()=>navigation.navigate('Verify')}>
            <NextButton
            title={'COUNTINUE'}/>
          </TouchableOpacity>
        </View>
    )
};

export default SignUp;