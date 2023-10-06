import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import Login from './app/screens/Login';
import Crear from './app/screens/Crear';
import Inicio from './app/screens/Inicio';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='login' screenOptions={{ headerShow: false}} >
        <Stack.Screen name='login' component={Login}/>
        <Stack.Screen name='crear' component={Crear}/>
        <Stack.Screen name='inicio' component={Inicio}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
