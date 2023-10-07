import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { FIREBASE_AUTH } from '../../FirebaseConfig'
import { StatusBar } from 'expo-status-bar';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

const backgroundImg = require('../../assets/Galaxia.jpeg');

const Crear = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const CrearCuenta = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      console.log(response);
      alert('Cuenta creada con exito!')
    } catch (error) {
      console.log(error);
      alert('Fallo en el registro: ' + error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ImageBackground source={backgroundImg} style={styles.backgroundImage}>
        <Text style={styles.titulo}>Crea tu cuenta!</Text>
        {/* <TextInput
             value={username} placeholder='Nombre de usuario' autoCapitalize="none"
             onChangeText={(text) => setUsername(text)}
             style={styles.textInput}/> */}
        <TextInput
          value={email} placeholder='example@email.com' autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
          style={styles.textInput} />
        <TextInput
          value={password} placeholder='Contraseña' autoCapitalize="none"
          onChangeText={(text) => setPassword(text)}
          style={styles.textInput}
          secureTextEntry={true} />
        <StatusBar style="auto" />
        <TouchableOpacity style={styles.button} onPress={CrearCuenta}>
          <Text style={styles.text}>Continuar</Text>
        </TouchableOpacity>
        <Text style={styles.subTittle}>¿Ya tienes cuenta?</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('login')}>
          <Text style={styles.text}>Iniciar sesión</Text>
        </TouchableOpacity>
      </ImageBackground>
    </ScrollView>
  );
};

export default Crear;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 60,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20, // Espacio inferior
  },
  subTittle: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  textInput: {
    padding: 10,
    paddingStart: 20,
    width: '80%',
    height: 50,
    marginTop: 20,
    borderRadius: 32,
    backgroundColor: '#fff',
    alignSelf: 'center', // Alineación horizontal
    textAlign: 'center', // Alineación vertical
    fontSize: 20,
  },
  button: {
    width: 200,
    height: 50,
    backgroundColor: 'lightblue',
    borderRadius: 25,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center', // Alineación horizontal
    textAlign: 'center', // Alineación vertical
    marginTop: 20,
    marginBottom: 10, // Espacio inferior
  },
  text: {
    fontSize: 15,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textBotonInicio: {
    fontSize: 20,
    color: 'yellow',
    textAlign: 'center',
  }
});