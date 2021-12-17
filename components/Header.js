import React from 'react';
import { StyleSheet, Image, View } from 'react-native';


export default function Header() {
    return (
      <View style={styles.header}>
        <Image style={styles.linhas} source={require('../assets/images/linhas.png')} />
        <Image style={styles.logocarta} source={require('../assets/images/logocarta.png')} />
      </View>
    )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    padding: 10,
    height: 50,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  linhas: {
    height: 50,
    width: 50,
  },
  logocarta: {
    height: 50,
    width: 50,
  },
});