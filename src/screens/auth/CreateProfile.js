import React, { useEffect } from "react";
import { StatusBar, StyleSheet, TextInput, TouchableOpacity, View ,Button, Alert} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import NextButton from "../../components/NextButton";
import Imagepicker from "../../components/ImagePicker";
import TextComponent from "../../components/TextComponent";
import { Colors } from "../../constants/Colors";
// import {GoogleSignin} from "react-native-login-google"
import { GoogleSignin } from '@react-native-google-signin/google-signin';
// import auth from '@react-native-firebase/auth';
import auth from '@react-native-firebase/app'

const CreateProfile = ({ navigation }) => {
    GoogleSignin.configure({
        webClientId: '962014968820-o2ujldv44r4a22sivip70bjsv6f2i772.apps.googleusercontent.com',
      })
    
      
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
                <TextComponent 
                    size={20} 
                    weight={"300"} 
                    color={Colors.Darkgrey} 
                    styles_font={{ marginLeft: 20, marginTop: 40 }} 
                >Create Profile</TextComponent>
                <Imagepicker />
                <View style={styles.border}>
                    <TextComponent 
                        size={16} 
                        weight={"600"} 
                        color={Colors.Darkgrey} 
                        styles_font={{ alignSelf: "center" ,marginBottom:20}} 
                    >Add photo</TextComponent>
                </View>
                <View style={[styles.border, styles.view]}>
                    <TextComponent 
                        size={15} 
                        weight={"400"} 
                        color={Colors.Grey} 
                        width={210} 
                        styles_font={{ marginTop: 8 }} 
                    >First name</TextComponent>
                    <TextInput 
                        style={styles.input} 
                        placeholder="Write your first name"
                        placeholderTextColor={Colors.Placeholdergrey} 
                        multiline 
                    />
                </View>
                <View style={[styles.border, styles.view]}>
                    <TextComponent 
                        size={15} 
                        weight={"400"} 
                        color={Colors.Grey} 
                        width={210} 
                        styles_font={{ marginTop: 8 }} 
                    >Last name</TextComponent>
                    <TextInput 
                        style={styles.input} 
                        placeholder="Write your last name"
                        placeholderTextColor={Colors.Placeholdergrey} 
                        multiline 
                    />
                </View>
                <View style={[styles.border, styles.view]}>
                    <TextComponent 
                        size={15} 
                        weight={"400"} 
                        color={Colors.Grey} 
                        width={210} 
                        styles_font={{ marginTop: 8 }} 
                    >Mobile phone</TextComponent>
                    <TextInput 
                        style={styles.input} 
                        placeholder="+9 XXXX XXX XX XX"
                        placeholderTextColor={Colors.Placeholdergrey} 
                        keyboardType="numeric" 
                    />
                </View>
                <View style={[styles.border, styles.view]}>
                    <TextComponent 
                        size={15} 
                        weight={"400"} 
                        color={Colors.Grey} 
                        width={210} 
                        styles_font={{ marginTop: 8 }} 
                    >Email</TextComponent>
                    <TextInput 
                        placeholder="Verify Email" 
                        placeholderTextColor={Colors.Green} 
                        style={styles.input} 
                    />
                    <Button
      title="Google Sign-In"
      onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
    />

                </View>
                <View style={[styles.border, styles.view]}>
                    <TextComponent 
                        size={15} 
                        weight={"400"} 
                        color={Colors.Grey} 
                        width={210} 
                        styles_font={{ marginTop: 8 }} 
                    >Gender</TextComponent>
                    <TextInput 
                        placeholder="Female/Male" 
                        placeholderTextColor={Colors.Placeholdergrey} 
                        style={styles.input} 
                    />
                </View>
                <View style={[styles.border, styles.view]}>
                    <TextComponent 
                        size={15} 
                        weight={"400"} 
                        color={Colors.Grey} 
                        width={210} 
                        styles_font={{ marginTop: 8 }} 
                    >Date of birth</TextComponent>
                    <TextInput 
                        style={styles.input} 
                        placeholder="10.03.1980"
                        placeholderTextColor={Colors.Placeholdergrey} 
                        keyboardType="numeric" 
                    />
                </View>
                <View style={ { paddingVertical: 10 ,width: "90%",alignSelf:"center"}}>
                    <TextComponent 
                        size={15} 
                        weight={"400"} 
                        color={Colors.Grey} 
                        styles_font={{ marginBottom: 20 }} 
                    >Bio</TextComponent>
                    <TextInput 
                        style={styles.bio}
                        placeholder="Let user to know more about you"
                        placeholderTextColor={Colors.Placeholdergrey}
                        multiline
                    />
                </View>
                <TouchableOpacity style={{ marginTop: 40 }} onPress={() => { navigation.navigate('Profile2') }}> 
                    <NextButton title={'NEXT'} />
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
        height: 35
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
