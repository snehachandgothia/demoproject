import React from "react";
import { Image, StyleSheet, View, StatusBar, TouchableOpacity } from "react-native";
import { ImageConstant } from "../../constants/ImageConstant";
import { TextInput } from "react-native-gesture-handler";
import NextButton from "../../components/NextButton";
import TextComponent from "../../components/TextComponent";
import { Fonts } from "../../../asset/fonts/Font";

const Location2 = ({ navigation }) => {
    return (
        <View style={{backgroundColor:"#ffffff"}}>
            <StatusBar translucent backgroundColor={"transparent"} barStyle={"dark-content"} />
            <TouchableOpacity style={styles.image} onPress={() => navigation.navigate('TrainerLocation')}>
                <Image source={ImageConstant.Cancel} />
            </TouchableOpacity>

            <View style={styles.view}>
                <TextComponent 
                    size={18} 
                    weight={"400"} 
                    color={"#3C3C3C"} 
                    styles_font={{ marginLeft: 30 }} 
                >New Address</TextComponent>
            </View>
            <View style={[styles.view, { flexDirection: "row", marginTop: 15 }]}>
                <Image style={styles.location} source={ImageConstant.Location} />
                <View style={{ marginLeft: 10 }}>
                    <TextComponent 
                        size={16} 
                        weight={"400"} 
                        color={"#3C3C3C"} 
                    >Pin Location</TextComponent>
                    <TextComponent 
                        size={14} 
                        weight={"400"} 
                        color={"#B2B7C7"} 
                    >Gardens Blvd, Opp Discovery Garden</TextComponent>
                </View>
            </View>
            <View style={{ flexDirection: "row" }}>
                <View style={styles.box}>
                    <TextComponent 
                        size={14} 
                        weight={"400"} 
                        color={"#B2B7C7"} 
                    >Flat/Villa No.</TextComponent>
                    <View style={styles.inputbox}>
                        <TextInput style={styles.input} />
                        <TouchableOpacity>
                            <Image style={styles.cut} source={ImageConstant.Cut} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.box}>
                    <TextComponent 
                        size={14} 
                        weight={"400"} 
                        color={"#B2B7C7"} 
                    >Building/Villa</TextComponent>
                    <View style={styles.inputbox}>
                        <TextInput style={styles.input} />
                        <TouchableOpacity>
                            <Image style={styles.cut} source={ImageConstant.Cut} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: "row" }}>
                <View style={styles.box}>
                    <TextComponent 
                        size={14} 
                        weight={"400"} 
                        color={"#B2B7C7"} 
                    >Street</TextComponent>
                    <View style={styles.inputbox}>
                        <TextInput style={styles.input} />
                        <TouchableOpacity>
                            <Image style={styles.cut} source={ImageConstant.Cut} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.box}>
                    <TextComponent 
                        size={14} 
                        weight={"400"} 
                        color={"#B2B7C7"} 
                    >Area</TextComponent>
                    <View style={styles.inputbox}>
                        <TextInput style={styles.input} />
                        <TouchableOpacity>
                            <Image style={styles.cut} source={ImageConstant.Cut} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={{ marginTop: 355 }}>
                <NextButton title={'CONTINUE'} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        marginTop: 60,
        marginLeft: 20
    },
    view: {
        marginTop: 25,
        paddingBottom: 20,
        borderBottomColor: "#ECEDF2",
        borderBottomWidth: 1
    },
    location: {
        height: 28,
        width: 20,
        marginLeft: 30,
        marginTop: 7
    },
    box: {
        width: 140,
        marginLeft: 40,
        marginTop: 20
    },
    inputbox: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ECEDF2",
        height: 37
    },
    input: {
        fontSize: 14,
        fontWeight: "400",
        fontFamily: Fonts.SF_Regular1,
        color: "#3C3C3C",
        width: 120
    },
    cut: {
        marginTop: 10,
        height: 16,
        width: 16
    }
});

export default Location2;
