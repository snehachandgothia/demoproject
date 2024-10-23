import React from "react";
import { Image, ImageBackground, StatusBar, StyleSheet, TouchableOpacity, View } from "react-native";
import { ImageConstant } from "../constants/ImageConstant";
import { windowWidth } from "../constants/Dimensions";
import ButtonComponents from "../components/ButtonComponent";
import TextComponent from "../components/TextComponent";
import { Colors } from "../constants/Colors";
import { Fonts } from "../../asset/fonts/Font";

const ChooseUser = ({ navigation }) => {
    return (
        <View style={{ backgroundColor: "#ffffff" }}>
            <ImageBackground style={{ height: "100%", width: "100%" }}
                source={ImageConstant.Splash}>
                <StatusBar translucent backgroundColor="transparent" />
                <Image style={{ alignSelf: "center", marginTop: "62%" }}
                    source={ImageConstant.Logo} />
                <TextComponent
                    size={48} font={Fonts.SF_Regular1} color={Colors.White} styles_font={{
                        marginTop: "15%",
                        alignSelf: "center"
                    }}>BeSwol</TextComponent>
                <TextComponent
                    size={20} font={Fonts.SF_Regular1} color={Colors.White} textAlign={"center"}
                     styles_font={{alignSelf: "center",
                    }} width={windowWidth - 79.6}>Helping you achieve your personalfitness goals where you want, when you want, with the trainer you want</TextComponent>
                <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity onPress={() => { navigation.navigate("OnBoarding") }}
                        style={styles.button}>
                        <ButtonComponents text={"I am trainer"}
                            style_bgcolor={{ backgroundColor: Colors.White, }}
                            style_color={Colors.Red} />
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.button}>
                        <ButtonComponents text={"I am player"}
                            style_bgcolor={{ backgroundColor: Colors.Red }}
                            style_color={Colors.White} />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
};

const styles=StyleSheet.create({
    button:{
        marginLeft:23,
        marginTop:"40%", 
    }
})

export default ChooseUser;