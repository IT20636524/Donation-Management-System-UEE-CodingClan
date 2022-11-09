import React, { useState } from "react";
import { Image, TouchableOpacity, ImageBackground, StyleSheet, View, Button, TextInput, Alert, Modal, Text, Pressable, Platform } from "react-native";
import {DateTimePicker} from '@react-native-community/datetimepicker';

const localimage = require("../assets/paydash.png");

const PaymentDashboard = (props) => {

    const [modalVisible, setModalVisible] = useState(false);
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [text, setText] = useState('Empty');

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'android');
        setDate(currentDate);

        let tempDate = new Date(currentDate);
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' +  tempDate.getFullYear();
        setText(fDate)

        const showMode=(currentMode)=>{
            setShow(true);
            setMode(currentMode);
        }
    }


    const onPressorg = () => {
        props.navigation.navigate('PaymentDashboard');
    };

    const onPressmgr = () => {
        props.navigation.navigate('PaymentDashboard');
    };

    return (
        <ImageBackground source={localimage} resizeMode='cover' style={styles.container}>

            <TouchableOpacity onPress={onPressorg}>
                <Image source={require("../assets/orgbtn.png")} style={styles.org}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressmgr} >
                <Image source={require("../assets/evmgrbtn.png")} style={styles.mgr}></Image>
            </TouchableOpacity>
            <Image source={require("../assets/dashanalytic.png")} style={styles.dash}></Image>


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
                            <Text style={{color:"#000000", fontSize: 30, textAlign:"center",bottom:20}}>Add Payment</Text>
                            <View>
                                <View style={styles.inputContainer}>
                                    <Text style={styles.labelText}>Organization</Text>
                                    <TextInput style={styles.textInput} placeholder='Enter Organization' />
                                </View>
                                <View style={styles.inputContainer}>
                                    <Text style={styles.labelText}>Name</Text>
                                    <TextInput style={styles.textInput} placeholder='Enter name' />
                                </View>
                                <View style={styles.inputContainer}>
                                    <Text style={styles.labelText}>Paid Amount</Text>
                                    <TextInput style={styles.textInput} placeholder='Enter amount' />
                                </View>
                                <View style={styles.inputContainer}>
                                    <Text style={{top:5,fontSize: 18}}>Date</Text>
                                    
                                    {/* <TouchableOpacity onPress={() => showMode('date')}> */}
                                    <Image source={require("../assets/datepickpng.png")}></Image>
                                  
                                  {/* </TouchableOpacity> */}
                                   

                                    {show && (
                                        <DateTimeInput 
                                            testID = 'dateTimePicker'
                                            value = {date}
                                            mode={mode}
                                            is24Hour={true}
                                            display='default'
                                            onChange={onChange}
                                        
                                       />
                                    )}                                
                                </View>
                                <View style={styles.inputContainer}>
                                    <Text style={styles.labelText}>Estimated Details</Text>
                                    <TextInput style={styles.textInput} placeholder='Upload File' />
                                   
                                   
                                </View>
                                <TouchableOpacity >
                                    <Image style={{width:196, height:52, top:15, left:35}} source={require("../assets/fileinput.png")}></Image>
                                  
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
                    <Image source={require("../assets/addpaybtn.png")} style={styles.add}></Image>
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
        backgroundColor: "#fff"
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
        top: 240
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
        width: '45%',
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
        top: 370,
        left:20
    },
    close:{
        position: "absolute",
        width: 40,
        height: 40,
        bottom: 300,
        left:260
    }
});

export default PaymentDashboard;