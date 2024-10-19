import React from "react";
import { StyleSheet, View } from "react-native";
import TextComponent from "./TextComponent";

const ButtonComponents=({text,style_bgcolor,style_color})=>{
    return(
        <View style={[styles.button,style_bgcolor]}>
                {/* <Text style={[styles.text, style_color]}>{text}</Text> */}
                <TextComponent size={18} weight={"700"} color={style_color}>{text}</TextComponent>
        </View>
    )
};

const styles=StyleSheet.create({
    button:{
        // backgroundColor:"aqua",
        paddingVertical:20,
        paddingHorizontal:35,
        marginLeft:23,
        marginTop:"100%", 
        borderRadius:40
    }
})

export default ButtonComponents;