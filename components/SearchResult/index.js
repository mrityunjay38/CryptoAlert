import React from 'react';
import {ScrollView, useColorScheme, Text, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const SearchResult = ({searchText}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={{
        ...backgroundStyle,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
      }}>
      <View>
        {searchText.split('').map((text, index) => (
          <Text key={index} style={{color: 'white'}}>
            {text}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
};

export default SearchResult;
