import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ToDoForm from './src/ToDoForm';
import React, { useState } from 'react';

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    setTasks([...tasks, taskText]);
    console.log(`New task added: ${taskText}`);
  };

  return (
    <View style={styles.container}>
      <ToDoForm addTask={addTask} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

