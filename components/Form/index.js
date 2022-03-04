import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

import styles from './style';

const Form = () => {
    return (
        <View style={styles.addTask}>
            <TextInput placeholder='Your task' style={styles.input} />
            <TouchableOpacity>
                <View style={styles.iconWraper}>
                    <Text style={styles.icon}>+</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Form;