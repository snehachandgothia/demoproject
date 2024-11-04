import React, { useState } from "react";
import { Image, StatusBar, StyleSheet, TouchableOpacity, View, TextInput, ScrollView } from "react-native";
import Header from "../../components/Header";
import { ImageConstant } from "../../constants/ImageConstant";
import Typography from "../../components/Typography";
import { Fonts } from "../../../asset/fonts/Font";
import { Colors } from "../../constants/Colors";
import { windowWidth } from "../../constants/Dimensions";
// import MainButton from "../../components/MainButton";
import UpcomingdetailModal from "../../components/UpcomingdetailModal";
import BookingDetailData from "../../components/BookingDetailData";

const UpcomingDetails = ({ route }) => {
    const [selectedData, setSelectedData] = useState(null);

    const handleModalClose = (data) => {
        setSelectedData(data);
        console.log(data, "Selected Date and Time");
    };

    return (
        <ScrollView style={{ backgroundColor: Colors.White }}>
            <StatusBar translucent backgroundColor={"transparent"} barStyle={"dark-content"} />
            <Header title={"Booking details"} />
            <View style={{ width: "90%", alignSelf: "center" }}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={{ height: 80, width: 80, marginTop: 5 }} source={ImageConstant.Review} />
                    <View style={{ marginLeft: 8, marginTop: 10, width: 230 }}>
                        <Typography size={18} font={Fonts.SF_Bold1} color={Colors.Darkgrey}>Anna Maria, 30</Typography>
                        <Typography size={14} font={Fonts.SF_Regular1} color={Colors.Grey}>Female</Typography>
                        <View style={{ flexDirection: "row" }}>
                            <Image style={{ height: 14, width: 11, marginTop: 3 }} source={ImageConstant.Location} />
                            <Typography size={14} font={Fonts.SF_Regular1} color={Colors.Darkgrey} left={5}>Address Location</Typography>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 10 }}>
                        <Typography size={12} font={Fonts.SF_Regular1} color={Colors.Darkgrey} width={23}>4.6</Typography>
                        <Image style={{ height: 13, width: 13, marginTop: 2 }} source={ImageConstant.Yellowstar} />
                    </View>
                </View>
                <View style={[styles.border, { paddingBottom: 15 }]}>
                    <View style={styles.buttonview}>
                        <TouchableOpacity style={styles.button}>
                            <Typography size={12} font={Fonts.SF_Bold1} color={Colors.Blue}>WATCH PEOPLE</Typography>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, { backgroundColor: Colors.Backgroundblue }]}>
                            <Typography size={12} font={Fonts.SF_Bold1} color={Colors.Blue}>SEND MESSAGE</Typography>
                        </TouchableOpacity>
                    </View>
                </View>
                <BookingDetailData title={"Sports category"} subtitle={"Boxing"} />
                <BookingDetailData title={"Level"} subtitle={"Beginner"} />
                <BookingDetailData title={"Who will train"} subtitle={"2"} />
                <BookingDetailData title={"Location"} subtitle={"Trainer Location"} />
                <View >
                <BookingDetailData title={"Date and time"} subtitle={"19.12,12:00-13:00"} />
                    {selectedData ? (
                        <View>
                            <View style={[styles.view,]}>
                                <Typography size={14} font={Fonts.SF_Regular1} color={Colors.Grey} left={10}>Rescheduled</Typography>
                                <Typography size={14} font={Fonts.SF_Bold1} color={Colors.Darkgrey}>
                                    {`${selectedData.date}, ${selectedData.time}`}
                                </Typography>
                            </View>
                            <View style={styles.modal}>
                                <Typography size={14} font={Fonts.SF_Bold1} color={Colors.Orange} alignSelf="center">PENDING CONFIRMATION</Typography>
                            </View>
                        </View>
                    ) : null}
                </View>
                <BookingDetailData title={"Payment method"} subtitle={"Pay via cash"} />
                <View style={[styles.view, { marginTop: 25 }]}>
                    <Typography size={16} font={Fonts.SF_Bold1} color={Colors.Red} left={10}>Total price</Typography>
                    <Typography size={16} font={Fonts.SF_Bold1} color={Colors.Black}>100$</Typography>
                </View>
            </View>
            {selectedData === null ? (
                <View style={{ marginTop: 30 }}>
                    <UpcomingdetailModal onClose={handleModalClose} />
                </View>
            ) : null}
            <TouchableOpacity style={[styles.button, { width: "90%", alignSelf: "center", marginTop: 10 }]}>
                <Typography size={13} font={Fonts.SF_Bold1} color={Colors.Blue} textAlign={"center"}>CANCEL BOOKING</Typography>
            </TouchableOpacity>
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 40,
        paddingVertical: 18,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: Colors.Backgroundskyblue
    },
    buttonview: {
        flexDirection: "row",
        marginTop: 15,
        justifyContent: "space-between",
        width: "100%"
    },
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
    modal: {
        height: 56,
        width: windowWidth,
        backgroundColor: Colors.Lightorange,
        justifyContent: "center",
        marginLeft:-20
    }
})

export default UpcomingDetails;