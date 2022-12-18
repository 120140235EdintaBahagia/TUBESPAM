import { AntDesign } from '@expo/vector-icons';
import React from "react";
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';

export default function DetailScreen({navigation,route,props}){
    return (
            <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <View style={styles.button}>
                <AntDesign name="back" size={24} color="black" style={styles.button} />
                </View>
            </TouchableOpacity>
            <View style={styles.baseText}>

            <Text style={styles.textJudul}>{route.params.name}</Text>
            </View>
            <View>
            <Image source={require('../Images/nasgor.png')} style={{height:168, width:345, margin:20 }} />
            </View>
            <View style={styles.boxHijau}>
            <Text style={styles.textJudulBahan}>Bahan</Text>
            <Text style={styles.textBahan}>{route.params.bahan1}</Text>
            <Text style={styles.textBahan}>{route.params.bahan2}</Text>
            <Text style={styles.textBahan}>{route.params.bahan3}</Text>
            <Text style={styles.textBahan}>{route.params.bahan4}</Text>
            </View>
            <View style={styles.boxHijau2}>
            <Text style={styles.textJudulCara}>Cara  Membuat</Text>
            <Text style={styles.textCara}>1. {route.params.cara1}</Text>
            <Text style={styles.textCara}>2. {route.params.cara2}</Text>
            <Text style={styles.textCara}>3. {route.params.cara3}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: "#B1E4D4"
  },
  baseText: {
    justifyContent: "center",
    alignItems:"center"
  },
  textJudul:{
    marginTop:35,
    fontWeight:"bold",
    fontSize:20,
  },
  button: {
    top: 30,
    left : 15,
  },
  boxHijau:{
    backgroundColor: "#187A6E",
    width: '90%',
    height: 170,
    borderRadius: 15,
    left:20,
    top:40,
},
boxHijau2:{
    backgroundColor: "#187A6E",
    width: '90%',
    height: 170,
    borderRadius: 15,
    left:20,
    top:80,
  },
  textJudulBahan:{
    fontWeight:"bold",
    fontSize:24,
    marginBottom:10,
    marginTop:15,
    marginLeft:10,
    color:"white"
  },
  textJudulCara:{
    fontWeight:"bold",
    fontSize:24,
    marginBottom:10,
    marginTop:15,
    marginLeft:10,
    color:"white"
  },
  textBahan:{
    marginLeft:10,
    color:"white"
  },
  textCara:{
    marginLeft:10,
    color:"white"
  }
});
