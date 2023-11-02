// import React, { useState } from 'react'
// import { ImageBackground, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Button } from 'react-native';
// import Ionicons from '@expo/vector-icons/Ionicons';


// const backgroundImg = require('../../assets/Galaxia.jpeg');

// function Inicio({ navigation }) {
//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <ImageBackground source={backgroundImg} style={styles.backgroundImage}>
//         <TouchableOpacity onPress={() => navigation.openDrawer()}>
//           <ImageBackground source={require('../../assets/LogoV2.png')} style={styles.menu} />
//         </TouchableOpacity>
//         <View style={styles.container}>
//           <View style={styles.inputContainer}>
//             <TextInput
//               placeholder='Nombre del libro'
//               style={styles.TextInput}
//               autoCapitalize="none"
//             />
//             <TouchableOpacity>
//             <View style={styles.searchButton}>
//                 <Ionicons name='search-outline' style={styles.searchIcon} />
//               </View>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </ImageBackground>
//     </ScrollView>
//   );
// };

// export default Inicio;

// const styles = StyleSheet.create({
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
//     top: 20,
//     left: -185,
//   },
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   titulo: {
//     fontSize: 65,
//     color: '#34434D',
//     fontWeight: 'bold'
//   },
//   text: {
//     fontSize: 15,
//     color: 'black',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   button: {
//     width: 200,
//     height: 50,
//     backgroundColor: 'lightblue',
//     borderRadius: 25,
//     padding: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//     alignSelf: 'center', // Alineación horizontal
//     textAlign: 'center', // Alineación vertical
//     marginTop: 20,
//     marginBottom: 10, // Espacio inferior
//   },
//   TextInput: {
//     padding: 10,
//     paddingStart: 20,
//     width: '80%',
//     height: 50,
//     backgroundColor: '#fff',
//     borderRadius: 30,
//     fontSize: 20,
//     justifyContent: 'flex-end'
//   },
//   inputContainer: {
//     flexDirection: 'row', 
//     alignItems: 'center',
//     backgroundColor: '#fff', // Color de fondo del botón
//     padding: 10,
//     borderRadius: 30,
//   },
//   searchIcon: {
//     color: 'lightblue',
//     fontSize: 25,
//   },
// });
// import React from 'react';
// import { ImageBackground, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
// import Ionicons from '@expo/vector-icons/Ionicons';
// import FireButton from '../../components/FireButton'; // Asegúrate de que la ruta sea correcta

// const backgroundImg = require('../../assets/Galaxia.jpeg');

// function Inicio({ navigation }) {
//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <ImageBackground source={backgroundImg} style={styles.backgroundImage}>
//         <TouchableOpacity onPress={() => navigation.openDrawer()}>
//           <ImageBackground source={require('../../assets/LogoV2.png')} style={styles.menu} />
//         </TouchableOpacity>
//         <View style={styles.container}>
//           <View style={styles.inputContainer}>
//             <TextInput
//               placeholder='Nombre del libro'
//               style={styles.TextInput}
//               autoCapitalize="none"
//             />
//             <TouchableOpacity>
//               <View style={styles.searchButton}>
//                 <Ionicons name='search-outline' style={styles.searchIcon} />
//               </View>
//             </TouchableOpacity>
//             <FireButton /> {/* Agrega el botón con forma de fuego aquí */}
//           </View>
//         </View>
//       </ImageBackground>
//     </ScrollView>
//   );
// }

// export default Inicio;

// const styles = StyleSheet.create({
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
//     top: 20,
//     left: -185,
//   },
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   titulo: {
//     fontSize: 65,
//     color: '#34434D',
//     fontWeight: 'bold',
//   },
//   text: {
//     fontSize: 15,
//     color: 'black',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   button: {
//     width: 200,
//     height: 50,
//     backgroundColor: 'lightblue',
//     borderRadius: 25,
//     padding: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//     alignSelf: 'center', // Alineación horizontal
//     textAlign: 'center', // Alineación vertical
//     marginTop: 20,
//     marginBottom: 10, // Espacio inferior
//   },
//   TextInput: {
//     padding: 10,
//     paddingStart: 20,
//     width: '80%',
//     height: 50,
//     backgroundColor: '#fff',
//     borderRadius: 30,
//     fontSize: 20,
//     justifyContent: 'flex-end',
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#fff', // Color de fondo del botón
//     padding: 10,
//     borderRadius: 30,
//   },
//   searchIcon: {
//     color: 'lightblue',
//     fontSize: 25,
//   },
// });
import React from 'react';
import { ImageBackground, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import FireButton from '../../components/FireButton';
import StartButton from '../../components/StartButton';

const backgroundImg = require('../../assets/Galaxia.jpeg');

function Inicio({ navigation }) {
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
          <View style={styles.buttonContainer}>
            <View style={styles.buttonWithText}>
              <FireButton />
              <Text style={styles.buttonText}>Populares</Text>
            </View>
            <View style={styles.buttonWithText}>
              <StartButton />
              <Text style={styles.buttonText}>Nuevo</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

export default Inicio;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    marginVertical: 15, 
    marginHorizontal: 80, 
  },
  buttonWithText: {
    flex: 1, 
    alignItems: 'center', 
  },
  buttonText: {
    fontSize: 20,
    color: 'white', 
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
    top: 20,
    left: -185,
  },
  container: {
    flex: 1,
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
  TextInput: {
    padding: 10,
    paddingStart: 20,
    width: '80%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 30,
    fontSize: 20,
    justifyContent: 'flex-end'
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