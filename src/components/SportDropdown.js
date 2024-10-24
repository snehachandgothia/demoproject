import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { Fonts } from '../../asset/fonts/Font';
import { Colors } from '../constants/Colors';

const SportDropdown=({placeholder,name})=>{
  const [selectedValue, setSelectedValue] = useState(null);

  return (
    <View style={styles.container}>
      <Dropdown
        style={styles.dropdown}
        selectedTextStyle={styles.selectedTextStyle}
        data={name}
        labelField="label"
        valueField="value"
        placeholder={placeholder}
        placeholderStyle={styles.placeholder}
        value={selectedValue}
        onChange={item => {
          setSelectedValue(item.value);
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginLeft:15,
    alignSelf:"center"
  },
  dropdown: {
    borderColor: Colors.Bordergrey,
    borderBottomWidth: 0.1,
    borderRadius: 3,
    paddingHorizontal: 8,
    width:110
  },
  selectedTextStyle: {
    fontSize: 14,
    fontFamily:Fonts.SF_Bold1
  },
  placeholder:{
    fontSize:16,
    fontFamily:Fonts.SF_Bold1,
    color:Colors.Black
  },
});
export default SportDropdown;