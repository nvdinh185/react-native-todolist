import React, { useState } from 'react';
import { Text, View, ScrollView, Alert } from 'react-native';
import styles from './App.components.style';
import Form from './components/Form';
import Task from './components/Task';

export default function App() {

  const [taskList, setTaskList] = useState([111, 222, 333]);

  const handleAddTask = (task) => {
    // add task
    setTaskList([...taskList, task]);
  }

  const handleDeleteTask = (index) => {
    Alert.alert(
      "Thông báo !!!",
      "Bạn có chắc chắn muốn xóa?",
      [
        {
          text: "OK",
          onPress: () => {
            let taskListTmp = [...taskList];
            taskListTmp.splice(index, 1);
            setTaskList(taskListTmp);
          },
        },
        { text: "Cancel", onPress: () => { } }
      ]
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>To do List</Text>
        <ScrollView style={styles.items}>
          {
            taskList.map((item, index) => {
              return <Task key={index} title={item} number={index + 1} onDeleteTask={() => handleDeleteTask(index)} />
            })
          }
        </ScrollView>
      </View>
      <Form onAddTask={handleAddTask} />
    </View>
  );
}
