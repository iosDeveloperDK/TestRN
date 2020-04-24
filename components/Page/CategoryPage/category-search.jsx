import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

export default function CategorySearch({onChange}) {
  return (
    <View style={styles.search}>
      <Image style={styles.searchIcon} source={require('./img/search.png')} />
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        placeholderTextColor="#9586A8"
        onChange={event => {
          onChange(event.nativeEvent.text.toLowerCase());
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  search: {
    borderWidth: 1,
    borderColor: '#D9D0E3',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    marginTop: 27,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 27,
  },
  searchIcon: {
    marginLeft: 22,
    marginRight: 16,
  },
  title: {
    paddingLeft: 10,
    fontWeight: 'bold',
    fontSize: 34,
    lineHeight: 41,
    letterSpacing: 0.41,
    color: '#2D0C57',
  },
  searchInput: {
    flexGrow: 1,
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.41,

    color: '#9586A8',
    marginRight: 22,
  },
});
