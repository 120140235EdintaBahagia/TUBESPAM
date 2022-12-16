import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, Text,TouchableOpacity, View, TextInput, Modal, Animated } from 'react-native';
import React, {useState} from 'react';

const ModalPoup = ({visible, children}) => {
  const [showModal, setShowModal] = React.useState(visible);
  const scaleValue = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    toggleModal();
  }, [visible]);
  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => setShowModal(false), 200);
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };
  return (
    <Modal transparent visible={showModal}>
      <View style={styles.modalBackGround}>
        <Animated.View
          style={[styles.modalContainer, {transform: [{scale: scaleValue}]}]}>
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

export default function App({navigation}) {
  const [visible, setVisible] = React.useState(false);
  return (
      <View style={styles.backgroudcolour}>
          <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
            <View style={styles.button}>
              <AntDesign name="back" size={24} color="black" style={styles.button} />
            </View>
        </TouchableOpacity>
        <View style={styles.sign}>
          <Text style={styles.sign0}>SIGN UP</Text>
          <Text style={styles.sign2}>First Name :</Text>
          <TextInput style={styles.sign3}></TextInput>
          <Text style={styles.sign4}>Last Name :</Text>
          <TextInput style={styles.sign5}></TextInput>
          <Text style={styles.sign6}>Email Address :</Text>
          <TextInput style={styles.sign7}></TextInput>
          <Text style={styles.sign8}>Passsword :</Text>
          <TextInput style={styles.sign9}></TextInput>
        </View>
        <ModalPoup visible={visible}>
        <View style={{alignItems: 'center'}}>
         <Text style={{justifyContent : "center", fontSize : 20, fontWeight : "bold"}}>Berhasil</Text>
        </View>
        <Text style={{marginVertical: 30, fontSize: 20, textAlign: 'center'}}>
          Pendaftaran berhasil dilakukan, silahkan klik ok untuk masuk kedalam menu login
        </Text>
        <View style={{alignItems: 'center'}}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate("login")}>
            <Text style ={{color : "#2596BE"}}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>  
      </ModalPoup>
        <TouchableOpacity onPress={() => setVisible(true)}>
          <View style={styles.register1}>
            <Text style = {styles.register2}>Register</Text>
          </View>
        </TouchableOpacity>
      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroudcolour: {
    flex: 1,
    backgroundColor : '#B1E4D4',
  },
  picture: {
    resizeMode: "contain",
    width: 400,
    height: 400,
    top: 50,
  },
  button: {
    top: 30,
    left : 15,
  },
  sign: {
    backgroundColor: "#B1E4D4",
    padding: 60,
    width: "90%",
    left: 20,
    top: 200,
  },
  sign0:{
    top:-150,
    left:50,
    fontSize:30,
    fontWeight:'bold'
  },
  sign2: {
    left: -45,
    top: -50
  },
  sign3: {
    backgroundColor :"#FFF",
    left: -45,
    top: -40,
    borderRadius: 100,
    width: 320,
    borderWidth : 2
  },
  sign4: {
    left: -45,
    top: -30
  },
  sign5: {
    backgroundColor :"#FFF",
    left: -45,
    top: -20,
    borderRadius: 100,
    width: 320,
    borderWidth : 2
  },
  sign6: {
    left: -45,
    top: -10
  },
  sign7: {
    backgroundColor :"#FFF",
    left: -45,
    top: 0,
    borderRadius: 100,
    width: 320,
    borderWidth : 2
  },
  sign8: {
    left: -45,
    top: 10
  },
  sign9:{
    backgroundColor: "#FFF",
    left: -45,
    top: 20,
    borderRadius: 100,
    width: 320,
    borderWidth : 2
  },
  register1: {
    borderRadius: 10,
    backgroundColor: "#CDD8E3",
    width: "30%",
    padding: 5,
    left: 200,
    top: 250,
    borderWidth : 1
  },
  register2: {
    fontWeight: "bold",
    left: 25,
    letterSpacing : 0.5
  },
  modalBackGround: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 20,
  },
  header: {
    width: '100%',
    height: 40,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },

});
