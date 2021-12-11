import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Title from '../../componentes/Titulo';

const Component = () => {
  const [age, setAge] = useState('');
  const [username, setUsername] = useState('');

  console.log(username, age);

  return (
    <View style={styles.containerVid}>
      <Title />
      <View style={styles.bannerContainer}>
        <Image
          source={require('../../assets/images/grande.jpg')}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>
      <TextInput
        placeholder="Ingresa tu nombre"
        onChangeText={name => setUsername(name)}
      />
      <TextInput
        placeholder="Ingresa tu edad"
        keyboardType="numeric"
        onChangeText={num => setAge(num)}
      />
      <TouchableOpacity
        // onPress={() => navigation.navigate('Results')}
        style={styles.button}>
        <Text style={styles.buttonText}>Numero Obtenido</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Component;

const styles = StyleSheet.create({
  banner: {
    height: 300,
    width: 300,
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  containerVid: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: '100%',
  },
  button: {
    width: '100%',
    backgroundColor: '#902B16',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
  },
  Container: {
    alignItems: 'center',
    backgroundColor: '#686868',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
  },
  Text: {
    fontSize: 25,
    fontWeight: '700',
    letterSpacing: 2,
  },
  ControlsContainer: {
    alignItems: 'center',
    margin: 20,
    width: '100%',
  },
  Age: {
    color: '#464d00',
    fontSize: 20,
    fontWeight: '800',
  },
  ButtonContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    margin: 20,
    justifyContent: 'space-around',
  },
  Button: {
    backgroundColor: '#902B16',
    padding: 10,
    width: 50,
  },
  ButtonText: {
    color: '#fafbfd',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
