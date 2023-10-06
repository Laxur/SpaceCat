import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { FIREBASE_AUTH } from '../../FirebaseConfig'
import { StatusBar } from 'expo-status-bar';
import { createUserWithEmailAndPassword, getAuth} from 'firebase/auth';

    const Crear = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;
    
    const CrearCuenta = async () => {
        setLoading(true);
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            console.log(response);
            alert('Revisa tu correo!')
        } catch(error) {
            console.log(error);
            alert('Fallo en el registro: ' + error.message);
        } finally {
            setLoading(false);
        }
    } 
    
      return (
        <View style={styles.container}>
           <Text style={styles.titulo}>Crear cuenta</Text>
           {/* <TextInput
             value={username} placeholder='Nombre de usuario' autoCapitalize="none"
             onChangeText={(text) => setUsername(text)}
             style={styles.textInput}/> */}
           <TextInput
            value={email} placeholder='Email' autoCapitalize="none"
            onChangeText={(text) => setEmail(text)}
             style={styles.textInput}/>
           <TextInput
             value={password} placeholder='Contraseña' autoCapitalize="none"
             onChangeText={(text) => setPassword(text)}
             style={styles.textInput}
             secureTextEntry={true}/>
           <StatusBar style="auto" />
            <>
              <TouchableOpacity style={styles.button} onPress={CrearCuenta}>
                <Text style={styles.text}>Continuar</Text>
              </TouchableOpacity>
              <Text style={styles.subTittle}>¿Ya tienes cuenta?</Text>
              <TouchableOpacity style={styles.botoninicio} onPress={() => navigation.navigate('login')}>
                <Text style={styles.textBotonInicio}>Iniciar sesión</Text>
              </TouchableOpacity>
            </>
        </View>
      );
    };
    
    export default Crear;

     const styles = StyleSheet.create({
       container: {
         flex: 1,
         backgroundColor: '#000033',
         alignItems: 'center',
         justifyContent: 'center',
       },
       titulo: {
         fontSize: 30,
         color: 'white'
       },
       subTittle: {
         marginTop: 60,
         color: 'gray'
       },
       textInput: {
         fontSize: 20,
         paddingStart: 30,
         width: '80%',
         padding: 10,
         marginTop: 20,
         borderRadius: 15,
         backgroundColor: '#f1f1f1',
       },
       button: {
         width: '80%',
         padding: 10,
         marginTop: 20,
         borderRadius: 40,
         backgroundColor: 'white', 
       },
       text: {
         fontSize: 20,
         color: '#000033',
         textAlign: 'center',
       },
       botoninicio: {
         backgroundColor: 'transparent',
         marginTop: 20,
       },
       textBotonInicio: {
         fontSize: 20,
         color: 'yellow',
         textAlign: 'center',
       }
     });