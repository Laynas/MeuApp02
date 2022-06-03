import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/home';
import { Start } from '../screens/start';
import { SignIn } from '../screens/signin';
import { Esqueci } from '../Screens/esqueci';
import { Confira } from '../Screens/confira';
import { Nova_conta } from '../Screens/nova_conta';
import { Nova_conta_pessoal } from '../Screens/nova_conta_pessoal';
import { Nova_conta_endereco } from '../Screens/nova_conta_endereco';
import { Foto_perfil } from '../Screens/foto_perfil';
import { Sucesso } from '../Screens/sucesso';
const Stack = createStackNavigator();

export function AppRoutes() {
  return(
    <Stack.Navigator screenOptions={{headerShown:false}} >
      <Stack.Screen name="Start" component={Start} />      
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name='Esqueci' component={Esqueci}/>
      <Stack.Screen name='Confira' component={Confira}/>
      <Stack.Screen name='Nova_conta' component={Nova_conta}/>
      <Stack.Screen name='Nova_conta_pessoal' component={Nova_conta_pessoal}/>
      <Stack.Screen name='Nova_conta_endereco' component={Nova_conta_endereco}/>
      <Stack.Screen name='Foto_perfil' component={Foto_perfil}/>
      <Stack.Screen name='Sucesso' component={Sucesso}/>
    </Stack.Navigator>
  );
}