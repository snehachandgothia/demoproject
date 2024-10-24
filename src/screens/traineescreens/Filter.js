import React from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ImageConstant } from "../../constants/ImageConstant";
import Typography from "../../components/Typography";
import { Colors } from "../../constants/Colors";
import ChooseTrainerGender from "../../components/ChooseTrainerGender";
import { Fonts } from "../../../asset/fonts/Font";
// import rnRangeSlider from "rn-range-slider";
import RnRangeSlider from "rn-range-slider";

const Filter=()=>{
    // const renderThumb = () => <View style={styles.thumb} />;
    // const renderRail = () => <View style={styles.rail} />;
    // const renderRailSelected = () => <View style={styles.railSelected} />;
    // const renderLabel = () => <View />; // Custom label can be created
    // const renderNotch = () => <View />; // Optional notch between thumb

    return(
        <ScrollView style={{}}>
            <View style={styles.view}>
                <Typography size={20} color={Colors.Grey}>Save your searches</Typography>
<TouchableOpacity>
    <Image source={ImageConstant.Cancel}/>
</TouchableOpacity>
            </View>
            <View style={[styles.view,styles.border,{marginTop:20}]}>
                <Typography size={34} font={Fonts.SF_Bold1} color={Colors.Darkgrey}
                >Filters</Typography>
                <TouchableOpacity style={{marginTop:20}}>
                    <Typography size={12} font={Fonts.SF_Bold1} color={Colors.Darkgrey}>Clear filters</Typography>
                </TouchableOpacity>
            </View>
           <TouchableOpacity style={[styles.view,styles.border,{marginTop:10}]}>
            <Typography size={20} color={Colors.Darkgrey} left={10} mhorizontal={15}
            >Select sport category</Typography>
            <Image style={{marginTop:10}}
            source={ImageConstant.RightArrow}/>
           </TouchableOpacity>
           <TouchableOpacity style={[styles.view,styles.border,{marginTop:10}]}>
            <Typography size={20} color={Colors.Darkgrey} left={10} mhorizontal={20}
            >Select location</Typography>
            <Image style={{marginTop:10}}
            source={ImageConstant.RightArrow}/>
           </TouchableOpacity>
           <Typography size={20} color={Colors.Darkgrey} left={15} styles_font={{marginTop:10}}
           >Trainer gender</Typography>
           <View></View>
           <ChooseTrainerGender/>
           <Typography size={20} color={Colors.Darkgrey} left={15} styles_font={{marginTop:15}}
           >Age</Typography>
{/* <View>
        <RnRangeSlider
        style={{width:"90%"}}
          min={0}
          max={1000}
        //   low={+minh}
          step={5}
          renderThumb={renderThumb}
          renderRail={renderRail}
          renderRailSelected={renderRailSelected}
          renderLabel={renderLabel}
          renderNotch={renderNotch}
          onValueChanged={(low, high) => {
            console.log('Selected range:', low, high);
          }}
        />
      </View> */}

        </ScrollView>
    )
};

const styles=StyleSheet.create({
    view:{
        marginTop:50,
        flexDirection:"row",
        justifyContent:"space-between",
        // width:"90%",
        // alignSelf:"center",
        paddingHorizontal:15
    },
    border:{
        borderBottomWidth:1,
        borderColor:Colors.Grey,
        width:"100%",
        paddingBottom:10
    },
        thumb: {
          width: 20,
          height: 20,
          borderRadius: 10,
          backgroundColor: Colors.Darkgrey,
        },
        rail: {
          flex: 1,
          height: 4,
          borderRadius: 2,
          backgroundColor: Colors.LightGrey,
        },
        railSelected: {
          height: 4,
          backgroundColor: Colors.Darkgrey,
          borderRadius: 2,
        },
})

export default Filter;