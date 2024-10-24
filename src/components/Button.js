import React from "react";
import { StyleSheet, View } from "react-native";
import Typography from "./Typography";
import { Fonts } from "../../asset/fonts/Font";

const Button=({text,style_bgcolor,style_color})=>{
    return(
        <View style={[styles.button,style_bgcolor]}>
                <Typography size={18} font={Fonts.SF_Bold1} color={style_color}>{text}</Typography>
        </View>
    )
};

const styles=StyleSheet.create({
    button:{
        paddingVertical:20,
        paddingHorizontal:35,
        borderRadius:40
    }
})

export default Button;