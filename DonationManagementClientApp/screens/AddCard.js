import { useState } from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';

export default function AddCard() {
    return (
        <View style={styles.appContainer}>
            <Text style={styles.headerText}>Payment Information</Text>
            <View style={styles.inputContainer1}>
                <Text style={styles.labelText}>Credit Card</Text>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.textInput} placeholder='Enter credit card number' />
                    <Image source={require('../assets/credit-card.png')} />
                    <Image source={require('../assets/mastercard.png')} style={styles.img} />
                </View>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.labelText}>Expiration Date</Text>
                <Text style={styles.labelText}>CVV</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput3} placeholder='DD' />
                <Text style={styles.labelText2}>/</Text>
                <TextInput style={styles.textInput3} placeholder='YY' />
                <TextInput style={styles.textInput2} placeholder='CVV' />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        padding: 50,
        backgroundColor: '#3A74CB'
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
        fontSize: 25
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
    }

});
