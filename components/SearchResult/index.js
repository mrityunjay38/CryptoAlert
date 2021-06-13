import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  useColorScheme,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import {addCoin, getStorage} from '../../utils/localStorage';

const SearchResult = ({coinList, searchText}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [filteredCoins, setFilteredCoins] = useState([]);
  const [usedCoins, setUsedCoins] = useState([]);

  useEffect(() => {
    if (searchText) {
      searchText = searchText.toLowerCase();
      const list = [];
      for (let x = 0; x < coinList.length; x++) {
        if (coinList[x].indexOf(searchText) !== -1) {
          list.push(coinList[x]);
        }
      }
      setFilteredCoins(list);
    } else {
      setFilteredCoins([]);
    }
  }, [searchText]);

  useEffect(async () => {
    const localStorage = await getStorage();
    const coins = localStorage['coins'] || [];
    setUsedCoins(coins.map(coin => coin.coinName) || []);
  }, [usedCoins.length]);

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={{
        ...backgroundStyle,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
      }}>
      <View>
        {filteredCoins.map((coin, index) => {
          const disable = usedCoins.includes(coin);
          return (
            <TouchableHighlight
              disabled={disable}
              onPress={() => {
                addCoin(coin);
                setUsedCoins([...usedCoins, coin]);
              }}
              key={coin}
              style={{backgroundColor: 'rgba(20,20,20,1)'}}>
              <View style={styles.coinNameContainer}>
                <Text style={styles.coin}>{coin}</Text>
                {disable ? (
                  <Icon
                    name="check"
                    size={20}
                    color="#00c830"
                    style={{marginRight: 10}}
                  />
                ) : (
                  <Icon
                    name="arrow-left"
                    size={20}
                    color="#878f99"
                    style={{marginRight: 10, transform: [{rotate: '45deg'}]}}
                  />
                )}
              </View>
            </TouchableHighlight>
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  coinNameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: 50,
    marginLeft: 10,
  },
  coin: {
    color: 'white',
    textTransform: 'uppercase',
  },
});

export default SearchResult;
