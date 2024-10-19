import React from "react";
import { StatusBar, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { ImageConstant } from "../../constants/ImageConstant";
import NextButton from "../../components/NextButton";
import { ScrollView } from "react-native-gesture-handler";
import MultiImage from "../../components/MultiImage";
import CustomSwitch from "../../components/Switch";
import SessionComponent from "../../components/SessionComponent";
import MyPackage from "../../components/MyPackage";
import Review from "../../components/Review";
import TextComponent from "../../components/TextComponent";
import { Colors } from "../../constants/Colors";

const TrainerProfile = ({navigation}) => {
    return (
        <View style={{ borderBlockColor: "#FFFFFF" }}>
            <ScrollView>
                <StatusBar translucent backgroundColor={'transparent'} barStyle={'dark-content'} />
                <TextComponent
                size={20} weight={"400"} color={Colors.Darkgrey} styles_font={{marginTop: 40,
                    marginLeft: 15}}>Update Profile</TextComponent>
                <View style={{ flexDirection: "row", marginLeft: 15, marginTop: 5 }}>
                    <TextComponent
                    size={34} weight={"700"} color={"#3C3C3C"} width={280}>Profile</TextComponent>
                    <TouchableOpacity>
                        <Image style={styles.edit}
                            source={ImageConstant.Edit} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={styles.edit}
                            source={ImageConstant.Setting} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: "row", marginLeft: 25, marginTop: 15 }}>
                    <Image source={ImageConstant.User} />
                    <View style={{ marginLeft: 20, marginTop: 7, width: 160 }}>
                        <View style={{ flexDirection: "row" }}>
                            <TextComponent
                            size={19} weight={"700"} color={"#3C3C3C"}>Jone Doe</TextComponent>
                            <Image style={{ marginLeft: 10, marginTop: 7 }}
                                source={ImageConstant.BlueTick} />
                        </View>
                        <Image style={{ marginTop: 3 }}
                            source={ImageConstant.Stars} />
                        <TextComponent
                        size={12} weight={"400"} color={"#B2B7C7"}>145 Reviews</TextComponent>
                    </View>
                    <TouchableOpacity style={styles.plan}>
                        <TextComponent title={"Bronze plan"}
                        size={14} weight={"400"} color={"#ffffff"} styles_font={{alignSelf:"center"}}/>
                        
                    </TouchableOpacity>
                </View>
                <View style={styles.view}>
                    <View style={{ marginLeft: 25 }}>
                        <TextComponent
                        size={20} weight={"400"} color={"#3C3C3C"} styles_font={{alignSelf:"center"}}>320</TextComponent>
                        <TextComponent
                        size={16} weight={"400"} color={"#B2B7C7"}>Sessions</TextComponent>
                    </View>
                    <View style={{ marginLeft: 25 }}>
                        <TextComponent
                        size={20} weight={"400"} color={"#3C3C3C"} styles_font={{alignSelf:"center"}}>12</TextComponent>
                        <TextComponent
                        size={16} weight={"400"} color={"#B2B7C7"}>Clients</TextComponent>
                    </View>
                    <TouchableOpacity style={styles.progress}>
                        <TextComponent
                        size={14} weight={"400"} color={"#ffffff"} styles_font={{alignSelf:"center"}}>My progress</TextComponent>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: "row", marginTop: 15, marginLeft: 15 }}>
                    <Image style={{ marginRight: 5 }}
                        source={ImageConstant.Trophy}/>
                    <TextComponent
                    size={12} weight={"400"} color={"#B2B7C7"}>ADVANCED</TextComponent>
                </View>
                <TouchableOpacity style={{ marginTop: 15 }}>
                    <NextButton title={'MY SCHEDULE'} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.box}>
                    <TextComponent
                    size={14} weight={"400"} color={"#373A4D"}>Notifications</TextComponent>
                    <Image style={{ marginTop: 5, marginLeft: 260 }}
                        source={ImageConstant.RightArrow} />
                </TouchableOpacity>
                <View style={styles.details}>
                    <TextComponent
                    size={14} weight={"400"} color={"#B2B7C7"} styles_font={{marginLeft:5,alignSelf:"center"}} width={100}>Phone number</TextComponent>
                    <TextComponent
                    size={14} weight={"400"} color={"#3C3C3C"} width={150} styles_font={{alignSelf:"center",marginLeft:120}}>+923423444567</TextComponent>
                </View>
                <View style={styles.details}>
                    <TextComponent
                    size={14} weight={"400"} color={"#B2B7C7"} styles_font={{marginLeft:20,alignSelf:"center"}} width={100}>Email</TextComponent>
                    <TextComponent
                    size={14} weight={"400"} color={"#3C3C3C"} width={150} styles_font={{alignSelf:"center",marginLeft:120}}>anna@gmail.com</TextComponent>
                </View>
                <View style={styles.details}>
                    <TextComponent
                    size={14} weight={"400"} color={"#B2B7C7"} styles_font={{marginLeft:5,alignSelf:"center"}} width={100}>Date of birth</TextComponent>
                    <TextComponent
                    size={14} weight={"400"} color={"#3C3C3C"} width={150} styles_font={{alignSelf:"center",marginLeft:150,paddingLeft:40}}>10.03.1980</TextComponent>
                </View>
                <TextComponent
                size={16} weight={"400"} color={"#3C3C3C"} styles_font={{marginTop: 15,
                    marginLeft: 30}}>About me</TextComponent>
                <View style={styles.line}>
