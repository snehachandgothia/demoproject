import React from "react";
import { FlatList, Image, StatusBar, StyleSheet, View } from "react-native";
import Header from "../../components/Header";
import TextComponent from "../../components/TextComponent";

const Notification=()=>{
    const Data=[
        {id:1,image:require('../../../asset/images/review.png'),sender:"Stupid Cupid",message:"Hey Sneha this side",timing:"11 minutes ago"},
        {id:1,image:require('../../../asset/images/review.png'),sender:"Stupid Cupid",message:"Hey Sneha this side",timing:"11 minutes ago"},
    ];

    return(
        <View style={{backgroundColor:"#ffffff"}}>
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
                        <TextComponent
                        size={17} weight={"700"} color={"#3C3C3C"}>{item.sender}</TextComponent>
                        <TextComponent
                        size={14} weight={"400"} color={"#3C3C3C"} width={300}>{item.message}</TextComponent>
                        <TextComponent
                        size={14} weight={"400"} color={"#B2B7C7"}>{item.timing}</TextComponent>
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
        borderColor:"#ECEDF2"
    }
})

export default Notification;