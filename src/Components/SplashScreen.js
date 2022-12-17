import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Splash = ({ navigation }) => {
    
    useEffect(() => {
        setTimeout( () => {
            navigation.replace('LoginScreen');
        }, 3000)
    }, [navigation]);

    return (
        <View style={styles.container}>
        <Image style={styles.picture} source={require('../Images/Logo.png')} />
        <Text style={styles.baseText}>MENUWQQ</Text>
          </View>
        
    )
}

export default Splash
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#B1E4D4',
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
        width:120,
        height:250,
        top: 330
      }
    });
