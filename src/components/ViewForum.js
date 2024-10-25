import React, { useState } from "react";
import { FlatList, Image, StyleSheet, TouchableOpacity, View, TextInput } from "react-native";
import Typography from "./Typography";
import { Colors } from "../constants/Colors";
import { Forum } from "../constants/ConstantData";
import SportDropdown from "./SportDropdown";
import { Fonts } from "../../asset/fonts/Font";
import { ImageConstant } from "../constants/ImageConstant";

const ViewForum = () => {
    const [liked, setLiked] = useState([]);
    const [unliked, setUnliked] = useState([]);
    const [select, setSelect] = useState([]);
    const [count, setCount] = useState({});
    const [commentText, setCommentText] = useState({}); 

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

    const Togglecomment = (item) => {
        if (select.includes(item.id)) {
            setSelect(select.filter(id => id !== item.id));
        } else {
            setSelect([...select, item.id]);
        }
    };

    const handleReset = (item) => {
        if (commentText[item.id]) { 
            setCommentText(prevText => ({ ...prevText, [item.id]: '' }));
            setCount(prevCount => ({
                ...prevCount,
                [item.id]: (prevCount[item.id] || 0) + 1
            }));
            
        }
    };

    return (
        <View style={{ width: "90%", alignSelf: "center" }}>
            <View style={{ flexDirection: "row", padding: 5 }}>
                <Typography size={19} weight={"700"} color={Colors.Black} left={15}>View forums</Typography>
                <View style={{ width: "30%", marginLeft: 20 }}>
                    <SportDropdown placeholder={"Sport"}
                        style_text={{}}
                        name={[
                            { label: 'Dribbling', value: '1' },
                            { label: 'Shooting', value: '2' },
                            { label: 'Passing', value: '3' },
                            { label: 'Before', value: '4' },
                        ]} />
                </View>
                <TouchableOpacity>
                    <Typography size={16} weight={"600"} color={Colors.Black} left={25}>View All</Typography>
                </TouchableOpacity>
            </View>
            <FlatList
                data={Forum}
                renderItem={({ item }) => (
                    <View>
                        <View style={styles.view}>
                            <Image style={styles.image} source={item.image} />
                            <View style={{ padding: 10 }}>
                                <Typography size={14} weight={"700"} color={Colors.Pink}>{item.title}</Typography>
                                <Typography size={10} weight={"400"} color={Colors.Forumtextgrey} styles_font={{ lineHeight: 12 }} width={200}>{item.text}</Typography>
                                <View style={{ flexDirection: "row", marginLeft: 10 }}>
                                    <TouchableOpacity onPress={() => ToggleLike(item)}>
                                        <Image
                                            style={[styles.like, { tintColor: liked.includes(item.id) ? Colors.Skyblue : Colors.Greyicon }]}
                                            source={item.like}
                                        />
                                        <Typography size={8} weight={"400"} color={Colors.Black}>{item.number}</Typography>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => ToggleUnlike(item)} style={{ marginLeft: 60 }}>
                                        <Image
                                            style={[styles.like, { tintColor: unliked.includes(item.id) ? Colors.Skyblue : Colors.Greyicon }]}
                                            source={item.unlike}
                                        />
                                        <Typography size={8} weight={"400"} color={Colors.Black}>{item.number}</Typography>
                                    </TouchableOpacity>
                                    <View style={{ marginLeft: 60 }}>
                                        <TouchableOpacity onPress={() => Togglecomment(item)}>
                                            <Image style={styles.like} source={item.comment} />
                                        </TouchableOpacity>
                                        <Typography size={8} weight={"400"} color={Colors.Black}>{count[item.id] || 0}</Typography>
                                    </View>
                                </View>
                            </View>
                        </View>
                        {select.includes(item.id) && (
                            <View style={styles.text}>
                                <TextInput
                                    style={{ fontSize: 16, fontFamily: Fonts.SF_Regular1, width: "90%" }}
                                    placeholder="Add Comment"
                                    value={commentText[item.id] || ''}
                                    onChangeText={(text) => setCommentText(prevText => ({ ...prevText, [item.id]: text }))}
                                />
                                <TouchableOpacity onPress={() => { Togglecomment(item); handleReset(item); }} style={{ alignSelf: "center" }}>
                                    <Image style={{ height: 20, width: 20 }} source={ImageConstant.Send} />
                                </TouchableOpacity>
                            </View>
                        )}
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
    },
    text: {
        borderWidth: 1,
        width: "100%",
        alignSelf: "center",
        flexDirection: "row",
        paddingHorizontal: 10,
        borderRadius: 10
    }
});

export default ViewForum;
