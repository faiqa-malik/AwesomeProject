import React from "react";
import { StatusBar } from "react-native";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useState } from "react";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
export default function SignUpScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({});
    const navigation = useNavigation();
    const validateForm = () => {
        let error = {};
        if (!email) error.email = "Email is Required";
        if (!password) error.password = "Password is Required";
        setError(error);
        return Object.keys(error).length === 0;
    };
    const handleSignup = async () => {
        if (validateForm()) {
            try {
                // let res = await axios.post('http://127.0.0.1:8081/api/auth/register', { email, password });
                // console.log(res.data);
                // if (res.data.success) {
                navigation.navigate('PublishARide')

                // }
                // else {
                //     console.error('Error:', res.data.message)
                // }
            } catch (error) {
                console.log('Error submitting form:', error.message)
            }

        }
    };
    const handleLoginscr = async () => {

        navigation.navigate('LogInScreen')  //hum na yahan try catch wala kam isliya nahi kia bcz agar mehlay account ha to input danay ki zaroorat nahi paray gi
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Join us via Email</Text>
            <Text style={styles.text1}>We'll send you a verification code</Text>
            <TextInput style={styles.abc}
                placeholder='Your Email'
                keyboardType="email-address"
                onChangeText={(text) => setEmail(text)}

                value={email} />
            {
                error.email ? (<Text style={styles.errortext}>{error.email}</Text>) : null
            }
            <TextInput style={styles.abc} placeholder='Password'
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}

                // keyboardType="password"
                value={password} />
            {
                error.password ? (<Text style={styles.errortext}>{error.password}</Text>) : null
            }
            <TouchableOpacity style={styles.button} onPress={handleSignup}  >
                <Text style={styles.text2}>Next</Text>
            </TouchableOpacity>
            <Text style={styles.text3}>
                Already have an account?
                <TouchableOpacity style={styles.button2} onPress={handleLoginscr}  >
                    <Text style={styles.text4} >Login</Text>
                </TouchableOpacity>




                <StatusBar style='auto' />
            </Text>
        </View>

    );

};
const styles = StyleSheet.create(
    {
        container: {
            justifyContent: 'center',
            flex: 1,

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
            marginRight: 25

        },
        button: {
            backgroundColor: '#167E72',
            justifyContent: 'center',
            padding: 15,
            marginLeft: 50,
            marginRight: 50,
            borderRadius: 10,
            bottom: 30
            // backgroundColor: '#167E72',
            // paddingVertical: 10,
            // paddingHorizontal: 80,
            // borderRadius: 50,

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
            marginTop: 20

        },
        button2: {

            justifyContent: 'center',

        },
        text4: {
            color: '#167E72',

            fontSize: 19.7,
            fontStyle: 'italic',
            fontWeight: 'bold'


        }

    }
);