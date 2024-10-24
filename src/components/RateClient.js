import React, { useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import Typography from "./Typography";
import { ImageConstant } from "../constants/ImageConstant";
import { Colors } from "../constants/Colors";
import { Fonts } from "../../asset/fonts/Font";

const RateClient = ({ title }) => {
    const [selectedStars, setSelectedStars] = useState(0);

    const handleStarPress = (index) => {
        if (selectedStars === index) {
            setSelectedStars(0);
        } else {
            setSelectedStars(index);
        }
    };

    return (
        <View style={{ flexDirection: "row", marginHorizontal: 15, marginTop: 15 ,justifyContent:"space-between"}}>
            
            <View style={{flexDirection:"row"}}>
            {[1, 2, 3, 4, 5].map((starIndex) => (
                <TouchableOpacity
                    key={starIndex}
                    onPress={() => handleStarPress(starIndex)}
                    style={{ marginLeft: starIndex > 1 ? 7 : 10 }}
                >
                    <Image
                        source={selectedStars >= starIndex ? ImageConstant.Yellowstar : ImageConstant.Ratingstar}
                    />
                </TouchableOpacity>
            ))}
            </View>
            <Typography
                size={15}
                font={Fonts.SF_Bold1}
                color={Colors.Darkgrey}
            >{title}</Typography>
        </View>
    );
};

export default RateClient;