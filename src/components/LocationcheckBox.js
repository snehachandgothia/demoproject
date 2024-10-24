import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Image} from "react-native";
import { ImageConstant } from "../constants/ImageConstant";
import Typography from "./Typography";
import { Colors } from "../constants/Colors";
import { Fonts } from "../../asset/fonts/Font";

const LocationCheckBox = ({ navigation, onPressTrainee,onPressTrainer }) => {
    const [isChecked, setIsChecked] = useState(false);
    const [check, setCheck] = useState(false);

    const togglebox1 = () => {
        setIsChecked(!isChecked);
        if (!isChecked) {
            setCheck(false);
        }
    };

    const togglebox2 = () => {
        setCheck(!check);
        if (!check) {
            setIsChecked(false);
        }
    };

    return (
        <View>
            <TouchableOpacity style={[styles.view]} onPress={togglebox1}>
                <Typography
                size={16} font={Fonts.SF_Regular1} color={Colors.Darkgrey} styles_font={{marginBottom: 15,
                    marginVertical: 10}} >Trainer Location</Typography>
                <TouchableOpacity
                    style={[styles.box, { backgroundColor: isChecked ? Colors.Darkblue : Colors.White }]}>
                    <Image source={ImageConstant.Icon} style={styles.boxImage} />
                </TouchableOpacity>
            </TouchableOpacity>
            {isChecked ? (
                <TouchableOpacity onPress={onPressTrainer}>
                <Typography
                size={16} font={Fonts.SF_Regular1} color={Colors.Darkblue} styles_font={{marginVertical: 5,}}>select location</Typography>
            </TouchableOpacity>) : null}

            <TouchableOpacity style={styles.view} onPress={togglebox2}>
                <Typography
                size={16} font={Fonts.SF_Regular1} color={Colors.Darkgrey} styles_font={{marginBottom: 15,
                    marginVertical: 10}} >Trainee Location</Typography>
                <TouchableOpacity
                    style={[styles.box, { backgroundColor: check ? Colors.Darkblue : Colors.White }]}>
                    <Image source={ImageConstant.Icon} style={styles.boxImage} />
                </TouchableOpacity>
            </TouchableOpacity>
            {check ? (
                <TouchableOpacity onPress={onPressTrainee}>
                <Typography
                size={16} font={Fonts.SF_Regular1} color={Colors.Darkblue} styles_font={{marginVertical: 5,}}>select location</Typography>
            </TouchableOpacity>) : null}
        </View>
    )
};

const styles = StyleSheet.create({
    box: {
        height: 15,
        width: 15,
        // marginRight: 10,
        borderWidth: 1,
        borderColor: Colors.Greywhite,
        marginVertical: 18,
    },
    view:{
        flexDirection:"row",
        justifyContent:"space-between",
        width:"100%"
    },
    border:{
        borderBottomWidth:1,
        borderColor:Colors.Greywhite,
    }
})

export default LocationCheckBox;