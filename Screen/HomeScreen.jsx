import React from 'react';
import { View, Text, Button, StyleSheet, Image ,TouchableOpacity } from 'react-native';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Ride Together</Text>
      <Text style={styles.subtitle}>Share the Journey, Share the Fun</Text>
      <View style={styles.imageContainer}>
        <Image 
          source={{uri: 'family-travel-by-car-parents-260nw-2431573533.webp'}}
          style={styles.image}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonContainer} onPress={() => handleSubmit(navigation.navigate('signUp'))} >
        <Text >SignUp</Text>
          </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer1} onPress={() => handleSubmit(navigation.navigate('LogInScreen'))} >
        <Text >I have already an account</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff'
  },
  imageContainer: {
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain'
  },
  title: {
    
    fontSize: 32,
    fontWeight: 'bold',
    color: '#167E72',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 24,
  }
});
