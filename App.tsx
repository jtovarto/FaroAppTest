import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native/';
import {DeviceList} from './src/components/DeviceList';

const App = () => {
  const pairedDevices = [
    {name: 'Device 1', address: '00:00:00:00:00:00'},
    {name: 'Device 1', address: '00:00:00:00:00:00'},
    {name: 'Device 1', address: '00:00:00:00:00:00'},
  ];

  const discoveredDevices = [
    {name: 'Device 1', address: '00:00:00:00:00:00'},
    {name: 'Device 1', address: '00:00:00:00:00:00'},
    {name: 'Device 1', address: '00:00:00:00:00:00'},
  ];

  return (
    <SafeAreaView>
      <Text style={styles.title}>Paired</Text>
      <DeviceList devices={pairedDevices} />
      <Text style={styles.title}>Discovered</Text>
      <DeviceList devices={discoveredDevices} />
    </SafeAreaView>
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

export default App;
