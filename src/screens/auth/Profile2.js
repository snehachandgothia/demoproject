import React, { useState } from "react";
import { Image, StatusBar, StyleSheet, TouchableOpacity, View } from "react-native";
import { ImageConstant } from "../../constants/ImageConstant";
import NextButton from "../../components/NextButton";
import TextComponent from "../../components/TextComponent";
import { Colors } from "../../constants/Colors";

const Profile2 = ({ navigation }) => {
    const [isChecked, setIsChecked] = useState(false);

    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
    };

    return (
        <View style={{backgroundColor:Colors.White}}>
            <StatusBar translucent backgroundColor={"transparent"} barStyle={"dark-content"} />
            <View style={styles.header}>
                <TextComponent size={20} weight="400" color={Colors.Darkgrey}>Update Profile</TextComponent>
                <TouchableOpacity>
                    <TextComponent size={16} weight="400" color={Colors.Black}>Skip</TextComponent>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.choose}>
                <TextComponent size={20} weight="400" color={Colors.Darkgrey}>Select membership plan</TextComponent>
                <Image style={styles.image} source={ImageConstant.RightArrow} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.choose}>
                <TextComponent size={20} weight="400" color={Colors.Darkgrey}>Select your availability</TextComponent>
                <Image style={styles.image} source={ImageConstant.RightArrow} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('Create Session') }}>
                <TextComponent size={14} weight="700" color={Colors.Darkblue} styles_font={{alignSelf:"center"}}>CREATE SESSIONS</TextComponent>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2}>
                <TextComponent  size={14} weight="700" color={Colors.Darkblue} styles_font={{alignSelf:"center"}}>ATTACH YOUR OFFICIAL CERTIFICATION</TextComponent>
            </TouchableOpacity>
            <View style={styles.checkboxContainer}>
                <TouchableOpacity
                    style={[styles.box, { backgroundColor: isChecked ? Colors.Darkblue : Colors.White }]}
                    onPress={toggleCheckbox}>
                    <Image source={ImageConstant.Icon} style={styles.boxImage} />
                </TouchableOpacity>
                <TextComponent size={14} weight="400" color={Colors.Darkgrey}>I Accept Terms & Condition and Privacy & Policy</TextComponent>
            </View>
            <TouchableOpacity style={{ marginTop: "65%" }}>
                <NextButton title={'NEXT'} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        marginTop: 45,
        marginBottom: 25,
        justifyContent: "space-between",
        paddingHorizontal: 20,
    },
    choose: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderColor: Colors.Darkbordergrey,
        paddingBottom: 20,
        paddingTop: 15,
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    image: {
        height: 10,
        width: 5,
    },
    button: {
        paddingVertical: 20,
        marginTop: "20%",
        borderRadius: 50,
        width: "90%",
        alignSelf: "center",
        borderWidth: 1,
        borderColor: Colors.Blue,
    },
    button2: {
        paddingVertical: 21,
        backgroundColor: Colors.Backgroundblue,
        marginTop: "5%",
        borderRadius: 50,
        width: "90%",
        alignSelf: "center",
    },
    checkboxContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
        paddingHorizontal: 20,
    },
    box: {
        height: 15,
        width: 15,
        marginRight: 10,
        borderWidth: 1,
        borderColor: Colors.Darkblue,
        marginLeft: 20,
    },
});

export default Profile2;
