import React from "react";
import { Image, StatusBar, StyleSheet, TouchableOpacity, View,TextInput } from "react-native";
import Header from "../../components/Header";
import { ImageConstant } from "../../constants/ImageConstant";
import Typography from "../../components/Typography";
import { Fonts } from "../../../asset/fonts/Font";
import { Colors } from "../../constants/Colors";
import MainButton from "../../components/MainButton";

const UpcomingDetails=()=>{
    return(
        <View style={{backgroundColor:Colors.White}}>
            <StatusBar translucent backgroundColor={"transparent"} barStyle={"dark-content"}/>
            <Header title={"Booking details"}/>
            <View style={{width:"90%",alignSelf:"center"}}>
            <View style={{flexDirection:"row"}}>
                <Image style={{height:80,width:80,marginTop:5}}
                source={ImageConstant.Review}/>
                <View style={{marginLeft:8,marginTop:10,width:230}}>
                    <Typography size={18} font={Fonts.SF_Bold1} color={Colors.Darkgrey}>Anna Maria, 30</Typography>
                    <Typography size={14} font={Fonts.SF_Regular1} color={Colors.Grey}>Female</Typography>
                    <View style={{flexDirection:"row"}}>
                        <Image style={{height:14,width:11,marginTop:3}}
                        source={ImageConstant.Location}/>
                        <Typography size={14} font={Fonts.SF_Regular1} color={Colors.Darkgrey} left={5}>Address Location</Typography>
                    </View>
                </View>
                <View style={{flexDirection:"row",marginTop:10}}>
                    <Typography size={12} font={Fonts.SF_Regular1} color={Colors.Darkgrey} width={23}>4.6</Typography>
                    <Image style={{height:13,width:13,marginTop:2}}
                    source={ImageConstant.Yellowstar}/>
                </View>
            </View>
            <View style={[styles.border,{paddingBottom:15}]}>
            <View style={styles.buttonview}>
            <TouchableOpacity style={styles.button}>
                <Typography size={12} font={Fonts.SF_Bold1} color={Colors.Blue}>WATCH PEOPLE</Typography>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button,{backgroundColor:Colors.Backgroundblue}]}>
                <Typography size={12} font={Fonts.SF_Bold1} color={Colors.Blue}>SEND MESSAGE</Typography>
            </TouchableOpacity>
            </View>
            </View>
            <View style={[styles.border, styles.view]}>
                    <Typography 
                        size={14} 
                        font={Fonts.SF_Regular1}
                        color={Colors.Grey} 
                        left={10}
                    >Sports category</Typography> 
                    <Typography size={14} font={Fonts.SF_Bold1} color={Colors.Darkgrey}
                    >Boxing</Typography>
                </View>
                <View style={[styles.border, styles.view]}>
                    <Typography 
                        size={14} 
                        font={Fonts.SF_Regular1}
                        color={Colors.Grey} 
                        left={10}
                    >Level</Typography> 
                    <Typography size={14} font={Fonts.SF_Bold1} color={Colors.Darkgrey}
                    >Beginner</Typography>
                </View>
                <View style={[styles.border, styles.view]}>
                    <Typography 
                        size={14} 
                        font={Fonts.SF_Regular1}
                        color={Colors.Grey} 
                        left={10}
                    >Who will train</Typography> 
                    <Typography size={14} font={Fonts.SF_Bold1} color={Colors.Darkgrey}
                    >2</Typography>
                </View>
                <View style={[styles.border, styles.view]}>
                    <Typography 
                        size={14} 
                        font={Fonts.SF_Regular1}
                        color={Colors.Grey} 
                        left={10}
                    >Location</Typography> 
                    <Typography size={14} font={Fonts.SF_Bold1} color={Colors.Darkgrey}
                    >Trainer Location</Typography>
                </View>
                <View style={[styles.border, styles.view]}>
                    <Typography 
                        size={14} 
                        font={Fonts.SF_Regular1}
                        color={Colors.Grey} 
                        left={10}
                    >Date and time</Typography> 
                    <Typography size={14} font={Fonts.SF_Bold1} color={Colors.Darkgrey}
                    >19.12,12:00 pm-13:00pm</Typography>
                </View>
                <View style={[styles.border, styles.view]}>
                    <Typography 
                        size={14} 
                        font={Fonts.SF_Regular1}
                        color={Colors.Grey} 
                        left={10}
                    >Payment method</Typography> 
                    <Typography size={14} font={Fonts.SF_Bold1} color={Colors.Darkgrey}
                    >Pay via cash</Typography>
                </View>
<View style={[styles.view,{marginTop:25}]}>
<Typography size={16} font={Fonts.SF_Bold1} color={Colors.Red}>Total price</Typography>
<Typography size={16} font={Fonts.SF_Bold1} color={Colors.Black}>100$</Typography>
</View>

            </View>
<TouchableOpacity style={{marginTop:30}}>
<MainButton title={"RESCHEDULE"}/>
</TouchableOpacity>
<TouchableOpacity style={[styles.button,{width:"90%",alignSelf:"center",marginTop:10}]}>
<Typography size={12} font={Fonts.SF_Bold1} color={Colors.Blue} textAlign={"center"}>WATCH PEOPLE</Typography>
</TouchableOpacity>
        </View>
    )
};

const styles=StyleSheet.create({
    button:{
        paddingHorizontal:40,
        paddingVertical:18,
        borderRadius:50,
        borderWidth:1,
        borderColor:Colors.Backgroundskyblue
    },
    buttonview:{
        flexDirection:"row",
        marginTop:15
    },
    border: {
        borderBottomWidth: 1.5,
        borderColor: Colors.Bordergrey,
        alignSelf: "center",
    },
    view:{
        flexDirection: "row", 
        justifyContent:"space-between",
        alignSelf:"center",
        paddingVertical:14,
        paddingRight:10,
        width: "100%",
    },
})

export default UpcomingDetails;