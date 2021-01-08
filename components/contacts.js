import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, FlatList, Button, Vibration } from 'react-native';
import * as Contacts from 'expo-contacts';

export default function SafeContact(props) {

  const [contacts, setContacts] = useState([]);

  try {
    useEffect(() => {
      
      const getContacts = async () => {
        const { status } = await Contacts.requestPermissionsAsync();
        if (status === 'granted') {
          const contactsData = await Contacts.getContactsAsync();
          setContacts(contactsData.data);
          Vibration.vibrate([100,200,100]);
        }
      };

      getContacts();

    }, []);
  }
  catch(e) {
    console.warn(e.message)
  };

  // add ability to choose a contact from list (buttons?)

  // save selected contact to state

  // pull phone number from set contact

  // send the safe contact to store

  // wishlist: add ability to add a additional contacts or replace current contact

  return (
    <View styles={styles.container}>

      <FlatList 
        data={contacts}
        keyExtractor={ (item) => item.id }
        renderItem={ ({item}) => <Button title={item.name || 'no name available'} onPress={ () => props.get(item) } /> }
      />

    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginLeft: 50
  },
});

