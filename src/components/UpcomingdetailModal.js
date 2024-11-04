import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Modal, FlatList } from "react-native";
import Typography from "./Typography";
import { Fonts } from "../../asset/fonts/Font";
import { Colors } from "../constants/Colors";
import { Week_of_month, MonthName, } from "../constants/ConstantData";
import CustomSwitch from "./Switch";
import MainButton from "./MainButton";

const UpcomingdetailModal = ({ route, onClose }) => {
    // const 
    const [show, setShow] = useState(false);
    const [selected, setSelected] = useState(null);
    const [selectTime, setSelectTime] = useState("");
    const [isEnabled, setIsEnabled] = useState(false);
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth();
    const year = currentDate.getFullYear();

    const handleDone = () => {
        if (onClose) {
            const selectedData = {
                date: selected ? DateMonth(selected) : "",
                time: selectTime?.time || ""
            };
            onClose(selectedData);
        }
        setShow(false);
    };


    const generateTimingSlots = () => {
        const slots = [];
        const date = new Date();

        for (let hour = 0; hour < 24; hour++) {
            date.setHours(hour, 0, 0, 0);
            const startHour = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
            date.setHours(hour + 1);
            const endHour = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
            slots.push({ id: hour, time: `${startHour}-${endHour}` });
        }
        return slots;
    };
    const Timing = generateTimingSlots();

    const toggleDate = (date) => {
        setSelected(date === selected ? null : date);
        setSelectTime("")
    };

    const isPastTime = (hour) => {
        return selected === currentDay && hour < currentHour;
    };

    const toggleTime = (timeObj) => {
        setSelectTime(timeObj === selectTime ? "" : timeObj);
        // console.log(getDayWeek(selected),"llllllllll")
        // console.log(selectTime?.time,"llllllllllllll")
    };


    const ToggleSwitch = () => {
        setIsEnabled(!isEnabled);
    };

    const maxDays = new Date(year, currentMonth + 1, 0).getDate();
    const Dateofmonth = Array.from({ length: maxDays }, (_, i) => i + 1);

    const getDayWeek = (dayOfMonth) => {
        const tempDate = new Date(year, currentMonth, dayOfMonth);
        return Week_of_month[tempDate.getDay()].fullday;
    };

    const DateMonth = (dayMonth) => {
        const temp = new Date(year, currentMonth, dayMonth);
        return `${temp.getDate()}.${temp.getMonth() + 1}`;
    };


    // const SelectedData={selected ? getDayWeek(selected) : ""} {selectTime?.time}();

    return (
        <View>
            <TouchableOpacity
                onPress={() => setShow(true)}>
                <MainButton title={"RESHEDULE"} />
            </TouchableOpacity>
            <Modal
                transparent={true}
                animationType="slide"
                visible={show}
                onRequestClose={() => setShow(!show)}
            >
                <View style={{ flex: 1, justifyContent: "flex-end", backgroundColor: Colors.White }}>
                    <View style={{ height: "65%", borderTopRightRadius: 30, borderTopLeftRadius: 30, backgroundColor: Colors.White }}>
                        <View style={styles.border}>
                            <Typography size={16} font={Fonts.SF_Medium1} color={Colors.Darkgrey}>Select date and time</Typography>
                            <Typography size={14} font={Fonts.SF_Regular1} color={Colors.Grey}>
                                {selected ? getDayWeek(selected) : ""} {selectTime?.time}

                            </Typography>
                        </View>
                        <View style={styles.flatlist}>
                            <FlatList
                                data={Dateofmonth}
                                keyExtractor={(item) => item.toString()}
                                showsVerticalScrollIndicator={false}
                                renderItem={({ item }) => (
                                    <TouchableOpacity
                                        onPress={() => {
                                            if (item >= currentDay) {
                                                toggleDate(item);
                                            }
                                        }}
                                        style={[
                                            styles.date,
                                            { backgroundColor: item === selected ? Colors.Darkgrey : item < currentDay ? Colors.Backgroundgrey : Colors.Greywhite }
                                        ]}
                                        disabled={item < currentDay}
                                    >
                                        {item === currentDay ? (
                                            <View>
                                                <Typography size={14} font={Fonts.SF_Regular1} color={item === selected ? Colors.Grey : Colors.Placeholdergrey} left={10}>Today</Typography>
                                                <Typography size={14} font={Fonts.SF_Regular1} color={item === selected ? Colors.White : Colors.Black} left={8}>{MonthName[currentMonth]?.title}, {item}</Typography>
                                            </View>
                                        ) : (
                                            <View>
                                                <Typography size={14} font={Fonts.SF_Regular1} color={item === selected ? Colors.Grey : Colors.Placeholdergrey} left={10}>
                                                    {item === currentDay + 1 ? "Tomorrow" : getDayWeek(item)}
                                                </Typography>
                                                <Typography size={14} font={Fonts.SF_Regular1} color={item === selected ? Colors.White : Colors.Black} left={8}>{MonthName[currentMonth]?.title}, {item}</Typography>
                                            </View>
                                        )}
                                    </TouchableOpacity>
                                )}
                            />
                            <FlatList
                                data={Timing}
                                keyExtractor={(item) => item.id.toString()}
                                showsVerticalScrollIndicator={false}
                                renderItem={({ item }) => (
                                    <TouchableOpacity
                                        onPress={() => toggleTime(item)}
                                        style={[
                                            styles.date,
                                            {
                                                width: 200,
                                                backgroundColor: (item.id === selectTime.id ? Colors.Darkgrey : item.id === isPastTime(item.id) ? Colors.Backgroundgrey : Colors.Greywhite),
                                                // opacity: isPastTime(item.id) ? 0.5 : 1, 
                                            }
                                        ]}
                                        disabled={isPastTime(item.id)}
                                    >
                                        <View>
                                        <Typography size={14} font={Fonts.SF_Regular1} color={item.id === selectTime.id ? Colors.Grey : Colors.Placeholdergrey} left={10}>Time</Typography>

                                            <Typography
                                                size={14}
                                                font={Fonts.SF_Regular1}
                                                color={item.id === selectTime.id ? Colors.White : Colors.Black}
                                                left={8}
                                            >
                                                {item.time}
                                            </Typography>
                                        </View>
                                    </TouchableOpacity>
                                )}
                            />


                        </View>
                        <View style={{ flexDirection: "row", width: "90%", alignSelf: "center", justifyContent: "space-between", paddingRight: 10, marginTop: 5 }}>
                            <Typography size={16} font={Fonts.SF_Regular1} color={Colors.Grey} styles_font={{ marginTop: 10 }}>Book on regular basis</Typography>
                            <CustomSwitch isEnabled={isEnabled} toggleSwitch={ToggleSwitch} />
                        </View>
                        <TouchableOpacity style={{ marginTop: 20 }} onPress={handleDone}>
                            <MainButton title={"DONE"}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

        </View>
    );
};


const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 40,
        paddingVertical: 18,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: Colors.Backgroundskyblue
    },
    border: {
        borderBottomWidth: 1.5,
        borderColor: Colors.Bordergrey,
        padding: 20
    },
    date: {
        height: 50,
        width: 130,
        backgroundColor: Colors.Greywhite,
        marginVertical: 5,
        padding: 5
    },
    flatlist: {
        height: 240,
        flexDirection: "row",
        width: "90%",
        alignSelf: "center",
        marginTop: 30
    }
})

export default UpcomingdetailModal;