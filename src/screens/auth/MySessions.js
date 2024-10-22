import React, { useState } from "react";
import { StatusBar, StyleSheet, TouchableOpacity, View, FlatList, Image } from "react-native";
import Header from "../../components/Header";
import { ScrollView } from "react-native-gesture-handler";
import TextComponent from "../../components/TextComponent";
import { Colors } from "../../constants/Colors";

const MySessions = () => {
    const [selectedTab, setSelectedTab] = useState('All');

    const Data = [
        { id: 1, title: "Basketball", image: require('../../../asset/images/gallerypic.png'), text: "Dribbling | Duration 30min", place: "Trainer Place", price: "1200 AED", edit: require('../../../asset/images/edit.png'), delete: require('../../../asset/images/delete.png') },
        { id: 2, title: "Basketball", image: require('../../../asset/images/gallerypic.png'), text: "Dribbling | Duration 30min", place: "Trainer Place", price: "1200 AED", edit: require('../../../asset/images/edit.png'), delete: require('../../../asset/images/delete.png') },
        { id: 3, title: "Basketball", image: require('../../../asset/images/gallerypic.png'), text: "Dribbling | Duration 30min", place: "Trainer Place", price: "1200 AED", edit: require('../../../asset/images/edit.png'), delete: require('../../../asset/images/delete.png') },
        { id: 4, title: "Basketball", image: require('../../../asset/images/gallerypic.png'), text: "Dribbling | Duration 30min", place: "Trainer Place", price: "1200 AED", edit: require('../../../asset/images/edit.png'), delete: require('../../../asset/images/delete.png') },
        { id: 5, title: "Basketball", image: require('../../../asset/images/gallerypic.png'), text: "Dribbling | Duration 30min", place: "Trainer Place", price: "1200 AED", edit: require('../../../asset/images/edit.png'), delete: require('../../../asset/images/delete.png') }
    ];

    const Purchased = [
        { id: 1, title: "Football", image: require('../../../asset/images/gallerypic.png'), text: "Dribbling | Duration 30min", place: "Trainer Place", price: "1200 AED", edit: require('../../../asset/images/edit.png'), delete: require('../../../asset/images/delete.png') },
        { id: 2, title: "Football", image: require('../../../asset/images/gallerypic.png'), text: "Dribbling | Duration 30min", place: "Trainer Place", price: "1200 AED", edit: require('../../../asset/images/edit.png'), delete: require('../../../asset/images/delete.png') },
        { id: 3, title: "Football", image: require('../../../asset/images/gallerypic.png'), text: "Dribbling | Duration 30min", place: "Trainer Place", price: "1200 AED", edit: require('../../../asset/images/edit.png'), delete: require('../../../asset/images/delete.png') },
        { id: 4, title: "Football", image: require('../../../asset/images/gallerypic.png'), text: "Dribbling | Duration 30min", place: "Trainer Place", price: "1200 AED", edit: require('../../../asset/images/edit.png'), delete: require('../../../asset/images/delete.png') },
        { id: 5, title: "Football", image: require('../../../asset/images/gallerypic.png'), text: "Dribbling | Duration 30min", place: "Trainer Place", price: "1200 AED", edit: require('../../../asset/images/edit.png'), delete: require('../../../asset/images/delete.png') }
    ];

    return (
            <ScrollView style={{backgroundColor:Colors.White}}>
                <StatusBar translucent backgroundColor={"transparent"} barStyle={"dark-content"} />
                <Header title={"My Sessions"} />
                <View style={{ flexDirection: "row", width: "90%", alignSelf: "center" }}>
                    <TouchableOpacity
                        style={[styles.box, selectedTab === 'All' && styles.selectedBox]}
                        onPress={() => setSelectedTab('All')}
                    >
                        <TextComponent 
                            size={16} 
                            weight="400" 
                            color={selectedTab === "All" ? Colors.Blue : Colors.Darkgrey} 
                        >All</TextComponent>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.box, selectedTab === 'Purchased' && styles.selectedBox]}
                        onPress={() => setSelectedTab('Purchased')}
                    >
                        <TextComponent 
                            size={16} 
                            weight="400" 
                            color={selectedTab === "Purchased" ? Colors.Blue : Colors.Darkgrey} 
                        >Purchased</TextComponent>
                    </TouchableOpacity>
                </View>
                <View>
                    {selectedTab === 'All' ? (
                        <FlatList
                            data={Data}
                            keyExtractor={item => item.id.toString()}
                            renderItem={({ item }) => (
                                <View style={styles.session}>
                                    <View style={{ flexDirection: "row" }}>
                                        <Image style={styles.image} source={item.image} />
                                        <View style={{marginTop:8}}>
                                            <TextComponent size={16} weight="700" color={Colors.Black} >{item.title}</TextComponent>
                                            <TextComponent size={13} weight="400" color={Colors.Darkgrey} >{item.text}</TextComponent>
                                            <TextComponent size={13} weight="400" color={Colors.Darkgrey} >{item.place} </TextComponent>
                                        </View>
                                        <TouchableOpacity>
                                            <Image style={styles.edit} source={item.edit} />
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <Image style={styles.delete} source={item.delete} />
                                        </TouchableOpacity>
                                    </View>
                                    <TextComponent size={18} weight="700" color={Colors.Black} styles_font={{ marginLeft: 88 }} >{item.price}</TextComponent>
                                </View>
                            )}
                        />
                    ) : (
                        <FlatList
                            data={Purchased}
                            keyExtractor={item => item.id.toString()}
                            renderItem={({ item }) => (
                                <View style={styles.session}>
                                    <View style={{ flexDirection: "row" }}>
                                        <Image style={styles.image} source={item.image} />
                                        <View style={{marginTop:8}}>
                                            <TextComponent size={16} weight="700" color={Colors.Black} >{item.title}</TextComponent>
                                            <TextComponent size={13} weight="400" color={Colors.Darkgrey} >{item.text}</TextComponent>
                                            <TextComponent size={13} weight="400" color={Colors.Darkgrey} >{item.place}</TextComponent>
                                        </View>
                                        <TouchableOpacity>
                                            <Image style={styles.edit} source={item.edit} />
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <Image style={styles.delete} source={item.delete} />
                                        </TouchableOpacity>
                                    </View>
                                    <TextComponent size={18} weight="700" color={Colors.Black} styles_font={{ marginLeft: 88 }} >{item.price}</TextComponent>
                                </View>
                            )}
                        />
                    )}
                </View>
            </ScrollView>
    );
};

const styles = StyleSheet.create({
    box: {
        width: "50%",
        alignItems: "center",
        paddingVertical: 7,
    },
    selectedBox: {
        borderBottomWidth: 2,
        borderColor: Colors.Blue,
    },
    session: {
        width: "90%",
        padding: 10,
        shadowColor: Colors.Black,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
        elevation: 3,
        backgroundColor: Colors.White,
        marginVertical: 10,
        alignSelf: "center"
    },
    image: {
        width: 68,
        height: 68,
        margin: 10
    },
    edit: {
        height: 13,
        width: 13,
        marginLeft: 60
    },
    delete: {
        marginLeft: 10
    }
});

export default MySessions;
