import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Perfil from './components/Perfil';
import Formacao from './components/Formacao';
import Experiencia from './components/Experiencia';

const Tab = createBottomTabNavigator();

const icons = {
  Perfil: {
    name: 'person'
  },
  Formacao: {
    name: 'school'
  },
  Experiencia: {
    name: 'code-slash'
  }
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={ ({route}) => ({
        tabBarIcon: ({ color }) => {
          const { name } = icons[route.name];
          return <Icon name={name} color={color} size={20} />
        }
        }) }
        tabBarOptions={{
          activeBackgroundColor: 'lightgray',
          activeTintColor: 'black',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Perfil" component={Perfil}></Tab.Screen>
        <Tab.Screen name="Formacao" component={Formacao}></Tab.Screen>
        <Tab.Screen name="Experiencia" component={Experiencia}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}