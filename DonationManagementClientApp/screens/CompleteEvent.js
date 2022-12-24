import React, { useState } from "react";
import { Image, TouchableOpacity, ImageBackground, StyleSheet, View, Text, ScrollView, Modal, TextInput, Pressable, Platform } from "react-native";

const localimage = require("../assets/eventdash.png");

const CompleteEvent = (props) => {

  const [modalVisible, setModalVisible] = useState(false);
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [text, setText] = useState('Empty');

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
    bottom: -200,
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
  },
  org: {
    position: "absolute",
    width: 183,
    height: 138,
    left: -185,
    bottom: -370
},
mgr: {
    position: "absolute",
    width: 183,
    height: 138,
    right: -185,
    bottom: -370
},
dash: {
    width: 365,
    height: 123,
    left: 0,
    background: "#FCFDFF",
    borderRadius: 15,
    bottom: -380
},
add: {
    left: 100,
    background: "#FCFDFF",
    top: 50
},
centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
},
modalView: {
    margin: 20,
    backgroundColor: "#3A74CB",
    borderRadius: 20,
    padding: 35,
    height:440,
    shadowColor: "3000000",
    shadowOffset: {
        width: 0,
        height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
},
button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
},

textStyle: {
    fontFamily: "Inter",
    fontWeight: 700,
    fontSize: 20,
    lineHeight: 24,
},
modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontFamily: "Inter",
    fontWeight: 700,
    fontSize: 20,
    lineHeight: 24,
},
inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
},

textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '65%',
    padding: 5,
    margin: 5,
    backgroundColor: '#FFFFFF',
    fontSize: 15,
    borderRadius: 8,
},

headerText: {
    Color: 'black',
    fontSize: 25,
    textShadowColor:"black",
    textAlign:"left"
},
labelText: {
    fontSize: 18,
    top:15
},

submitbtn: {
    position: "absolute",
    width: 250,
    height: 52,
    top: 370,
    left:50
},
close:{
    position: "absolute",
    width: 40,
    height: 40,
    bottom: 330,
    left: 260
}
  
  
  
 
});

export default CompleteEvent;