import React from "react";
import { Image, TouchableOpacity, ImageBackground, StyleSheet, View, ScrollView } from "react-native";

const localimage = require("../assets/evmgrpaybg.png");

const EventManagerPayments = (props) => {

  const onPresspay = () => {
    props.navigation.navigate('OrgPaymentDetails');    
  };

  return(
    <ImageBackground source={localimage} resizeMode='cover' style={styles.container}>
     <ScrollView style={styles.completscroll}>

    <TouchableOpacity onPress={onPresspay}>
      <Image source={require("../assets/evpay1.png")} style={styles.pay}></Image>
    </TouchableOpacity>
    <TouchableOpacity onPress={onPresspay}>
      <Image source={require("../assets/evpay1.png")} style={styles.pay}></Image>
    </TouchableOpacity>
    <TouchableOpacity onPress={onPresspay}>
      <Image source={require("../assets/evpay1.png")} style={styles.pay}></Image>
    </TouchableOpacity>
    <TouchableOpacity onPress={onPresspay}>
      <Image source={require("../assets/evpay1.png")} style={styles.pay}></Image>
    </TouchableOpacity>
    <TouchableOpacity onPress={onPresspay}>
      <Image source={require("../assets/evpay1.png")} style={styles.pay}></Image>
    </TouchableOpacity>
    <TouchableOpacity onPress={onPresspay}>
      <Image source={require("../assets/evpay1.png")} style={styles.pay}></Image>
    </TouchableOpacity>
    </ScrollView>
   
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
  },
  completscroll:{
    bottom: -100,
    maxHeight: 460
  },
  pay:{
    width: 380,
    height: 115,
    left: -5,
    margin:10
  }
});

export default EventManagerPayments;