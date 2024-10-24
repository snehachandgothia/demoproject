import React, { useState } from "react";
import { TouchableOpacity, View ,Image, StyleSheet} from "react-native";
// import { Image } from "react-native-svg";
import { ImageConstant } from "../constants/ImageConstant";
import { Colors } from "../constants/Colors";
import Typography from "./Typography";
import { Fonts } from "../../asset/fonts/Font";

const ChooseTrainerGender=()=>{
    const[female,setFemale]=useState(false);
    const[male,setMale]=useState(false);

    const ToggleFemale=()=>{
        setFemale(!female);
        if(!female){
            setMale(false);
        }
    };

    const ToggleMale=()=>{
        setMale(!male);
        if(!male){
            setFemale(false);
        }
    };

    return(
        <View style={styles.view}>
<View style={{marginLeft:15}}>
<TouchableOpacity onPress={ToggleFemale}
            style={[styles.circle,
            {backgroundColor:female?Colors.Pink:Colors.White}]}>
                <Image source={ImageConstant.Female}
                style={[styles.image,{tintColor:female?Colors.White:Colors.Pink}]}/>
            </TouchableOpacity>
            <Typography size={14} color={Colors.Grey} alignSelf={"center"}
            >Female</Typography>
</View>

            <View style={{marginLeft:15}}>
            <TouchableOpacity onPress={ToggleMale}
            style={[styles.circle,
                {backgroundColor:male?Colors.Pink:Colors.White}]}>
                    <Image source={ImageConstant.Male}
                    style={[styles.image,{tintColor:male?Colors.White:Colors.Pink}]}/>
                </TouchableOpacity>
                <Typography size={14} color={Colors.Grey} alignSelf={"center"}
            >Male</Typography>
            </View>
        </View>
    )
};

const styles=StyleSheet.create({
    image:{
        height:28,
        width:28,
        alignSelf:"center",
    
    },
    view:{
        flexDirection:"row",
        marginTop:10
    },
    circle:{
        height:60,
        width:61,
        
        borderRadius:50,
        justifyContent:"center",
        
    }
})

export default ChooseTrainerGender;