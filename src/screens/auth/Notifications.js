import React from "react";
import { FlatList, Image, StatusBar, StyleSheet, View } from "react-native";
import Header from "../../components/Header";
import Typography from "../../components/Typography";
import { Colors } from "../../constants/Colors";
import { Fonts } from "../../../asset/fonts/Font";

const Notification=()=>{
    const Data=[
        {id:1,image:require('../../../asset/images/review.png'),sender:"Stupid Cupid",message:"Hey Sneha this side",timing:"11 minutes ago"},
        {id:1,image:require('../../../asset/images/review.png'),sender:"Stupid Cupid",message:"Hey Sneha this side",timing:"11 minutes ago"},
    ];

    return(
        <View style={{backgroundColor:Colors.White}}>
            <StatusBar translucent backgroundColor={"transparent"} barStyle={"dark-content"}/>
            <Header title={"Notifications"}/>
            <FlatList
            data={Data}
            keyExtractor={(item)=>item.toString()}
            renderItem={({item})=>(
                <View style={styles.view}>
                    <Image style={{marginLeft:15}}
                    source={item.image}/>
                    <View style={{marginLeft:10}}>
                        <Typography
                        size={17} font={Fonts.SF_Bold1} color={Colors.Darkgrey}>{item.sender}</Typography>
                        <Typography
                        size={14} font={Fonts.SF_Regular1} color={Colors.Darkgrey} width={300}>{item.message}</Typography>
                        <Typography
                        size={14} font={Fonts.SF_Regular1} color={Colors.Grey}>{item.timing}</Typography>
                    </View>
                </View>
    )}
            />
        </View>
    )
};

const styles=StyleSheet.create({
    view:{
        flexDirection:"row",
        padding:10,
        borderBottomWidth:1,
        borderColor:Colors.Darkbordergrey,
    }
})

export default Notification;