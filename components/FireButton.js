import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const FireButton = () => {
  const navigation = useNavigation();

  const handleFireButtonClick = () => {
    navigation.navigate('Populares'); // Navega a la vista "Populares"
  };

  return (
    <TouchableOpacity onPress={handleFireButtonClick}>
      <View style={{ backgroundColor: "rgba(255, 255, 255, 0)", borderRadius: 25, padding: 10 }}>
        <Icon name="fire" type="font-awesome" color="red" size={50} />
      </View>
    </TouchableOpacity>
  );
};

export default FireButton;

