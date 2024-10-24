import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { ImageConstant } from "../constants/ImageConstant";
import Typography from "./Typography";
import { Colors } from "../constants/Colors";
import { Fonts } from "../../asset/fonts/Font";

const Session=()=>{
    const Data=[
        {id:1,title:"Boxing",text:"Dribbling",time:"Duration:30",location:"Location:Trainer",
            price:"80AED"},
        {id:2,title:"Boxing",text:"Dribbling",time:"Duration:30",location:"Location:Trainer",
            price:"80AED"}
    ];

    const render=({item})=>(
        <View style={styles.view}>
           <View style={{flexDirection:"row"}}>
           <Typography
           size={16} font={Fonts.SF_Bold1} color={Colors.Darkgrey}>{item.title}</Typography>
           <TouchableOpacity>
           <Image style={styles.cancel}
           source={ImageConstant.Cancel}/>
           </TouchableOpacity>
           </View>
           <Typography
           size={14} font={Fonts.SF_Regular1} color={Colors.Darkgrey}>{item.text}</Typography>
           <Typography
           size={14} font={Fonts.SF_Regular1} color={Colors.Darkgrey}>{item.time}</Typography>
           <Typography 
           size={14} font={Fonts.SF_Regular1} color={Colors.Darkgrey}>{item.location}</Typography>
           <Typography
           size={22} font={Fonts.SF_Bold1} color={Colors.Darkgrey}>{item.price}</Typography>
           <TouchableOpacity style={styles.button}>
            <Typography
            size={12} font={Fonts.SF_Regular1} color={Colors.White} styles_font={{alignSelf:"center",}}>Create Packages</Typography>
           </TouchableOpacity>
        </View>
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
        height:165,
        width:165,
        backgroundColor:Colors.Darkbordergrey,
        borderRadius:10,
        marginLeft:20,
        paddingLeft:10,
        paddingTop:8,
    },
    button:{
        backgroundColor:Colors.Blue,
        paddingVertical:5,
        borderRadius:50,
        width:"70%",
        marginTop:5
    },
    cancel:{
        height:18,
        width:18,
        marginLeft:75,
        marginTop:3
    },
})

export default Session;