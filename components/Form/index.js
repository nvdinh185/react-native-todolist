import React, { useState } from 'react';
import { View, Text, Keyboard, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

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
        Keyboard.dismiss();
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={10}
            style={styles.addTask}
        >
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
        </KeyboardAvoidingView>
    )
}

export default Form;