import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Fonts } from "../../asset/fonts/Font";

const TextComponent=({title,size,weight,color,styles_font,children,width,...props})=>{
    return(
        <Text style={[styles_font,
        {fontSize:size,
        fontWeight:weight,
        fontFamily:Fonts.SF_Regular1,
        color:color,
        width:width,
        }]}
        {...props}>{children}{title}</Text>
    )
};

export default TextComponent;