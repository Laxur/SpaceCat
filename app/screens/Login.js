import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { StatusBar } from 'expo-status-bar';
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';

const backgroundImg = require('../../assets/Galaxia.jpeg');

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const Iniciar = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
      navigation.navigate('Inicio');
    } catch (error) {
      console.log(error);
      alert('Fallo en el registro: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ImageBackground source={backgroundImg} style={styles.backgroundImage}>
        <Text style={styles.titulo}>Bienvenido!</Text>
        <Text style={styles.subtitu}>Inicia sesion con tu cuenta.</Text>
        <TextInput
          value={email}
          placeholder='example@email.com'
          style={styles.TextInput}
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
        ></TextInput>
        <TextInput
          value={password}
          placeholder='contraseña'
          style={styles.TextInput}
          secureTextEntry={true}
          autoCapitalize="none"
          onChangeText={(text) => setPassword(text)}
        ></TextInput>
        <TouchableOpacity style={styles.button} onPress={Iniciar}>
          <Text style={styles.text}>Iniciar Sesión</Text>
        </TouchableOpacity>
        <Text style={styles.NoTiene}>¿No tienes una cuenta?</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Crear')}>
          <Text style={styles.text}>Crear Cuenta</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </ImageBackground>
    </ScrollView>
  );
};

export default Login;

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
    fontSize: 65,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5, // Espacio inferior
  },
  subtitu: {
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20, // Espacio inferior
  },
  TextInput: {
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
  NoTiene: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  text: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
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
});

