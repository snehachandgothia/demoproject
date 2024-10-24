import React, { useEffect, useState } from "react";
import { Text, View, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Fonts } from "../../asset/fonts/Font";
import Typography from "./Typography";
import { Colors } from "../constants/Colors";
import { Week_of_month,MonthName } from "../constants/ConstantData";
// moment library for dates days

const AgendaCalender = () => {
    // const Week_of_month = [
    //     { id: 1, day: "Sun", fullday: "Sunday" },
    //     { id: 2, day: "Mon", fullday: "Monday" },
    //     { id: 3, day: "Tue", fullday: "Tuesday" },
    //     { id: 4, day: "Wed", fullday: "Wednesday" },
    //     { id: 5, day: "Thu", fullday: "Thursday" },
    //     { id: 6, day: "Fri", fullday: "Friday" },
    //     { id: 7, day: "Sat", fullday: "Saturday" }
    // ];

    // const Monthweek= ConstantData.Week_of_month;

    // const MonthName = [
    //     { id: 1, title: "Jan" },
    //     { id: 2, title: "Feb" },
    //     { id: 3, title: "Mar" },
    //     { id: 4, title: "Apr" },
    //     { id: 5, title: "May" },
    //     { id: 6, title: "Jun" },
    //     { id: 7, title: "Jul" },
    //     { id: 8, title: "Aug" },
    //     { id: 9, title: "Sep" },
    //     { id: 10, title: "Oct" },
    //     { id: 11, title: "Nov" },
    //     { id: 12, title: "Dec" }
    // ];

    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth();
    const currentWeekDay = currentDate.getDay();
    const year = currentDate.getFullYear();

    const maxDays = new Date(year, currentMonth + 1, 0).getDate();
    const Dateofmonth = Array.from({ length: maxDays }, (_, i) => i + 1);

    const [currentDayOfMonth, setCurrentDayOfMonth] = useState(currentDay);
    const [currentWeekDayName, setCurrentWeekDayName] = useState(Week_of_month[currentWeekDay].fullday);

    const getDayOfWeek = (dayOfMonth) => {
        const tempDate = new Date(year, currentMonth, dayOfMonth);
        return Week_of_month[tempDate.getDay()].day;
    };
    const handleSelect = (dayOfMonth) => {
        setCurrentDayOfMonth(dayOfMonth);
        setCurrentWeekDayName(getDayOfWeek(dayOfMonth));
    };

        return (
            <View>
                <LinearGradient colors={[Colors.LGdarkblue, Colors.Blue]}
                    start={{ x: 1, y: 0}} end={{ x: 1, y: 1 }}
                    style={styles.calendarContainer}>
                    <FlatList
                        data={Dateofmonth}
                        horizontal
                        keyExtractor={(item) => item.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => handleSelect(item)} style={styles.dateContainer}>
                                {item === currentDayOfMonth ? (
                                    <LinearGradient
                                        style={styles.linear}
                                        colors={[Colors.LGskyblue, Colors.White]}
                                        start={{ x: 0.2, y: 0 }}
                                        end={{ x: 1, y: 1.5 }}
                                        >
                                        <Typography size={20} color={Colors.White} styles_font={{alignSelf: "center"}} font={Fonts.SF_Bold1}
                                        >{item}</Typography>
                                        <Typography styles_font={{alignSelf:"center"}} size={14} color={Colors.White}
                                        >{getDayOfWeek(item)}</Typography>
                                    </LinearGradient>
                                ) : (
                                    <View>
                                        <Typography size={20} color={Colors.White} styles_font={{alignSelf: "center"}} font={Fonts.SF_Bold1}
                                        >{item}</Typography>                 
                                        <Typography styles_font={{alignSelf:"center"}} size={14} color={Colors.White}
                                        >{getDayOfWeek(item)}</Typography>                                   
                                        </View>
                                )}
                            </TouchableOpacity>
                        )}
                    />
                </LinearGradient>
                <View style={styles.view}>
                    <View style={styles.dateInfo}>
                        <Typography size={38} font={Fonts.SF_Bold1} color={Colors.Darkgrey} styles_font={{alignSelf:"center"}}
                        >{currentDayOfMonth}</Typography>
                        <Typography size={26} font={Fonts.SF_Bold1} color={Colors.Darkgrey} styles_font={{alignSelf:"center"}}
                        >{MonthName[currentMonth]?.title}</Typography>
                        <Typography size={13} font={Fonts.SF_Regular1} color={Colors.Grey} styles_font={{alignSelf:"center"}}
                        >{currentWeekDayName}</Typography>
                    </View>
                    <View style={styles.trainingInfo}>
                        <Typography size={17} font={Fonts.SF_Regular1} color={Colors.Darkgrey} styles_font={{marginTop:15}}
                        >Scheduled Trainings </Typography>
                        <Typography size={17} font={Fonts.SF_Regular1} color={Colors.Darkgrey} styles_font={{marginTop:15}}
                        >Resheduling Requests </Typography>                        
                        <Typography size={17} font={Fonts.SF_Regular1} color={Colors.Darkgrey} styles_font={{marginTop:15}}
                        >Completed Trainings </Typography>                        
                        <Typography size={17} font={Fonts.SF_Regular1} color={Colors.Darkgrey} styles_font={{marginTop:15}}
                        >Canceled Trainings </Typography>              
                    </View>
                    <View>
                        <Typography styles_font={[styles.number,{backgroundColor: Colors.Lightblue}
                        ]}width={70} size={14} font={Fonts.SF_Regular1} textAlign={"center"} color={Colors.Blue}>5</Typography>
                        <Typography styles_font={[styles.number,{backgroundColor: Colors.Lightorange}
                        ]} width={70} size={14} font={Fonts.SF_Regular1} textAlign={"center"} color={Colors.Orange}>1</Typography>
                        <Typography styles_font={[styles.number,{backgroundColor: Colors.Lightgreen}
                        ]} width={70} size={14} font={Fonts.SF_Regular1} textAlign={"center"} color={Colors.Switchgreen}>50</Typography>
                        <Typography styles_font={[styles.number,{backgroundColor: Colors.Lightpink}
                        ]} width={70}size={14} font={Fonts.SF_Regular1} textAlign={"center"} color={Colors.Red}>0</Typography>
                    </View>
                </View>
            </View>
        );
    };

    const styles = StyleSheet.create({
        calendarContainer: {
            backgroundColor: Colors.LGdarkblue,
            height: 90,
            alignSelf: "center",
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            width: "90%",
        },
        linear: {
            height: 80,
            width: 40,
            paddingTop: 17,
            borderRadius: 10,
        },
        dateContainer: {
            margin: 5,
            width: 40,
            justifyContent: "center",
            alignItems: "center",
            padding: 5,
            borderRadius: 10,
        },
        view: {
            width: "90%",
            backgroundColor: Colors.White,
            height: 175,
            flexDirection: "row",
            alignSelf: "center",
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            marginBottom: 20
        },
        dateInfo: {
            marginTop: 30,
            marginLeft: 10,
            width: "20%",
        },
        trainingInfo: {
            width: "50%",
            marginLeft: 5,
        },
        number: {
            height: 30,
            marginTop: 10,
            paddingVertical: 5,
            fontFamily: Fonts.SF_Regular1,
            borderRadius: 50
        }
    });
export default AgendaCalender;