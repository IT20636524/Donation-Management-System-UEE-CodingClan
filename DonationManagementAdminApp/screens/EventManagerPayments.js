import React from "react";
import { Image, TouchableOpacity, ImageBackground, StyleSheet, View } from "react-native";

const localimage = require("../assets/evmgrpaybg.png");

const EventManagerPayments = () => {

 

  return(
    <ImageBackground source={localimage} resizeMode='cover' style={styles.container}>
    
   
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
  pay:{
    position: "absolute",
    width: 160,
    height: 170,
    left: -175,
    bottom: -70
    
  },
  event:{
    position: "absolute",
    width: 160,
    height: 170,
    right: -172,
    bottom: -70


  }
 
});

export default EventManagerPayments;