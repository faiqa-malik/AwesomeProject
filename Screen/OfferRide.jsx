import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';
export default function OfferARide() {
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropLocation, setDropLocation] = useState('');
  const [pickupCoordinates, setPickupCoordinates] = useState(null);
  const [dropCoordinates, setDropCoordinates] = useState(null);
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const navigation = useNavigation();
  const [region, setRegion] = useState({
    latitude: 31.5499,
    longitude: 74.3473,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  });

  const handleOfferRide = async () => {
    if (pickupCoordinates && dropCoordinates) {
      try {
        // // const response = await axios.post(
        // //   'https://api.openrouteservice.org/v2/directions/driving-car',
        //   {
        //     coordinates: [
        //       [pickupCoordinates.longitude, pickupCoordinates.latitude],
        //       [dropCoordinates.longitude, dropCoordinates.latitude],
        //     ],
        //   },
        //   {
        //     headers: {
        //       'Authorization': OPENROUTESERVICE_API_KEY,
        //       'Content-Type': 'application/json'
        //     }
        //   }
          navigation.navigate('otpScreen')
        // );

       // const { routes } = response.data;
        // if (routes && routes.length > 0) {
        //   //const route = routes[0];
        //   // setDistance(route.summary.distance / 1000); // Convert distance to kilometers
        //   // setDuration(route.summary.duration / 60); // Convert duration to minutes
        // } else {
        //   console.error('No routes found');
        // }
      } catch (error) {
        console.error('Error finding route:', error);
      }
    }
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const handleTimeChange = (event, selectedTime) => {
    const currentTime = selectedTime || date;
    setShowTimePicker(Platform.OS === 'ios');
    setTime(currentTime);
  };

  const showDatePickerModal = () => {
    setShowDatePicker(true);
  };

  const showTimePickerModal = () => {
    setShowTimePicker(true);
  };

  const geocodeLocation = async (location, setCoordinates) => {
    try {
      //   const response = await axios.get(https://api.openrouteservice.org/geocode/search, {
      //     params: {
      //       api_key: OPENROUTESERVICE_API_KEY,
      //       text: location,
      //     },
      //   });
      const { features } = response.data;
      if (features.length > 0) {
        const { geometry } = features[0];
        const coordinates = {
          latitude: geometry.coordinates[1],
          longitude: geometry.coordinates[0],
        };
        setCoordinates(coordinates);
        setRegion({
          ...region,
          latitude: coordinates.latitude,
          longitude: coordinates.longitude,
        });
      } else {
        console.error('No location found');
      }
    } catch (error) {
      console.error('Error geocoding location:', error);
    }

  };

  return (
    <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Select Pickup Location"
          value={pickupLocation}
          onChangeText={(text) => {
            setPickupLocation(text);
            geocodeLocation(text, setPickupCoordinates);
          }}
        />
        <TextInput
          style={styles.input}
          placeholder="Select Drop Location"
          value={dropLocation}
          onChangeText={(text) => {
            setDropLocation(text);
            geocodeLocation(text, setDropCoordinates);
          }}
        />
        
     <TouchableOpacity style={styles.datePickerButton} onPress={showDatePickerModal}>
          <Icon name="calendar" size={20} color="gray" />
          <Text style={styles.datePickerText}>{date.toDateString()}</Text>
        </TouchableOpacity>

        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={handleDateChange}
            minimumDate={new Date(2020, 0, 1)}
            maximumDate={new Date(2030, 11, 31)}
          />
        )}

        <TouchableOpacity style={styles.datePickerButton} onPress={showTimePickerModal}>
          <Icon name="clock-o" size={20} color="gray" />
          <Text style={styles.datePickerText}>{date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
        </TouchableOpacity>

        {showTimePicker && (
          <DateTimePicker
            value={date}
            mode="time"
            display="default"
            onChange={handleTimeChange}
          />
        )}
        
      <TextInput
        style={styles.input}
        placeholder="No of Seats"

      />
      <TextInput
        style={styles.input}
        placeholder="Picker Per Seat"

      />
      <TouchableOpacity style={styles.button} onPress={handleOfferRide}>
          <Text style={styles.buttonText}>Find A Ride</Text>
        </TouchableOpacity>
    </View>


  );
};

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  datePickerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
  },

  pickerContainer: {

    width: '100%',
    overflow: 'hidden',
    borderColor: 'lightgrey',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,


  },
  picker: {
    width: '100%',
    height: 50,
  },
  // icon: {
  //   marginRight: 10,

  // },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },


  button: {
    backgroundColor: '#167E72',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',

  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});