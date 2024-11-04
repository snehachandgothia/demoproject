import React, { useState, useEffect, useRef } from "react";
import { Image, TouchableOpacity, View, FlatList, StyleSheet } from "react-native";
import Header from "../../../components/Header";
import Typography from "../../../components/Typography";
import { Fonts } from "../../../../asset/fonts/Font";
import { Colors } from "../../../constants/Colors";
import { ImageConstant } from "../../../constants/ImageConstant";
import { Week_of_month, TrainingList } from "../../../constants/ConstantData";

const TrainingCalender = () => {
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth();
    const currentWeekDay = currentDate.getDay();
    const year = currentDate.getFullYear();

    const maxDays = new Date(year, currentMonth + 1, 0).getDate();
    const Dateofmonth = Array.from({ length: maxDays }, (_, i) => i + 1);

    const [currentDayOfMonth, setCurrentDayOfMonth] = useState(currentDay);
    const [currentWeekDayName, setCurrentWeekDayName] = useState(Week_of_month[currentWeekDay].fullday);

    const flatListRef = useRef(null);
    const currentDayIndex = Dateofmonth.indexOf(currentDay);

    useEffect(() => {
        if (flatListRef.current && currentDayIndex !== -1) {
            flatListRef.current.scrollToIndex({
                animated: true,
                index: currentDayIndex,
                viewPosition: 0.5
            });
        }
    }, [currentDayIndex]);

    const getDayOfWeek = (dayOfMonth) => {
        const tempDate = new Date(year, currentMonth, dayOfMonth);
        return Week_of_month[tempDate.getDay()].firstletter;
    };

    const getDayWeek = (dayOfMonth) => {
        const tempDate = new Date(year, currentMonth, dayOfMonth);
        return Week_of_month[tempDate.getDay()].fullday;
    };

    const handleSelect = (dayOfMonth) => {
        setCurrentDayOfMonth(dayOfMonth);
        setCurrentWeekDayName(getDayWeek(dayOfMonth));
    };

    return (
        <View style={{width:"90%",alignSelf:"center"}}>
            <Header title={"Trainings"} />
            <View style={{ flexDirection: "row", }}>
                <TouchableOpacity>
                    <Image source={ImageConstant.Back} />
                </TouchableOpacity>
                <Typography size={18} font={Fonts.SF_Bold1} color={Colors.Darkgrey}>November</Typography>
                <TouchableOpacity>
                    <Image source={ImageConstant.Next} />
                </TouchableOpacity>
            </View>
            <FlatList
                ref={flatListRef}
                data={Dateofmonth}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handleSelect(item)} style={styles.dateContainer}>
                        {item === currentDayOfMonth ? (
                            <View style={styles.selectedDateContainer}>
                                <Typography style={{ alignSelf: "center" }} size={14} color={Colors.Grey} font={Fonts.SF_Regular1}>
                                    {getDayOfWeek(item)}
                                </Typography>
                                <Typography size={18} color={Colors.Darkgrey} style={[styles.select, { alignSelf: "center", backgroundColor: "pink" }]} font={Fonts.SF_Regular1}>
                                    {item}
                                </Typography>
                                <View style={[styles.dot, { backgroundColor: "aqua", borderRadius: 50 }]}></View>
                            </View>
                        ) : (
                            <View>
                                <Typography style={{ alignSelf: "center" }} size={14} color={Colors.Grey} font={Fonts.SF_Regular1}>
                                    {getDayOfWeek(item)}
                                </Typography>
                                <Typography size={18} color={Colors.Darkgrey} style={[styles.select, { alignSelf: "center" }]} font={Fonts.SF_Regular1}>
                                    {item}
                                </Typography>
                                <View style={styles.dot}></View>
                            </View>
                        )}
                    </TouchableOpacity>
                )}
                getItemLayout={(data, index) => (
                    { length: 50, offset: 50 * index, index }
                )}
                onScrollToIndexFailed={(info) => {
                    flatListRef.current.scrollToIndex({ index: info.index, animated: true });
                }}
            />
            <FlatList
                data={TrainingList}
                keyExtractor={(item) => item.toString()}
                renderItem={({ item }) => (
                    <View style={{flexDirection:"row",height:80}}>
                        <View style={{width:72}}>
                            <Typography size={16} font={Fonts.SF_Regular1} color={Colors.Darkgrey}>{item.start}</Typography>
                            <Typography size={16} font={Fonts.SF_Regular1} color={Colors.Grey}>{item.end}</Typography>
                        </View>
                        <View style={[{backgroundColor:item.plan==="RESCHEDULE"? Colors.Pink:item.plan?Colors.Red:Colors.Blue}]}>
                            <View style={{flexDirection:"row"}}>
                                <Image style={{height:35,width:35}}
                                source={item.user} />
                                <View>
                                    <Typography size={14} font={Fonts.SF_Regular1} color={Colors.Darkgrey}>{item.name}</Typography>
                                    <Typography size={14} font={Fonts.SF_Regular1} color={Colors.Darkgrey}>{item.course}</Typography>
                                </View>
                            </View>
                            <View style={{flexDirection:"row"}}>
                                <Typography size={14} font={Fonts.SF_Regular1} color={Colors.Darkgrey}>{item.location}</Typography>
                                <View>
                                <Typography size={10} font={Fonts.SF_Medium1} color={Colors.Green}>{item.plan}</Typography>
                                </View>
                            </View>
                        </View>
                    </View>
                )} />
        </View>
    );
};

const styles = StyleSheet.create({
    dateContainer: {
        margin: 6,
        width: 40,
        padding: 5,
    },
    select: {
        width: 25,
        height: 25,
        borderRadius: 50,
        textAlign: "center"
    },
    dot: {
        height: 8,
        width: 8,
        alignSelf: "center",
        marginTop: 5
    },
    leftborder:{
        borderLeftWidth:1
    }
});

export default TrainingCalender;
