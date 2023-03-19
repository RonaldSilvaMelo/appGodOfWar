import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, MedievalSharp_400Regular } from '@expo-google-fonts/dev';

export default function App() {
  let [fontsLoaded] = useFonts({
    MedievalSharp_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Ordem cronológica de God of War</Text>

        <FlatList
          data={arrayGOF}
          renderItem={({ item }) => (
            <View style={styles.container}>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(
                    'https://pt.wikipedia.org/wiki/God_of_War_(jogo_eletr%C3%B4nico_de_2005)'
                  )
                }>
                <View style={styles.imgBorder}>
                  <Image style={styles.img} source={item.capa} />
                </View>
              </TouchableOpacity>

              <Text style={styles.plataforma}>
                <Text style={styles.subTitulo}>Plataforma(s): </Text>
                <Text style={styles.text}>{item.jogo}</Text>
                {'\n'}
                <Text style={styles.subTitulo}>Ano: </Text>
                <Text style={styles.text}>{item.ano}</Text>
                {'\n'}
                <Text style={styles.subTitulo}>jogo: </Text>
                <Text style={styles.text}>{item.plataforma}</Text>
                {'\n'}
              </Text>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#1B1B1B',
    padding: 8,
    alignItems: 'center',
  },

  title: {
    fontSize: 30,
    color: '#B73E09',
    fontFamily: 'MedievalSharp_400Regular',
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 10,
  },

  img: {
    borderRadius: 30,
    width: 300,
    height: 300,
  },

  imgBorder: {
    borderWidth: 2,
    borderRadius: 30,
    marginBottom: 10,
  },

  subTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#B73E09',
    paddingLeft: 20,
    fontFamily: 'MedievalSharp_400Regular',
  },

  text: {
    color: '#F2F3F4',
    fontFamily: 'MedievalSharp_400Regular',
    fontSize: 20,
  },
});

const arrayGOF = [
  {
    plataforma: 'PS3',
    ano: '2013',
    jogo: 'God of War Ascension',
    capa: require('./assets/God_of_War_Ascension.png'),
  },
  {
    plataforma: 'PSP(Lançamento), PS3 e PS Vita',
    ano: '2008',
    jogo: 'God of War Chains of Olympus',
    capa: require('./assets/God_of_War_Chains_of_Olympus.png'),
  },
  {
    plataforma: 'PS2',
    ano: '2005',
    jogo: 'God of War',
    capa: require('./assets/God_of_War_1.png'),
  },
  {
    plataforma: 'PSP',
    ano: '2010',
    jogo: 'God of War Ghost of Sparta',
    capa: require('./assets/God_of_War_Ghost_of_Sparta.png'),
  },
  {
    plataforma: 'Celular',
    ano: '2007',
    jogo: 'God of War Betrayal',
    capa: require('./assets/God_of_war_betrayal.jpg'),
  },
  {
    plataforma: 'PS2(Lançamento) e PS3',
    ano: '2007',
    jogo: 'God of War 2',
    capa: require('./assets/God_of_War_2.png'),
  },
  {
    plataforma: 'PS3(Lançamento) e PS4',
    ano: '2010',
    jogo: 'God of War 3',
    capa: require('./assets/God_of_War_3.png'),
  },
  {
    plataforma: 'PS4(Lançamento) e Windows',
    ano: '2018',
    jogo: 'God of War (2018)',
    capa: require('./assets/God_of_War_2018.png'),
  },
  {
    plataforma: 'PS4 e PS5',
    ano: '2022',
    jogo: 'God of War Ragnarök',
    capa: require('./assets/God_of_War_Ragnarok.jpg'),
  },
];
