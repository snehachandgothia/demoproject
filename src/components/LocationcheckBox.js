import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Image} from "react-native";
import { ImageConstant } from "../constants/ImageConstant";
import TextComponent from "./TextComponent";

const LocationCheckBox = ({ navigation, onPress }) => {
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
            <TouchableOpacity style={{ flexDirection: "row" }} onPress={togglebox1}>
                <TextComponent
                size={16} weight={"400"} color={"#3C3C3C"} styles_font={{marginBottom: 15,
                    marginVertical: 10}} width={365}>Trainer Location</TextComponent>
                <TouchableOpacity
                    style={[styles.box, { backgroundColor: isChecked ? "#183CA4" : "#FFFFFF" }]}>
                    <Image source={ImageConstant.Icon} style={styles.boxImage} />
                </TouchableOpacity>
            </TouchableOpacity>

            <TouchableOpacity style={{ flexDirection: "row" }} onPress={togglebox2}>
                <TextComponent
                size={16} weight={"400"} color={"#3C3C3C"} styles_font={{marginBottom: 15,
                    marginVertical: 10}} width={365}>Trainee Location</TextComponent>
                <TouchableOpacity
                    style={[styles.box, { backgroundColor: check ? "#183CA4" : "#FFFFFF" }]}>
                    <Image source={ImageConstant.Icon} style={styles.boxImage} />
                </TouchableOpacity>
            </TouchableOpacity>
            {isChecked || check ? (
                <TouchableOpacity onPress={onPress}>
                <TextComponent
                size={16} weight={"400"} color={"#183CA4"} styles_font={{marginVertical: 5,}}>select location</TextComponent>
            </TouchableOpacity>) : null}
        </View>
    )
};

const styles = StyleSheet.create({
    box: {
        height: 15,
        width: 15,
        marginRight: 10,
        borderWidth: 1,
        borderColor: "#183CA4",
        marginVertical: 18,
    }
})

export default LocationCheckBox;