import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Weather from './Weather'

export default function App() {

  return (
    <View style={styles.container} >
       <Weather zipCode="83120" /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignContent: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
       
  }
})