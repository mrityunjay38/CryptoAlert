import React from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  StyleSheet,
  ScrollView,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/FontAwesome5';

const CoinList = () => {
  const onDelete = () => {};
  const coinList = [1];

  return (
    <>
      {coinList.map((coin, index) => (
        <View style={styles.container} key={index}>
          <View style={styles.coinWrapper}>
            <View style={styles.content}>
              <View style={styles.headerWrapper}>
                <View style={styles.header}>
                  <Text style={styles.title}>XXXX</Text>
                </View>
              </View>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <View style={styles.metaInfo}>
                  <Text style={styles.label}>Price: XX.XXXXXX</Text>
                  <Text style={styles.divider}>|</Text>
                  <Text style={styles.label}>Low: XX.XXXXXXXX</Text>
                  <Text style={styles.divider}>|</Text>
                  <Text style={styles.label}>High: XXX.XXXXX</Text>
                </View>
              </ScrollView>
            </View>
            <View style={styles.action}>
              <TouchableHighlight onPress={onDelete}>
                <Icon name="trash" size={15} color="#1579e3" />
              </TouchableHighlight>
            </View>
          </View>
        </View>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  coinWrapper: {
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    minHeight: 100,
    overflow: 'hidden',
    flexDirection: 'row',
    flex: 1,
  },
  content: {
    flex: 9,
    padding: 10,
  },
  action: {
    flex: 1,
    backgroundColor: '#191e29',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerWrapper: {},
  header: {},
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: Colors.light,
  },
  metaInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    maxHeight: 20,
    overflow: 'hidden',
  },
  label: {
    fontSize: 12,
    color: '#919191',
  },
  delete: {
    flex: 2,
  },
  divider: {
    color: '#878f99',
    marginHorizontal: 5,
  },
});

export default CoinList;
