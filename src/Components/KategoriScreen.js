import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image } from 'react-native';
import {FontAwesome} from "@expo/vector-icons"

const KategoriScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.baseText}>
      Kategori Makanan
      </Text>
      
      <View style={styles.boxHijau}>
        <Text style={styles.text1}>Nasi</Text>
        <Image source={require('../Images/nasgor.jpeg')} style={{height:80, width:80, margin:20 }} />
        <Text style={{height:80, width:100, margin:20, top:-35 }} >Nasi Goreng</Text>
        <Image source={require('../Images/nasihainan.jpg')} style={{height:80, width:80, margin:20, top:-240, left:120 }} />
        <Text style={{height:80, width:100, margin:20, top:-35, left:123, top:-275 }} >Nasi Hainan</Text>
        <Image source={require('../Images/nasilemak.jpg')} style={{height:80, width:80, margin:20, top:-480, left:225 }} />
        <Text style={{height:80, width:100, margin:20, top:-35, left:225, top:-515 }} >Nasi Lemak</Text>
      </View>
      <View style={styles.boxHijau2}>
      <Text style={styles.text1}>Ayam</Text>
      <Image source={require('../Images/Abar.jpeg')} style={{height:80, width:80, margin:20 }} />
        <Text style={{height:80, width:100, margin:20, top:-35 }} >Ayam Bakar</Text>
        <Image source={require('../Images/ayamsuir.jpg')} style={{height:80, width:80, margin:20, top:-240, left:120 }} />
        <Text style={{height:80, width:100, margin:20, top:-35, left:123, top:-275 }} >Ayam Suir</Text>
        <Image source={require('../Images/ayamgeprek.jpg')} style={{height:80, width:80, margin:20, top:-480, left:225 }} />
        <Text style={{height:80, width:100, margin:20, top:-35, left:225, top:-515 }} >Ayam Geprek</Text>
      </View>
      <View style={styles.boxHijau3}>
      <Text style={styles.text1}>Mie</Text>
      <Image source={require('../Images/Migor.jpeg')} style={{height:80, width:80, margin:20 }} />
        <Text style={{height:80, width:100, margin:20, top:-35 }} >Mie Goreng</Text>
        <Image source={require('../Images/jjajangmyeon.jpg')} style={{height:80, width:80, margin:20, top:-240, left:120 }} />
        <Text style={{height:80, width:100, margin:20, top:-35, left:123, top:-275 }} >Jjajangmyeon</Text>
        <Image source={require('../Images/yamin.jpg')} style={{height:80, width:80, margin:20, top:-480, left:225 }} />
        <Text style={{height:80, width:100, margin:20, top:-35, left:225, top:-515 }} >Mie Yamin</Text>
      </View>
    </View>    
  );
};



const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#B1E4D4',
  },
  baseText: {
    fontSize: 25,
    fontWeight: 'bold',
    left: 90,
  },
  boxSearch: {
    width: "auto",
    height: 50,
    marginHorizontal: 16,
    backgroundColor: "#FFF",
    marginBottom: 18,
    marginTop: 25,
    borderRadius: 10,
    flexDirection: "row",
    padding: 10,
    paddingLeft: 20,
  },
  text1:{
    left:160,
    top:10,
    fontSize:15
  },
  boxHijau:{
    backgroundColor: "#187A6E",
    width: '90%',
    height: 170,
    borderRadius: 15,
    left:20,
    top:40
},
boxHijau2:{
  backgroundColor: "#187A6E",
  width: '90%',
  height: 170,
  borderRadius: 15,
  left:20,
  top:65,
},
boxHijau3:{
  backgroundColor: "#187A6E",
  width: '90%',
  height: 170,
  borderRadius: 15,
  left:20,
  top:90,
},
});



export default KategoriScreen;
