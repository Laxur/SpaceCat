import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { FIREBASE_AUTH } from './FirebaseConfig';

const handleSignOut = async () => {
  try {
    await FIREBASE_AUTH.signOut();
    navigation.navigate('Login'); 
  } catch (error) {
    console.error('Error al cerrar sesión', error);
  }
};

const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: 'black' }}>
        <TouchableOpacity onPress={handleSignOut}>
          <Text>Cerrar Sesion</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
