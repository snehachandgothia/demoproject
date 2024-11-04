import React from "react";
import { Image, StatusBar, StyleSheet, TouchableOpacity, View } from "react-native";
import { ImageConstant } from "../../constants/ImageConstant";
import AgendaCalender from "../../components/AgendaCalender";
import ViewForum from "../../components/ViewForum";
import { ScrollView } from "react-native-gesture-handler";
import Typography from "../../components/Typography";
import { Colors } from "../../constants/Colors";
import { Fonts } from "../../../asset/fonts/Font";
import NotificationButton from "../../components/NotificationButton";

const Home = ({ navigation }) => {
    return (
        <ScrollView style={{ backgroundColor: Colors.White }}>
            <StatusBar translucent backgroundColor={'transparent'} barStyle={"dark-content"} />
            <Typography
                size={20} font={Fonts.SF_Regular1} color={Colors.Grey} left={17}
                styles_font={{ marginTop: 40 }}>Dashboard</Typography>
            <Typography
                size={34} font={Fonts.SF_Bold1} color={Colors.Darkgrey} left={18}
            >Hello,Joe!</Typography>
            <AgendaCalender />
            <View style={{ flexDirection: "row" }}>
                <View style={styles.view}>
                    <View style={{ flexDirection: "row" }}>
                        <Typography
                            size={18} font={Fonts.SF_Bold1} color={Colors.Darkgrey}>Rating</Typography>
                        <Image style={styles.trophy}
                            source={ImageConstant.Bluetrophy} />
                    </View>
                    <Typography
                        size={12} font={Fonts.SF_Regular1} color={Colors.Grey}>12 place from 2 k</Typography>
                    <Image style={{ marginTop: 20 }}
                        source={ImageConstant.Stars} />
                    <Typography
                        size={12} font={Fonts.SF_Regular1} color={Colors.Darkgrey}>145 Reviews</Typography>
                </View>
                <View style={styles.view}>
                    <View style={{ flexDirection: "row" }}>
                        <Typography
                            size={18} font={Fonts.SF_Bold1} color={Colors.Darkgrey}>Finance</Typography>
                        <Image style={{ marginLeft: 45 }}
                            source={ImageConstant.Finance} />
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 25 }}>
                        <Image style={{ marginTop: 5, marginRight: 8 }}
                            source={ImageConstant.Bluedot} />
                        <Typography
                            size={12} font={Fonts.SF_Regular1} color={Colors.Grey} width={70}>Boxing</Typography>
                        <Typography
                            size={12} font={Fonts.SF_Bold1} color={Colors.Darkgrey}>1200$</Typography>
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 10 }}>
                        <Image style={{ marginTop: 5, marginRight: 8 }}
                            source={ImageConstant.Pinkdot} />
                        <Typography
                            size={12} font={Fonts.SF_Regular1} color={Colors.Grey} width={70}>Kikboxing</Typography>
                        <Typography
                            size={12} font={Fonts.SF_Bold1} color={Colors.Darkgrey}>1600$</Typography>
                    </View>
                </View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                    <NotificationButton title={"Notifications"}/>
            </TouchableOpacity>
            <View style={{ marginTop: 5 }}>
                <ViewForum />
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    view: {
        height: 133,
        width: 163,
        backgroundColor: Colors.White,
        paddingTop: 10,
        paddingLeft: 15,
        borderRadius: 10,
        marginLeft: 22
    },
    trophy: {
        marginLeft: 60,
        marginTop: 4
    },
    
})

export default Home;