<TextComponent
size={14} weight={"400"} color={"#B2B7C7"} styles_font={{marginLeft: 12,
    lineHeight: 20,}} width={310}>Mauris quis orci faucibus, egestas nibh sed vestibulum elit. Nam est dui, accumsan a lorem tincidunt, pellentesque pulvinar lorem. Mauris quis orci faucibus, egestas nibh sed vestibulum elit. Nam est dui, accumsan a lorem  tincidunt, pellentesque pulvinar lorem</TextComponent>
                </View>
                <TextComponent
                size={16} weight={"600"} color={"#3C3C3C"} styles_font={{marginTop: 15,
                    marginLeft: 30}}>Gallery</TextComponent>
                <View style={styles.image}>
                    <MultiImage />
                </View>
                <TextComponent
                size={16} weight={"600"} color={"#3C3C3C"} styles_font={{marginTop: 15,
                    marginLeft: 30}}>Client gender preference</TextComponent>
                <View style={styles.underline}>
                    <View style={styles.gender}>
                        <CustomSwitch />
                    </View>
                </View>
                <View style={styles.account}>
                    <View style={{ width: "75%" }}>
                        <TextComponent
                        size={16} weight={"600"} color={"#3C3C3C"} styles_font={{marginTop: 15,
                            marginLeft: 30}}>Account Number</TextComponent>
                        <TextComponent
                        size={12} weight={"400"} color={"#B2B7C7"} styles_font={{marginLeft:29}}>**** **** ****</TextComponent>
                    </View>
                    <TouchableOpacity>
                        <Image style={styles.change}
                            source={ImageConstant.Edit} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={{ marginTop: 20, marginLeft: 10 }}
                            source={ImageConstant.Cancel} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={styles.account}>
                    <TextComponent
                    size={18} weight={"400"} color={"#B2B7C7"} styles_font={{padding: 15,
                        paddingLeft: 30}}>Promo codes</TextComponent>
                    <Image style={{ marginTop: 18, marginLeft: 170 }}
                        source={ImageConstant.Addcode} />
                </TouchableOpacity>
                <View style={styles.session}>
                    <TextComponent
                    size={16} weight={"400"} color={"#373A4D"} styles_font={{marginLeft:15}}>My Session</TextComponent>
                    <TouchableOpacity>
                        <Image style={{ marginLeft: 5, marginTop: 1 }}
                            source={ImageConstant.Addcode} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>NavigationContainer.navigate('MySessions')}>
                        <TextComponent
                        size={14} weight={"400"} color={"#2F63D0"} styles_font={{marginLeft: 190,
                            marginTop: 2}}>View All</TextComponent>
                    </TouchableOpacity>
                </View>
                <View>
                  <SessionComponent/>
                </View>
                <View style={styles.session}>
                    <TextComponent
                    size={14} weight={"400"} color={"#373A4D"}>MY PACKAGES</TextComponent>
                    <TouchableOpacity>
                        <TextComponent
                        size={14} weight={"400"} color={"#2F63D0"} styles_font={{marginLeft: 190,
                            marginTop: 2}}>View All</TextComponent>
                    </TouchableOpacity>
                </View>
                <View>
                    <MyPackage/>
                </View>
<View style={{marginVertical:10,marginTop:30}}>
<Review/>
</View>
<TouchableOpacity>
<TextComponent
size={14} weight={"400"} color={"#2F63D0"} styles_font={{marginTop:10,
    marginLeft:22}}>Booking cancellation policy</TextComponent>
</TouchableOpacity>
<TouchableOpacity>
    <TextComponent
    size={14} weight={"400"} color={"#E84556"} styles_font={{marginTop:20,
        marginLeft:22,marginBottom:30}}>Log out</TextComponent>
</TouchableOpacity>
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    edit: {
        height: 24,
        width: 24,
        marginLeft: 15,
        marginTop: 10
    },
    plan: {
        backgroundColor: "#2F63D0",
        height: 28,
        width: 88,
        borderRadius: 50,
        padding: 3,
        marginTop: 35
    },
    view: {
        flexDirection: "row",
        backgroundColor: "#D8DBE333",
        marginTop: 20,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: "#B2B7C7"
    },
    progress: {
        backgroundColor: "#123399",
        height: 37,
        width: 115,
        borderRadius: 20,
        paddingTop: 8,
        marginLeft: 105,
        marginTop: 6
    },
    box: {
        borderBottomWidth: 1,
        borderTopWidth: 1,
        paddingVertical: 12,
        flexDirection: "row",
        marginTop: 20,
        paddingLeft: 15,
        borderColor: "#ECEDF2"
    },
    details: {
        flexDirection: "row",
        width: "90%",
        alignSelf: "center",
        height: 40,
        marginTop: 20,
        borderBottomWidth: 1,
        borderColor: "#F5F5FA"
    },
    line: {
        borderBottomWidth: 1,
        alignSelf: "center",
        width: "90%",
        paddingBottom: 25,
        borderColor: "#F5F5FA"
    },
    image: {
        marginTop: 10,
        marginLeft: 20,
        borderBottomWidth: 1,
        width: "90%",
        paddingBottom: 25,
        borderColor: "#F5F5FA"
    },
    gender: {
        // width: "82%",
        marginLeft:15
        // alignSelf: "center",
    },
    underline: {
        borderBottomWidth: 1,
        width: "90%",
        paddingBottom: 25,
        alignSelf: "center",
        borderColor: "#F5F5FA"
    },
    change: {
        height: 16,
        width: 16,
        marginLeft: 15,
        marginTop: 25
    },
    account: {
        flexDirection: "row",
        shadowColor: "#4A5BB914",
        shadowRadius: 1,
        shadowOpacity: 2,
        width: "90%",
        backgroundColor: "#FFFFFF",
        alignSelf: "center",
        marginTop: 20,
        borderWidth: 0.3,
        borderColor: "#4A5BB914",
        borderRadius: 15
    },
    session: {
        marginVertical: 20,
        flexDirection: "row",
        marginLeft: 15
    },
})

export default TrainerProfile;