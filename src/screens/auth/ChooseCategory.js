import React from "react";
import { StatusBar, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import Header from "../../components/Header";
import { Fonts } from "../../../asset/fonts/Font";
import CategoryDD from "../../components/CategoryDD";
import NextButton from "../../components/NextButton";

const ChooseCategory = () => {
    return (
        <View style={{backgroundColor:"#ffffff"}}>
            <StatusBar translucent backgroundColor={"transparent"} barStyle={"dark-content"} />
            <Header title={'Choose Category'} />
            <TextInput placeholder="Enter trainer name or sport"
                placeholderTextColor={"#B2B7C7"}
                style={styles.input} />
                <CategoryDD placeholder={'Football'}
                    name={[
                        { label: 'Dribbing', value: '1' },
                        { label: 'Shooting', value: '2' },
                        { label: 'Passing', value: '3' },
                        { label: 'Befeure', value: '4' },
                    ]}
                    style_dd={{ color: "#3C3C3C", fontSize: 14, fontWeight: "700", fontFamily: Fonts.SF_Regular1, }} />
                <CategoryDD placeholder={'Compact Sports'}
                    name={[
                        { label: 'Dribbing', value: '1' },
                        { label: 'Shooting', value: '2' },
                        { label: 'Passing', value: '3' },
                        { label: 'Befeure', value: '4' },
                    ]} />
                <CategoryDD placeholder={'Cycling'}
                    name={[
                        { label: 'Dribbing', value: '1' },
                        { label: 'Shooting', value: '2' },
                        { label: 'Passing', value: '3' },
                        { label: 'Befeure', value: '4' },
                    ]} />
                <CategoryDD placeholder={'Exercise Biking'}
                    name={[
                        { label: 'Dribbing', value: '1' },
                        { label: 'Shooting', value: '2' },
                        { label: 'Passing', value: '3' },
                        { label: 'Befeure', value: '4' },
                    ]} />
                <CategoryDD placeholder={'MMA/UFC'}
                    name={[
                        { label: 'Dribbing', value: '1' },
                        { label: 'Shooting', value: '2' },
                        { label: 'Passing', value: '3' },
                        { label: 'Befeure', value: '4' },
                    ]} />
                <CategoryDD placeholder={'Cricket'}
                    name={[
                        { label: 'Dribbing', value: '1' },
                        { label: 'Shooting', value: '2' },
                        { label: 'Passing', value: '3' },
                        { label: 'Befeure', value: '4' },
                    ]} />
<TouchableOpacity style={{marginTop:110}}>
<NextButton title={'NEXT'}/>
</TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    input: {
        width: "90%",
        alignSelf: "center",
        backgroundColor: "#F0F0F0",
        borderRadius: 10,
        paddingLeft: 20,
        fontSize: 14,
        fontWeight: "400",
        fontFamily: Fonts.SF_Regular1,
        color: "#3C3C3C",
        marginTop:10
    }
})

export default ChooseCategory;