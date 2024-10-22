import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, TextInput, Image } from "react-native";
import { CountryPicker } from "react-native-country-codes-picker";
import { Fonts } from "../../asset/fonts/Font";
import { ImageConstant } from "../constants/ImageConstant";
import TextComponent from "./TextComponent";
import { Colors } from "../constants/Colors";

const InputComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [countryName, setCountryName] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');

  const handleCountrySelect = (country) => {
    setCountryName(country.name.en);
    setCountryCode(country.dial_code);
    setSelectedCountry(country.flag)
    setIsVisible(false);
  };

  return (
    <View>
      <TextComponent
        size={14} weight={"400"} color={Colors.Darkgrey} styles_font={{
          marginTop: 20,
        }}>COUNTRY</TextComponent>
      <TouchableOpacity style={styles.input} onPress={() => setIsVisible(true)}>
        <TextComponent
          size={16} styles_font={{ marginRight: 10, }}>{selectedCountry}</TextComponent>
        <TextComponent size={16} width={270} color={Colors.Darkgrey}>
          {countryName ? countryName : "Select Country"}</TextComponent>
        <Image style={styles.down} source={ImageConstant.Down} />
      </TouchableOpacity>
      <CountryPicker
        show={isVisible}
        pickerButtonOnPress={handleCountrySelect}
        modalProps={{
          animationType: "slide",
        }}
        containerStyle={{
          padding: 20,
        }}
      />

      <TextComponent size={14} weight={"400"} color={Colors.Darkgrey} styles_font={{
        marginLeft: 20,
        marginTop: 20,
      }}>PHONE</TextComponent>
      <View style={{ flexDirection: "row", }}>
        <TextComponent size={16} weight={"700"} color={Colors.Black} styles_font={styles.code} width={70}>{countryCode}</TextComponent>
        <TextInput style={styles.number} keyboardType="numeric" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 48,
    width: "93%",
    backgroundColor: Colors.Greywhite,
    // alignSelf: "center",
    paddingLeft: 20,
    paddingTop: 12,
    fontSize: 14,
    fontWeight: "400",
    color: Colors.Darkgrey,
    flexDirection: "row",
  },
  code: {
    marginLeft: 20,
    backgroundColor: Colors.Greywhite,
    height: 48,
    padding: 10
  },
  number: {
    marginLeft: 18,
    fontSize: 16,
    fontWeight: "500",
    fontFamily: Fonts.SF_Regular1,
    backgroundColor: Colors.Greywhite,
    height: 48,
    width: 265,
    padding: 10
  },
  down: {
    marginTop: 10,
  }
});

export default InputComponent;
