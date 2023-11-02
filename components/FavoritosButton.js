// FavoritosButton.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function FavoritosButton() {
  const navigation = useNavigation();

  const handlePress = () => {
    // Navegar a la vista de Favoritos
    navigation.navigate('Favoritos');
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.text}>Favoritos</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
      },
      text: {
        fontSize: 25, // Tamaño de fuente más grande
        fontWeight: 'bold', // Texto en negrita
      },
});

export default FavoritosButton;
