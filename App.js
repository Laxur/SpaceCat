import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from '@expo/vector-icons/Ionicons';
import Login from './app/screens/Login';
import Crear from './app/screens/Crear';
import Inicio from './app/screens/Inicio';
import Perfil from './app/screens/Perfil';
import CustomDrawer from './CustomDrawer';
import Busqueda from './app/screens/Busqueda';
import Populares from './app/screens/Populares';
import Nuevos from './app/screens/Nuevos';
import Marcadores from './app/screens/Marcadores';
import Favoritos from './app/screens/Favoritos';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator  drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: 'lightblue',
        drawerActiveTintColor: 'black',
        drawerInactiveTintColor: 'black',
        drawerLabelStyle: { marginLeft: -25 },
      }}>
      <Drawer.Screen name='Inicio' component={Inicio} options={{
        drawerIcon: ({ color }) => (
          <Ionicons name='home-outline' size={22} color={color} />
        )
      }} />
      <Drawer.Screen name='Perfil' component={Perfil} options={{
        drawerIcon: ({ color }) => (
          <Ionicons name='person-outline' size={22} color={color} />
        )
      }} />
      <Drawer.Screen name='Busqueda' component={Busqueda} options={{
        drawerIcon: ({ color }) => (
          <Ionicons name="search-outline" size={22} color={color} />
        )
      }} />
            <Drawer.Screen name='Populares' component={Populares} options={{
        drawerIcon: ({ color }) => (
          <Ionicons name='fire' size={22} color={color} />
        ),     drawerItemStyle: { 
          display: "none", 
        }, 
      }} />
      <Drawer.Screen name='Nuevos' component={Nuevos} options={{
        drawerIcon: ({ color }) => (
          <Ionicons name="start" size={22} color={color} />
        ),     drawerItemStyle: { 
          display: "none", 
        }, 
      }} />
            <Drawer.Screen name='Favoritos' component={Favoritos} options={{
        drawerIcon: ({ color }) => (
          <Ionicons name='fav' size={22} color={color} />
        ),     drawerItemStyle: { 
          display: "none", 
        }, 
      }} />
      <Drawer.Screen name='Marcadores' component={Marcadores} options={{
        drawerIcon: ({ color }) => (
          <Ionicons name="marc" size={22} color={color} />
        ),     drawerItemStyle: { 
          display: "none", 
        }, 
      }} />

    </Drawer.Navigator>
  );
};

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Crear' component={Crear} />
        <Stack.Screen name="Inicio" component={DrawerNavigator} />
        <Stack.Screen name="Populares" component={Populares} />
        <Stack.Screen name="Nuevos" component={Nuevos} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
