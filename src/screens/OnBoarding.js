import React, { useRef, useState } from "react";
import { View, Dimensions, Image, Text, StatusBar, FlatList, StyleSheet, TouchableOpacity, } from "react-native";
import { windowWidth } from "../constants/Dimensions";
import TextComponent from "../components/TextComponent";
import { Colors } from "../constants/Colors";

const { width } = Dimensions.get('window');

const OnBoarding = ({ navigation }) => {
    const flatListRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const Data = [
        {
            id: 1, image: require('../../asset/images/IntroImage1.png'), title: "Get train bookings",
            text: "Mauris quis orci faucibus, egestas nibh sed vestibulum elit. Nam est dui, accumsan a lorem tincidunt, pellentesque pulvinar lorem."
        },
        {
            id: 2, image: require('../../asset/images/IntroImage2.png'), title: "Train in your time",
            text: "Mauris quis orci faucibus, egestas nibh sed vestibulum elit. Nam est dui, accumsan a lorem tincidunt, pellentesque pulvinar lorem."
        },
        {
            id: 3, image: require('../../asset/images/IntroImage3.png'), title: "Get money and feedback",
            text: "Mauris quis orci faucibus, egestas nibh sed vestibulum elit. Nam est dui, accumsan a lorem tincidunt, pellentesque pulvinar lorem."
        },
    ];

    const handleNextPress = () => {
        if (currentIndex < Data.length - 1) {
            const nextIndex = currentIndex + 1;
            setCurrentIndex(nextIndex);
            flatListRef.current.scrollToIndex({ index: nextIndex });
        } else {
            navigation.navigate('SignUp');
        }
    };

    const onViewableItemsChanged = useRef(({ viewableItems }) => {
        if (viewableItems.length > 0) {
            setCurrentIndex(viewableItems[0].index);
        }
    }).current;

    const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

    const renderItem = ({ item }) => (
        <View >
            <Image style={styles.image} source={item.image} />
            <TextComponent
            size={30} weight={"400"} color={Colors.Darkgrey} styles_font={{alignSelf: "center",
                marginTop: 30}}>{item.title}</TextComponent>
            <View style={{ width: windowWidth }}>
                <TextComponent
                size={14} weight={"400"} color={"#B2B7C7"} styles_font={{alignSelf: "center",
                    textAlign: "center",marginTop: 20,}} width={280}>{item.text}</TextComponent>
            </View>
        </View>
    );

    return (
        <View style={{backgroundColor:Colors.White,flex:1}}>
            <StatusBar translucent backgroundColor="transparent" />
            <FlatList
                ref={flatListRef}
                data={Data}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onViewableItemsChanged={onViewableItemsChanged}
                viewabilityConfig={viewConfigRef}
            />
            <View style={{ flexDirection: "row", marginLeft: 25 ,marginTop:55}}>
                <View style={styles.dotsContainer}>
                    {Data.map((_, index) => (
                        <View
                            key={index}
                            style={[
                                styles.dot,
                                currentIndex === index ? styles.activeDot : styles.inactiveDot
                            ]}
                        />
                    ))}
                </View>
                <View style={styles.button}>
                    <TouchableOpacity onPress={currentIndex===Data.length ? navigation.navigate('SignUp') : handleNextPress}>
                        <TextComponent size={16} weight={"400"} color={"#2F63D0"}>
                            {currentIndex === Data.length - 1 ? "Start" : "Skip"}</TextComponent>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        height: "68%",
        width: width,
    },
    dotsContainer: {
        flexDirection: "row",
        marginTop:10,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    activeDot: {
        width:10,
        height:10,
        backgroundColor: "#3C3C3C",
    },
    inactiveDot: {
        marginTop:2,
        backgroundColor: "#B2B7C7",
    },
    button: {
        paddingLeft: 150,
        justifyContent: "center",
        marginLeft:100,
        marginBottom:15
    }
});

export default OnBoarding;
