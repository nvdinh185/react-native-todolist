import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import styles from './style';

const Task = (props) => {
    const numberText = props.number < 10 ? `0${props.number}` : props.number;

    return (
        <TouchableOpacity onPress={props.onDeleteTask}>
            <View style={styles.item}>
                <View style={[styles.square, props.number % 2 ? styles.even : styles.odd]}>
                    <Text style={styles.number}>{numberText}</Text>
                </View>
                <Text style={styles.content}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Task;