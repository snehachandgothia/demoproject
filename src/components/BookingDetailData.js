import React from "react";
import { StyleSheet, View } from "react-native";
import { Colors } from "../constants/Colors";
import Typography from "./Typography";
import { Fonts } from "../../asset/fonts/Font";

const BookingDetailData=({title,subtitle})=>{
    return(
        <View style={[styles.border, styles.view]}>
        <Typography size={14} font={Fonts.SF_Regular1} color={Colors.Grey} left={10}>{title}</Typography>
        <Typography size={14} font={Fonts.SF_Bold1} color={Colors.Darkgrey}>{subtitle}</Typography>
    </View>
    )
};

const styles=StyleSheet.create({
    border: {
        borderBottomWidth: 1.5,
        borderColor: Colors.Bordergrey,
        alignSelf: "center",
    },
    view: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignSelf: "center",
        paddingVertical: 14,
        paddingRight: 10,
        width: "100%",
    },
})

export default BookingDetailData;