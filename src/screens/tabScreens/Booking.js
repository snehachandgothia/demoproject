import React, { useState } from "react";
import { Button, ScrollView, StatusBar, StyleSheet,TouchableOpacity, View } from "react-native";
import Typography from "../../components/Typography";
import { Fonts } from "../../../asset/fonts/Font";
import { Colors } from "../../constants/Colors";
import LinearGradient from "react-native-linear-gradient";
import BookingFlatlist from "../../components/BookingFlatlist";
import BookingPrevious from "../../components/BookingPrevious";

const Booking=()=>{
  const[selectedTab,setSelectedTab]=useState("Upcoming");

return(
    <ScrollView style={{backgroundColor:Colors.White}}>
        <StatusBar translucent backgroundColor={"transparent"} barStyle={"dark-content"}/>
        <Typography size={20} left={10} font={Fonts.SF_Regular1} color={Colors.Grey} styles_font={styles.title}>Your upcoming  bookings</Typography>
        <View style={{flexDirection:"row",justifyContent:"space-between",width:"95%",marginTop:10}}>
        <Typography size={34} font={Fonts.SF_Bold1} left={10} color={Colors.Darkgrey}>Bookings</Typography>
        <TouchableOpacity style={{marginTop:10}}>
        <LinearGradient colors={[Colors.Skyblue,Colors.Blue]}
        start={{ x: 1, y: 1}} end={{ x: 0.5, y: 0}}
            style={styles.button}>
            <Typography
            size={12} font={Fonts.SF_Regular1} color={Colors.White} textAlign={"center"}>Calender View</Typography>
        </LinearGradient>
        </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", alignSelf: "center" ,marginTop:10}}>
                    <TouchableOpacity
                        style={[styles.box, selectedTab === 'Upcoming' && styles.selectedBox]}
                        onPress={() => setSelectedTab('Upcoming')}
                    >
                        <Typography 
                            size={16} 
                            font={Fonts.SF_Regular1} 
                            color={selectedTab === "Upcoming" ? Colors.Blue : Colors.Darkgrey} 
                        >Upcoming</Typography>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.box, selectedTab === 'Previous' && styles.selectedBox]}
                        onPress={() => setSelectedTab('Previous')}
                    >
                        <Typography 
                            size={16} 
                            font={Fonts.SF_Regular1} 
                            color={selectedTab === "Previous" ? Colors.Blue : Colors.Darkgrey} 
                        >Previous</Typography>
                    </TouchableOpacity>
                </View>
                <View>
                {selectedTab === "Upcoming"?
<BookingFlatlist/>:<BookingPrevious/>
                }</View>
    </ScrollView>
)
};

const styles=StyleSheet.create({
    box: {
        width: "50%",
        alignItems: "center",
        paddingVertical: 7,
    },
    selectedBox: {
        borderBottomWidth: 2,
        borderColor: Colors.Blue,
    },
    title:{
        marginTop:50,
    },
    button:{
        height:30,
        width:100,
        borderRadius:25,
        paddingTop:5,
    }
})

export default Booking;