import React, {useEffect, useState} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const SearchBar = () => {
    const [searchText, setSearchText] = useState('');
    const onSearchTextChange = (text) => {console.log(text);setSearchText(text);};

  return (
    <View style={styles.container}>
      <View style={styles.searchField}>
          {!searchText.length ? <Icon name="search1" size={20} color="#878f99" /> : null}
      </View>
      <View style={styles.searchField}>
        <TextInput style={styles.searchInput} placeholder="Search coin" onChangeText={(text) => onSearchTextChange(text)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '80%',
    borderRadius: 100,
    backgroundColor: '#1a1a1a',
    shadowColor: '#fff',
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    
    elevation: 2,
  },
  searchField: {},
  searchInput: {
    fontSize: 20,
    textAlign: 'center'
  },
});

export default SearchBar;
