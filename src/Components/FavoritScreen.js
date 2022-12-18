import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import { AntDesign, } from '@expo/vector-icons';

function FavoritScreen({navigation}){
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Resep Favorit Saya</Text>
        <View style={styles.box1}>
            <Text style={styles.textkotak}>Nasi Goreng</Text>
            <Image style={styles.picture} source={require('../Images/nasgor.jpeg')}></Image>
        </View>
        <View style={styles.box2}>
            <Text style={styles.textkotak}>Mie Goreng</Text>
            <Image style={styles.picture} source={require('../Images/Migor.jpeg')}></Image>
        </View>
        <View style={styles.box3}>
            <Text style={styles.textkotak}>Ayam Bakar</Text>
            <Image style={styles.picture} source={require('../Images/Abar.jpeg')}></Image>
        </View>
        <View style={styles.box4}>
            <Text style={styles.textkotak}>Telur Dadar Crispy</Text>
            <Image style={styles.picture} source={require('../Images/TelurDdrCr.jpeg')}></Image>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: "#B1E4D4"
    },
    text:{
        fontSize: 25,
        bottom: 310,
        textAlign: 'center',
        fontWeight: 'bold',
        top:-270
    },
    button1 :{
        bottom: 352,
        right : 160,
    },
    box1:{
        backgroundColor: "#3ABD8F",
        width: 168,
        height: 150,
        borderRadius: 15,
        position: "absolute",
        left: 10,
        top: 180 
    },
    box2:{
        backgroundColor: "#3ABD8F",
        width: 168,
        height: 150,
        borderRadius: 15,
        position: "absolute",
        right: 10,
        top: 180 
    },
    box3:{
        backgroundColor: "#3ABD8F",
        width: 168,
        height: 150,
        borderRadius: 15,
        position: "absolute",
        left: 10,
        top:380
    },
    box4:{
        backgroundColor: "#3ABD8F",
        width: 168,
        height: 150,
        borderRadius: 15,
        position: "absolute",
        right: 10,
        top:380
    },
    textkotak:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffff',
        textAlign: 'center',
        top: 110
    },
    picture:{
        alignItems: 'center',
        height:80, 
        width:100, 
        margin:20, 
        top:-20, 
        left:15, 
        
    }
});

export default FavoritScreen;