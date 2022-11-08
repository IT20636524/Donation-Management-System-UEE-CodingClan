import { useState } from 'react';
import { Button, Image, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Profile() {
    const localimage=require('../assets/bg-img.png')
    return (

        <ImageBackground source={localimage} resizeMode='stretch' style={styles.appContainer}>
            <Text style={styles.headerText}>Profile</Text>  
            <Image source={require('../assets/user.jpg')} style={{width:100,height: 100, borderRadius: 100/ 2}} />
            <View style={styles.textContainer}>
                <Text>Name</Text>
                <Text >Anna Wilson</Text>
            </View>
            <View style={styles.textContainer}>
                <Text>Email</Text>
                <Text >anna@gmail.com</Text>
            </View>
            <View style={styles.textContainer}>
                <Text>Contact</Text>
                <Text >0775896546</Text>
            </View>
            <View style={styles.boxContainer}>

            </View>
            
        </ImageBackground> 


        
    )
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        padding: 50,
        ImageBackground:require('../assets/bg-img.png'),
        alignItems:'center'
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    inputContainer1: {
        marginTop: 10,
    },
    inputContainer2: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '65%',
        padding: 6,
        margin: 5,
        backgroundColor: '#FCFDFF',
        fontSize:15
    },
    textInput2: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '30%',
        padding: 6,
        margin: 5,
        backgroundColor: '#FCFDFF',
        fontSize:15
    },
    textInput3: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '15%',
        padding: 6,
        margin: 5,
        backgroundColor: '#FCFDFF',
        fontSize:15
    },
    headerText: {
        color: '#06134B',
        fontSize: 30,
        marginTop:150,
        justifyContent:'center',

    },
    labelText: {
        color: '#FFFFFF',
        fontSize:15
    },
    labelText2: {
        color: '#FFFFFF',
        marginBottom: 10,
        fontSize:30
    },
    img:{
        marginLeft:5
    },
    textContainer:{
        flexDirection:'row',
        flex:1,
        justifyContent:'space-between'
    },
    boxContainer:{
        flex:5,
        flexDirection:'row'
    }

});
