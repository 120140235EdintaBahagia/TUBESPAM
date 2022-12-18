import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image , TouchableOpacity} from 'react-native';
import {FontAwesome} from "@expo/vector-icons"

export default function HomeScreen({navigation}) {
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
        <TouchableOpacity onPress={()=>navigation.navigate('DetailScreen', {name:"Nasi Goreng" , img:"../Images/nasgor.png" , bahan1 : "Nasi Putih 1 Piring" , bahan2 :"Bawang putih 2 siung" , bahan3:"Kecap Manis", bahan4:"Garam secukupnya" , cara1 : "Cuci bersih ayam dan lumuri dengan air jerik nipis dan garam , lalu diamkan selama 15 menit" , cara2:"Panaskan Minyak" , cara3:"Tumis bumbu ungkep ayam bakar, tambahkan daun jeruk dan serai hingga" })} >
          <Image source={require('../Images/nasgor.png')} style={{height:80, width:80, margin:20 }} />
        <Text style={{height:80, width:100, margin:20, top:-35 }} >Nasi Goreng</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('DetailScreen', {name:"Mie Goreng" , img:"../Images/Migor.png" , bahan1 : "1 bungkus mie telur" , bahan2 :"4 sdm kecap manis" , bahan3:"3 sdm mentega unsalted", bahan4:"25 gram bawang putih cincang" , cara1 : "Siapkan penggorengan dan panaskan mentega" , cara2:"Tumis bawang putih dan bawang bombai hingga harum" , cara3:"Masukkan daging ayam potong, udang, dan telur kocok" })} >
          <Image source={require('../Images/Migor.png')} style={{height:80, width:80, margin:20 }} />
        <Text style={{height:80, width:100, margin:20, top:-35,left:40 }} >Mie Goreng</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('DetailScreen', {name:" Ayam Bakar " , img:"../Images/Abar.png" , bahan1 : "8 Potong daging ayam" , bahan2 :"2 batang serai, memarkan" , bahan3:"2 sdm bango kecap manis", bahan4:"1 sdt Garam" , cara1 : "Cuci bersih ayam dan lumuri dengan air jerik nipis dan garam , lalu diamkan selama 15 menit" , cara2:"Panaskan Minyak" , cara3:"Tumis bumbu ungkep ayam bakar, tambahkan daun jeruk dan serai hingga" })} >
          <Image source={require('../Images/Abar.png')} style={{height:80, width:80, margin:20 }} />
        <Text style={{height:80, width:100, margin:20, top:-35 }} >Ayam Bakar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.boxHijau2}>
        <Text style={styles.text1}>Trending</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('DetailScreen', {name:"Udang Asam Manis" , img:"../Images/Udang.png" , bahan1 : "2 sdm margarin" , bahan2 :"500g udang pacet , belah punggung" , bahan3:"2 sdm Bango Kecap Manis", bahan4:"2 sdm air jeruk nipis" , cara1 : "Bumbu halus: Masukkan semua bahan kedalam blender. Proses hingga halus " , cara2:"Panaskan margarin , tumis bumbu halus sampai harum" , cara3:"Masukkan udang dan masak hingga berubah warna" })} >
            <Image source={require('../Images/Udang.png')} style={{height:80, width:80, margin:20 }} />
          <Text style={{height:80, width:100, margin:20, top:-35 }} >Udang Asam Manis</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('DetailScreen', {name:"Rendang" , img:"../Images/Rendang.png" , bahan1 : "1 kg daging sapi" , bahan2 :"3 butir kelapa, diambil santan kental dan santan encernya" , bahan3:"4 lembar daun jeruk", cara1 : "Haluskan semua bahan bumbu dengan diulek dan diblender." , cara2:"Tumis bumbu dengan sedikit minyak goreng hingga wangi" , cara3:"Masukkan batang serai, daun jeruk , asam kandis dan garam , aduk rata" })} >
            <Image source={require('../Images/Rendang.png')} style={{height:80, width:80, margin:20 }} />
          <Text style={{height:80, width:100, margin:20, top:-35 }} >Rendang</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('DetailScreen', {name:" Telur Dadar Crispy " , img:"../Images/Telur.png" , bahan1 : "2  butir telur" , bahan2 :"2 tahu, haluskan" , bahan3:"2 butir bawang merah, iris tipis", bahan4:"2 cabai merah, iris serong" , cara1 : "Campur tahu yang telah dihaluskan dengan telur." , cara2:"Tambahkan irisan bawang merah, cabai merah , daun bawang , garam dan lada. Aduk Rata" , cara3:"Panaskan Minyak Hingga Benar-benar" })} >
            <Image source={require('../Images/Telur.png')} style={{height:80, width:80, margin:20 }} />
          <Text style={{height:80, width:100, margin:20, top:-35 }} >Telor Dadar Crispy</Text>
          </TouchableOpacity>
      </View>
    </View>    
  );
};



const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#B1E4D4'
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
  top:80,
},
});




