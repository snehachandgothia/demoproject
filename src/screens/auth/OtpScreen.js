import React from "react";
import { StyleSheet, TextInput, View, StatusBar, TouchableOpacity } from "react-native";
import Timer from "../../components/Timer";
import MainButton from "../../components/MainButton";
import { Colors } from "../../constants/Colors";
import Typography from "../../components/Typography";
import { Fonts } from "../../../asset/fonts/Font";

const OtpScreen = ({ navigation }) => {
    return (
        <View style={{backgroundColor:Colors.White,flex:1}}>
            <StatusBar translucent backgroundColor={"transparent"} barStyle={"dark-content"} />
                <Typography
            size={30} font={Fonts.SF_Medium1} color={Colors.Darkgrey}  left={20} styles_font={styles.font
              }>Verify your phone no. by entering the OTP.</Typography>
            <View style={{ flexDirection: "row", justifyContent: "space-evenly", marginTop: 20 }}>
                <TextInput style={styles.input} maxLength={1} keyboardType="numeric" />
                <TextInput style={styles.input} maxLength={1} keyboardType="numeric" />
                <TextInput style={styles.input} maxLength={1} keyboardType="numeric" />
                <TextInput style={styles.input} maxLength={1} keyboardType="numeric" />
            </View>
            <Timer />
            <TouchableOpacity style={{ marginTop: 35 }}
                onPress={() => navigation.navigate("Tab")}>
                <MainButton title={'DONE'} />
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    input: {
        height: 67,
        width: 67,
        borderRadius: 2,
        backgroundColor: Colors.Greywhite,
        fontSize:30,
        textAlign:"center"
    },
    font:{
        marginTop:190,
        marginRight:50
      }
})

export default OtpScreen;