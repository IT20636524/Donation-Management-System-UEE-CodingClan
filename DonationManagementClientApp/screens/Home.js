import React from "react";
import { Image, TouchableOpacity, ImageBackground, StyleSheet, View, Button } from "react-native";

const localimage = require("../assets/home.png");

const Home = (props) => {

  const onPress = () => {
    props.navigation.navigate('AddDonation');
  };

  return(
  
    <ImageBackground source={localimage} resizeMode='stretch' style={styles.container}>
    <Button title="add Donation" color="#06134B" onPress={onPress}/>
     
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