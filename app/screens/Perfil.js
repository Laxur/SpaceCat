// import React, { useState, useEffect } from 'react';
// import { StyleSheet, Text, View, ImageBackground, Image, ScrollView, TouchableOpacity } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import MarcadoresButton from '../../components/MarcadoresButton';
// import FavoritosButton from '../../components/FavoritosButton';

// const backgroundImg = require('../../assets/Galaxia.jpeg');
// const PlaceholderImage = require('../../assets/Fperfil.jpg');

// const Perfil = ({ navigation }) => {
//   const [imageUri, setImageUri] = useState(null);

//   useEffect(() => {
//     (async () => {
//       const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
//       if (status !== 'granted') {
//         alert('Permiso denegado para acceder a la galería de imágenes.');
//       }
//     })();
//   }, []);

//   const abrirSelectorDeImagen = async () => {
//     try {
//       const result = await ImagePicker.launchImageLibraryAsync({
//         mediaTypes: ImagePicker.MediaTypeOptions.Images,
//         allowsEditing: true,
//         aspect: null,
//         quality: 1,
//       });

//       if (!result.canceled) {
//         const selectedImage = result.assets[0];
//       setImageUri(selectedImage.uri);
//       guardarImagenPerfil(selectedImage.uri);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <ImageBackground source={backgroundImg} style={styles.backgroundImage}>
//         <View style={styles.imageContainer}>
//         <TouchableOpacity onPress={() => navigation.openDrawer()}>
//           <ImageBackground source={require('../../assets/LogoV2.png')} style={styles.menu} />
//         </TouchableOpacity>
//           <TouchableOpacity onPress={abrirSelectorDeImagen}>
//             <Image source={imageUri ? { uri: imageUri } : PlaceholderImage} style={styles.image} />
//           </TouchableOpacity>
//           <View style={styles.buttonsContainer}>
//         <MarcadoresButton />
//         <FavoritosButton />
//       </View>
//         </View>
//       </ImageBackground>
//     </ScrollView>
//   );
// };

// export default Perfil;


// const styles = StyleSheet.create({

//   buttonsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginTop: 20,
//   },
//   backgroundImage: {
//     flex: 1,
//     width: '100%',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   menu: {
//     width: 60,
//     height: 60,
//     borderRadius: 10,
//     position: 'absolute',
//     top: -40,
//     left: -180,
//   },
//   container: {
//     flex: 1,
//     backgroundColor: '#f1f1f1',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   imageContainer: {
//     flex: 1,
//     paddingTop: 58,
//     alignItems: 'center',
//   },
//   image: {
//     width: 200,
//     height: 200,
//     borderRadius: 50,
//   },
// });

import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, ScrollView, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import storage from '@react-native-firebase/storage';

const backgroundImg = require('../../assets/Galaxia.jpeg');
const PlaceholderImage = require('../../assets/Fperfil.jpg');

const Perfil = ({ navigation }) => {
  const [imageUri, setImageUri] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Permiso denegado para acceder a la galería de imágenes.');
      }
    })();
  }, []);

  const guardarImagenPerfil = async (uri, filename) => {
    try {
      const referencia = storage().ref('/imgperfil/' + filename);
      await referencia.putFile(uri);
      console.log('Imagen subida a Firebase Storage exitosamente!');
    } catch (error) {
      console.log(error);
    }
  };

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
        guardarImagenPerfil(selectedImage.uri, selectedImage.filename);
      }
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ImageBackground source={backgroundImg} style={styles.backgroundImage}>
        <View style={styles.imageContainer}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <ImageBackground source={require('../../assets/LogoV2.png')} style={styles.menu} />
          </TouchableOpacity>
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

  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
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
    top: -40,
    left: -180,
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
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 50,
  },
});