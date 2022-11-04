import React from "react";
import { Image, TouchableOpacity, ImageBackground, StyleSheet, View } from "react-native";

const localimage = require("../assets/splash.png");



const Splash =  (props) => {

  const onPress = () => {
    props.navigation.navigate('Login');
  };

  return(
    <ImageBackground source={localimage} resizeMode='cover' style={styles.container}>
    <TouchableOpacity onPress={onPress}>
      <Image source={require("../assets/get.png")} style={styles.logo}></Image>
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
  logo: {
    width: 250,
    height: 50,
    marginTop:600
  },
});

export default Splash;