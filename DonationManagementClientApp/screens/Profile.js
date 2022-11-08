import * as React from 'react'
import { useState } from 'react';
import { Button, Image, ImageBackground, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

export default function Profile({navigation}) {
    const localimage = require('../assets/bg-img.png');
    return (

        <ImageBackground source={localimage} resizeMode='stretch' style={styles.appContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Profile</Text>
                <TouchableOpacity>
                    <Image source={require('../assets/Vector.png')} style={{height:20,width:20,marginLeft:20,marginTop:10}} />
                </TouchableOpacity>
            </View>
            <Image source={require('../assets/user.jpg')} style={{ width: 150, height: 150, borderRadius: 150 / 2 }} />
            <View style={styles.textContainer}>
                <Text style={styles.labelText}>Name</Text>
                <Text style={styles.valueText}>Anna Wilson</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.labelText}>Email</Text>
                <Text style={styles.valueText}>anna@gmail.com</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.labelText}>Contact</Text>
                <Text style={styles.valueText}>0775896546</Text>
            </View>
            <View style={styles.boxContainer}>
                <View style={styles.box}>
                    <Image source={require('../assets/badge.png')} style={styles.img} />
                    <Text style={styles.boxText1}>Votes</Text>
                    <Text style={styles.boxText2}>10</Text>
                </View>
                <View style={styles.box}>
                    <Image source={require('../assets/donation.png')} style={styles.img} />
                    <Text style={styles.boxText1}>Total Donations</Text>
                    <Text style={styles.boxText2}>2</Text>
                </View>
            </View>

        </ImageBackground>



    )
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        padding: 50,
        ImageBackground: require('../assets/bg-img.png'),
        alignItems: 'center'
    },
    headerText: {
        color: '#06134B',
        fontSize: 30,
        justifyContent: 'center',
        fontWeight: 'bold'
    },
    textContainer: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'flex-start',
        marginTop: 0,
        marginLeft: 0
    },
    headerContainer:{
        flexDirection:'row',
        justifyContent: 'space-between',
        marginTop: 130
    },
    boxContainer: {
        flex: 6,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    box: {
        backgroundColor: '#fff',
        width: 200,
        alignItems: 'center',
        borderRadius: 10,
        marginHorizontal: 5,
        padding: 5
    },
    boxText1: {
        color: '#06134B',
        fontSize: 20,
        marginTop: 10
    },
    boxText2: {
        color: '#FF0000',
        fontSize: 20,
        marginTop: 5
    },
    img: {
        width: 100,
        height: 100
    },
    labelText: {
        fontSize: 18,
        fontWeight: '200',
        textAlign: 'left',
        marginLeft: 0,
        alignContent: 'flex-start'
    },
    valueText: {
        fontSize: 18,
        fontWeight: '200',
        textAlign: 'right',
        marginLeft: 20,
        alignContent: 'flex-end'
    },
    iconStyle: {
        fontSize: 20,
        color: 'black',
    },

});
