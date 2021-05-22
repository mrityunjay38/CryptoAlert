import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const SearchBar = ({onSearch}) => {
  const [searchText, setSearchText] = useState('');

  const onSearchTextChange = text => {
    onSearch(text);
    setSearchText(text);
  };

  const onClear = () => {
    onSearch('');
    setSearchText('');
  };

  return (
    <View style={styles.container}>
      <View style={{...styles.searchField, flex: 1}}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search coin"
          onChangeText={onSearchTextChange}
          value={searchText}
        />
      </View>
      {searchText.length ? (
        <View style={styles.searchField}>
          <TouchableHighlight onPress={onClear}>
            <Icon
              name="closecircleo"
              size={15}
              color="#878f99"
              style={{marginRight: 15}}
            />
          </TouchableHighlight>
        </View>
      ) : (
        <Icon
          name="search1"
          size={15}
          color="#878f99"
          style={{marginRight: 15}}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '80%',
    borderRadius: 100,
    backgroundColor: '#1a1a1a',
  },
  searchField: {},
  searchInput: {
    fontSize: 15,
    textAlign: 'left',
    color: 'white',
    marginLeft: 15,
  },
});

export default SearchBar;
