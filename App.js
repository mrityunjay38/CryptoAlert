/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableHighlight,
  TextInput,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import SplashScreen from './components/SplashScreen';
import SearchBar from './components/SearchBar';
import SearchResult from './components/SearchResult';

import CryptoAlertLogoPun from './assets/crypto-alert-logo-pun.png';

const Section = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const fetchCoins = () => {
  return fetch('https://api.wazirx.com/api/v2/tickers')
    .then(coinList => coinList.json())
    .then(coinsTickers => {
      return Object.keys(coinsTickers);
    })
    .catch(error => {
      console.error(error);
    });
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [showSplash, setShowSplash] = useState(true);
  const [searchText, setSearchText] = useState('');
  const [coinList, setCoinList] = useState([]);
  const onSearch = text => setSearchText(text);

  useEffect(() => {
    fetchCoins().then(coins => {
      setCoinList(coins);
      setShowSplash(false);
    });
  }, []);

  return (
    <>
      {showSplash ? (
        <SplashScreen />
      ) : (
        <>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <SafeAreaView
            style={{...backgroundStyle, ...styles.safeViewContainer}}>
            <View style={styles.header}>
              <Image source={CryptoAlertLogoPun} style={styles.logo} />
            </View>
            <View style={styles.content}>
              <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={backgroundStyle}>
                <View
                  style={{
                    backgroundColor: 'black',
                    paddingBottom: 20,
                  }}>
                  <Section title="Step One">
                    Edit <Text style={styles.highlight}>App.js</Text> to change
                    this screen and then come back to see your edits.
                  </Section>
                  <Section title="See Your Changes">
                    <ReloadInstructions />
                  </Section>
                  <Section title="Debug">
                    <DebugInstructions />
                  </Section>
                  <Section title="Learn More">
                    Read the docs to discover what to do next:
                  </Section>
                  <LearnMoreLinks />
                </View>
              </ScrollView>
              <View style={styles.searchResultContainer}>
                <SearchResult coinList={coinList} searchText={searchText} />
              </View>
            </View>
            <View style={styles.actionBar}>
              <SearchBar onSearch={onSearch} />
            </View>
          </SafeAreaView>
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  safeViewContainer: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    height: 60,
  },
  logo: {
    resizeMode: 'center',
    width: '45%',
  },
  content: {
    flex: 1,
  },
  actionBar: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    height: 60,
    padding: 10,
  },
  flexCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchResultContainer: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    maxHeight: 250,
  },

  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
