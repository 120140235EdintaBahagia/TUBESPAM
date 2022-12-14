import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, titleText, Image, View } from 'react-native';


export default function SplashScreen ({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.picture} source={require('./src/Images/Logo.jpeg')} />
      <Text style={styles.baseText}>MENUWQQ</Text>
        </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B8FCFC',
    alignItems: 'center',
  },
  picture: {
    resizeMode: "contain",
    width: 290,
    height: 216,
    top : 300
  },
  baseText: {
    fontSize: 20,
    fontWeight: "bold",
    width:110,
    height:250,
    top: 330
  }
});



