import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native/';
import {DeviceList} from './src/components/DeviceList';
import useDevices from './src/hooks/useDevices';

const App = () => {
  const {pairedDevices, discoveredDevices} = useDevices();

  return (
    <SafeAreaView>
      <Text style={styles.title}>Paired</Text>
      <DeviceList devices={pairedDevices} isPaired />
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
