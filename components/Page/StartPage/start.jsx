import React from 'react';
import {SafeAreaView} from 'react-navigation';
import {View, Image, StyleSheet} from 'react-native';
import Backdrop from './backdrop';

export default function Start({navigation}) {
  return (
    <SafeAreaView forceInset={{bottom: 'never'}} style={styles.background}>
      <View style={styles.container}>
        <Image source={require('./img/Logo.png')} style={styles.logo} />
        <Backdrop navigation={navigation} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#A259FF',
    height: '100%',
  },
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  logo: {
    marginLeft: 25,
    marginTop: 33,
  },
});
