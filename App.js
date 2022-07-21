/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {Button, TextInput, StyleSheet, View, Alert} from 'react-native';
import auth from '@react-native-firebase/auth';

const App = () => {
  // If null, no SMS has been sent
  const [confirm, setConfirm] = useState(null);

  const [code, setCode] = useState('');
  // // Set an initializing state whilst Firebase connects
  // const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [number, onChangeNumber] = React.useState(null);

  function onAuthStateChanged(authUser) {
    setUser(authUser);
    console.log(authUser);
    // if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  // Handle the button press
  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    console.log(confirmation);
    setConfirm(confirmation);
  }

  async function confirmCode() {
    try {
      console.log(code);
      await confirm.confirm(code);
      Alert.alert('Sign In Successful');
    } catch (error) {
      console.error(error);
      // Alert.alert('Invalid code.');
    }
  }

  const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 2,
      borderColor: 'white',
      padding: 10,
    },
    button: {
      height: 50,
      margin: 10,
    },
    container: {
      marginVertical: 200,
      marginHorizontal: 10,
    },
  });

  if (!confirm) {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Enter Mobile Number"
        />
        <View style={styles.button}>
          <Button
            title="Phone Number Sign In"
            onPress={() => signInWithPhoneNumber(`+91${number}`)}
          />
        </View>
      </View>
    );
  }

  return (
    <>
      <View style={styles.container}>
        <TextInput
          value={code}
          style={styles.input}
          onChangeText={text => setCode(text)}
        />
        <Button title="Confirm Code" onPress={() => confirmCode()} />
      </View>
    </>
  );
};

export default App;
