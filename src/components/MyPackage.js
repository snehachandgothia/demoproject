import React from "react";
import { Image, ImageBackground, StyleSheet, TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { ImageConstant } from "../constants/ImageConstant";
import Typography from "./Typography";
import { Colors } from "../constants/Colors";
import { Fonts } from "../../asset/fonts/Font";

const MyPackage=()=>{
    const Data=[
        {id:1,title:"Boxing",text:"Dribbling",time:"Duration:30",location:"Location:Trainer",
            price:"80AED",average:"average offered65$"},
        {id:2,title:"Boxing",text:"Dribbling",time:"Duration:30",location:"Location:Trainer",
            price:"80AED",average:"average offered65$"}
    ];

    const render=({item})=>(
           <ImageBackground style={styles.view}
           source={ImageConstant.Gallerypic}>
           <View style={{flexDirection:"row"}}>
           <Typography
           size={16} font={Fonts.SF_Medium1} color={Colors.White}>{item.title}</Typography>
           <TouchableOpacity>
           <Image style={styles.cancel}
           source={ImageConstant.Cut}/>
           </TouchableOpacity>
           </View>
           <Typography 
           size={14} font={Fonts.SF_Regular1} color={Colors.White}>{item.text}</Typography>
           <Typography
           size={14} font={Fonts.SF_Regular1} color={Colors.White}>{item.time}</Typography>
           <Typography
           size={14} font={Fonts.SF_Regular1} color={Colors.White}>{item.location}</Typography>
           <Typography
           size={22} font={Fonts.SF_Bold1} color={Colors.White} styles_font={{marginTop:10}}>{item.price}</Typography>
           <Typography 
           size={14} font={Fonts.SF_Regular1} color={Colors.White}>{item.average}</Typography>
           </ImageBackground>
    )
    return(
        <View>
            <FlatList
            data={Data}
            renderItem={render}
            keyExtractor={item=>item.id.toString()}
            horizontal
            />
        </View>
    )
};

const styles=StyleSheet.create({
    view:{
        height:155,
        width:165,
        borderRadius:50,
        marginLeft:20,
        paddingLeft:10,
        paddingTop:8,
    },
    cancel:{
        height:18,
        width:18,
        marginLeft:75,
        marginTop:3,
    }
})

export default MyPackage;