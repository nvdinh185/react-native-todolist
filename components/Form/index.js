import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

import styles from './style';

const Form = (props) => {

    const [task, setTask] = useState('');

    const handleAddTask = () => {
        if (!task[0]) {
            alert("Please enter your task!");
            return;
        }
        props.onAddTask(task);
        setTask('');
    };

    return (
        <View style={styles.addTask}>
            <TextInput
                value={task}
                placeholder='Your task'
                style={styles.input}
                onChangeText={text => setTask(text)}
            />
            <TouchableOpacity onPress={handleAddTask}>
                <View style={styles.iconWraper}>
                    <Text style={styles.icon}>+</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Form;