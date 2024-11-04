import React from "react";
import { StyleSheet, View ,Image} from "react-native";
import { Colors } from "../constants/Colors";
import { ImageConstant } from "../constants/ImageConstant";
import Typography from "./Typography";
import { Fonts } from "../../asset/fonts/Font";

const NotificationButton=({title})=>{
    return(
        <View style={styles.notification}>
                <Image style={{ height: 17, width: 15, marginTop: 4 }}
                    source={ImageConstant.Bell} />
                <Typography left={15}
                    size={18} font={Fonts.SF_Bold1} color={Colors.White} width={225}>{title}</Typography>
                <Image style={styles.arrow}
                    source={ImageConstant.Whitearrow} />
            </View>
    )
};

const styles=StyleSheet.create({
    notification: {
        backgroundColor: Colors.Pink,
        padding: 15,
        width: "90%",
        alignSelf: "center",
        borderRadius: 10,
        marginTop: 15,
        flexDirection: "row"
    },
    arrow: {
        height: 15,
        width: 15,
        marginLeft: 50,
        marginTop: 3
    }
})

export default NotificationButton;