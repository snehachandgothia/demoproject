import React from "react";
import { StatusBar, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import Select from "../../components/Select";
import NextButton from "../../components/NextButton";
import LocationCheckBox from "../../components/LocationcheckBox";
import { ScrollView } from "react-native-gesture-handler";
import CustomSwitch from "../../components/Switch";
import Header from "../../components/Header";
import TextComponent from "../../components/TextComponent";
import { Colors } from "../../constants/Colors";

const CreateSession = ({ navigation }) => {

    return (
            <ScrollView style={{backgroundColor:Colors.White}}>
                <StatusBar translucent backgroundColor={"transparent"} barStyle={"dark-content"} />
                <Header onPress={() => { navigation.navigate('UpdateProfile') }} title={'Create Session'} />
                <View style={[styles.select, styles.border,{paddingVertical:20}]}>
                    <TextComponent 
                        size={18} 
                        weight={"500"} 
                        color={Colors.Darkgrey} 
                        width={150}
                        alignSelf={"center"}
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
                    color={Colors.Darkgrey} 
                    left={20}
                    styles_font={{marginVertical: 10,
                        paddingTop: 10}} 
                >Gender Preferences</TextComponent>
                <View style={[styles.select, styles.border, { paddingBottom: 10 }]}>
                    <CustomSwitch />
                </View>
                <TextComponent 
                    size={18} 
                    weight={"600"} 
                    color={Colors.Darkgrey} 
                    left={20}
                    styles_font={{marginVertical: 10,
                        paddingTop: 10}} 
                >Choose Location</TextComponent>
                <View style={[styles.select, styles.border]}>
                    <LocationCheckBox onPressTrainer={() => navigation.navigate("TrainerLocation")}
                    onPressTrainee={() => navigation.navigate("TrainerLocation")} />
                </View>
                <View style={[styles.select,{marginVertical:20}]}>
                    <TextComponent 
                        size={18} 
                        width={150}
                        weight={"500"} 
                        color={Colors.Darkgrey} 
                        styles_font={{marginVertical: 10}} 
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
                        width={150}
                        color={Colors.Darkgrey} 
                        styles_font={{marginVertical: 15}} 
                    >Price for package</TextComponent>
                    <TextInput style={[styles.container,{paddingLeft:20}]} placeholder="from 10 AED" />
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
        marginLeft: 30,
        borderWidth:1,
        borderColor:Colors.Bordergrey,
        borderRadius:10,
    },
    select: {
        flexDirection: "row",
        width: "90%",
        alignSelf: "center"
    },
    border: {
        borderBottomWidth: 1,
        borderColor: Colors.Darkbordergrey
    },
    input: {
        height: 50,
        borderColor: Colors.Bordergrey,
        borderWidth: 0.1,
        borderRadius: 3,
        paddingHorizontal: 8,
        width: "45%",
        marginLeft: 32,
        marginTop: 20
    }
});

export default CreateSession;
