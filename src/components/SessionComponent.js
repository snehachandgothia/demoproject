import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { ImageConstant } from "../constants/ImageConstant";
import TextComponent from "./TextComponent";
import { Colors } from "../constants/Colors";

const SessionComponent=()=>{
    const Data=[
        {id:1,title:"Boxing",text:"Dribbling",time:"Duration:30",location:"Location:Trainer",
            price:"80AED"},
        {id:2,title:"Boxing",text:"Dribbling",time:"Duration:30",location:"Location:Trainer",
            price:"80AED"}
    ];

    const render=({item})=>(
        <View style={styles.view}>
           <View style={{flexDirection:"row"}}>
           <TextComponent
           size={16} weight={"700"} color={Colors.Darkgrey}>{item.title}</TextComponent>
           <TouchableOpacity>
           <Image style={styles.cancel}
           source={ImageConstant.Cancel}/>
           </TouchableOpacity>
           </View>
           <TextComponent
           size={14} weight={"400"} color={Colors.Darkgrey}>{item.text}</TextComponent>
           <TextComponent
           size={14} weight={"400"} color={Colors.Darkgrey}>{item.time}</TextComponent>
           <TextComponent 
           size={14} weight={"400"} color={Colors.Darkgrey}>{item.location}</TextComponent>
           <TextComponent
           size={22} weight={"700"} color={Colors.Darkgrey}>{item.price}</TextComponent>
           <TouchableOpacity style={styles.button}>
            <TextComponent
            size={12} weight={"400"} color={Colors.White} styles_font={{alignSelf:"center",}}>Create Packages</TextComponent>
           </TouchableOpacity>
        </View>
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
        height:165,
        width:165,
        backgroundColor:Colors.Darkbordergrey,
        borderRadius:10,
        marginLeft:20,
        paddingLeft:10,
        paddingTop:8,
    },
    button:{
        backgroundColor:Colors.Blue,
        paddingVertical:5,
        borderRadius:50,
        width:"70%",
        marginTop:5
    },
    cancel:{
        height:18,
        width:18,
        marginLeft:75,
        marginTop:3
    },
})

export default SessionComponent;