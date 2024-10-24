import React from "react";
import { StatusBar, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import Header from "../../components/Header";
import { Fonts } from "../../../asset/fonts/Font";
import CategoryDropdown from "../../components/CategoryDropdown";
import MainButton from "../../components/MainButton";
import { Colors } from "../../constants/Colors";

const ChooseCategory = () => {
    return (
        <View style={{backgroundColor:Colors.White}}>
            <StatusBar translucent backgroundColor={"transparent"} barStyle={"dark-content"} />
            <Header title={'Choose Category'} />
            <TextInput placeholder="Enter trainer name or sport"
                placeholderTextColor={Colors.Grey}
                style={styles.input} />
                <CategoryDropdown placeholder={'Football'}
                    name={[
                        { label: 'Dribbing', value: '1' },
                        { label: 'Shooting', value: '2' },
                        { label: 'Passing', value: '3' },
                        { label: 'Befeure', value: '4' },
                    ]}
                    style_dd={{ color: Colors.Darkgrey, fontSize: 14, fontWeight: "700", fontFamily: Fonts.SF_Regular1, }} />
                <CategoryDropdown placeholder={'Compact Sports'}
                    name={[
                        { label: 'Dribbing', value: '1' },
                        { label: 'Shooting', value: '2' },
                        { label: 'Passing', value: '3' },
                        { label: 'Befeure', value: '4' },
                    ]} />
                <CategoryDropdown placeholder={'Cycling'}
                    name={[
                        { label: 'Dribbing', value: '1' },
                        { label: 'Shooting', value: '2' },
                        { label: 'Passing', value: '3' },
                        { label: 'Befeure', value: '4' },
                    ]} />
                <CategoryDropdown placeholder={'Exercise Biking'}
                    name={[
                        { label: 'Dribbing', value: '1' },
                        { label: 'Shooting', value: '2' },
                        { label: 'Passing', value: '3' },
                        { label: 'Befeure', value: '4' },
                    ]} />
                <CategoryDropdown placeholder={'MMA/UFC'}
                    name={[
                        { label: 'Dribbing', value: '1' },
                        { label: 'Shooting', value: '2' },
                        { label: 'Passing', value: '3' },
                        { label: 'Befeure', value: '4' },
                    ]} />
                <CategoryDropdown placeholder={'Cricket'}
                    name={[
                        { label: 'Dribbing', value: '1' },
                        { label: 'Shooting', value: '2' },
                        { label: 'Passing', value: '3' },
                        { label: 'Befeure', value: '4' },
                    ]} />
<TouchableOpacity style={{marginTop:150}}>
<MainButton title={'NEXT'}/>
</TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    input: {
        width: "90%",
        alignSelf: "center",
        backgroundColor:Colors.Greywhite,
        borderRadius: 10,
        paddingLeft: 20,
        fontSize: 14,
        fontWeight: "400",
        fontFamily: Fonts.SF_Regular1,
        color: Colors.Darkgrey,
        marginTop:10
    }
})

export default ChooseCategory;