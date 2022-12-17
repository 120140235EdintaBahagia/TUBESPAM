import { StatusBar } from "expo-status-bar";

import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
 
export default function LoginScreen () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  return (


    <View style={styles.container}>
        <Image
          style={styles.tinyLogo}
          source={require('../Images/profillogin.png')}
          ></Image>
      <View style = {{alignItems: "center", width:100}}>
      </View>
      <Text style = {{color: "black", fontSize: 64, fontWeight: 'bold', marginBottom:300}}>MENUWQQ</Text>


      <StatusBar style="auto" />
      <><View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email"
            placeholderTextColor="#c2c2c2"
            onChangeText={(email) => setEmail(email)} />
        </View><View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Password."
              placeholderTextColor="#c2c2c2"
              secureTextEntry={true}
              onChangeText={(password) => setPassword(password)} />
          </View><TouchableOpacity>
            <Text style={styles.forgot_button}>Forgot Password?</Text>
          </TouchableOpacity><TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity></>
          <View>
            <TouchableOpacity style={styles.loginBtn1}>
            <Text style={styles.loginText}>Sign Up</Text>
            </TouchableOpacity>
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
    width: 231,
    height:218,
    marginBottom:-300
  },
 
  inputView: {
    backgroundColor: "#187a6e",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
 
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
 
  loginBtn: {
    width: 66,
    borderRadius: 25,
    height: 33,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    left : 80,
    top: -20,
    backgroundColor: "#187A6E",
  },

  loginBtn1: {
    width: 66,
    borderRadius: 25,
    height: 33,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -50,
    left: -80,
    backgroundColor: "#187A6E",
},
});
