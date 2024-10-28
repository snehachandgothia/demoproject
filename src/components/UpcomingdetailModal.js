import React, { useState } from "react";
import { View ,TouchableOpacity,StyleSheet, Modal} from "react-native";
import Typography from "./Typography";
import { Fonts } from "../../asset/fonts/Font";
import { Colors } from "../constants/Colors";
import { TextInput } from "react-native-gesture-handler";

const UpcomingdetailModal=()=>{
    const[show,setShow]=useState(false);

    return(
        <View>
           <TouchableOpacity onPress={()=>setShow(true)}
           style={[styles.button,{width:"90%",alignSelf:"center",marginTop:10}]}>
<Typography size={12} font={Fonts.SF_Bold1} color={Colors.Blue} textAlign={"center"}>WATCH PEOPLE</Typography>
</TouchableOpacity>
<Modal
animationType="slide"
visible={show}
onRequestClose={()=>{
    setShow(!show);
}}>
<View style={{height:"50%",backgroundColor:"pink"}}>
<View style={styles.border}>
        <Typography >Sneha</Typography>
        <Typography size={16} font={Fonts.SF_Medium1} color={Colors.Darkgrey}>Select date and time</Typography>
        <Typography size={14} font={Fonts.SF_Regular1} color={Colors.Grey} >Sunday 12:00 -13:00</Typography>
    </View>
    <View>
        <View style={{flexDirection:"row"}}>
            <Typography>Today</Typography>
            <Typography>Dec,19</Typography>
        </View>
        <View>
            <Typography>Time</Typography>
            <TextInput/>
        </View>
    </View>
</View>
</Modal>
        </View>
    )
};

const styles= StyleSheet.create({
    button:{
        paddingHorizontal:40,
        paddingVertical:18,
        borderRadius:50,
        borderWidth:1,
        borderColor:Colors.Backgroundskyblue
    },
    border: {
        borderBottomWidth: 1.5,
        borderColor: Colors.Bordergrey,
        padding:20
        // alignSelf: "center",
    },
})

export default UpcomingdetailModal;