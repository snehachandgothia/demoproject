import React from "react";
import { Image, StyleSheet,TouchableOpacity, View } from "react-native";
import { ImageConstant } from "../constants/ImageConstant";
import TextComponent from "./TextComponent";
import { Colors } from "../constants/Colors";
import { Fonts } from "../../asset/fonts/Font";

const Header=({onPress,title})=>{
    return(
        <View style={styles.view}>
            <TouchableOpacity onPress={onPress}>
                <Image style={styles.back}
                source={ImageConstant.Back}/>
            </TouchableOpacity>
            <TextComponent size={20} font={Fonts.SF_Regular1} left={10}
            color={Colors.Darkgrey} >{title}</TextComponent>
        </View>
    )
};

const styles=StyleSheet.create({
    view: {
        marginTop: "17%",
        flexDirection: "row",
        borderBottomWidth: 1,
        borderColor: Colors.Darkbordergrey,
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