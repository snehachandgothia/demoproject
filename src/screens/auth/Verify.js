import React from "react";
import { StyleSheet, TextInput, View, StatusBar, TouchableOpacity } from "react-native";
import MainText from "../../components/MainText";
import Timer from "../../components/Timer";
import NextButton from "../../components/NextButton";

const Verify = ({ navigation }) => {
    return (
        <View style={{backgroundColor:"#ffffff",flex:1}}>
            <StatusBar translucent backgroundColor={"transparent"} barStyle={"dark-content"} />
            <MainText
                text={"Verify your phone no. by entering the OTP."} />
            <View style={{ flexDirection: "row", justifyContent: "space-evenly", marginTop: 20 }}>
                <TextInput style={styles.input} maxLength={1} keyboardType="numeric" />
                <TextInput style={styles.input} maxLength={1} keyboardType="numeric" />
                <TextInput style={styles.input} maxLength={1} keyboardType="numeric" />
                <TextInput style={styles.input} maxLength={1} keyboardType="numeric" />
            </View>
            <Timer />
            <TouchableOpacity style={{ marginTop: 35 }}
                onPress={() => navigation.navigate("Tab")}>
                <NextButton title={'DONE'} />
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    input: {
        height: 67,
        width: 67,
        borderRadius: 2,
        backgroundColor: "#F0F0F0",
        fontSize:30,
        textAlign:"center"
    },
})

export default Verify;