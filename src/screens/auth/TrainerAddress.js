import React, { useState } from "react";
import { Image, StyleSheet, View, StatusBar, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import { ImageConstant } from "../../constants/ImageConstant";
import { TextInput } from "react-native-gesture-handler";
import MainButton from "../../components/MainButton";
import Typography from "../../components/Typography";
import { Fonts } from "../../../asset/fonts/Font";
import { Colors } from "../../constants/Colors";

const TrainerAddress = ({ navigation }) => {
  const [flatVillaNo, setFlatVillaNo] = useState("");
  const [buildingVilla, setBuildingVilla] = useState("");
  const [street, setStreet] = useState("");
  const [area, setArea] = useState("");

  return (
    <View style={{ backgroundColor: Colors.White }}>
        <KeyboardAvoidingView >
      <StatusBar translucent backgroundColor={"transparent"} barStyle={"dark-content"} />
      <TouchableOpacity style={styles.image} onPress={() => navigation.navigate('TrainerLocation')}>
        <Image source={ImageConstant.Cancel} />
      </TouchableOpacity>

      <View style={styles.view}>
        <Typography
          size={18}
          font={Fonts.SF_Regular1}
          color={Colors.Darkgrey}
          left={30}
        >New Address</Typography>
      </View>
      <TouchableOpacity style={[styles.view, { flexDirection: "row", marginTop: 15 }]}>
        <Image style={styles.location} source={ImageConstant.Location} />
        <View style={{ marginLeft: 10 }}>
          <Typography
            size={16}
            font={Fonts.SF_Regular1}
            color={Colors.Darkgrey}
          >Pin Location</Typography>
          <Typography
            size={14}
            font={Fonts.SF_Regular1}
            color={Colors.Grey}
          >Gardens Blvd, Opp Discovery Garden</Typography>
        </View>
      </TouchableOpacity>
      
      <View style={{ flexDirection: "row" }}>
        <View style={styles.box}>
          <Typography
            size={14}
            font={Fonts.SF_Regular1}
            color={Colors.Grey}
          >Flat/Villa No.</Typography>
          <View style={styles.inputbox}>
            <TextInput
              style={styles.input}
              value={flatVillaNo}
              onChangeText={setFlatVillaNo} 
            />
            <TouchableOpacity onPress={() => setFlatVillaNo("")}>
              <Image style={styles.cut} source={ImageConstant.Cut} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.box}>
          <Typography
            size={14}
            font={Fonts.SF_Regular1}
            color={Colors.Grey}
          >Building/Villa</Typography>
          <View style={styles.inputbox}>
            <TextInput
              style={styles.input}
              value={buildingVilla}
              onChangeText={setBuildingVilla} 
            />
            <TouchableOpacity onPress={() => setBuildingVilla("")}>
              <Image style={styles.cut} source={ImageConstant.Cut} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={{ flexDirection: "row" }}>
        <View style={styles.box}>
          <Typography
            size={14}
            font={Fonts.SF_Regular1}
            color={Colors.Grey}
          >Street</Typography>
          <View style={styles.inputbox}>
            <TextInput
              style={styles.input}
              value={street}
              onChangeText={setStreet} 
            />
            <TouchableOpacity onPress={() => setStreet("")}>
              <Image style={styles.cut} source={ImageConstant.Cut} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.box}>
          <Typography
            size={14}
            font={Fonts.SF_Regular1}
            color={Colors.Grey}
          >Area</Typography>
          <View style={styles.inputbox}>
            <TextInput
              style={styles.input}
              value={area}
              onChangeText={setArea} 
            />
            <TouchableOpacity onPress={() => setArea("")}>
              <Image style={styles.cut} source={ImageConstant.Cut} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <TouchableOpacity style={{ marginTop: 355 }}>
        <MainButton title={'CONTINUE'} />
      </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    marginTop: 60,
    marginLeft: 20
  },
  view: {
    marginTop: 25,
    paddingBottom: 20,
    borderBottomColor: Colors.Darkbordergrey,
    borderBottomWidth: 1
  },
  location: {
    height: 28,
    width: 20,
    marginLeft: 30,
    marginTop: 7
  },
  box: {
    width: 140,
    marginLeft: 40,
    marginTop: 20
  },
  inputbox: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: Colors.Darkbordergrey,
    height: 37
  },
  input: {
    fontSize: 14,
    fontWeight: "400",
    fontFamily: Fonts.SF_Regular1,
    color: Colors.Darkgrey,
    width: 120
  },
  cut: {
    marginTop: 10,
    height: 16,
    width: 16
  }
});

export default TrainerAddress;
