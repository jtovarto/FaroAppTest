import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {DeviceContainer} from '../components/DeviceContainer';
import {useNavigation} from '@react-navigation/native';

export const Screen3 = () => {
  const navigation = useNavigation();

  console.log('RENDER SCREEN 3');

  return (
    <View style={styles.screen}>
      <DeviceContainer />
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
  label: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
});
