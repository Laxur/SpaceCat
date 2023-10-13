import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './app/screens/Login';
import Crear from './app/screens/Crear';
import Inicio from './app/screens/Inicio';
import Perfil from './app/screens/Perfil';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>   
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Crear' component={Crear} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Cerrar Sesion'>
        <Drawer.Screen name='Inicio' component={Inicio} />
        <Drawer.Screen name='Perfil' component={Perfil} />
        {/* Da pero aparece esto lo cual permitiria volver al login */}
        <Drawer.Screen name='Cerrar Sesion' component={AuthStack} options={{ headerShown: false}}/> 
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
