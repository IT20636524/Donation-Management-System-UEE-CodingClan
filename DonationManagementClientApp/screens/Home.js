import React from "react";
import { Image, TouchableOpacity, ImageBackground, StyleSheet, View, Button } from "react-native";

const localimage = require("../assets/home.png");

const Home = (props) => {

  const onPress = () => {
    props.navigation.navigate('AddDonation');
  };
  const onPress2 = () => {
    props.navigation.navigate('Projects');
  };

  return(
  
    <ImageBackground source={localimage} resizeMode='stretch' style={styles.container}>
    <Button title="add Donation" color="#06134B" onPress={onPress}/>
    <Button title="Projects" color="#06134B" onPress={onPress2}/>
    </ImageBackground>
 
);
}

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