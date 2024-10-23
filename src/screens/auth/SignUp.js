import React from "react";
import { StatusBar, StyleSheet, TouchableOpacity, View } from "react-native";
import InputComponent from "../../components/InputComponent";
import NextButton from "../../components/NextButton";
import { Colors } from "../../constants/Colors";
import TextComponent from "../../components/TextComponent";
import { Fonts } from "../../../asset/fonts/Font";

const SignUp=({navigation})=>{
    return(
        <View style={{backgroundColor:Colors.White,flex:1}}>
          <StatusBar translucent backgroundColor={"transparent"} barStyle={"dark-content"}/>
          <TextComponent
            size={30} font={Fonts.SF_Medium1} color={Colors.Darkgrey}  left={15} styles_font={styles.font
              }>Let’s start with your phone number</TextComponent>
              <View style={{marginLeft:15}}>
              <InputComponent/>
              </View>
          <TouchableOpacity style={{marginTop:35}}
           onPress={()=>navigation.navigate('Verify')}>
            <NextButton
            title={'COUNTINUE'}/>
          </TouchableOpacity>
        </View>
    )
};

const styles=StyleSheet.create({
  font:{
    marginTop:190,
    marginRight:50
  }
})

export default SignUp;