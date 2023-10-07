import React, { useState } from 'react'
import { ImageBackground, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const backgroundImg = require('../../assets/fondo2.jpeg');

const Inicio = ({navigation}) => {
    return (
      <View style={styles.container}>
        <ImageBackground source={backgroundImg} style={styles.backgroundImage} resizeMode="stretch">
        <Text style={styles.titulo}>Inicio</Text>
        </ImageBackground>
      </View>
    );
};

export default Inicio;

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