import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Modal,
  TextInput,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/FontAwesome5';

const EditCard = ({visible = false, close, save}) => {
  const alertObject = {
    price: '',
    flow: 'bullish',
  };
  const [alertList, setAlertList] = useState([{...alertObject}]);

  const newAlert = () => {
    let newAlertList = [...alertList, {...alertObject}];
    setAlertList(newAlertList);
  };

  const updateAlert = (field, value, index) => {
    const newAlertList = [...alertList];
    if (field === 'price') {
      newAlertList[index].price = value;
    } else if (field === 'flow') {
      newAlertList[index].flow = value === 'bullish' ? 'bearish' : 'bullish';
    }
    setAlertList(newAlertList);
  };

  return (
    <View style={[styles.container, styles.centerAlign]}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={close}>
        <View style={[styles.wrapper, styles.centerAlign]}>
          <View style={[styles.content, styles.centerAlign]}>
            <View style={styles.priceAction}>
              <View style={[styles.row, {paddingBottom: 5}]}>
                <View style={[styles.col, {flex: 20, paddingLeft: 4}]}>
                  <Text style={styles.label}>Price</Text>
                </View>
                <View style={[styles.col, styles.centerAlign, {flex: 4}]}>
                  <Text style={styles.label}>Flow</Text>
                </View>
              </View>
              <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={styles.alertList}>
                {alertList.map(({price, flow}, index) => {
                  return (
                    <View style={styles.row} key={index}>
                      <View style={[styles.col, {flex: 20}]}>
                        <TextInput
                          style={styles.inputNumber}
                          keyboardType="numeric"
                          numeric
                          placeholder="0.0"
                          value={String(price)}
                          onChangeText={newPrice =>
                            updateAlert('price', newPrice, index)
                          }
                        />
                      </View>
                      <View style={[styles.col, styles.centerAlign, {flex: 4}]}>
                        <TouchableOpacity
                          onPress={() => updateAlert('flow', flow, index)}>
                          {flow === 'bullish' && (
                            <Icon name="caret-up" size={30} color="#00c830" />
                          )}
                          {flow === 'bearish' && (
                            <Icon name="caret-down" size={30} color="#ff001d" />
                          )}
                        </TouchableOpacity>
                      </View>
                    </View>
                  );
                })}
              </ScrollView>
            </View>
            <TouchableOpacity
              style={[styles.addButton, styles.centerAlign]}
              onPress={newAlert}>
              <Icon name="plus-circle" size={20} color="#1579e3" />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.saveButton, styles.centerAlign]}
              onPress={close}>
              <Text style={styles.label}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centerAlign: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    padding: 30,
    backgroundColor: 'rgba(0,0,0,0.8)',
    borderRadius: 10,
  },
  content: {
    width: '100%',
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    overflow: 'hidden',
  },
  text: {
    color: Colors.light,
  },
  priceAction: {
    width: '100%',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ffffff11',
  },
  label: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#1579e3',
  },
  inputNumber: {
    fontSize: 20,
  },
  row: {
    flexDirection: 'row',
  },
  col: {},
  divider: {
    borderLeftWidth: 1,
    borderColor: '#1579e3',
  },
  saveButton: {
    backgroundColor: '#191e29',
    width: '100%',
    padding: 10,
  },
  addButton: {
    width: '100%',
    padding: 10,
  },
  alertList: {
    maxHeight: 200,
    width: '100%',
  },
});

export default EditCard;
