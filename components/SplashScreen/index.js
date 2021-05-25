import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import CryptoLogoIcon from '../../assets/crypto-alert-logo-round.png';

const SplashScreen = () => {
  return (
    <View style={styles.splashContainer}>
      <Image source={CryptoLogoIcon} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  splashContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  logo: {
    resizeMode: 'center',
    width: '20%',
    // height: '10%',
  },
});

export default SplashScreen;
