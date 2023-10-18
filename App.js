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

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: 'lightblue',
        drawerActiveTintColor: 'gray',
        drawerInactiveTintColor: 'black',
        drawerLabelStyle: {marginLeft: -25}}}>
      <Drawer.Screen name='Inicio' component={Inicio} options={{
        drawerIcon: ({color}) => (
          <Ionicons name='home-outline' size={22} color={color} />
        )
      }}/>
      <Drawer.Screen name='Perfil' component={Perfil} options={{
        drawerIcon: ({color}) => (
          <Ionicons name='person-outline' size={22} color={color} />
        )
      }}/>
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
        <Stack.Screen name='Inicio' component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
