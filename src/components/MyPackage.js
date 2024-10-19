import React from "react";
import { Image, ImageBackground, StyleSheet, TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { ImageConstant } from "../constants/ImageConstant";
import TextComponent from "./TextComponent";


const MyPackage=()=>{
    const Data=[
        {id:1,title:"Boxing",text:"Dribbling",time:"Duration:30",location:"Location:Trainer",
            price:"80AED",average:"average offered65$"},
        {id:2,title:"Boxing",text:"Dribbling",time:"Duration:30",location:"Location:Trainer",
            price:"80AED",average:"average offered65$"}
    ];

    const render=({item})=>(
           <ImageBackground style={styles.view}
           source={ImageConstant.Gallerypic}>
           <View style={{flexDirection:"row"}}>
           <TextComponent
           size={16} weight={"600"} color={"#ffffff"}>{item.title}</TextComponent>
           <TouchableOpacity>
           <Image style={styles.cancel}
           source={ImageConstant.Cut}/>
           </TouchableOpacity>
           </View>
           <TextComponent 
           size={14} weight={"400"} color={"#FFFFFFCC"}>{item.text}</TextComponent>
           <TextComponent
           size={14} weight={"400"} color={"#FFFFFFCC"}>{item.time}</TextComponent>
           <TextComponent
           size={14} weight={"400"} color={"#FFFFFFCC"}>{item.location}</TextComponent>
           <TextComponent
           size={22} weight={"700"} color={"#ffffff"} styles_font={{marginTop:10}}>{item.price}</TextComponent>
           <TextComponent 
           size={14} weight={"400"} color={"#FFFFFFCC"}>{item.average}</TextComponent>
           </ImageBackground>
    )
    return(
        <View>
            <FlatList
            data={Data}
            renderItem={render}
            keyExtractor={item=>item.id.toString()}
            horizontal
            />
        </View>
    )
};

const styles=StyleSheet.create({
    view:{
        height:155,
        width:165,
        borderRadius:50,
        marginLeft:20,
        paddingLeft:10,
        paddingTop:8,
    },
    cancel:{
        height:18,
        width:18,
        marginLeft:75,
        marginTop:3,
    }
})

export default MyPackage;