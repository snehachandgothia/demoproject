import React from "react";
import { View, StatusBar, StyleSheet, TouchableOpacity,Image } from "react-native";
import { ImageConstant } from "../../constants/ImageConstant";
import Header from "../../components/Header";
import MapView, { Marker } from "react-native-maps";
import { TextInput } from "react-native-gesture-handler";
import { Fonts } from "../../../asset/fonts/Font";
import NextButton from "../../components/NextButton";
import TextComponent from "../../components/TextComponent";
import { Colors } from "../../constants/Colors";

const TrainerLocation = ({navigation }) => {
    return (
        <View style={{backgroundColor:Colors.White}}>
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
                showsMyLocationButton={true}
                showsCompass={true}
                scrollEnabled={true}
                zoomEnabled={true}
                pitchEnabled={true}
                rotateEnabled={true}
            >
                <Marker coordinate={{ latitude: 25.1972, longitude: 55.2744 }}></Marker>
            </MapView>
            <TextInput placeholder="Enter adress here, name of building "
                placeholderTextColor={Colors.Grey}
                style={styles.input} />
            <TouchableOpacity style={styles.choose}
                onPress={()=>navigation.navigate('TrainerAddress')}
                >
                <TextComponent
                size={20} font={Fonts.SF_Regular1} color={Colors.Darkgrey}>Manually Enter the Address</TextComponent>
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
        backgroundColor: Colors.Greywhite,
        borderRadius: 10,
        paddingLeft: 20,
        fontSize: 14,
        fontWeight: "400",
        fontFamily: Fonts.SF_Regular1,
        color: Colors.Darkgrey,
        marginTop: 10
    },
    choose: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderColor: Colors.Darkbordergrey,
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