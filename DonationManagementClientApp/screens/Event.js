import React, { useState } from "react";
import { Image, TouchableOpacity, ImageBackground, StyleSheet, View, Text, Modal, TextInput, Pressable, Platform, Alert } from "react-native";
import { Paragraph } from 'react-native-paper';


const localimage = require("../assets/eventback.png");

const Event = (props) => {

  const [modalVisible, setModalVisible] = useState(false);
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [text, setText] = useState('Empty');

    const simpleAlert = () => {
      alert('Are you sure you want to delete this event?')
    }

    const twoOptionAlert = () => {
      Alert.alert(
        'Hello, THis is Title',
        'I am two option',
        [
          {
            text: 'yes',
          onPress: () => {
            console.log(Yes);
          }
        },
        {
          text: 'No',
          onPress: () =>
                {
                  console.log('No Pressed')
                }       
               }
        ]
         
          
      )
    }
  

//   const onPresscomplete = () => {
//     props.navigation.navigate('CompleteEvent');    
//   };

  return(
    <ImageBackground source={localimage} resizeMode='cover' style={styles.container}>
      <Paragraph style={styles.eventpara}>We took a collection of school children's  art and sold 
    it to evaluate the children's skills, and we were able to complete our goal very
    successfully. Moreover, a large number of people participated in this and it
     was a very good event.</Paragraph>

     <View>
     <Image style={styles.eventcal} source={require("../assets/eventcal.png")} ></Image>
     <Image style={styles.eventven} source={require("../assets/eventven.png")} ></Image>
      <Text style={styles.textevent}>July 16, 2022</Text>
      <Text style={styles.texteventv}>Art Library at Colombo 07</Text>
     </View>

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
eventpara:{
    bottom: -480,
    marginLeft: 15,
    fontSize: 18,
    fontWeight: 'bold',
    color: `black`
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
  left: -100,
  background: "#FCFDFF",
  top: 230
},
delete:{
 left: 100,
 top: 142
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
  top: 385,
  left:50
},
close:{
  position: "absolute",
  width: 40,
  height: 40,
  bottom: 330,
  left: 260
},
textevent:{
  top: 410,
  left: 60,
  fontSize: 20,
  color: 'gray',
  fontWeight: "bold"
},
texteventv:{
  top: 425,
  left: 60,
  fontSize: 20,
  color: 'gray',
  fontWeight: "bold"
},
eventcal:{
  top: 480
},
eventven:{
  top: 480
},
textInputtime:{
  borderWidth: 1,
  borderColor: '#cccccc',
 width: '45%',
  padding: 5,
  left: 20,
  backgroundColor: '#FFFFFF',
  fontSize: 15,
  borderRadius: 8,

}
  
 
});

export default Event;