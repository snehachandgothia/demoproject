import React from "react";
import { StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Typography from "./Typography";
import { Colors } from "../constants/Colors";
import { Fonts } from "../../asset/fonts/Font";

const MainButton=({title})=>{
    return(
        <LinearGradient colors={[Colors.Skyblue,Colors.Blue]}
        start={{ x: 1.2, y: 0}} end={{ x: 0.5, y: 1}}
            style={styles.button}>
            <Typography
            size={14} font={Fonts.SF_Bold1} color={Colors.White} styles_font={{alignSelf:"center",letterSpacing:2}}>{title}</Typography>
        </LinearGradient>
    )
};

const styles=StyleSheet.create({
    button:{
        paddingVertical:20,
        borderRadius:50,
        width:"90%",
        alignSelf:"center"
    }
})

export default MainButton;