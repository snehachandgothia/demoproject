import React from "react";
import { Image, StatusBar, StyleSheet, TextInput, TouchableOpacity, View ,ScrollView} from "react-native";
import Header from "../../components/Header";
import { ImageConstant } from "../../constants/ImageConstant";
import Typography from "../../components/Typography";
import RateClient from "../../components/RateClient";
import MainButton from "../../components/MainButton";
import { Colors } from "../../constants/Colors";
import { Fonts } from "../../../asset/fonts/Font";

const NotificationDetail=({navigation})=>{
    return(
        <ScrollView style={{backgroundColor:Colors.White}}>
            <StatusBar translucent backgroundColor={"transparent"} barStyle={"dark-content"}/>
            <Header title={"Notification Detail"} onPress={()=>navigation.navigate("Notification")}/>
            <View style={styles.view}>
                <View style={{flexDirection:"row"}}>
                <Image source={ImageConstant.Review}/>
                <View style={{marginLeft:10}}>
                    <Typography
                    size={18} font={Fonts.SF_Bold1} color={Colors.Darkgrey}>Anna Maria, 30</Typography>
                    <View style={{flexDirection:"row",marginTop:2}}>
                        <Image style={{marginTop:2}}
                        source={ImageConstant.Stars}/>
                        <Typography
                        size={12} font={Fonts.SF_Regular1} color={Colors.Grey} left={5}>145 Reviews</Typography>
                    </View>
                </View>
                </View>
                <View style={{flexDirection:"row"}}>
                    <Image style={{height:14,width:11,marginTop:4}}
                     source={ImageConstant.Location}/>
                    <Typography
                     size={14} font={Fonts.SF_Regular1} color={Colors.Grey} left={5}>Trainer Location / User Location</Typography>
                </View>
                <View style={{flexDirection:"row",marginTop:5}}>
                        <Typography
                        size={14} font={Fonts.SF_Bold1} color={Colors.Darkgrey}>Sports:</Typography>
                        <Typography
                        size={14} font={Fonts.SF_Regular1} color={Colors.Darkgrey}> Karate</Typography>
                    <Typography
                    size={18} font={Fonts.SF_Bold1} color={Colors.Darkgrey} left={200} >$ 50</Typography>
                </View>
                <View style={{flexDirection:"row"}}>
                  <Typography
                  size={14} font={Fonts.SF_Bold1} color={Colors.Darkgrey}>Date: </Typography>
                  <Typography
                  size={14} font={Fonts.SF_Regular1} color={Colors.Darkgrey}> Tue 12:11</Typography>
                  <Typography
                  size={14} font={Fonts.SF_Bold1} color={Colors.Darkgrey} left={25}>Time: </Typography>
                  <Typography
                  size={14} font={Fonts.SF_Regular1} color={Colors.Darkgrey}> 12:00-13:00</Typography>
                </View>
            </View>
            <Typography
            size={14} font={Fonts.SF_Regular1} color={Colors.Grey} left={25} styles_font={{marginTop:10}}>Rate Clients</Typography>
            <RateClient title={"Effeciency"}/>
            <RateClient title={"Motivation"}/>
            <RateClient title={"Tolerance"}/>
            <RateClient title={"Socialibility"}/>
            <Typography
            size={14} font={Fonts.SF_Regular1} color={Colors.Grey} left={25} styles_font={{marginVertical:15}}>Add feedback</Typography>
            <TextInput style={styles.input} multiline />
            <TouchableOpacity style={{marginTop:50}}>
                <MainButton title={"COMPLETE AND SUBMIT"}/>
            </TouchableOpacity>
        </ScrollView>
    )
};

const styles=StyleSheet.create({
    view:{
        width:"90%",
        backgroundColor:Colors.White,
        padding:15,
        borderRadius:10,
        marginVertical:10,
        alignSelf:"center"
    },
    input:{
        height:170,
        width:"90%",
        backgroundColor:Colors.White,
        alignSelf:"center",
        borderWidth:1,
        borderColor:Colors.Bordergrey,
        borderRadius:10,
        fontSize:14,
        fontWeight:"400",
        color:Colors.Darkgrey,
        padding:15,
        textAlignVertical: "top",
    }
})

export default NotificationDetail;