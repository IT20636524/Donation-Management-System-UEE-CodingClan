import React from "react";
import { Image, TouchableOpacity, ImageBackground, StyleSheet, View } from "react-native";

const localimage = require("../assets/home.png");

const Home = () => (
  
    <ImageBackground source={localimage} resizeMode='cover' style={styles.container}>
     
    </ImageBackground>
 
);

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

export default Home;