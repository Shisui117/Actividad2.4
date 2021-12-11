import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';

const image = require('../../assets/images/larga.jpg');

interface Props extends NativeStackScreenProps<any, any> {}

const Component = () => {

  return (
    <View style={styles.Container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.Image} />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    backgroundColor: 'blue',
    flex: 1,
  },
  Image: {
    flex: 1,
  },
});

export default Component;
