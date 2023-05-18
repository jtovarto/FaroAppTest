import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {DeviceContainer} from '../components/DeviceContainer';
import {useNavigation} from '@react-navigation/native';
import BleManager, {
  BleScanCallbackType,
  BleScanMatchMode,
  BleScanMode,
} from 'react-native-ble-manager';

const SECONDS_TO_SCAN_FOR = 7;
const SERVICE_UUIDS: string[] = [];
const ALLOW_DUPLICATES = true;

export const Screen3 = () => {
  const navigation = useNavigation();
  // const updateDiscovered = useSetAtom(discovered);

  const startScan = () => {
    // reset found peripherals before scan
    // updateDiscovered(new Map<Peripheral['id'], Peripheral>());

    try {
      console.debug('[startScan] starting scan...');
      BleManager.scan(SERVICE_UUIDS, SECONDS_TO_SCAN_FOR, ALLOW_DUPLICATES, {
        matchMode: BleScanMatchMode.Sticky,
        scanMode: BleScanMode.LowLatency,
        callbackType: BleScanCallbackType.AllMatches,
      })
        .then(() => {
          console.debug('[startScan] scan promise returned successfully.');
        })
        .catch(err => {
          console.error('[startScan] ble scan returned in error', err);
        });
    } catch (error) {
      console.error('[startScan] ble scan error thrown', error);
    }
  };

  console.log('RENDER SCREEN 3');

  return (
    <View style={styles.screen}>
      <DeviceContainer />
      <TouchableOpacity style={styles.buttonScan} onPress={startScan}>
        <Text style={styles.label}>Start Scann</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Screen4')}>
        <Text style={styles.label}>Go to Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  button: {
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 5,
    marginHorizontal: 10,
    width: '90%',
    alignSelf: 'center',
    position: 'absolute',
    bottom: '5%',
  },
  buttonScan: {
    backgroundColor: 'black',
    padding: 20,
    borderRadius: 5,
    marginHorizontal: 10,
    width: '90%',
    alignSelf: 'center',
    position: 'absolute',
    bottom: '14%',
  },
  label: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
});
