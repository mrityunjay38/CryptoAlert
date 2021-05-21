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
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/AntDesign';
import SearchBar from './components/SearchBar';

import CryptoAlertLogo from './assets/crypto-alert-logo.png';
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

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [image, setImage] = useState(CryptoAlertLogo);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const switchLogo = () =>
    setImage(image === CryptoAlertLogo ? CryptoAlertLogoPun : CryptoAlertLogo);

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <SafeAreaView style={{...backgroundStyle, ...styles.safeViewContainer}}>
        <View style={styles.header}>
          <TouchableHighlight
            onPress={switchLogo}
            style={{...styles.flexCenter, width: '100%'}}>
            <Image source={image} style={styles.logo} />
          </TouchableHighlight>
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
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
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
        </View>
        <View style={styles.actionBar}>
          <SearchBar />
        </View>
      </SafeAreaView>
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
    height: 60
  },
  logo: {
    resizeMode: 'center',
    width: '50%',
  },
  content: {
    flex: 1,
  },
  actionBar: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    height: 60,
    padding: 10
  },
  flexCenter: {
    justifyContent: 'center',
    alignItems: 'center',
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
