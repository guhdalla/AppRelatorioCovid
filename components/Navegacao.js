import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ListaPacientes from './ListaPacientes';
import Detalhes from './Detalhes'

const Stack = createNativeStackNavigator();

export default function Navegacao() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ListaPacientes"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#ED145B',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="ListaPacientes"
          component={ListaPacientes}
          options={{ title: "Pacientes" }}
        />
        <Stack.Screen
          name="Detalhes"
          component={Detalhes}
          options={({ route }) => ({ title: 'Relatorio de Atendimento' })}
        />
      </Stack.Navigator>
      <StatusBar barStyle="default" />
    </NavigationContainer>
  );
}