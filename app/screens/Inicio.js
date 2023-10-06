import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const Inicio = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Inicio</Text>
        </View>

    );
};

export default Inicio;

const styles = StyleSheet.create({
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