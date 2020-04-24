import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function Backdrop({navigation}) {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('./img/Icon.png')} />
      <Text style={styles.title}>Non-Contact Deliveries</Text>
      <Text style={styles.description}>
        When placing an order, select the option “Contactless delivery” and the
        courier will leave your order at the door.
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Category')}>
          <Text style={styles.buttonText}>ORDER NOW</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    height: 584,
    backgroundColor: '#F6F5F5',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  logo: {
    marginTop: 64,
  },
  title: {
    marginTop: 24,
    marginRight: 44,
    marginLeft: 44,
    textAlign: 'center',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 34,
    lineHeight: 41,
    color: '#2D0C57',
  },
  description: {
    marginTop: 62,
    marginRight: 19,
    marginLeft: 19,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 17,
    lineHeight: 25,
    textAlign: 'center',
    letterSpacing: -0.41,
    color: '#9586A8',
  },
  buttonContainer: {
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
  },
  button: {
    marginTop: 62,
    backgroundColor: '#0BCE83',
    width: '100%',
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 15,
    lineHeight: 18,
    alignItems: 'center',
    textAlign: 'center',
  },
});
