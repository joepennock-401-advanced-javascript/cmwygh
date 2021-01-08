import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SafeContact from './components/contacts.js';

export default function App() {

  const [safeContact, setSafeContact] = useState('');

  function getContact(data) {
    setSafeContact(data);
    console.log(safeContact);
  };
  console.log(safeContact);
  return (
    <View style={styles.container}>
      <SafeContact get={getContact} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6b6b6b',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
