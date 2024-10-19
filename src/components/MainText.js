import React from "react";
import {View } from "react-native";
import TextComponent from "./TextComponent";

const MainText=({text})=>{
    return(
        <View>
            <TextComponent
            size={30} weight={"500"} color={"#3C3C3C"} styles_font={{marginTop:190,
                marginHorizontal:20,}}>{text}</TextComponent>
        </View>
    )
};

export default MainText;