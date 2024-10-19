import React from "react";
import { Image, StyleSheet,TouchableOpacity, View } from "react-native";
import { ImageConstant } from "../constants/ImageConstant";
import TextComponent from "./TextComponent";

const Header=({onPress,title})=>{
    return(
        <View style={styles.view}>
            <TouchableOpacity onPress={onPress}>
                <Image style={styles.back}
                source={ImageConstant.Back}/>
            </TouchableOpacity>
            <TextComponent size={20} weight={"400"} 
            color={"#3C3C3C"} styles_font={{marginLeft: 10}}>{title}</TextComponent>
        </View>
    )
};

const styles=StyleSheet.create({
    view: {
        marginTop: "17%",
        flexDirection: "row",
        borderBottomWidth: 1,
        borderColor: "#ECEDF2",
        paddingBottom: 20,
    },
    back: {
        height: 23,
        width: 12,
        marginTop: 3,
        marginLeft: 20
    },
})

export default Header;