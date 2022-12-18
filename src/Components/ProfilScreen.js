import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';

import { EvilIcons } from '@expo/vector-icons';

function ProfilScreen(){
    return (
    <View style={styles.container}>
        <Image
          style={styles.tinyLogo}
          source={require('../Images/profillogin.png')}
          ></Image>
      <View style = {{alignItems: "center", width:100}}>
      </View>
      <Text style = {{color: "black", fontSize: 25, fontWeight: 'bold', marginBottom:400}}>Profil Saya</Text>
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
        width: 231,
        height:178,
        marginBottom:-300
      },
  });



export default ProfilScreen;