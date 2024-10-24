import React from "react";
import { StatusBar, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { ImageConstant } from "../../constants/ImageConstant";
import MainButton from "../../components/MainButton";
import { ScrollView } from "react-native-gesture-handler";
import MultiImage from "../../components/MultiImage";
import CustomSwitch from "../../components/Switch";
import Session from "../../components/Session";
import MyPackage from "../../components/MyPackage";
import Review from "../../components/Review";
import Typography from "../../components/Typography";
import { Colors } from "../../constants/Colors";
import { Fonts } from "../../../asset/fonts/Font";

const TrainerProfile = ({navigation}) => {
    return (
        <View style={{ borderBlockColor: Colors.White }}>
            <ScrollView>
                <StatusBar translucent backgroundColor={'transparent'} barStyle={'dark-content'} />
                <Typography
                size={20} font={Fonts.SF_Regular1} color={Colors.Darkgrey} left={15} styles_font={{marginTop: 40,
                    }}>Update Profile</Typography>
                <View style={{ flexDirection: "row", marginLeft: 15, marginTop: 5 }}>
                    <Typography
                    size={34} font={Fonts.SF_Medium1} color={Colors.Darkgrey} width={280}>Profile</Typography>
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
                            <Typography
                            size={19} font={Fonts.SF_Medium1} color={Colors.Darkgrey}>Jone Doe</Typography>
                            <Image style={{ marginLeft: 10, marginTop: 7 }}
                                source={ImageConstant.BlueTick} />
                        </View>
                        <Image style={{ marginTop: 3 }}
                            source={ImageConstant.Stars} />
                        <Typography
                        size={12} font={Fonts.SF_Regular1} color={Colors.Grey}>145 Reviews</Typography>
                    </View>
                    <TouchableOpacity style={styles.plan}>
                        <Typography title={"Bronze plan"}
                        size={12} font={Fonts.SF_Regular1} color={Colors.White} styles_font={{alignSelf:"center",marginTop:2}}/>
                        
                    </TouchableOpacity>
                </View>
                <View style={styles.view}>
                    <View style={{ marginLeft: 25 }}>
                        <Typography
                        size={20} font={Fonts.SF_Regular1} color={Colors.Darkgrey} styles_font={{alignSelf:"center"}}>320</Typography>
                        <Typography
                        size={16} font={Fonts.SF_Regular1} color={Colors.Grey}>Sessions</Typography>
                    </View>
                    <View style={{ marginLeft: 25 }}>
                        <Typography
                        size={20} font={Fonts.SF_Regular1} color={Colors.Darkgrey} styles_font={{alignSelf:"center"}}>12</Typography>
                        <Typography
                        size={16} font={Fonts.SF_Regular1} color={Colors.Grey}>Clients</Typography>
                    </View>
                    <TouchableOpacity style={styles.progress}>
                        <Typography
                        size={14} font={Fonts.SF_Regular1} color={Colors.White} styles_font={{alignSelf:"center"}}>My progress</Typography>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: "row", marginTop: 15, marginLeft: 15 }}>
                    <Image style={{ marginRight: 5 }}
                        source={ImageConstant.Trophy}/>
                    <Typography
                    size={12} font={Fonts.SF_Regular1} color={Colors.Grey}>ADVANCED</Typography>
                </View>
                <TouchableOpacity style={{ marginTop: 15 }}>
                    <MainButton title={'MY SCHEDULE'} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.box}>
                    <Typography
                    size={14} font={Fonts.SF_Regular1} color={Colors.Textgrey}>Notifications</Typography>
                    <Image style={{ marginTop: 5, marginLeft: 260 }}
                        source={ImageConstant.RightArrow} />
                </TouchableOpacity>
                <View style={styles.details}>
                    <Typography 
                    size={14} color={Colors.Grey} styles_font={{alignSelf:"center"}} >Phone number</Typography>
                    <Typography
                    size={14} color={Colors.Darkgrey}  textAlign={"right"}
                    styles_font={{alignSelf:"center"}}>+923423444567</Typography>
                </View>
                <View style={styles.details}>
                    <Typography
                    size={14} font={Fonts.SF_Regular1} color={Colors.Grey} styles_font={{alignSelf:"center"}} width={100}>Email</Typography>
                    <Typography
                    size={14} font={Fonts.SF_Regular1} color={Colors.Darkgrey} styles_font={{alignSelf:"center"}} textAlign={"right"}>anna@gmail.com</Typography>
                </View>
                <View style={styles.details}>
                    <Typography
                    size={14} font={Fonts.SF_Regular1} color={Colors.Grey} styles_font={{alignSelf:"center"}}>Date of birth</Typography>
                    <Typography
                    size={14} font={Fonts.SF_Regular1} color={Colors.Darkgrey} styles_font={{alignSelf:"center"}}>10.03.1980</Typography>
                </View>
                <Typography
                size={16} font={Fonts.SF_Regular1} left={30} color={Colors.Darkgrey} styles_font={{marginTop: 15,
                    }}>About me</Typography>
                <View style={styles.line}>
