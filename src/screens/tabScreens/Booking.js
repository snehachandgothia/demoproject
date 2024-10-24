import React from "react";
import { Button, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Typography from "../../components/Typography";
import { Fonts } from "../../../asset/fonts/Font";
import { Colors } from "../../constants/Colors";
import LinearGradient from "react-native-linear-gradient";

const Booking=()=>{
return(
    <ScrollView>
        <StatusBar translucent backgroundColor={"transparent"} barStyle={"dark-content"}/>
        <Typography size={20} left={10} font={Fonts.SF_Regular1} color={Colors.Grey} styles_font={styles.title}>Your upcoming  bookings</Typography>
        <View style={{flexDirection:"row",justifyContent:"space-between",width:"95%"}}>
        <Typography size={34} font={Fonts.SF_Bold1} left={10} color={Colors.Darkgrey}>Bookings</Typography>
        <TouchableOpacity style={{marginTop:10}}>
        <LinearGradient colors={[Colors.Skyblue,Colors.Blue]}
        start={{ x: 1, y: 1}} end={{ x: 0.5, y: 0}}
            style={styles.button}>
            <Typography
            size={12} font={Fonts.SF_Regular1} color={Colors.White} textAlign={"center"}>Calender View</Typography>
        </LinearGradient>
        </TouchableOpacity>
        </View>
    </ScrollView>
)
};

const styles=StyleSheet.create({
    title:{
        marginTop:40,
    },
    button:{
        height:30,
        width:100,
        borderRadius:25,
        paddingTop:5
    }
})

export default Booking;