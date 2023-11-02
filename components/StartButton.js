import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importa el icono de estrella desde react-native-vector-icons
import { useNavigation } from '@react-navigation/native';

const StartButton = () => {
  const navigation = useNavigation();

  const handleStartButtonClick = () => {
    navigation.navigate('Nuevos'); 
  };

  return (
    <TouchableOpacity onPress={handleStartButtonClick}>
      <View style={{ backgroundColor: "rgba(255, 255, 255, 0)" , borderRadius: 25, padding: 10 }}>
        <Icon name="star" color='yellow' size={50} /> 
      </View>
    </TouchableOpacity>
  );
};

export default StartButton;
