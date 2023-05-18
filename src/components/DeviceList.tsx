/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Devices} from './types/types';

export const DeviceList = ({devices}: {devices: Devices}) => {
  const onPressHandler = () => {
    console.log('Pressed');
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
            <Text style={{...styles.title, fontWeight: 500}}>
              {device.address}
            </Text>
          </View>
          <TouchableOpacity style={styles.buttonC} onPress={onPressHandler}>
            <Text style={styles.label}>Connect</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonS} onPress={onPressHandler}>
            <Text style={styles.label}>Save</Text>
          </TouchableOpacity>
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
  buttonC: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  buttonS: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
  },
  label: {
    fontSize: 11,
    fontWeight: 'bold',
    color: 'white',
  },
});
