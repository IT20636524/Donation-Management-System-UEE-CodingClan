import React from "react";
import { Image, TouchableOpacity, ImageBackground, StyleSheet, View } from "react-native";

const localimage = require("../assets/login.png");

const Login =  (props) => {

  const onPress = () => {
    props.navigation.navigate('Register');
  };

  return(
    <ImageBackground source={localimage} resizeMode='cover' style={styles.container}>
    <TouchableOpacity onPress={onPress}>
      <Image source={require("../assets/regbtn.png")} style={styles.logo}></Image>
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
    width: 330,
    height: 55,
    marginTop:350
  },
});

export default Login;