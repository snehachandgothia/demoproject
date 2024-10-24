import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { Fonts } from '../../asset/fonts/Font';
import { Colors } from '../constants/Colors';

const CategoryDropdown=({placeholder,name})=>{
  const [selectedValue, setSelectedValue] = useState(null);
  // const data = [
  //   { label: '30 min', value: '1' },
  //   { label: '60 min', value: '2' },
  //   { label: '90 min', value: '3' },
  // ];
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
    justifyContent: 'center',
    alignSelf:"center",
    width:"90%",
    // marginTop:20
  },
  dropdown: {
    height: 50,
    borderColor: Colors.Bordergrey,
    borderBottomWidth: 0.1,
    borderRadius: 3,
    paddingHorizontal: 8,
  },
  selectedTextStyle: {
    fontSize: 16,
    color:Colors.Darkblue
  },
  placeholder:{
    fontSize:14,
    fontWeight:"700",
    fontFamily:Fonts.SF_Regular1,
    color:Colors.Darkgrey
  },
});
export default CategoryDropdown;