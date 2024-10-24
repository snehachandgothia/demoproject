import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, Text, TouchableOpacity, View ,Image} from "react-native";
import { Fonts } from "../../asset/fonts/Font";
import { ImageConstant } from "../constants/ImageConstant";
import Typography from "./Typography";
import { Colors } from "../constants/Colors";

const Timer = () => {
  const [time, setTime] = useState(30);
  const intervaled = useRef(null);

  const startResendOtpTimer = () => {
    intervaled.current = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(intervaled.current);
          return 0;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);
  };

  const handleResendOtp=()=>{
    setTime(30);
    startResendOtpTimer();
  }

  useEffect(() => {
    startResendOtpTimer();

    return () => {
      if (intervaled.current) {
        clearInterval(intervaled.current);
      }
    };
  }, []);

  return (
         <View style={{flexDirection:"row",marginTop:30,marginLeft:25}}>
                <Typography
                size={16} font={Fonts.SF_Regular1} color={Colors.Black}>Didn’t Received the Code?</Typography>                
                <TouchableOpacity onPress={handleResendOtp}>
            <Typography
            size={17} font={Fonts.SF_Bold1} color={Colors.Darkblue}>Resend</Typography>
        </TouchableOpacity>
                    <Image style={styles.image}
                    source={ImageConstant.Timer}/>
                    <Text style={styles.timer}>00.{time > 0 ? time : 0}</Text>
            </View>
  );
};

const styles=StyleSheet.create({
    image:{
        height:17,
        width:17,
        marginLeft:40,
        marginTop:3,
    },
    timer:{
        fontSize:16,
        fontWeight:"400",
        fontFamily:Fonts.SF_Medium1,
        color:Colors.Black,
        marginLeft:5
    }
})

export default Timer;
