import React, { useState } from 'react'
import { ImageBackground, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';

const backgroundImg = require('../../assets/Galaxia.jpeg');

function Inicio  ({navigation})  {
    return (
      <ScrollView contentContainerStyle={styles.container}>
      <ImageBackground source={backgroundImg} style={styles.backgroundImage}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <ImageBackground source={require('../../assets/LogoV2.png')} style={styles.menu} />
      </TouchableOpacity>
      </ImageBackground>
    </ScrollView>
    );
};

export default Inicio;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menu: {
    width: 60,
    height: 60,
    borderRadius: 10,
    position: 'absolute',
    top: -400,
    left: -185,
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