import React, { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View ,FlatList} from "react-native";
import Typography from "./Typography";
import { Colors } from "../constants/Colors";
import { Fonts } from "../../asset/fonts/Font";

const Review=()=>{
    const[checked,setChecked]=useState(false);
    const[open,setOpen]=useState(false); 

    const toggle=()=>{
        setChecked(!checked);
    }
  
    const Data=[
        {id:1,image:require('../../asset/images/review.png'),star:require('../../asset/images/stars.png'),title:"Anna Maria",text:"Mauris quis orci faucibus, egestas nibh sed vestibulum elit. Nam est dui, accumsan a lorem  tincidunt, pellentesque pulvinar lorem."},
        {id:2,image:require('../../asset/images/review.png'),star:require('../../asset/images/stars.png'),title:"Anna Maria",text:"Mauris quis orci faucibus, egestas nibh sed vestibulum elit. Nam est dui, accumsan a lorem  tincidunt, pellentesque pulvinar lorem."}
    ];

    const render=({item})=>(
        <View style={styles.box}>
            <View style={{flexDirection:"row"}}>
            <Image
            source={item.image}/>
            <View style={{marginTop:8,marginLeft:10}}>
            <Image source={item.star}/>
            <Typography
            size={14} font={Fonts.SF_Regular1} color={Colors.Darkgrey}>{item.title}</Typography>
            </View>
            </View>
            <Typography
            size={14} font={Fonts.SF_Regular1} color={Colors.Grey} width={270} styles_font={{marginTop:5}}>{item.text}</Typography>
        </View>
    )

    return(
        <View style={styles.view}>
           <TouchableOpacity style={{flexDirection:"row"}} onPress={toggle}>
            <Typography 
            size={14} font={Fonts.SF_Regular1} color={Colors.Darkgrey} left={10}>Review</Typography>
            <Image style={styles.image}
            source={checked?(require('../../asset/images/dropdown.png')):(require('../../asset/images/rightarrow.png'))}/>
           </TouchableOpacity>
           {checked?(
            <FlatList 
            data={Data}
            renderItem={render}
            keyExtractor={item=>item.id.toString()}
            />
           ):null}
        </View>
    )
};

const styles=StyleSheet.create({
    view:{
        padding:10,
        borderBottomWidth:1,
        borderTopWidth:1,
        borderColor:Colors.Darkbordergrey,
    },
    image:{
        marginTop:6,
        marginLeft:300
    },
    box:{
        marginVertical:15,
        width:"90%",
        marginLeft:10
    },
})

export default Review;