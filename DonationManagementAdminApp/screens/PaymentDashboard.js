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
      <Image source={require("../assets/orgbtn.png")} style={styles.pay}></Image>
    </TouchableOpacity>
    {/* <TouchableOpacity  onPress={onPressmgr}> */}
    <TouchableOpacity >
      <Image source={require("../assets/evmgrbtn.png")} style={styles.event}></Image>
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
  image: {
    flex: 1,
    justifyContent: "center"
  },
 
});

export default PaymentDashboard;