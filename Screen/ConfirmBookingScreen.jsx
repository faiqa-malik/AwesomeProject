import React from "react";
import { StatusBar } from "react-native";
import {useDispatch} from 'react-redux';
import FontAwesome from 'react-native-vector-icons/FontAwesome.js';
import { View, Text, StyleSheet, TextInput, Image, FlatList } from 'react-native'
import {setcurrentLocations} from '../redux/locationAction'
//import { useSelector } from 'react-redux';
//import { useState } from "react";

export default function ConfirmBookingScreen({ navigation }) {
    const dispatch=useDispatch();
    const handleCurrentLocation=(location)=>{
        dispatch(setcurrentLocations(location));
    };
    return (

        <View style={StyleSheet.container}>
            {/* <Text>Pickup Location: {pickup}</Text>
            <Text>Destination Location: {destination}</Text> */}
            <Image source={require("../assets/profile.webp")} style={styles.image} />
            <TextInput style={styles.ab} placeholder='Driver name'>
            </TextInput>
            <FontAwesome name="comments" size={30} marginLeft={325} top={10} color="#167E72" onPress={() => navigation.navigate('MessageScreen')} />
            <Image source={require("../assets/corolla.jpg")} style={styles.image} />
            <TextInput style={styles.ab} placeholder='car name'>
            </TextInput>
            <Text style={styles.text}>Total price for the ride</Text>
        </View>




    );



}
const styles = StyleSheet.create(
    {
        container: {
            justifyContent: 'center',
            flex: 1,

        },
        abc: {
            top: 25,
            marginLeft: 30,
            margin: 3
        },
        image: {
            width: 58,
            height: 58,
            top: 80,
            marginLeft: 30
        },
        ab: {
            marginLeft: 40,
            textAlign: 'center',
            top: 40,
            marginLeft: 1

        },
        text: {
            marginLeft: 30,
            top: 80,
            fontSize: 20
        }

    });