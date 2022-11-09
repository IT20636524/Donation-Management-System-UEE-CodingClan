import React, { useState } from "react";
import { Image, TouchableOpacity, ImageBackground, StyleSheet, View, Button, TextInput, Alert, Modal, Text, Pressable, Platform } from "react-native";
import {DateTimePicker} from '@react-native-community/datetimepicker';

const localimage = require("../assets/paypro.png");


const OrgPaymentDetails = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [show, setShow] = useState(false);

  return(
    <ImageBackground source={localimage} resizeMode='cover' style={styles.container}>
  
  <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                      
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={{color:"#000000", fontSize: 30, textAlign:"center",bottom:20}}>Update Payment</Text>
                            <View>
                            <View style={styles.inputContainer}>
                                    <Text style={styles.labelText}>Payment ID</Text>
                                    <TextInput style={styles.textInput} placeholder='OPID002' />
                                </View>
                            <View style={styles.inputContainer}>
                                    <Text style={styles.labelText}>Pay For</Text>
                                    <TextInput style={styles.textInput} placeholder='Organization' />
                                </View>
                                <View style={styles.inputContainer}>
                                    <Text style={styles.labelText}>Organization</Text>
                                    <TextInput style={styles.textInput} placeholder='LEO Club' />
                                </View>
                                <View style={styles.inputContainer}>
                                    <Text style={styles.labelText}>Name</Text>
                                    <TextInput style={styles.textInput} placeholder=' D N Perera' />
                                </View>
                                <View style={styles.inputContainer}>
                                    <Text style={styles.labelText}>Paid Amount</Text>
                                    <TextInput style={styles.textInput} placeholder='100000LKR' />
                                </View>
                                <View style={styles.inputContainer}>
                                    <Text style={{top:5,fontSize: 18}}>Date</Text>
                                    <TextInput  style={styles.textInput} placeholder='05-11-2022'> 
                                    {/* <Image style={{width:20,height:20}} source={require("../assets/datepickpng.png")}></Image> */}
                                    </TextInput> 
                             
                                </View>
                                <View style={styles.inputContainer}>
                                    <Text style={styles.labelText}>Estimated Details</Text>
                                    <TextInput style={styles.textInput} placeholder='Upload File' />
                                   
                                   
                                </View>
                                <TouchableOpacity >
                                    <Image style={{width:196, height:52, top:15, left:50}} source={require("../assets/fileinput.png")}></Image>
                                  
                                  </TouchableOpacity>
                            </View>

                            <Image source={require("../assets/paybutton.png")} style={styles.paybutton}></Image>

                            <Pressable
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Image source={require("../assets/close.png")} style={styles.close}></Image>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
                <Pressable
                    onPress={() => setModalVisible(true)}
                >
                    <Image source={require("../assets/updatebtn.png")} style={styles.add}></Image>
                </Pressable>
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
  pay:{
    position: "absolute",
    width: 160,
    height: 170,
    left: -175,
    bottom: -70
    
  },
  event:{
    position: "absolute",
    width: 160,
    height: 170,
    right: -172,
    bottom: -70

  },
  add: {
    left: 100,
    background: "#FCFDFF",
    top: 280
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
    height:580,
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
    width: 150,
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

paybutton: {
    position: "absolute",
    width: 310,
    height: 52,
    top: 500,
    left:30
},
close:{
    position: "absolute",
    width: 40,
    height: 40,
    bottom: 420,
    left:300
}
});

export default OrgPaymentDetails;