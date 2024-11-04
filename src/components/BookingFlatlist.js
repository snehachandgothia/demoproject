import React from "react";
import { FlatList, Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { ImageConstant } from "../constants/ImageConstant";
import Typography from "./Typography";
import { Fonts } from "../../asset/fonts/Font";
import { Colors } from "../constants/Colors";

const BookingFlatlist = ({onpress}) => {
    const Bookinglist = [
        { id: 1, image: require('../../asset/images/review.png'), name: "Anna Maria", gender: "Female", rating: (require('../../asset/images/yellowstar.png')), number: "4.6", logo: require('../../asset/images/location.png'), address: "Address Location", sport: "Boxing", date: "Tue 12 11", time: "12:00-13:00", plan: "Future" },
        { id: 1, image: require('../../asset/images/review.png'), name: "Anna Maria", gender: "Female", rating: (require('../../asset/images/yellowstar.png')), number: "4.6", logo: require('../../asset/images/location.png'), address: "Address Location", sport: "Boxing", date: "Tue 12 11", time: "12:00-13:00", plan: "Pending" },
        { id: 1, image: require('../../asset/images/review.png'), name: "Anna Maria", gender: "Female", rating: (require('../../asset/images/yellowstar.png')), number: "4.6", logo: require('../../asset/images/location.png'), address: "Address Location", sport: "Boxing", date: "Tue 12 11", time: "12:00-13:00", plan: "Future" },
    ]

    return (
        <View style={styles.view}>
            <FlatList
                            data={Bookinglist}
                            keyExtractor={item => item.id.toString()}
                            renderItem={({ item }) => (
                                <TouchableOpacity style={{marginTop:15}} onPress={onpress}>
                                                <View style={{ flexDirection: "row" }}>
                <Image style={{marginTop:10,marginLeft:10}}
                source={item.image}/>
                <View>
                    <Typography size={18} font={Fonts.SF_Bold1} color={Colors.Darkgrey} left={10} width={177}
                    styles_font={{marginTop:10}} >{item.name}</Typography>
                    <View style={{ flexDirection: "row" }}>
                        <Typography size={14} color={Colors.Grey} font={Fonts.SF_Regular1}
                        left={10}>{item.gender}</Typography>
                        <Typography size={12} font={Fonts.SF_Regular1} color={Colors.Darkgrey}
                        left={8}>{item.number}</Typography>
                        <Image style={{height:13,width:13,marginTop:3,marginLeft:5}}
                        source={item.rating} />
                    </View>
                </View>
                <View style={[styles.plan,{backgroundColor:item.plan === "Future"?Colors.Backgroundblue:Colors.Backgroundorange}]}>
                    <Typography size={14} color={item.plan==="Future"?Colors.Blue:Colors.Orange} textAlign={"center"}
                    styles_font={{}}>{item.plan}</Typography>
                </View>
            </View>
            <View style={{ flexDirection: "row" }}>
                <Image style={{height:14,width:11,marginLeft:10,marginTop:10}}
                source={item.logo} />
                <Typography size={14} font={Fonts.SF_Regular1} color={Colors.Darkgrey}
                left={10} styles_font={{marginTop:7}}>{item.address}</Typography>
            </View>
            <View style={{ flexDirection: "row",marginLeft:10 }}>
                <Typography size={14} font={Fonts.SF_Regular1} color={Colors.Darkgrey}>Sport: </Typography>
                <Typography size={14} font={Fonts.SF_Regular1} color={Colors.Grey}>{item.sport}</Typography>
            </View>
            <View style={{ flexDirection: "row",marginLeft:10,marginBottom:10 }}>
                <Typography size={14} font={Fonts.SF_Regular1} color={Colors.Darkgrey}>Date: </Typography>
                <Typography size={14} font={Fonts.SF_Regular1} color={Colors.Grey} width={100}>{item.date}</Typography>
                <Typography size={14} font={Fonts.SF_Regular1} color={Colors.Darkgrey}>Time: </Typography>
                <Typography size={14} font={Fonts.SF_Regular1} color={Colors.Grey}>{item.time}</Typography>
            </View>
            <View style={{flexDirection:"row",borderTopWidth:1,borderColor:Colors.Backgroundblue}}>
                <TouchableOpacity style={styles.box }>
                    <Typography size={12} font={Fonts.SF_Bold1} color={Colors.Blue}>CANCEL</Typography>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.box,{backgroundColor:Colors.Blue,borderBottomRightRadius:10}]}>
                    <Typography size={12} font={Fonts.SF_Bold1} color={Colors.White}>MESSAGE</Typography>
                </TouchableOpacity>
            </View>
                                    </TouchableOpacity>
                            )}
                        />
        </View>
    )
};

const styles = StyleSheet.create({
    view: {
        width: "90%",
        alignSelf:"center",
        borderRadius:10,
    },
    plan:{
        backgroundColor:"#E6EDFE",
        height:31,
        width:111,
        borderTopRightRadius:10,
        paddingTop:3
    },
    box: {
        width: "50%",
        alignItems: "center",
        paddingVertical: 15,
    },
})

export default BookingFlatlist;