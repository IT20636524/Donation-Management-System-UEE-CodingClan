import React, { useState } from "react";
import { Image, TouchableOpacity, ImageBackground, StyleSheet, View, Text, ScrollView } from "react-native";

const localimage = require("../assets/eventdash.png");

const CompleteEvent = (props) => {

  const onPresseventmore = () => {
    props.navigation.navigate('Event');    
  };

const [event,setevent] = useState ([
    {name:"Art Sale", eventid: "EID001", key:"1"},
    {name:"Art Sale", eventid: "EID001", key:"2"},
    {name:"Art Sale", eventid: "EID001", key:"3"},
    {name:"Art Sale", eventid: "EID001", key:"4"},
    {name:"Art Sale", eventid: "EID001", key:"5"},
    {name:"Art Sale", eventid: "EID001", key:"6"},
    {name:"Art Sale", eventid: "EID001", key:"7"},
    {name:"Art Sale", eventid: "EID001", key:"8"}
])

  return(
    <ImageBackground source={localimage} resizeMode='cover' style={styles.container}>

    <ScrollView style={styles.completscroll}>
    { event.map((item)=>{
        return(
            <View key={item.key}>
                <Text style={styles.completeeventscroll}>{item.name}
                
                </Text>
                <Text style={styles.completeeventidscroll}>{item.eventid}</Text>
                <TouchableOpacity onPress={onPresseventmore}>
                <Image source={require("../assets/morebtn.png")} style={styles.eventmorebtn}></Image>
             </TouchableOpacity>
            </View>
        )
    })}
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
  completeeventscroll:{
    fontSize: 25,
    marginTop: 20,
    padding: 50,
    width: 350,
    backgroundColor: `#f5fffa`,
    fontWeight: 'bold',
    
    
  },

  completscroll:{
    bottom: -80,
    maxHeight: 500
  },
  completeeventidscroll:{
    marginLeft: 270,
    bottom: 100,
    fontSize: 20,
    color: `#708090`,
    fontWeight: 'bold',
  },
  eventmorebtn: {
    marginLeft: 260,
    bottom: 70,
  }
  
  
  
 
});

export default CompleteEvent;