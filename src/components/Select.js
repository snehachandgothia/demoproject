import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { Colors } from '../constants/Colors';

const Select=({name,placeholder,style_dd})=>{
  const [selectedValue, setSelectedValue] = useState(null);
  // const data = [
  //   { label: '0-05', value: '1' },
  //   { label: '06-10', value: '2' },
  //   { label: '11-15', value: '3' },
  // ];
  return (
      <Dropdown
        style={[styles.dropdown, {style_dd}]}
        selectedTextStyle={styles.selectedTextStyle}
        data={name}
        labelField="label"
        valueField="value"
        placeholder={placeholder}
        value={selectedValue}
        onChange={item => {
          setSelectedValue(item.value);
          
        }}
      />
  );
};
const styles = StyleSheet.create({
  dropdown: {
    height: 50,
    borderColor: Colors.Bordergrey,
    borderWidth: 0.1,
    borderRadius: 3,
    paddingHorizontal: 15,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
});
export default Select;