import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function AddDonation() {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [note, setNote] = useState('');
  function nameHandler(enteredText){
    setName(enteredText);
  }
  function amountHandler(enteredText){
    setAmount(enteredText);
  }
  function paymentMethodHandler(enteredText){
    setPaymentMethod(enteredText);
  }
  function noteHandler(enteredText){
    setNote(enteredText);
  }

  function addDonationHandler(){
    console.log(name);
    console.log(amount);
    console.log(note);
  }


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
  );
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
    marginTop:10,
    flex: 1
  },
  inputContainer2: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '75%',
    padding: 5,
    margin: 5,
    backgroundColor:'#FCFDFF'
  },
  textInput2: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    height:'50%',
    padding: 5,
    margin: 5,
    backgroundColor:'#FCFDFF'
  },
  headerText:{
    color:'#06134B'
  },
  labelText:{
    color:'#FFFFFF'
  },
  labelText2:{
    color:'#FFFFFF',
    marginBottom:10
  }

});
