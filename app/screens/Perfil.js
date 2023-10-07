import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { ImageBackground } from 'react-native';

const backgroundImg = require('../../assets/Galaxia.jpeg');
const Perfil = ({navigation}) => {
    return (
      <ImageBackground source={backgroundImg} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.titulo}>Inicio</Text>
      </View>
    </ImageBackground>
    );
};

export default Perfil;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
    container: {
      flex: 1,
      backgroundColor: '#f1f1f1',
      alignItems: 'center',
      justifyContent: 'center',
    },
    titulo: {
      fontSize: 65,
      color: '#34434D',
      fontWeight: 'bold'
    }
});