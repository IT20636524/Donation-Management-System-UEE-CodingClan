import React from "react";
import { Image, TouchableOpacity, ImageBackground, StyleSheet, View, Button, Text } from "react-native";

const localimage = require('../assets/bg-img.png');

const Home = (props) => {

  //error
  const onPress = () => {
    props.navigation.navigate('MyDonations');
  };

  return (

    <ImageBackground source={localimage} resizeMode='stretch' style={styles.appContainer}>
      {/* <Button title="add Donation" color="#06134B" onPress={onPress}/> */}

      <View style={styles.box3}>
        <View style={styles.box2}>
          <Image source={require('../assets/add-donation.png')} style={styles.img} />
          <Text style={styles.boxText2}>Be a Good Person</Text>
        </View>
        <Button title="start Now" onPress={onPress}/>
      </View>
      <View style={styles.boxContainer}>
        <View style={styles.box}>
          <Image source={require('../assets/donation-2.png')} style={styles.img} />
          <Text style={styles.boxText1}>Votes</Text>
        </View>
        <View style={styles.box}>
          <Image source={require('../assets/monthly-donation.png')} style={styles.img} />
          <Text style={styles.boxText1}>Total Donations</Text>
        </View>
      </View>
      <View style={styles.boxContainer}>
        <View style={styles.box}>
          <Image source={require('../assets/shop-for-donate.png')} style={styles.img} />
          <Text style={styles.boxText1}>Votes</Text>
        </View>
        <View style={styles.box}>
          <Image source={require('../assets/donate-via-phone.png')} style={styles.img} />
          <Text style={styles.boxText1}>Total Donations</Text>
        </View>
      </View>
    </ImageBackground>

  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    ImageBackground: require('../assets/bg-img.png'),
    alignItems: 'center'
  },
  boxContainer: {
    flexDirection: 'row',
    marginTop: 20
  },
  box: {
    backgroundColor: '#fff',
    width: 200,
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 5,
    padding: 5
  },
  box2: {
    backgroundColor: '#06134B',
    width: 400,
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 5,
    padding: 5,
    flexDirection: 'row'
  },
  box3: {
    backgroundColor: '#06134B',
    width: 400,
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 5,
    padding: 5,
    marginTop:130
  },

  boxText1: {
    color: '#06134B',
    fontSize: 20,
    marginTop: 10
  },
  boxText2: {
    color: '#fff',
    fontSize: 30,
    marginTop: 10
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

export default Home;