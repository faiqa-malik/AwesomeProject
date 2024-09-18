import React, { useState, useRef } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";

export default function ResetPassword() {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [email, setEmail] = useState('');
  const [newpass, setnewpass] = useState('');
  const navigation = useNavigation();
  const [error, setError] = useState('');

  // Initialize an array to hold input references
  const inputs = useRef([]);

  const handleOTPChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input field automatically
    if (value !== '' && index < otp.length - 1) {
      inputs.current[index + 1].focus();
    }
  }

  const validateForm = () => {
    let error = {};
    if (!email) error.email = 'Email is required';
    if (!newpass) error.newpass = 'New Password is required';
    setError(error);
    return Object.keys(error).length === 0;
  }

  const handleReset = async () => {
    if (validateForm()) {
      const token = await AsyncStorage.getItem('token');
      if (!token) throw new Error('Token not found');

      const otp_code = otp.join('');  // Combine the OTP input fields
      try {
        const response = await axios.post('https://ride-together-mybackend.onrender.com/api/v1/auth/reset',
          { email, otp_code, newPassword: newpass },
          {
            headers: {
              Authorization: `${token}`,
              'Content-Type': 'application/json',
            },
          }
        );

        console.log(response.data);
        Alert.alert('Success', 'OTP sent successfully');
      } catch (error) {
        console.error('Error creating ride:', error.response ? error.response.data : error.message);
        Alert.alert('Error', error.response ? error.response.data.message : error.message);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={{ fontSize: 38, marginBottom: 10, fontStyle: 'italic' }}>Reset Password</Text>
        <Text style={{ marginBottom: 30, fontSize: 15, textAlign: 'center' }}>Enter a password to reset code</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        keyboardType="email-address"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      {error.email && <Text style={styles.errorText}>{error.email}</Text>}

      <View style={styles.inputContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.input}
            maxLength={1}
            onChangeText={(value) => handleOTPChange(index, value)}
            value={digit}
            keyboardType="numeric"
            ref={(input) => { inputs.current[index] = input; }}  // Store references in the array
          />
        ))}
      </View>

      <TextInput
        style={styles.input}
        placeholder="Enter new Password"
        secureTextEntry={true}  // This will hide the password input
        onChangeText={(text) => setnewpass(text)}
        value={newpass}
      />
      {error.newpass && <Text style={styles.errorText}>{error.newpass}</Text>}

      <TouchableOpacity style={styles.button} onPress={handleReset}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#167E72',
    paddingVertical: 10,
    paddingHorizontal: 80,
    borderRadius: 50,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center', // Center inputs
    width: '20%', // Full width container
    marginBottom: 10,
    paddingVertical: 20, // Vertical padding for spacing
    //borderBottomWidth: 2, // Bottom border only for modern style


  }
});

