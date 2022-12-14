import React from "react";
import { Image, TouchableOpacity, ImageBackground, StyleSheet, View } from "react-native";

const localimage = require("../assets/admindash.png");

const Dashboard = (props) => {

  const onPresspay = () => {
    props.navigation.navigate('PaymentDashboard');    
  };

  const onPressevent = () => {
    props.navigation.navigate('EventDashboard');    
  };
  const onPressdonor = () => {
    props.navigation.navigate('DonationDetailsList');    
  };

  return(
    <ImageBackground source={localimage} resizeMode='cover' style={styles.container}>
      <TouchableOpacity onPress={onPresspay}>
      <Image source={require("../assets/paymentbtn.png")} style={styles.pay}></Image>
    </TouchableOpacity>
    <TouchableOpacity onPress={onPressevent}>
      <Image source={require("../assets/eventbtn.png")} style={styles.event}></Image>
    </TouchableOpacity>
    <TouchableOpacity onPress={onPressdonor}>
      <Image source={require("../assets/donorbtn.png")} style={styles.donor}></Image>
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
  donor:{
    position: "absolute",
    width: 160,
    height: 155,
    left: -175,
    bottom: -230,
    borderRadius:10

  }
 
});

export default Dashboard;