import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function NavigationTitle() {
  return (
    <View>
      <Text style={styles.title}>Categories</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    paddingLeft: 20,
    fontWeight: 'bold',
    fontSize: 34,
    lineHeight: 41,
    letterSpacing: 0.41,
    color: '#2D0C57',
  },
});
