import React from "react";
import { Alert, StatusBar } from "react-native";
import {View,Text,StyleSheet,TextInput, TouchableOpacity} from 'react-native';
import { useState } from "react";
export default function PassengerInfo({ navigation }){
    const [name, setName] = useState("");
    const [phoneno, setPhoneno] = useState("");
    const [errors, setErrors] = useState({});
    const validateForm = () => {
        let errors = {};
        if (!name) errors.email = "Name is Required";
        if (!phoneno) errors.password = "Phone no is Required";
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const handleSubmit = () => {
        if (validateForm()) {
            console.log("Submitted", name, phoneno);
            setName("");
            setPhoneno("");
            setErrors({});
            //  navigation.navigate('NextScreen');

        }
    };

    return(
        <View style={styles.container}>
        <Text style={styles.text}>Welcome to Ride!</Text>
        <Text style={styles.text1}>Please introduce yourself</Text>
        <TextInput style={styles.abc} placeholder='Name' />
        {
            errors.email ? (<Text style={styles.errortext}>{errors.email}</Text>) : null
        }
        <TextInput style={styles.abc} placeholder='Phone no' />
        {
            errors.password ? (<Text style={styles.errortext}>{errors.password}</Text>) : null
        }
        <TouchableOpacity style={styles.button} onPress={() => handleSubmit(navigation.navigate('ConfirmBookingScreen'))}  >
            <Text style={styles.text2}>Next</Text>
        </TouchableOpacity>
       



        <StatusBar style='auto' />
    </View>

    );

}
const styles=StyleSheet.create(
    {
        container:{
            justifyContent:'center',
            flex:1,
            
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
        abc: {
            borderWidth: 2,
            borderColor: 'lightgrey',
            backgroundColor: 'lightgrey',
            padding: 8,          //box ka ander uper neechay sa space
            margin: 10,         //2 text boxes ka mid ma space
            width: 325,
            justifyContent: 'center',
            bottom: 50,
            marginLeft: 25,
            marginRight: 25,

        },
        button: {
            backgroundColor: '#167E72',
            justifyContent: 'center',
            padding: 15,
            marginLeft: 50,
            marginRight: 50,
            borderRadius: 10,
            bottom: 30,

        },
        text2: {
            justifyContent: 'center',
            textAlign: 'center',
            fontSize: 25,
            color: 'white',      //change text color
            fontStyle: 'italic',
            fontWeight: 'bold',

        },
        errortext: {
            color: 'red',
            marginBottom: 5,
            justifyContent: 'center',
            margin: 5,         //2 text boxes ka mid ma space
            width: 325,
            bottom: 50,
            marginLeft: 25,
            marginRight: 25,

        },
        text3: {
            justifyContent: 'center',
            textAlign: 'center',
            fontSize: 19,
            color: 'black',      //change text color
            fontStyle: 'italic',
            fontWeight: 'bold',

        },
        // button2:{
            
        //     justifyContent: 'center',
        //     padding: 15,
        //     marginLeft: 50,
        //     marginRight: 50,
        //     borderRadius: 10,
        //     bottom: 30,

        // },
        text4:{
            color:'#167E72',
            textAlign: 'center',
            fontSize: 19,
            fontStyle: 'italic',
            fontWeight: 'bold',
           
        }

    }
);