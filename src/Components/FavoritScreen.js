import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import { AntDesign, } from '@expo/vector-icons';

function FavoritScreen({navigation}){
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Resep Favorit Saya</Text>
        <View style={styles.box1}>

        <TouchableOpacity onPress={()=>navigation.navigate('DetailScreen', {name:"Nasi Goreng" , img:"../Images/nasgor.jpeg" , bahan1 : "Nasi Putih 1 Piring" , bahan2 :"Bawang putih 2 siung" , bahan3:"Kecap Manis", bahan4:"Garam secukupnya" , cara1 : "Cuci bersih ayam dan lumuri dengan air jerik nipis dan garam , lalu diamkan selama 15 menit" , cara2:"Panaskan Minyak" , cara3:"Tumis bumbu ungkep ayam bakar, tambahkan daun jeruk dan serai hingga" })} >
        <Text style={styles.textkotak} >Nasi Goreng</Text>
          <Image source={require('../Images/nasgor.jpeg')} style={{height:80, width:80, margin:20, top:-20, left:20}} />
        </TouchableOpacity>
        </View>
        <View style={styles.box2}>

        <TouchableOpacity onPress={()=>navigation.navigate('DetailScreen', {name:"Mie Goreng" , img:"../Images/Migor.jpeg" , bahan1 : "1 bungkus mie telur" , bahan2 :"4 sdm kecap manis" , bahan3:"3 sdm mentega unsalted", bahan4:"25 gram bawang putih cincang" , cara1 : "Siapkan penggorengan dan panaskan mentega" , cara2:"Tumis bawang putih dan bawang bombai hingga harum" , cara3:"Masukkan daging ayam potong, udang, dan telur kocok" })} >
            <Text style={styles.textkotak} >Mie Goreng</Text>
          <Image source={require('../Images/Migor.jpeg')} style={{height:80, width:80, margin:20, top:-20, left:20}} />
        </TouchableOpacity>

        </View>
        <View style={styles.box3}>
        <TouchableOpacity onPress={()=>navigation.navigate('DetailScreen', {name:" Ayam Bakar " , img:"../Images/Abar.jpeg" , bahan1 : "8 Potong daging ayam" , bahan2 :"2 batang serai, memarkan" , bahan3:"2 sdm bango kecap manis", bahan4:"1 sdt Garam" , cara1 : "Cuci bersih ayam dan lumuri dengan air jerik nipis dan garam , lalu diamkan selama 15 menit" , cara2:"Panaskan Minyak" , cara3:"Tumis bumbu ungkep ayam bakar, tambahkan daun jeruk dan serai hingga" })} >
        <Text style={styles.textkotak} >Ayam Bakar</Text>
          <Image source={require('../Images/Abar.jpeg')} style={{height:80, width:80, margin:20, top:-20, left:20 }} />
        </TouchableOpacity>
        </View>
        <View style={styles.box4}>
        <TouchableOpacity onPress={()=>navigation.navigate('DetailScreen', {name:" Telur Dadar Crispy " , Image:'../Images/TelurDdrCr.jpeg' , bahan1 : "2  butir telur" , bahan2 :"2 tahu, haluskan" , bahan3:"2 butir bawang merah, iris tipis", bahan4:"2 cabai merah, iris serong" , cara1 : "Campur tahu yang telah dihaluskan dengan telur." , cara2:"Tambahkan irisan bawang merah, cabai merah , daun bawang , garam dan lada. Aduk Rata" , cara3:"Panaskan Minyak Hingga Benar-benar" })} >
        <Text style={styles.textkotak} >Telor Dadar Crispy</Text>
            <Image source={require('../Images/TelurDdrCr.jpeg')} style={{height:80, width:80, margin:20, top:-20, left:20 }} />
          </TouchableOpacity>
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
        bottom: 340,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    button1 :{
        bottom: 352,
        right : 160,
    },
    box1:{
        backgroundColor: "#187A6E",
        width: 168,
        height: 150,
        borderRadius: 15,
        position: "absolute",
        left: 20,
        top: 200 
    },
    box2:{
        backgroundColor: "#187A6E",
        width: 168,
        height: 150,
        borderRadius: 15,
        position: "absolute",
        right: 20,
        top: 200 
    },
    box3:{
        backgroundColor: "#187A6E",
        width: 168,
        height: 150,
        borderRadius: 15,
        position: "absolute",
        left: 20,
        top:380
    },
    box4:{
        backgroundColor: "#187A6E",
        width: 168,
        height: 150,
        borderRadius: 15,
        position: "absolute",
        right: 20,
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
