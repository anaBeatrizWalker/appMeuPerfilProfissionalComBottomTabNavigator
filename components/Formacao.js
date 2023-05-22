import * as React from 'react';
import { Text, View, Image } from 'react-native';

import { styles } from './styles.js';

export default function Formacao() {
  return (
    <View style={styles.viewer}>
      {/* <Image style={styles.img} source={require('./../assets/foto_de_perfil.jpg')}/> */}

      <Text style={styles.conteudo}>
        <Text style={styles.subtitulos}>Formação:</Text>
        {'\n'}
        Fatec - SP
        {'\n'}
        Curso: Sistemas Para Internet
        {'\n'}
        Previsão de término: 06/2023
      </Text>

      <Text style={styles.conteudo}>
        <Text style={styles.subtitulos}>Cursos:</Text>
        {'\n'}
        - React e Redux, da Cod3r Cursos de Tecnologia
        {'\n'}
        - JavaScript, da Hcode
        {'\n'}
        - Criação de Sites e Plataformas Digitais, da Novotec
      </Text>

      <Text style={styles.conteudo}>
        <Text style={styles.subtitulos}>Workshops e Bootcamps:</Text>
        {'\n'}
        - Java e SpringBoot, pela DIO
      </Text>
    </View>
  );
}