import React from "react";
import { StatusBar, StyleSheet, TouchableOpacity, View } from "react-native";
import Input from "../../components/Input";
import MainButton from "../../components/MainButton";
import { Colors } from "../../constants/Colors";
import Typography from "../../components/Typography";
import { Fonts } from "../../../asset/fonts/Font";
import { Text } from "react-native-svg";

const SignUp=({navigation})=>{
    return(
        <View style={{}}>
          <StatusBar translucent backgroundColor={"transparent"} barStyle={"dark-content"}/>
          {/* <Text>Sneha</Text> */}
          <Typography
            size={30} font={Fonts.SF_Medium1} color={Colors.Darkgrey}  left={15} styles_font={styles.font
              }>Let’s start with your phone number</Typography>
              <View style={{marginLeft:15}}>
              <Input/>
              </View>
          <TouchableOpacity style={{marginTop:35}}
           onPress={()=>navigation.navigate('OtpScreen')}>
            <MainButton
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