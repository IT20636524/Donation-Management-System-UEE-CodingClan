import React from "react";
import { Image, TouchableOpacity, ImageBackground, StyleSheet, View } from "react-native";

const localimage = require("../assets/paydash.png");

const PaymentDashboard = () => {

//   const onPresspay = () => {
//     props.navigation.navigate('PaymentDashboard');    
//   };

  return(
    <ImageBackground source={localimage} resizeMode='cover' style={styles.container}>
      {/* <TouchableOpacity onPress={onPressorg}> */}
      <TouchableOpacity>
      <Image source={require("../assets/orgbtn.png")} style={styles.org}></Image>
    </TouchableOpacity>
    {/* <TouchableOpacity  onPress={onPressmgr}> */}
    <TouchableOpacity >
      <Image source={require("../assets/evmgrbtn.png")} style={styles.mgr}></Image>
    </TouchableOpacity>
    <Image source={require("../assets/dashanalytic.png")} style={styles.dash}></Image>
    <TouchableOpacity >
      <Image source={require("../assets/addpaybtn.png")} style={styles.add}></Image>
    </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:"#fff"
  },
  org:{
    position: "absolute",
    width: 183,
    height: 138,
    left: -185,
    bottom: -80 
  },
  mgr:{
    position: "absolute",
    width: 183,
    height: 138,
    right: -185,
    bottom: -80
  },
  dash:{   
    width: 365,
    height: 123,
    left: 0,   
    background: "#FCFDFF",
    borderRadius: 15,
    bottom: -90
  },
  add:{   
    left: 100,   
    background: "#FCFDFF",
    top:240
  },
 

 
});

export default PaymentDashboard;