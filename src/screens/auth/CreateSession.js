import React from "react";
import { StatusBar, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import Select from "../../components/Select";
import NextButton from "../../components/NextButton";
import LocationCheckBox from "../../components/LocationcheckBox";
import { ScrollView } from "react-native-gesture-handler";
import CustomSwitch from "../../components/Switch";
import Header from "../../components/Header";
import TextComponent from "../../components/TextComponent";

const CreateSession = ({ navigation }) => {

    return (
            <ScrollView style={{backgroundColor:"#ffffff"}}>
                <StatusBar translucent backgroundColor={"transparent"} barStyle={"dark-content"} />
                <Header onPress={() => { navigation.navigate('Profile2') }} title={'Create Session'} />
                <View style={[styles.select, styles.border]}>
                    <TextComponent 
                        size={18} 
                        weight={"500"} 
                        color={"#3C3C3C"} 
                        width={130}
                        styles_font={{marginVertical: 30}} 
                    >Age</TextComponent>
                    <View style={styles.container}>
                        <Select 
                            placeholder={'0-05'}
                            name={[
                                { label: '0-05', value: '1' },
                                { label: '06-10', value: '2' },
                                { label: '11-15', value: '3' },
                            ]} 
                        />
                    </View>
                </View>
                <TextComponent 
                    size={18} 
                    weight={"600"} 
                    color={"#3C3C3C"} 
                    styles_font={{marginVertical: 10,
                        marginLeft: 20,
                        paddingTop: 10}} 
                >Gender Preferences</TextComponent>
                <View style={[styles.select, styles.border, { paddingBottom: 10 }]}>
                    <CustomSwitch />
                </View>
                <TextComponent 
                    size={18} 
                    weight={"600"} 
                    color={"#3C3C3C"} 
                    styles_font={{marginVertical: 10,
                        marginLeft: 20,
                        paddingTop: 10}} 
                >Choose Location</TextComponent>
                <View style={[styles.select, styles.border]}>
                    <LocationCheckBox onPress={() => navigation.navigate("TrainerLocation")} />
                </View>
                <View style={styles.select}>
                    <TextComponent 
                        size={18} 
                        weight={"500"} 
                        color={"#3C3C3C"} 
                        styles_font={{marginVertical: 30}} 
                    >Session Duration</TextComponent>
                    <View style={styles.container}>
                        <Select 
                            placeholder={'30 min'}
                            name={[
                                { label: '30 min', value: '1' },
                                { label: '60 min', value: '2' },
                                { label: '90 min', value: '3' },
                            ]} 
                        />
                    </View>
                </View>
                <View style={styles.select}>
                    <TextComponent 
                        size={18} 
                        weight={"500"} 
                        color={"#3C3C3C"} 
                        styles_font={{marginVertical: 30}} 
                    >Price for package</TextComponent>
                    <TextInput style={styles.input} placeholder="from 10 AED" />
                </View>
                <TouchableOpacity style={{ marginTop: 60 }}>
                    <NextButton title={'CREATE'} />
                </TouchableOpacity>
            </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 30
    },
    select: {
        flexDirection: "row",
        width: "90%",
        alignSelf: "center"
    },
    border: {
        borderBottomWidth: 1,
        borderColor: "#ECEDF2"
    },
    input: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.1,
        borderRadius: 3,
        paddingHorizontal: 8,
        width: "45%",
        marginLeft: 32,
        marginTop: 20
    }
});

export default CreateSession;
