import React, { useEffect } from "react";
import { StatusBar, StyleSheet, TextInput, TouchableOpacity, View ,Button, Alert} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import MainButton from "../../components/MainButton";
import Imagepicker from "../../components/ImagePicker";
import Typography from "../../components/Typography";
import { Colors } from "../../constants/Colors";
import { Fonts } from "../../../asset/fonts/Font";
// import { GoogleSignin } from '@react-native-google-signin/google-signin';
// import auth from '@react-native-firebase/app'

const CreateProfile = ({ navigation }) => {
    // GoogleSignin.configure({
    //     webClientId: '962014968820-o2ujldv44r4a22sivip70bjsv6f2i772.apps.googleusercontent.com',
    //   })
    
      const onGoogleButtonPress = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            console.log(userInfo);
            // Navigate or handle user info as needed
            } catch (error) {
            console.error(error);
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            Alert.alert("Sign-in cancelled");
            } else if (error.code === statusCodes.IN_PROGRESS) {
            Alert.alert("Sign-in is in progress");
            } else {
            Alert.alert("Login Error", error.message);
            }
            }
      };
      
    return (
        <ScrollView>
            <View>
                <StatusBar translucent backgroundColor={'transparent'} barStyle={"dark-content"} />
                <Typography 
                    size={20} 
                    font={Fonts.SF_Regular1}
                    color={Colors.Darkgrey} 
                    left={20}
                    styles_font={{ marginTop: 40 }} 
                >Create Profile</Typography>
                <Imagepicker />
                <View style={styles.border}>
                    <Typography 
                        size={16} 
                        font={Fonts.SF_Medium1}
                        color={Colors.Darkgrey} 
                        styles_font={{ alignSelf: "center" ,marginBottom:20}} 
                    >Add photo</Typography>
                </View>
                <View style={[styles.border, styles.view]}>
                    <Typography 
                        size={15} 
                        font={Fonts.SF_Regular1}
                        color={Colors.Grey} 
                        // width={210} 
                        styles_font={{ marginTop: 8 }} 
                    >First name</Typography>
                    <TextInput 
                        style={styles.input} 
                        placeholder="Write your first name"
                        placeholderTextColor={Colors.Placeholdergrey} 
                        multiline 
                    />
                </View>
                <View style={[styles.border, styles.view]}>
                    <Typography 
                        size={15} 
                        font={Fonts.SF_Regular1} 
                        color={Colors.Grey} 
                        // width={210} 
                        styles_font={{ marginTop: 8 }} 
                    >Last name</Typography>
                    <TextInput 
                        style={styles.input} 
                        placeholder="Write your last name"
                        placeholderTextColor={Colors.Placeholdergrey} 
                        multiline 
                    />
                </View>
                <View style={[styles.border, styles.view]}>
                    <Typography 
                        size={15} 
                        font={Fonts.SF_Regular1}
                        color={Colors.Grey} 
                        styles_font={{ marginTop: 8 }} 
                    >Mobile phone</Typography>
                    <TextInput 
                        style={styles.input} 
                        placeholder="+9 XXXX XXX XX XX"
                        placeholderTextColor={Colors.Placeholdergrey} 
                        keyboardType="numeric" 
                    />
                </View>
                <View style={[styles.border, styles.view]}>
                    <Typography 
                        size={15} 
                        font={Fonts.SF_Regular1} 
                        color={Colors.Grey} 
                        styles_font={{ marginTop: 8 }} 
                    >Email</Typography>
                    <TextInput 
                        placeholder="Verify Email" 
                        placeholderTextColor={Colors.Green} 
                        style={styles.input} 
                    />
                    {/* <Button
      title="Google Sign-In"
      onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
    /> */}

                </View>
                <View style={[styles.border, styles.view]}>
                    <Typography 
                        size={15} 
                        font={Fonts.SF_Regular1} 
                        color={Colors.Grey} 
                        styles_font={{ marginTop: 8 }} 
                    >Gender</Typography>
                    <TextInput 
                        placeholder="Female/Male" 
                        placeholderTextColor={Colors.Placeholdergrey} 
                        style={styles.input} 
                    />
                </View>
                <View style={[styles.border, styles.view]}>
                    <Typography 
                        size={15} 
                        font={Fonts.SF_Regular1}
                        color={Colors.Grey} 
                        styles_font={{ marginTop: 8 }} 
                    >Date of birth</Typography>
                    <TextInput 
                        style={styles.input} 
                        placeholder="10.03.1980"
                        placeholderTextColor={Colors.Placeholdergrey} 
                        keyboardType="numeric" 
                    />
                </View>
                <View style={ { paddingVertical: 10 ,width: "90%",alignSelf:"center"}}>
                    <Typography 
                        size={15} 
                        font={Fonts.SF_Regular1}
                        color={Colors.Grey} 
                        styles_font={{ marginBottom: 20 }} 
                    >Bio</Typography>
                    <TextInput 
                        style={styles.bio}
                        placeholder="Let user to know more about you"
                        placeholderTextColor={Colors.Placeholdergrey}
                        multiline
                    />
                </View>
                <TouchableOpacity style={{ marginTop: 40 }} onPress={() => { navigation.navigate('UpdateProfile') }}> 
                    <MainButton title={'NEXT'} />
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    border: {
        borderBottomWidth: 1.5,
        borderColor: Colors.Bordergrey,
        width: "90%",
        alignSelf: "center",
    },
    input: {
        fontSize: 14,
        color: Colors.Darkgrey,
        height: 35,
        textAlign:"right"
    },
    bio: {
        borderWidth: 1.5,
        borderColor: Colors.Bordergrey,
        borderRadius: 10,
        height: 117,
        paddingLeft: 10,
        textAlignVertical: "top",
    },
    view:{
        flexDirection: "row", 
        paddingVertical: 10 ,
        justifyContent:"space-between",
        alignSelf:"center"
    }
});

export default CreateProfile;
