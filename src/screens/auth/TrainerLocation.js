import React from "react";
import { View, StatusBar, StyleSheet, TouchableOpacity,Image } from "react-native";
import { ImageConstant } from "../../constants/ImageConstant";
import Header from "../../components/Header";
import MapView, { Marker } from "react-native-maps";
import { TextInput } from "react-native-gesture-handler";
import { Fonts } from "../../../asset/fonts/Font";
import NextButton from "../../components/NextButton";
import TextComponent from "../../components/TextComponent";

const TrainerLocation = ({navigation }) => {
    return (
        <View style={{backgroundColor:"#ffffff"}}>
            <StatusBar translucent backgroundColor={"transparent"} barStyle={"dark-content"} />
            <Header title={'Select Location for Sport Category'}
            onPress={()=>navigation.navigate("Create Session")} />
            <MapView style={{ height: 350, width: 390 }}
                initialRegion={{
                    latitude: 25.1954,
                    longitude: 55.2803,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,

                }}
                //   showsUserLocation={true}
                showsMyLocationButton={true}
                //   followsUserLocation={true}
                showsCompass={true}
                scrollEnabled={true}
                zoomEnabled={true}
                pitchEnabled={true}
                rotateEnabled={true}
            >
                <Marker coordinate={{ latitude: 25.1972, longitude: 55.2744 }}></Marker>
            </MapView>
            <TextInput placeholder="Enter adress here, name of building "
                placeholderTextColor={"#B2B7C7"}
                style={styles.input} />
            <TouchableOpacity style={styles.choose}
                onPress={()=>navigation.navigate('Location2')}
                >
                <TextComponent
                size={20} weight={"400"} color={"#3C3C3C"}>Manually Enter the Address</TextComponent>
                <Image style={styles.image} source={ImageConstant.RightArrow} />
            </TouchableOpacity>
            <TouchableOpacity style={{ marginTop: 150 }}>
                <NextButton title={'CONTINUE'} />
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    input: {
        width: "90%",
        alignSelf: "center",
        backgroundColor: "#F0F0F0",
        borderRadius: 20,
        paddingLeft: 20,
        fontSize: 14,
        fontWeight: "400",
        fontFamily: Fonts.SF_Regular1,
        color: "#3C3C3C",
        marginTop: 10
    },
    choose: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderColor: "#ECEDF2",
        paddingBottom: 20,
        paddingTop: 25,
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    image: {
        height: 10,
        width: 5,
    },
})

export default TrainerLocation;