import React, { useState } from 'react'
import { ImageBackground, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Button } from 'react-native';
import axios from 'axios';
import Ionicons from '@expo/vector-icons/Ionicons';

const backgroundImg = require('../../assets/Galaxia.jpeg');


const Busqueda = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
      <ImageBackground source={backgroundImg} style={styles.backgroundImage}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <ImageBackground source={require('../../assets/LogoV2.png')} style={styles.menu} />
        </TouchableOpacity>
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder='Nombre del libro'
              style={styles.TextInput}
              autoCapitalize="none"
            />
            <TouchableOpacity>
            <View style={styles.searchButton}>
                <Ionicons name='search-outline' style={styles.searchIcon} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
    );
};

export default Busqueda;

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
        top: 20,
        left: -185,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    TextInput: {
        padding: 10,
        paddingStart: 20,
        width: '80%',
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 30,
        fontSize: 20,
      },
      inputContainer: {
        flexDirection: 'row', 
        alignItems: 'center',
        backgroundColor: '#fff', // Color de fondo del botón
        padding: 10,
        borderRadius: 30,
      },
      searchIcon: {
        color: 'lightblue',
        fontSize: 25,
      },
});
