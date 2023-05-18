import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import useDevices from '../hooks/useDevices';
import {DeviceList} from '../components/DeviceList';
import {useNavigation} from '@react-navigation/native';

export const Screen2 = () => {
  const {pairedDevices, discoveredDevices} = useDevices();
  const navigation = useNavigation();

  console.log('RENDER SCREEN 2');
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Paired</Text>
      <DeviceList devices={pairedDevices} isPaired />
      <Text style={styles.title}>Discovered</Text>
      <DeviceList devices={discoveredDevices} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Screen1')}>
        <Text style={styles.label}>Go to Screen 1</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'black',
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
  label: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
});
