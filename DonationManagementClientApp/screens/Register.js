import React from "react";
import { Image, TouchableOpacity, ImageBackground, StyleSheet, View } from "react-native";

const localimage = require("../assets/register.png");


const Register =  (props) => {

  const onPress = () => {
    props.navigation.navigate('Home');
  };

  return(
    <ImageBackground source={localimage} resizeMode='stretch' style={styles.container}>
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
    width: 350,
    height: 55,
    marginTop:550
  },
});

export default Register;