import * as React from 'react'
import { View, Text ,StyleSheet } from 'react-native'

export default function Settings({navigation}){
    return(
        <View style={styles.container}>
            <Text>Settings</Text>
        </View>
    );
}
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
   
  });