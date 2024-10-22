import React, { useState } from "react";
import { FlatList, Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { ImageConstant } from "../constants/ImageConstant";
import TextComponent from "./TextComponent";
import { Colors } from "../constants/Colors";

const ViewForum = () => {
    const[like,setLike]=useState(false);
    const[unlike,setUnlike]=useState(false);

    const Data = [
        { id: 1, image: require('../../asset/images/forum1.png'), title: "Title", text: "Lorem ipsum dolor sit amet consectetur. Urna scelerisque bibendum blandit vel tempus sodales gravida ut gravida Mi viverra tincidunt cras donec diam cras", like: require('../../asset/images/thumbup.png'), unlike: require('../../asset/images/thumbdown.png'), comment: require('../../asset/images/comment.png'), number: "100" },
        { id: 2, image: require('../../asset/images/forum2.png'), title: "Title", text: "Lorem ipsum dolor sit amet consectetur. Urna scelerisque bibendum blandit vel tempussodales gravida ut gravida. Mi viverra tinciduntcras donec diam cras.", like: require('../../asset/images/thumbup.png'), unlike: require('../../asset/images/thumbdown.png'), comment: require('../../asset/images/comment.png'), number: "100" },
        { id: 3, image: require('../../asset/images/forum3.png'), title: "Title", text: "Lorem ipsum dolor sit amet consectetur. Urna scelerisque bibendum blandit vel tempussodales gravida ut gravida. Mi viverra tinciduntcras donec diam cras.", like: require('../../asset/images/thumbup.png'), unlike: require('../../asset/images/thumbdown.png'), comment: require('../../asset/images/comment.png'), number: "100" },
    ];

    return (

        <View style={{width:"90%",alignSelf:"center"}}>
            <View style={{flexDirection:"row",padding:5}}>
                <TextComponent
                size={19} weight={"700"} color={Colors.Black} styles_font={{marginLeft:15}}>View forums</TextComponent>
                <TouchableOpacity style={{flexDirection:"row",marginLeft:35}}>
                    <TextComponent
                    size={16} weight={"600"} color={Colors.Black} styles_font={{marginLeft:25}}>Sport</TextComponent>
                    <Image style={styles.dropdown} source={ImageConstant.Filled}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <TextComponent
                    size={16} weight={"600"} color={Colors.Black} styles_font={{marginLeft:25}}>View All</TextComponent>
                </TouchableOpacity>
            </View>
            <FlatList
                data={Data}
                renderItem={({ item }) => (
                    <View style={styles.view}>
                        <Image style={styles.image}
                        source={item.image} />
                        <View style={{padding:10}}>
                            <TextComponent
                            size={14} weight={"700"} color={Colors.Pink}>{item.title}</TextComponent>
                            <TextComponent
                            size={10} weight={"400"} color={Colors.Forumtextgrey} styles_font={{lineHeight:12}} width={200}>{item.text}</TextComponent>
                            <View style={{flexDirection:"row",marginLeft:10}}>
                                <View>
                                   <Image style={styles.like}
                                   source={item.like}/>
                                   <TextComponent
                                   size={8} weight={"400"} color={Colors.Black}>{item.number}</TextComponent>
                                </View>
                                <View style={{marginLeft:60}}>
                                    <Image style={styles.like}
                                    source={item.unlike}/>
                                   <TextComponent 
                                   size={8} weight={"400"} color={Colors.Black}>{item.number}</TextComponent>                               
                                    </View>
                                <View style={{marginLeft:60}}>
                                    <Image style={styles.like}
                                    source={item.comment}/>
                                   <TextComponent
                                   size={8} weight={"400"} color={Colors.Black}>{item.number}</TextComponent>              
                                                     </View>
                            </View>
                        </View>
                    </View>
                )}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    )
};

const styles =StyleSheet.create({
    image:{
        height:117,
        width:127,
    },
    like:{
        height:17,
        width:17,
    },
    view:{
        flexDirection:"row",
        marginVertical:7,
        borderRadius:5,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
        elevation: 3,
        shadowColor:Colors.Black,
   backgroundColor:Colors.White        
    },
    dropdown:{
        height:9,
        width:12,
        marginLeft:20,
        marginTop:8
    }
})

export default ViewForum;