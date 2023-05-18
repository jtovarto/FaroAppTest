import React from 'react';

import useDevices from '../hooks/useDevices';
import {StyleSheet, Text} from 'react-native';
import {DeviceList} from './DeviceList';

export const DeviceContainer = () => {
  const {pairedDevices, discoveredDevices} = useDevices();

  return (
    <>
      <Text style={styles.title}>Paired</Text>
      <DeviceList devices={pairedDevices} isPaired />
      <Text style={styles.title}>Discovered</Text>
      <DeviceList devices={discoveredDevices} />
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'black',
  },
});
