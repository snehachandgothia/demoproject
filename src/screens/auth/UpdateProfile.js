import React, { useState } from "react";
import { Image, StatusBar, StyleSheet, TouchableOpacity, View } from "react-native";
import { ImageConstant } from "../../constants/ImageConstant";
import MainButton from "../../components/MainButton";
import Typography from "../../components/Typography";
import { Colors } from "../../constants/Colors";
import { Fonts } from "../../../asset/fonts/Font";

const UpdateProfile = ({ navigation }) => {
    const [isChecked, setIsChecked] = useState(false);

    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
    };

    return (
        <View style={{backgroundColor:Colors.White}}>
            <StatusBar translucent backgroundColor={"transparent"} barStyle={"dark-content"} />
            <View style={styles.header}>
                <Typography size={20} font={Fonts.SF_Regular1} color={Colors.Darkgrey}>Update Profile</Typography>
                <TouchableOpacity>
                    <Typography size={16} font={Fonts.SF_Regular1} color={Colors.Black}>Skip</Typography>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.choose}>
                <Typography size={20} font={Fonts.SF_Regular1} color={Colors.Darkgrey}>Select membership plan</Typography>
                <Image style={styles.image} source={ImageConstant.RightArrow} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.choose}>
                <Typography size={20} font={Fonts.SF_Regular1} color={Colors.Darkgrey}>Select your availability</Typography>
                <Image style={styles.image} source={ImageConstant.RightArrow} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('Create Session') }}>
                <Typography size={14} font={Fonts.SF_Medium1} color={Colors.Darkblue} styles_font={{alignSelf:"center"}}>CREATE SESSIONS</Typography>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2}>
                <Typography  size={14} font={Fonts.SF_Medium1} color={Colors.Darkblue} styles_font={{alignSelf:"center"}}>ATTACH YOUR OFFICIAL CERTIFICATION</Typography>
            </TouchableOpacity>
            <View style={styles.checkboxContainer}>
                <TouchableOpacity
                    style={[styles.box, { backgroundColor: isChecked ? Colors.Darkblue : Colors.White }]}
                    onPress={toggleCheckbox}>
                    <Image source={ImageConstant.Icon} style={styles.boxImage} />
                </TouchableOpacity>
                <Typography size={14} font={Fonts.SF_Regular1} color={Colors.Darkgrey}>I Accept Terms & Condition and Privacy & Policy</Typography>
            </View>
            <TouchableOpacity style={{ marginTop: "65%" }}>
                <MainButton title={'NEXT'} />
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

export default UpdateProfile;
