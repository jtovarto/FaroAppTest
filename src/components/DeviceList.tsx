/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Device} from '../types/types';
import useDevices from '../hooks/useDevices';

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

  if (devices.length === 0) {
    return (
      <View
        style={{...styles.row, justifyContent: 'center', paddingVertical: 30}}>
        <Text style={styles.title}>No devices found</Text>
      </View>
    );
  }

  return (
    <View>
      {devices.map((device, index) => (
        <View style={styles.row} key={index}>
          <View style={{flex: 1}}>
            <Text style={styles.title}>{device.name}</Text>
            <Text style={styles.address}>{device.address}</Text>
          </View>
          <TouchableOpacity
            style={styles.buttonC}
            onPress={() => onPressHandler(device)}>
            <Text style={styles.label}>Connect</Text>
          </TouchableOpacity>
          {isPaired ? (
            <TouchableOpacity
              style={styles.buttonR}
              onPress={() => onPressHandler(device)}>
              <Text style={styles.label}>Remove</Text>
            </TouchableOpacity>
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
