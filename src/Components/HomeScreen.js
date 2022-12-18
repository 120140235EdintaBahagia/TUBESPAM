import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image } from 'react-native';
import {FontAwesome} from "@expo/vector-icons"

const HomeScreen = () => {
  const [text, onChangeText] = useState("")
  return (
    <View style={styles.container}>
      <Text style={styles.baseText}>
      {"\n"}
      Hai, Cooking Lovers 
      {"\n"}Mau masak apa hari ini?
      </Text>
      <View style={styles.boxSearch}>
          <FontAwesome name="search" size={24} color="black" />
          <TextInput
            style={styles.input}
            onChangeText={(text) => {
              onChangeText(text);
            }}
            onKeyPress={() => {}}
            value={text}
            placeholder="Cari Resep"
          />
      </View>
      <View style={styles.boxHijau}>
        <Text style={styles.text1}>Rekomendasi</Text>
        <Image source={require('../Images/nasgor.jpeg')} style={{height:80, width:80, margin:20 }} />
        <Text style={{height:80, width:100, margin:20, top:-35 }} >Nasi Goreng</Text>
        <Image source={require('../Images/Migor.jpeg')} style={{height:80, width:80, margin:20, top:-240, left:120 }} />
        <Text style={{height:80, width:100, margin:20, top:-35, left:123, top:-275 }} >Mie Goreng</Text>
        <Image source={require('../Images/Abar.jpeg')} style={{height:80, width:80, margin:20, top:-480, left:225 }} />
        <Text style={{height:80, width:100, margin:20, top:-35, left:225, top:-515 }} >Ayam Bakar</Text>
      </View>
      <View style={styles.boxHijau2}>
      <Text style={styles.text1}>Trending</Text>
      <Image source={require('../Images/UdangAsamMns.jpeg')} style={{height:80, width:80, margin:20 }} />
        <Text style={{height:80, width:100, margin:20, top:-35 }} >Udang Asam Manis</Text>
        <Image source={require('../Images/Rendang.jpeg')} style={{height:80, width:80, margin:20, top:-240, left:120 }} />
        <Text style={{height:80, width:100, margin:20, top:-35, left:123, top:-275 }} >Rendang</Text>
        <Image source={require('../Images/TelurDdrCr.jpeg')} style={{height:80, width:80, margin:20, top:-480, left:225 }} />
        <Text style={{height:80, width:100, margin:20, top:-35, left:225, top:-515 }} >Telur Dadar Crispy</Text>
      </View>
    </View>    
  );
};



const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  baseText: {
    fontSize: 20,
    fontWeight: 'bold',
    left: 20,
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
    left:20,
    top:15
  },
  boxHijau:{
    backgroundColor: "#3ABD8F",
    width: '90%',
    height: 170,
    borderRadius: 15,
    left:20,
    top:40
},
boxHijau2:{
  backgroundColor: "#3ABD8F",
  width: '90%',
  height: 170,
  borderRadius: 15,
  left:20,
  top:80,
},
});



export default HomeScreen;
