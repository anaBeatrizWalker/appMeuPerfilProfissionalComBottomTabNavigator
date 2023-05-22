import * as React from 'react';
import { Text, View, Image } from 'react-native';

import { styles } from './styles.js';

export default function Perfil() {
  return (
    <View style={styles.viewer}>
      <Image style={styles.img} source={require('./../assets/foto_de_perfil.jpg')}/>

      <Text style={styles.conteudo}>
        <Text style={styles.subtitulos}>Dados Pessoais</Text>
        {'\n'}
        Nome: Ana Beatriz
        {'\n'}
        Data de nascimento: 01/01/2000
        {'\n'}
        Gênero: Feminino
      </Text>

      <Text style={styles.conteudo}>
        <Text style={styles.subtitulos}>Pontos fortes</Text>
        {'\n'}
        - Rápida aprendizagem
        {'\n'}
        - Motivação e organização
        {'\n'}
        - Trabalho em equipe e simpatia
      </Text>

      <Text style={styles.conteudo}>
        <Text style={styles.subtitulos}>Ambição</Text>
        {'\n'}
        - Conquistar um plano de carreira
      </Text>

      <Text style={styles.conteudo}>
        <Text style={styles.subtitulos}>Curiosidades</Text>
        {'\n'}
        - Apaixonada por arte, livros, filmes, séries e desenhos
        {'\n'}
        - Marombeira mirim
        {'\n'}
        - Odeia cozinhar
      </Text>
    </View>
  );
}