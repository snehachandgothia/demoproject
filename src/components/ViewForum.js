import React, { useState } from "react";
import { FlatList, Image, StyleSheet, TouchableOpacity, View } from "react-native";
import Typography from "./Typography";
import { Colors } from "../constants/Colors";
import { Forum } from "../constants/ConstantData";
import CategoryDropdown from "./CategoryDropdown";
import SportDropdown from "./SportDropdown";

const ViewForum = () => {
    const [liked, setLiked] = useState([]);
    const [unliked, setUnliked] = useState([]);

    const ToggleLike = (item) => {
        if (liked.includes(item.id)) {
            setLiked(liked.filter(id => id !== item.id));
        } else {
            setLiked([...liked, item.id]);
            setUnliked(unliked.filter(id => id !== item.id));
        }
    };

    const ToggleUnlike = (item) => {
        if (unliked.includes(item.id)) {
            setUnliked(unliked.filter(id => id !== item.id));
        } else {
            setUnliked([...unliked, item.id]);
            setLiked(liked.filter(id => id !== item.id));
        }
    };

    return (
        <View style={{ width: "90%", alignSelf: "center" }}>
            <View style={{ flexDirection: "row", padding: 5 }}>
                <Typography size={19} weight={"700"} color={Colors.Black} left={15}>View forums</Typography>
                {/* <TouchableOpacity style={{ flexDirection: "row", marginLeft: 35 }}> */}
                    {/* <Typography size={16} weight={"600"} color={Colors.Black} left={25}>Sport</Typography> */}
                    <View style={{width:"30%",marginLeft:20}}>
                    <SportDropdown placeholder={"Sport"}
                    style_text={{}}
                    name={[
                        { label: 'Dribbing', value: '1' },
                        { label: 'Shooting', value: '2' },
                        { label: 'Passing', value: '3' },
                        { label: 'Befeure', value: '4' },
                    ]}/>
                    </View>
                    {/* <Image style={styles.dropdown} source={require('../../asset/images/dropdown.png')} /> */}
                {/* </TouchableOpacity> */}
                <TouchableOpacity>
                    <Typography size={16} weight={"600"} color={Colors.Black} left={25}>View All</Typography>
                </TouchableOpacity>
            </View>
            <FlatList
                data={Forum}
                renderItem={({ item }) => (
                    <View style={styles.view}>
                        <Image style={styles.image} source={item.image} />
                        <View style={{ padding: 10 }}>
                            <Typography size={14} weight={"700"} color={Colors.Pink}>{item.title}</Typography>
                            <Typography size={10} weight={"400"} color={Colors.Forumtextgrey} styles_font={{ lineHeight: 12 }} width={200}>{item.text}</Typography>
                            <View style={{ flexDirection: "row", marginLeft: 10 }}>
                                <TouchableOpacity onPress={() => ToggleLike(item)}>
                                    <View>
                                        <Image
                                            style={[styles.like, { tintColor: liked.includes(item.id) ? Colors.Skyblue : Colors.Greyicon }]}
                                            source={item.like}
                                        />
                                        <Typography size={8} weight={"400"} color={Colors.Black}>{item.number}</Typography>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => ToggleUnlike(item)}>
                                    <View style={{ marginLeft: 60 }}>
                                        <Image
                                            style={[styles.like, { tintColor: unliked.includes(item.id) ? Colors.Skyblue : Colors.Greyicon }]}
                                            source={item.unlike}/>
                                        <Typography size={8} weight={"400"} color={Colors.Black}>{item.number}</Typography>
                                    </View>
                                </TouchableOpacity>
                                <View style={{ marginLeft: 60 }}>
                                    <Image style={styles.like} source={item.comment} />
                                    <Typography size={8} weight={"400"} color={Colors.Black}>{item.number}</Typography>
                                </View>
                            </View>
                        </View>
                    </View>
                )}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        height: 117,
        width: 127,
    },
    like: {
        height: 17,
        width: 17,
    },
    view: {
        flexDirection: "row",
        marginVertical: 7,
        borderRadius: 5,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
        elevation: 3,
        shadowColor: Colors.Black,
        backgroundColor: Colors.White
    },
    dropdown: {
        height: 9,
        width: 12,
        marginLeft: 20,
        marginTop: 8
    }
});

export default ViewForum;
