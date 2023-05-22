import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

import { styles } from './styles.js';

export default function App() {
  return (
    <View style={styles.viewer}>
      {/* <Image style={styles.img} source={require('./../assets/foto_de_perfil.jpg')}/> */}
      
      <Text style={styles.conteudo}>
        <Text style={styles.subtitulos}>Experiência profissional:</Text>
        {'\n'}
        Clear Cloud Software
        {'\n'}
        Cargo: Estagiária Fullstack React.js e Node.js
        {'\n'}
        Duração: 11/2021 a 04/2022
      </Text>

      <Text style={styles.conteudo}>
        BDS Data Solution
        {'\n'}
        Cargo: Estagiária Desenvolvedora Frontend
        {'\n'}
        Duração: 11/2021 a 04/2022
      </Text>

      <Text style={styles.conteudo}>
        <Text style={styles.subtitulos}>Projetos:</Text>
        {'\n'}
        VidaPet (Backend) - Sistema de gerenciamento bla bla bla...
        {'\n'}
        Linguagens: Java e Angular
        {'\n'}
        Link: https://vidaPetShowDeBola.com.brasil
      </Text>

      <Text style={styles.conteudo}>
        VidaPet (Frontend) - Sistema de gerenciamento bla bla bla...
        {'\n'}
        Linguagens: Elm
        {'\n'}
        Link: https://vidaPetShowDeBola.com.brasil
      </Text>

    </View>
  );
}
