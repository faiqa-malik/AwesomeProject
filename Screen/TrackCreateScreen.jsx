import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Picker, TouchableOpacity } from 'react-native';
import {Calendar} from "react-native-calendars";
import FontAwesome from 'react-native-vector-icons/FontAwesome.js';
import Map from '../components/Map.jsx'
const TrackCreateScreen = ({navigation}) => {
    const [date, setDate] = useState(new Date());
    // const handleTrackCreateScreen = () => {
    //     // Handle offering a ride logic here
    //     console.log('Offer a ride with:', { date });
    //   };
    return (

        <View style={styles.container}>
            <Map />
            <TextInput style={styles.textinput} placeholder="Enter pickup location" placeholderTextColor='white'></TextInput>
            <TextInput style={styles.textinput} placeholder="Enter drop location" placeholderTextColor='white' ></TextInput>
            <TextInput style={styles.textinput}  value={date}  placeholder="Enter time and Date" placeholderTextColor='white' ></TextInput>
            <TouchableOpacity onPress={()=> this.calendar.onPressDate()}>
                <FontAwesome name ="calendar" size={20}/>
            </TouchableOpacity>
            <Calendar
                style={styles.calendar}
                date={date}
                mode="date"
                placeholder="Departure Date & Time"
                format="YYYY-MM-DD HH:mm"
                minDate="2020-01-01"
                maxDate="2030-12-31"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                onDateChange={(date) => { setDate(date) }}
            />
           <TouchableOpacity onPress={() => handleSubmit(navigation.navigate('ConfirmBookingScreen'))} >
            <Text style={styles.textinput1}>Find a Ride</Text>
           </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create(
    {
        container: {
            justifyContent: 'center',
            flex: 1,

        },
        textinput: {
            borderWidth: 2,
            //borderColor: 'black',
            backgroundColor: '#167E72',
            padding: 8,          //box ka ander uper neechay sa space
            margin: 10,         //2 text boxes ka mid ma space
            width: 325,
            justifyContent: 'center',
            top: 100,
            marginLeft: 25,
            marginRight: 25,


        },
       calendar: {
            width: 250,
            marginBottom: 20,
            justifyContent: 'center',
        },
        textinput1: {
            borderWidth: 2,
            //borderColor: 'black',
            backgroundColor: '#167E72',
            padding: 8,          //box ka ander uper neechay sa space
            margin: 10,         //2 text boxes ka mid ma space
            width: 325,
            justifyContent: 'center',
            bottom: 50,
            marginLeft: 25,
            marginRight: 25,


        }

    }
);

export default TrackCreateScreen;