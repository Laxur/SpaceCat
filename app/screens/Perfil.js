import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, ScrollView, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const backgroundImg = require('../../assets/Galaxia.jpeg');
const PlaceholderImage = require('../../assets/Fperfil.jpg');

const Perfil = ({ navigation }) => {
  const [imageUri, setImageUri] = useState(null);

  useEffect(() => {
    // Solicitar permisos para acceder a la galería de imágenes
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Permiso denegado para acceder a la galería de imágenes.');
      }
    })();
  }, []);

  const abrirSelectorDeImagen = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: null,
        quality: 1,
      });

      if (!result.canceled) {
        const selectedImage = result.assets[0];
      setImageUri(selectedImage.uri);
      guardarImagenPerfil(selectedImage.uri);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ImageBackground source={backgroundImg} style={styles.backgroundImage}>
        <View style={styles.imageContainer}>
          <TouchableOpacity onPress={abrirSelectorDeImagen}>
            <Image source={imageUri ? { uri: imageUri } : PlaceholderImage} style={styles.image} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default Perfil;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 50,
  },
});
