/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Device} from '../types/types';
import useDevices from '../hooks/useDevices';

import BleManager from 'react-native-ble-manager';

export const DeviceList = ({
  devices,
  isPaired = false,
}: {
  devices: Device[];
  isPaired?: boolean;
}) => {
  const {addPairedDevice, removePairedDevice} = useDevices();

  const onPressHandler = (device: Device) => {
    if (isPaired) {
      removePairedDevice(device);
      return;
    }
    addPairedDevice(device);
  };

  const onConnectHandler = (device: Device) => {
    BleManager.connect(device.address);
    console.log('connected to device', device);
  };

  const onSendCommnad = (device: Device) => {
    const SERVICE_UUID = '00004523-1212-EFDE-1523-785FEABCD120'.toLowerCase();
    const COMMAND_UUID = '00004525-1212-EFDE-1523-785FEABCD120'.toLowerCase();
    BleManager.write(device.address, SERVICE_UUID, COMMAND_UUID, [200]);
    console.log('sending command to device');
  };

  if (devices.length > 0) {
    return (
      <View>
        {devices.map((device, index) => (
          <View style={styles.row} key={index}>
            <View style={{flex: 1}}>
              <Text style={styles.title}>{device.name}</Text>
              <Text style={styles.address}>{device.address}</Text>
            </View>
            {isPaired && !device.isConnected ? (
              <TouchableOpacity
                style={styles.buttonC}
                onPress={() => onConnectHandler(device)}>
                <Text style={styles.label}>Connect</Text>
              </TouchableOpacity>
            ) : null}
            {isPaired ? (
              <>
                <TouchableOpacity
                  style={styles.buttonR}
                  onPress={() => onPressHandler(device)}>
                  <Text style={styles.label}>Remove</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.buttonC}
                  onPress={() => onSendCommnad(device)}>
                  <Text style={styles.label}>Send</Text>
                </TouchableOpacity>
              </>
            ) : null}
            {!isPaired && !device.isSaved ? (
              <TouchableOpacity
                style={styles.buttonS}
                onPress={() => onPressHandler(device)}>
                <Text style={styles.label}>Save</Text>
              </TouchableOpacity>
            ) : null}
          </View>
        ))}
      </View>
    );
  }

  return (
    <View
      style={{...styles.row, justifyContent: 'center', paddingVertical: 30}}>
      <Text style={styles.title}>No devices found</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  address: {
    fontSize: 14,
    marginBottom: 5,
  },
  buttonC: {
    backgroundColor: 'blue',
    padding: 12,
    borderRadius: 5,
    marginHorizontal: 10,
    width: 72,
  },
  buttonS: {
    backgroundColor: 'green',
    padding: 12,
    borderRadius: 5,
    width: 72,
  },
  buttonR: {
    backgroundColor: 'red',
    padding: 12,
    borderRadius: 5,
    width: 72,
  },
  label: {
    fontSize: 11,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});
