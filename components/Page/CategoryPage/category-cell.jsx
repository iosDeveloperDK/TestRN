import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

export default function CategoryCell({title, index, keys}) {
  return (
    <View
      key={keys}
      style={{
        ...styles.item,
        paddingRight: index % 2 == 0 ? 10 : index % 2 == 0 ? 0 : 20,
        paddingLeft: index % 2 == 0 ? (index % 2 == 0 ? 20 : 0) : 10,
      }}>
      <View style={styles.content}>
        <Image
          style={styles.itemImage}
          source={{
            uri: `https://picsum.photos/200/300?1${index}`,
          }}
        />
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    width: '50%',
    paddingBottom: 20,
  },
  itemImage: {
    height: 140,
    width: '100%',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  content: {
    backgroundColor: 'white',
    height: 211,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#D9D0E3',
  },
  title: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 21,
    color: '#2D0C57',
    paddingHorizontal: 16,
    marginTop: 10,
  },
});
