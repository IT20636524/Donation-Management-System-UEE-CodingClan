import React from 'react'
import { Button, View, StyleSheet, Image, TouchableOpacity, Text, ImageBackground, ScrollView } from 'react-native'
import DonationSuccess from '../modal/DonationSuccess';

export default function MyDonations() {
    const [visible, setVisible] = React.useState(false);
    const localimage = require('../assets/bg-img.png');
    
    return (

        <ImageBackground source={localimage} resizeMode='stretch' style={styles.appContainer}>
            <View style={{ marginTop: 130 }}>
                <ScrollView style={{ width: '100%' }}>
                    <View style={styles.box3}>
                        <View style={styles.box2}>
                            <Image source={require('../assets/user.jpg')} style={styles.img} />
                            <Text style={styles.boxText2}>Anna Wilson</Text>
                        </View>
                        <Text style={styles.boxText1}>LKR 5000</Text>
                    </View>
                    <View style={styles.box3}>
                        <View style={styles.box2}>
                            <Image source={require('../assets/user.jpg')} style={styles.img} />
                            <Text style={styles.boxText2}>Anna Wilson</Text>
                        </View>
                        <Text style={styles.boxText1}>LKR 5000</Text>
                    </View>
                    <View style={styles.box3}>
                        <View style={styles.box2}>
                            <Image source={require('../assets/user.jpg')} style={styles.img} />
                            <Text style={styles.boxText2}>Anna Wilson</Text>
                        </View>
                        <Text style={styles.boxText1}>LKR 5000</Text>
                    </View>
                </ScrollView>
                <DonationSuccess visible={visible}>
                    <View style={{ alignItems: 'center' }}>
                        <View style={styles.header}>
                            <TouchableOpacity onPress={() => setVisible(false)}>
                                <Image source={require('../assets/cross.png')} style={{ width: 30, height: 30 }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Image source={require('../assets/success.png')} style={{ width: 150, height: 150 }} />
                    </View>
                    <Text style={{ marginVertical: 30, fontSize: 20, textAlign: 'center' }}>Donation successful</Text>
                </DonationSuccess>
                <View style={styles.buttonContainer}>
                    {/* <Button title='add donations' onPress={() => setVisible(true)} /> */}
                    <TouchableOpacity onPress={() => setVisible(true)} >
                        <View style={styles.boxContainer}>
                            <View style={styles.box}>
                                <Image source={require('../assets/Plus.png')} style={styles.img2} />
                                <Text style={styles.boxText3}>Give Donations</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
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
    header: {
        width: '100%',
        height: 30,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    box2: {
        backgroundColor: '#fff',
        width: 400,
        alignItems: 'center',
        borderRadius: 10,
        marginHorizontal: 5,
        padding: 5,
        flexDirection: 'row',

    },
    box3: {
        backgroundColor: '#fff',
        width: 400,
        alignItems: 'center',
        borderRadius: 10,
        marginHorizontal: 5,
        padding: 5,
        marginTop: 20
    },

    boxText1: {
        color: '#EF1E43',
        fontSize: 20,
        marginTop: 10,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    boxText2: {
        color: '#06134B',
        fontSize: 20,
        marginTop: 10,
        marginLeft: 40
    },
    boxText3: {
        color: '#06134B',
        fontSize: 20,
        marginTop: 10,
        marginLeft: 0
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2
    },
    img2: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2
    },
    buttonContainer: {
        marginTop: 10,
        width: '50%',
        alignItems: 'flex-end'
    },
    boxContainer: {
        flexDirection: 'row',
        marginTop: 20
    },
    box: {
        backgroundColor: '#91BEF3',
        width: 200,
        alignItems: 'center',
        borderRadius: 10,
        marginHorizontal: 5,
        padding: 5,
        borderColor: '#000000',
        borderWidth: 1,
    },
})
