//     const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
//                 ref={flatListRef}

import React, { useState, useRef } from "react";
import { View, Dimensions, Image, Text, StatusBar, FlatList, StyleSheet, TouchableOpacity, } from "react-native";
import { windowWidth } from "../constants/Dimensions";
import TextComponent from "../components/TextComponent";
import { Colors } from "../constants/Colors";
import { Data } from "../constants/ConstantData";

const { width } = Dimensions.get('window');
const OnBoarding = ({ navigation }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { width } = Dimensions.get('window');

    const handleNextPress = () => {
        if (currentIndex < Data.length - 1) {
            const nextIndex = currentIndex + 1;
            setCurrentIndex(nextIndex);

        } else {
            navigation.navigate('SignUp');
        }
    };
    const renderItem = ({ item }) => (
        <View >
            <Image style={styles.image} source={item.image} />
            <TextComponent
                size={30} weight={"400"} color={Colors.Darkgrey} styles_font={{
                    alignSelf: "center",
                    marginTop: 30
                }}>{item.title}</TextComponent>
            <View style={{ width: windowWidth }}>
                <TextComponent
                    size={14} weight={"400"} color={Colors.Grey} styles_font={{
                        alignSelf: "center",
                        textAlign: "center", marginTop: 20,
                    }} width={280}>{item.text}</TextComponent>
            </View>
        </View>
    );

    const OnChange = useRef(({ viewableItems }) => {
        if (viewableItems.length > 0) {
            setCurrentIndex(viewableItems[0].index);
        }
    }).current;

    return (
        <View style={{ backgroundColor: Colors.White, flex: 1 }}>
            <StatusBar translucent backgroundColor="transparent" />
            <FlatList
                data={Data}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onViewableItemsChanged={OnChange}
            />
            <View style={{ flexDirection: "row", marginLeft: 25, marginTop: 55 }}>
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
                <View style={styles.button} >
                    <TouchableOpacity onPress={currentIndex === Data.length ? navigation.navigate('SignUp') : handleNextPress}>
                        <TextComponent size={16} weight={"400"} color={Colors.Blue}>
                            {currentIndex === Data.length - 1 ? "Start" : "Skip"}</TextComponent>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: "68%",
        width: width,
    },
    dotsContainer: {
        flexDirection: "row",
        marginTop: 10,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    activeDot: {
        width: 10,
        height: 10,
        backgroundColor: Colors.Darkgrey,
    },
    inactiveDot: {
        marginTop: 2,
        backgroundColor: Colors.Grey,
    },
    button: {
        paddingLeft: 150,
        justifyContent: "center",
        marginLeft: 100,
        marginBottom: 15
    }
});

export default OnBoarding;