<Typography
size={14} font={Fonts.SF_Regular1} color={Colors.Grey} left={12} styles_font={{
    lineHeight: 20,}} width={310}>Mauris quis orci faucibus, egestas nibh sed vestibulum elit. Nam est dui, accumsan a lorem tincidunt, pellentesque pulvinar lorem. Mauris quis orci faucibus, egestas nibh sed vestibulum elit. Nam est dui, accumsan a lorem  tincidunt, pellentesque pulvinar lorem</Typography>
                </View>
                <Typography
                size={16} font={Fonts.SF_Medium1} color={Colors.Darkgrey} left={30} styles_font={{marginTop: 15,
                    }}>Gallery</Typography>
                <View style={styles.image}>
                    <MultiImage />
                </View>
                <Typography
                size={16} font={Fonts.SF_Medium1} color={Colors.Darkgrey} left={30} styles_font={{marginTop: 15,
                    }}>Client gender preference</Typography>
                <View style={styles.underline}>
                    <View style={styles.gender}>
                        <CustomSwitch />
                    </View>
                </View>
                <View style={styles.account}>
                    <View style={{ width: "75%",marginVertical: 10,paddingLeft:10 }}>
                        <Typography
                        size={16} font={Fonts.SF_Medium1} color={Colors.Darkgrey} styles_font={{
                            marginLeft: 30}}>Account Number</Typography>
                        <Typography
                        size={12} font={Fonts.SF_Regular1} color={Colors.Grey} styles_font={{marginLeft:29}}>**** **** ****</Typography>
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
                    <Typography
                    size={18} font={Fonts.SF_Regular1} color={Colors.Grey} styles_font={{padding: 15,
                        }}>Promo codes</Typography>
                    <Image style={{ marginTop: 18, marginLeft: 170 }}
                        source={ImageConstant.Addcode} />
                </TouchableOpacity>
                <View style={styles.session}>
                    <Typography
                    size={16} font={Fonts.SF_Regular1} color={Colors.Textgrey} styles_font={{marginLeft:15}}>My Session</Typography>
                    <TouchableOpacity>
                        <Image style={{ marginLeft: 5, marginTop: 1 }}
                            source={ImageConstant.Addcode} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>NavigationContainer.navigate('MySessions')}>
                        <Typography
                        size={14} font={Fonts.SF_Regular1} color={Colors.Blue} left={190} styles_font={{
                            marginTop: 2}}>View All</Typography>
                    </TouchableOpacity>
                </View>
                <View>
                  <Session/>
                </View>
                <View style={styles.session}>
                    <Typography
                    size={14} font={Fonts.SF_Regular1} color={Colors.Textgrey}>MY PACKAGES</Typography>
                    <TouchableOpacity>
                        <Typography
                        size={14} font={Fonts.SF_Regular1} color={Colors.Blue} left={200} styles_font={{
                            marginTop: 2}}>View All</Typography>
                    </TouchableOpacity>
                </View>
                <View>
                    <MyPackage/>
                </View>
<View style={{marginVertical:10,marginTop:30}}>
<Review/>
</View>
<TouchableOpacity>
<Typography
size={14} font={Fonts.SF_Regular1} color={Colors.Blue} left={20} styles_font={{marginTop:10,
    }}>Booking cancellation policy</Typography>
</TouchableOpacity>
<TouchableOpacity>
    <Typography
    size={14} font={Fonts.SF_Regular1} color={Colors.Red} left={20} styles_font={{marginTop:20,
        marginBottom:30}}>Log out</Typography>
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
        backgroundColor: Colors.Blue,
        height: 28,
        width: 88,
        borderRadius: 50,
        padding: 3,
        marginTop: 35,
    },
    view: {
        flexDirection: "row",
        backgroundColor: Colors.Backgroundgrey,
        marginTop: 20,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: Colors.Grey
    },
    progress: {
        backgroundColor: Colors.Skyblue,
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
        borderColor: Colors.Darkbordergrey
    },
    details: {
        flexDirection: "row",
        width: "90%",
        flex:1,
        alignSelf: "center",
        height: 40,
        marginTop: 20,
        borderBottomWidth: 1,
        borderColor: Colors.Bordergrey,
        justifyContent:"space-between"
    },
    line: {
        borderBottomWidth: 1,
        alignSelf: "center",
        width: "90%",
        paddingBottom: 25,
        borderColor: Colors.Bordergrey
    },
    image: {
        marginTop: 10,
        marginLeft: 20,
        borderBottomWidth: 1,
        width: "90%",
        paddingBottom: 25,
        borderColor: Colors.Bordergrey
    },
    gender: {
        marginLeft:15
    },
    underline: {
        borderBottomWidth: 1,
        width: "90%",
        paddingBottom: 25,
        alignSelf: "center",
        borderColor: Colors.Bordergrey
    },
    change: {
        height: 16,
        width: 16,
        marginLeft: 25,
        marginTop: 25
    },
    account: {
        flexDirection: "row",
        shadowColor: Colors.Lightestgrey,
        shadowRadius: 1,
        shadowOpacity: 2,
        width: "90%",
        backgroundColor: Colors.White,
        alignSelf: "center",
        marginTop: 20,
        borderWidth: 0.3,
        borderColor: Colors.Lightestgrey,
        borderRadius: 15
    },
    session: {
        marginVertical: 20,
        flexDirection: "row",
        marginLeft: 15
    },
})

export default TrainerProfile;