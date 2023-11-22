import React from 'react';
import { ImageBackground, View, Text, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { FIREBASE_AUTH } from './FirebaseConfig';

const backgroundImg = require('./assets/fondoV2.jpeg');

const CustomDrawer = (props) => {
  const { navigation } = props;

  const handleSignOut = async () => {
    try {
      await FIREBASE_AUTH.signOut();
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error al cerrar sesión', error);
    }
  };

  return (
    <ImageBackground source={backgroundImg} style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: 'black' }}>
          <TouchableOpacity onPress={handleSignOut}>
            <Text>Cerrar Sesion</Text>
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>
    </ImageBackground>
  );
};

export default CustomDrawer;

