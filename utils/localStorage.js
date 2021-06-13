import AsyncStorage from '@react-native-async-storage/async-storage';

const addCoin = async coin => {
  try {
    if (coin) {
      const localStorage = await getStorage();
      const coins = localStorage['coins'] || [];
      localStorage['coins'] = [...coins, coinObject(coin)];
      const localStorageObject = JSON.stringify(localStorage);
      // console.log(localStorageObject);
      await AsyncStorage.setItem('crypto_coins', localStorageObject);
    }
  } catch (e) {
    // saving error
  }
};

const getStorage = async () => {
  try {
    const coinArray = await AsyncStorage.getItem('crypto_coins');
    return coinArray !== null ? JSON.parse(coinArray) : {};
  } catch (e) {
    // error reading value
  }
};

const coinObject = coinName => {
  return {
    coinName,
    priceRange: [
      {
        below: null,
        above: null,
      },
    ],
  };
};

export {addCoin, getStorage};
