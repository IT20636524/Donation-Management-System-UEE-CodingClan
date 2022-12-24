import React from "react";
import { Image, TouchableOpacity, ImageBackground, StyleSheet, View } from "react-native";

const localimage = require("../assets/eventdash.png");

const EventDashboard = (props) => {

  const onPresscomplete = () => {
    props.navigation.navigate('CompleteEvent');    
  };

  return(
    <ImageBackground source={localimage} resizeMode='cover' style={styles.container}>
      {/* <TouchableOpacity onPress={onPressorg}> */}
      <TouchableOpacity onPress={onPresscomplete}>
      <Image source={require("../assets/completebtn.png")} style={styles.complete}></Image>
    </TouchableOpacity>
    {/* <TouchableOpacity  onPress={onPressmgr}> */}
    <TouchableOpacity >
      <Image source={require("../assets/upcomingbtn.png")} style={styles.upcoming}></Image>
    </TouchableOpacity>
    {/* <Image source={require("../assets/fundimg.jpg")} style={styles.fundraisingimg}></Image> */}
    <Image source={require("../assets/cliimage.png")} style={styles.eventdep}></Image>
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
  complete:{
    bottom: -50
  },
  upcoming:{
    bottom: -80
  },
  eventdep: {
    bottom: -100
  },
  fundraisingimg: {
    width: 400,
    height: 150,
    bottom: -75
  }
  
 
});

export default EventDashboard;