
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function MarcadoresButton() {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Marcadores');
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.text}>Marcadores</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
      },
      text: {
        fontSize: 25,
        fontWeight: 'bold', 
      },
});

export default MarcadoresButton;
