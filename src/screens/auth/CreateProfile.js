import React from "react";
import { StatusBar, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import NextButton from "../../components/NextButton";
import Imagepicker from "../../components/ImagePicker";
import TextComponent from "../../components/TextComponent";

const CreateProfile = ({ navigation }) => {
    return (
        <ScrollView style={{backgroundColor:"#ffffff"}}>
            <View>
                <StatusBar translucent backgroundColor={'transparent'} barStyle={"dark-content"} />
                <TextComponent 
                    size={20} 
                    weight={"300"} 
                    color={"#3C3C3C"} 
                    styles_font={{ marginLeft: 20, marginTop: 40 }} 
                >Create Profile</TextComponent>
                <Imagepicker />
                <View style={styles.border}>
                    <TextComponent 
                        size={16} 
                        weight={"600"} 
                        color={"#3C3C3C"} 
                        styles_font={{ alignSelf: "center" }} 
                    >Add photo</TextComponent>
                </View>
                <View style={[styles.border, { flexDirection: "row", marginTop: 10 }]}>
                    <TextComponent 
                        size={15} 
                        weight={"400"} 
                        color={"#B2B7C7"} 
                        width={210} 
                        styles_font={{ marginTop: 8 }} 
                    >First name</TextComponent>
                    <TextInput 
                        style={styles.input} 
                        placeholder="Write your first name"
                        placeholderTextColor={"#8F92A9"} 
                        multiline 
                    />
                </View>
                <View style={[styles.border, { flexDirection: "row", marginTop: 10 }]}>
                    <TextComponent 
                        size={15} 
                        weight={"400"} 
                        color={"#B2B7C7"} 
                        width={210} 
                        styles_font={{ marginTop: 8 }} 
                    >Last name</TextComponent>
                    <TextInput 
                        style={styles.input} 
                        placeholder="Write your last name"
                        placeholderTextColor={"#8F92A9"} 
                        multiline 
                    />
                </View>
                <View style={[styles.border, { flexDirection: "row", marginTop: 10 }]}>
                    <TextComponent 
                        size={15} 
                        weight={"400"} 
                        color={"#B2B7C7"} 
                        width={210} 
                        styles_font={{ marginTop: 8 }} 
                    >Mobile phone</TextComponent>
                    <TextInput 
                        style={styles.input} 
                        placeholder="+9 XXXX XXX XX XX"
                        placeholderTextColor={"#8F92A9"} 
                        keyboardType="numeric" 
                    />
                </View>
                <View style={[styles.border, { flexDirection: "row", marginTop: 10 }]}>
                    <TextComponent 
                        size={15} 
                        weight={"400"} 
                        color={"#B2B7C7"} 
                        width={210} 
                        styles_font={{ marginTop: 8 }} 
                    >Email</TextComponent>
                    <TextInput 
                        placeholder="Verify Email" 
                        placeholderTextColor={'#28CE2E'} 
                        style={styles.input} 
                    />
                </View>
                <View style={[styles.border, { flexDirection: "row", marginTop: 10 }]}>
                    <TextComponent 
                        size={15} 
                        weight={"400"} 
                        color={"#B2B7C7"} 
                        width={210} 
                        styles_font={{ marginTop: 8 }} 
                    >Gender</TextComponent>
                    <TextInput 
                        placeholder="Female/Male" 
                        placeholderTextColor={"#8F92A9"} 
                        style={styles.input} 
                    />
                </View>
                <View style={[styles.border, { flexDirection: "row", marginTop: 10 }]}>
                    <TextComponent 
                        size={15} 
                        weight={"400"} 
                        color={"#B2B7C7"} 
                        width={210} 
                        styles_font={{ marginTop: 8 }} 
                    >Date of birth</TextComponent>
                    <TextInput 
                        style={styles.input} 
                        placeholder="10.03.1980"
                        placeholderTextColor={"#8F92A9"} 
                        keyboardType="numeric" 
                    />
                </View>
                <View style={[styles.border, { marginTop: 10 }]}>
                    <TextComponent 
                        size={15} 
                        weight={"400"} 
                        color={"#B2B7C7"} 
                        styles_font={{ marginBottom: 20 }} 
                    >Bio</TextComponent>
                    <TextInput 
                        style={styles.bio}
                        placeholder="Let user to know more about you"
                        placeholderTextColor="#8F92A9"
                        multiline
                    />
                </View>
                <TouchableOpacity style={{ marginTop: 90 }} onPress={() => { navigation.navigate('Profile2') }}> 
                    <NextButton title={'NEXT'} />
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    border: {
        borderBottomWidth: 1.5,
        borderColor: "#F5F5FA",
        width: "90%",
        alignSelf: "center",
    },
    input: {
        alignSelf: "center",
        fontSize: 14,
        color: "#3C3C3C",
        width: "40%",
        height: 35
    },
    bio: {
        borderWidth: 1.5,
        borderColor: "#F5F5FA",
        borderRadius: 10,
        height: 117,
        paddingLeft: 10,
        textAlignVertical: "top",
    }
});

export default CreateProfile;
