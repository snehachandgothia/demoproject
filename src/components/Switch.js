import React from 'react';
import { TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { Colors } from '../constants/Colors';

const CustomSwitch = ({ isEnabled, toggleSwitch }) => {
  const animatedValue = new Animated.Value(isEnabled ? 1 : 0);

  const handleToggle = () => {
    toggleSwitch(!isEnabled);
    Animated.timing(animatedValue, {
      toValue: isEnabled ? 0 : 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const switchAnimation = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 25], 
  });

  const backgroundColorAnimation = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [Colors.Backgroundgrey, Colors.Switchgreen],
  });

  return (
    <TouchableOpacity onPress={handleToggle} style={styles.switchContainer}>
      <Animated.View
        style={[
          styles.switchBackground,
          { backgroundColor: backgroundColorAnimation },
        ]}
      >
        <Animated.View
          style={[styles.switchThumb, { transform: [{ translateX: switchAnimation }] }]}
        />
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  switchContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  switchBackground: {
    width: 50,
    height: 25,
    borderRadius: 25,
    justifyContent: 'center',
    padding: 3,
  },
  switchThumb: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: Colors.White,
  },
  view:{
    flexDirection:"row",
    justifyContent:"space-between"
  }
});

// const Switchcustom = () => {
//   const [isEnabled, setIsEnabled] = useState(false);
//   const [enable,setEnable] = useState(false);

//   const toggleSwitch1 = () => {
//     setIsEnabled(!isEnabled);
//     if (!isEnabled){
//       setEnable(false);
//     }
//   };

//   const toggleswitch2 =() =>{
//     setEnable(!enable);
//     if (!enable){
//       setIsEnabled(false);
//     }
//   }

//   return (
//     <View >
// <View style={styles.view}>
//     <Typography
//     size={14} font={Fonts.SF_Regular1} color={Colors.Darkgrey} styles_font={{marginTop:15,}}>Female</Typography>
//       <CustomSwitch isEnabled={isEnabled} toggleSwitch={toggleSwitch1} />
// </View>
// <View style={styles.view}>
//   <Typography
//     size={14} font={Fonts.SF_Regular1} color={Colors.Darkgrey} styles_font={{marginTop:15,}}>Male</Typography>
// <CustomSwitch isEnabled={enable} toggleSwitch={toggleswitch2}/>
// </View>
//     </View>
//   );
// };


export default CustomSwitch;