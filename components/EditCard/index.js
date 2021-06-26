import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Modal,
  TextInput,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const EditCard = ({visible = false, close, save}) => {
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
              <View style={styles.row}>
                <Text style={[styles.col, styles.label, {flex: 20}]}>
                  Price
                </Text>
                <Text style={[styles.col, styles.label, {flex: 4}]}>Flow</Text>
              </View>
            </View>
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
  col: {
    flex: 1,
  },
  divider: {
    borderLeftWidth: 1,
    borderColor: '#1579e3',
  },
  saveButton: {
    backgroundColor: '#191e29',
    width: '100%',
    padding: 10,
  },
});

export default EditCard;
