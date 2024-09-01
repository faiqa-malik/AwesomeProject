import React from "react";
import { Alert, StatusBar } from "react-native";
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity } from 'react-native';
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
export default function OtpScreen() {
    const [otp,setOtp]=useState('','','','');
    const navigation=useNavigation();
    const handleOtpchange=(index,value)=>{
        const newOtp=[...otp];
        newOtp[index]=value;
        setOtp(newOtp);
        navigation.navigate('PassengerInfo')

    };
    return (
        <View style={styles.container}>
            <Text style={styles.text}>We'll send you a code</Text>
            <Text style={styles.text1}>We sent it via Email</Text>
            <View style={styles.codeContainer}>
                <TextInput style={styles.codeInput} maxLength={1} keyboardType="numeric" 
                onChangeText={(value) => handleOtpchange(index, value)}
                />
                <TextInput style={styles.codeInput} maxLength={1} keyboardType="numeric"
                onChangeText={(value) => handleOtpchange(index, value)}
                />
                <TextInput style={styles.codeInput} maxLength={1} keyboardType="numeric"
                onChangeText={(value) => handleOtpchange(index, value)}
                 />
                <TextInput style={styles.codeInput} maxLength={1} keyboardType="numeric" 
                onChangeText={(value) => handleOtpchange(index, value)}
                />
            </View>
            <TouchableOpacity style={styles.button} onPress={handleOtpchange}>
                <Text style={styles.text2}>Next</Text>
            </TouchableOpacity>
        </View>

    );
};
const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            // backgroundColor: '#00796B',
            alignItems: 'center',
            justifyContent: 'center',

        },
        text: {
            textAlign: 'center',
            fontWeight: 'bold',
            fontStyle: 'italic',

            fontSize: 32,
            // position:'absolute',
            // top:50,
            bottom: 100,

        },
        text1: {
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 20,
            bottom: 90,

        },
        codeContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
            // backgroundColor: 'grey',
        },

        codeInput: {
            width: 50,
            height: 50,
            borderWidth: 1,
            borderColor: 'lightgrey',
            backgroundColor:'lightgrey',
            textAlign: 'center',
            marginHorizontal: 5,
            fontSize: 24,
        },
        button: {
            backgroundColor: '#167E72',
            justifyContent: 'center',
            padding: 15,
            marginLeft: 50,
            marginRight: 50,
            borderRadius: 10,
            bottom: 3,

        },
        text2: {
            justifyContent: 'center',
            textAlign: 'center',
            fontSize: 25,
            color: 'white',      //change text color
            fontStyle: 'italic',
            fontWeight: 'bold',

        }
    }
);