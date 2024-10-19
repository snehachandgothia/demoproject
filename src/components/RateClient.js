import React, { useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import TextComponent from "./TextComponent";
import { ImageConstant } from "../constants/ImageConstant";

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
        <View style={{ flexDirection: "row", marginLeft: 15, marginTop: 15 }}>
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
            <TextComponent
                styles_font={{ marginLeft: 115 }}
                size={15}
                weight={"700"}
                color={"#3C3C3C"}
            >{title}</TextComponent>
        </View>
    );
};

export default RateClient;