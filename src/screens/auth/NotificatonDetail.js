import React from "react";
import { Image, StatusBar, StyleSheet, TextInput, TouchableOpacity, View ,ScrollView} from "react-native";
import Header from "../../components/Header";
import { ImageConstant } from "../../constants/ImageConstant";
import TextComponent from "../../components/TextComponent";
import RateClient from "../../components/RateClient";
import NextButton from "../../components/NextButton";

const NotificationDetail=()=>{
    return(
        <ScrollView style={{backgroundColor:"#ffffff"}}>
            <StatusBar translucent backgroundColor={"transparent"} barStyle={"dark-content"}/>
            <Header title={"Notification Detail"}/>
            <View style={styles.view}>
                <View style={{flexDirection:"row"}}>
                <Image source={ImageConstant.Review}/>
                <View style={{marginLeft:10}}>
                    <TextComponent
                    size={18} weight={"700"} color={"#3C3C3C"}>Anna Maria, 30</TextComponent>
                    <View style={{flexDirection:"row",marginTop:2}}>
                        <Image style={{marginTop:2}}
                        source={ImageConstant.Stars}/>
                        <TextComponent
                        size={12} weight={"400"} color={"#B2B7C7"} styles_font={{marginLeft:5}}>145 Reviews</TextComponent>
                    </View>
                </View>
                </View>
                <View style={{flexDirection:"row"}}>
                    <Image style={{height:14,width:11,marginTop:4}}
                     source={ImageConstant.Location}/>
                    <TextComponent
                     size={14} weight={"400"} color={"#B2B7C7"} styles_font={{marginLeft:5}}>Trainer Location / User Location</TextComponent>
                </View>
                <View style={{flexDirection:"row",marginTop:5}}>
                        <TextComponent
                        size={14} weight={"700"} color={"#3C3C3C"}>Sports:</TextComponent>
                        <TextComponent
                        size={14} weight={"400"} color={"#3C3C3C"}> Karate</TextComponent>
                    <TextComponent
                    size={18} weight={"700"} color={"#3C3C3C"} styles_font={{marginLeft:200}}>$ 50</TextComponent>
                </View>
                <View style={{flexDirection:"row"}}>
                  <TextComponent
                  size={14} weight={"700"} color={"#3C3C3C"}>Date: </TextComponent>
                  <TextComponent
                  size={14} weight={"400"} color={"#3C3C3C"}> Tue 12:11</TextComponent>
                  <TextComponent
                  size={14} weight={"700"} color={"#3C3C3C"} styles_font={{marginLeft:25}}>Time: </TextComponent>
                  <TextComponent
                  size={14} weight={"400"} color={"#3C3C3C"}> 12:00-13:00</TextComponent>
                </View>
            </View>
            <TextComponent
            size={14} weight={"400"} color={"#B2B7C7"} styles_font={{marginLeft:25,marginTop:10}}>Rate Clients</TextComponent>
            <RateClient title={"Effeciency"}/>
            <RateClient title={"Motivation"}/>
            <RateClient title={"Tolerance"}/>
            <RateClient title={"Socialibility"}/>
            <TextComponent
            size={14} weight={"400"} color={"#B2B7C7"} styles_font={{marginLeft:25,marginVertical:15}}>Add feedback</TextComponent>
            <TextInput style={styles.input} multiline />
            <TouchableOpacity style={{marginTop:50}}>
                <NextButton title={"COMPLETE AND SUBMIT"}/>
            </TouchableOpacity>
        </ScrollView>
    )
};

const styles=StyleSheet.create({
    view:{
        width:"90%",
        backgroundColor:"#ffffff",
        padding:15,
        borderRadius:10,
        marginVertical:10,
        alignSelf:"center"
    },
    input:{
        height:170,
        width:"90%",
        backgroundColor:"#FFFFFF",
        alignSelf:"center",
        borderWidth:1,
        borderColor:"#F5F5FA",
        borderRadius:10,
        fontSize:14,
        fontWeight:"400",
        color:"#3C3C3C",
        padding:15,
    }
})

export default NotificationDetail;