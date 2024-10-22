import React from "react";
import { StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import TextComponent from "./TextComponent";
import { Colors } from "../constants/Colors";

const NextButton=({title})=>{
    return(
        <LinearGradient colors={[Colors.Skyblue,Colors.Blue]}
        start={{ x: 1.2, y: 0}} end={{ x: 0.5, y: 1}}
            style={styles.button}>
            <TextComponent
            size={14} weight={"700"} color={Colors.White} styles_font={{alignSelf:"center",letterSpacing:2}}>{title}</TextComponent>
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

export default NextButton;