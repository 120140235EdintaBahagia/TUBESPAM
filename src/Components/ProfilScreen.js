import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import { EvilIcons, AntDesign, Ionicons } from '@expo/vector-icons';

function ProfilScreen({navigation}){
    return (
    <View style={styles.container}>
        <Image
          style={styles.tinyLogo}
          source={require('../Images/profillogin.png')}
          ></Image>
      <Text style = {styles.text1}>Profil Saya</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={30} color="black" style={styles.button1}></AntDesign>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
        <Ionicons name="log-out-outline" size={30} color="black" style={styles.button2}></Ionicons>
      </TouchableOpacity>
      <View style={styles.boxHijau}>
        <Text style={styles.text2}>Sutomo Kartijo</Text>
        <Text style={styles.text2}>tomo_kar@gmail.com</Text>
      </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#B1E4D4",
      alignItems: "center",
      justifyContent: "center",
    },
    tinyLogo: {
        top: 60,
        width: 231,
        height:178,
        marginBottom:-280
    },
    text1:{
        bottom: 10,
        color: "black",
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom:500,
        fontFamily: '',
        top:50
    },
    text2:{
        textAlign: "center",
        color: "#E3F4EF",
        fontSize: 25,
        top: 15,
    },
    button1 :{
        bottom: 480,
        right : 159,
    },
    button2 :{
        bottom: 515,
        left : 159,
    },
    boxHijau:{
        backgroundColor: "#187A6E",
        width: '90%',
        height: 120,
        borderRadius: 15,
        position: "absolute",
        top:360
    }
  });

export default ProfilScreen;
