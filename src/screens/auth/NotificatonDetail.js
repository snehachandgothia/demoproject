import React from "react";
import { Image, StatusBar, StyleSheet, TextInput, TouchableOpacity, View ,ScrollView} from "react-native";
import Header from "../../components/Header";
import { ImageConstant } from "../../constants/ImageConstant";
import TextComponent from "../../components/TextComponent";
import RateClient from "../../components/RateClient";
import NextButton from "../../components/NextButton";
import { Colors } from "../../constants/Colors";

const NotificationDetail=()=>{
    return(
        <ScrollView style={{backgroundColor:Colors.White}}>
            <StatusBar translucent backgroundColor={"transparent"} barStyle={"dark-content"}/>
            <Header title={"Notification Detail"}/>
            <View style={styles.view}>
                <View style={{flexDirection:"row"}}>
                <Image source={ImageConstant.Review}/>
                <View style={{marginLeft:10}}>
                    <TextComponent
                    size={18} weight={"700"} color={Colors.Darkgrey}>Anna Maria, 30</TextComponent>
                    <View style={{flexDirection:"row",marginTop:2}}>
                        <Image style={{marginTop:2}}
                        source={ImageConstant.Stars}/>
                        <TextComponent
                        size={12} weight={"400"} color={Colors.Grey} styles_font={{marginLeft:5}}>145 Reviews</TextComponent>
                    </View>
                </View>
                </View>
                <View style={{flexDirection:"row"}}>
                    <Image style={{height:14,width:11,marginTop:4}}
                     source={ImageConstant.Location}/>
                    <TextComponent
                     size={14} weight={"400"} color={Colors.Grey} styles_font={{marginLeft:5}}>Trainer Location / User Location</TextComponent>
                </View>
                <View style={{flexDirection:"row",marginTop:5}}>
                        <TextComponent
                        size={14} weight={"700"} color={Colors.Darkgrey}>Sports:</TextComponent>
                        <TextComponent
                        size={14} weight={"400"} color={Colors.Darkgrey}> Karate</TextComponent>
                    <TextComponent
                    size={18} weight={"700"} color={Colors.Darkgrey} styles_font={{marginLeft:200}}>$ 50</TextComponent>
                </View>
                <View style={{flexDirection:"row"}}>
                  <TextComponent
                  size={14} weight={"700"} color={Colors.Darkgrey}>Date: </TextComponent>
                  <TextComponent
                  size={14} weight={"400"} color={Colors.Darkgrey}> Tue 12:11</TextComponent>
                  <TextComponent
                  size={14} weight={"700"} color={Colors.Darkgrey} styles_font={{marginLeft:25}}>Time: </TextComponent>
                  <TextComponent
                  size={14} weight={"400"} color={Colors.Darkgrey}> 12:00-13:00</TextComponent>
                </View>
            </View>
            <TextComponent
            size={14} weight={"400"} color={Colors.Grey} styles_font={{marginLeft:25,marginTop:10}}>Rate Clients</TextComponent>
            <RateClient title={"Effeciency"}/>
            <RateClient title={"Motivation"}/>
            <RateClient title={"Tolerance"}/>
            <RateClient title={"Socialibility"}/>
            <TextComponent
            size={14} weight={"400"} color={Colors.Grey} styles_font={{marginLeft:25,marginVertical:15}}>Add feedback</TextComponent>
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