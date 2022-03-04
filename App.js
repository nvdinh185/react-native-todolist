import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import styles from './App.components.style';
import Form from './components/Form';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>To do List</Text>
        <ScrollView style={styles.items}>
          <Task />
        </ScrollView>
      </View>
      <Form />
    </View>
  );
}
