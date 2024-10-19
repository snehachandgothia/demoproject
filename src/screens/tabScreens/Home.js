import React from "react";
import { Image, StatusBar, StyleSheet, TouchableOpacity, View } from "react-native";
import { ImageConstant } from "../../constants/ImageConstant";
import AgendaCalender from "../../components/AgendaCalender";
import ViewForum from "../../components/ViewForum";
import { ScrollView } from "react-native-gesture-handler";
import TextComponent from "../../components/TextComponent";

const Home = () => {
    return (
            <ScrollView style={{backgroundColor:"#ffffff"}}>
            <StatusBar translucent backgroundColor={'transparent'} barStyle={"dark-content"} />
            <TextComponent
            size={20} weight={"400"} color={"#B2B7C7"}
            styles_font={{marginTop:40,marginLeft:17}}>Dashboard</TextComponent>
            <TextComponent
            size={34} weight={"700"} color={"#3C3C3C"}
            styles_font={{marginLeft:18}}>Hello,Joe!</TextComponent>
            <AgendaCalender/>
            <View style={{flexDirection:"row"}}>
                <View style={styles.view}>
                    <View style={{ flexDirection: "row" }}>
                        <TextComponent
                        size={18} weight={"700"} color={"#3C3C3C"}>Rating</TextComponent>
                        <Image style={styles.trophy}
                            source={ImageConstant.Bluetrophy} />
                    </View>
                    <TextComponent
                    size={12} weight={"400"} color={"#B2B7C7"}>12 place from 2 k</TextComponent>
                    <Image style={{ marginTop: 20 }}
                        source={ImageConstant.Stars} />
                    <TextComponent
                    size={12} weight={"400"} color={"#3C3C3C"}>145 Reviews</TextComponent>
                </View>
                <View style={styles.view}>
                     <View style={{flexDirection:"row"}}>
                        <TextComponent
                        size={18} weight={"700"} color={"#3C3C3C"}>Finance</TextComponent> 
                        <Image style={{marginLeft:45}}
                        source={ImageConstant.Finance}/>
                     </View>
                     <View style={{flexDirection:"row",marginTop:25}}>
                        <Image style={{marginTop:5,marginRight:8}} 
                        source={ImageConstant.Bluedot}/>
                        <TextComponent
                        size={12} weight={"400"} color={"#B2B7C7"} width={70}>Boxing</TextComponent>
                        <TextComponent
                        size={12} weight={"700"} color={"#3C3C3C"}>1200$</TextComponent>
                     </View>
                     <View style={{flexDirection:"row",marginTop:10}}>
                        <Image style={{marginTop:5,marginRight:8}}
                        source={ImageConstant.Pinkdot}/>
                        <TextComponent
                        size={12} weight={"400"} color={"#B2B7C7"} width={70}>Kikboxing</TextComponent>
                        <TextComponent
                        size={12} weight={"700"} color={"#3C3C3C"}>1600$</TextComponent>
                     </View>
                </View>
            </View>
            <TouchableOpacity style={styles.notification}>
                <Image style={{height:17,width:15,marginTop:4}}
                source={ImageConstant.Bell}/>
                <TextComponent
                size={18} weight={"700"} color={"#ffffff"} width={225} styles_font={{marginLeft:15}}>Notifications</TextComponent>
                <Image style={styles.arrow}
                source={ImageConstant.Whitearrow}/>
            </TouchableOpacity>
            <View style={{marginTop:5}}>
            <ViewForum/>
            </View>
            </ScrollView>
    )
};

const styles = StyleSheet.create({
    view: {
        height: 133,
        width: 163,
        backgroundColor: "#ffffff",
        paddingTop: 10,
        paddingLeft: 15,
        borderRadius: 10,
        marginLeft:22
    },
    trophy: {
        marginLeft: 60,
        marginTop: 4
    },
    notification:{
        backgroundColor:"#FF7770",
        padding:15,
        width:"90%",
        alignSelf:"center",
        borderRadius:10,
        marginTop:15,
        flexDirection:"row"
    },
    arrow:{
        height:15,
        width:15,
        marginLeft:50,
        marginTop:3
    }
})

export default Home;