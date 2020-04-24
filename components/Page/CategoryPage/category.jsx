import React, {useState} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import NavigationTitle from './navigation-title';
import CategorySearch from './category-search';
import CategoryCell from './category-cell';
import data from '../../../utils/data';

export default function Category() {
  const [search, setSearch] = useState('');

  const prepareData = () => {
    return data.filter(({title}) => title.toLowerCase().includes(search));
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <NavigationTitle />
        <CategorySearch onChange={change => setSearch(change)} />
        <FlatList
          style={styles.flatList}
          data={prepareData()}
          renderItem={({item, index}) => (
            <CategoryCell title={item.title} index={index} key={item.id} />
          )}
          keyExtractor={item => item.id}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#F6F5F5',
  },
  flatList: {
    marginTop: 42,
  },
});
