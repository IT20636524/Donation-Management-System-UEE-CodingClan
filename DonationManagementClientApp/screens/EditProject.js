import React from "react";
const localimage = require("../assets/background.png");
import {ImageBackground, StyleSheet} from "react-native";

const EditProject = (props) => {
  
    return(
    
      <ImageBackground source={localimage} resizeMode='stretch' style={styles.container}>

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

export default EditProject;