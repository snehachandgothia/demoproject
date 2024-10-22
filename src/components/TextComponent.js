import React from "react";
import {Text} from "react-native";
import { Fonts } from "../../asset/fonts/Font";

const TextComponent=({title,size,weight,color,styles_font,fontFamily=Fonts.SF_Regular1,textAlign,left,mhorizontal,children,width,...props})=>{
    return(
        <Text style={[styles_font,
        {fontSize:size,
        fontWeight:weight,
        fontFamily:Fonts.SF_Regular1,
        color:color,
        width:width,
        textAlign:textAlign,
        marginLeft:left,
        marginHorizontal:mhorizontal
        }]}
        {...props}>{children}{title}</Text>
    )
};

export default TextComponent;