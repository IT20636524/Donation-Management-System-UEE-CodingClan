import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function AddCard() {
  return (
    <View style={styles.appContainer}>
      <Text style={styles.headerText}>Add Donations</Text>
      <View style={styles.inputContainer1}>
        <View style={styles.inputContainer}>
          <Text style={styles.labelText}>Name</Text>
          <TextInput style={styles.textInput} placeholder='Enter name' onChangeText={nameHandler} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.labelText}>Amount</Text>
          <TextInput style={styles.textInput} placeholder='Enter amount' onChangeText={amountHandler} />
        </View>
      </View>
      <View style={styles.inputContainer1}>
        <Text style={styles.labelText2}>Payment Method</Text>
        <Button title='Add Card' />
      </View>
      <View style={styles.inputContainer2}>
        <Text style={styles.labelText}>Note(Optional)</Text>
        <TextInput style={styles.textInput2} placeholder='Enter note' onChangeText={noteHandler} />
      </View>
      <View >
        <Button title='Donate' color="#06134B" onPress={addDonationHandler}/>
      </View>
    </View>
  )
}
