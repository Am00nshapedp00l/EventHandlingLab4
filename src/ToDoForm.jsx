import React, { useState } from 'react';
import { TextInput, Button, StyleSheet, View, Text } from 'react-native';

function ToDoForm({ addTask }) {
    const [taskText, setTaskText] = useState('');
    const [tasks, setTasks] = useState([]);

    const handleAddTask = () => {
        addTask(taskText);
        setTasks([...tasks, taskText]);
        setTaskText('');
    };

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="Add a new task..."
                onChangeText={(text) => setTaskText(text)}
                value={taskText}
            />
            <Button title="Add Task" onPress={handleAddTask} />
            <View style={styles.taskList}>
                {tasks.map((task, index) => (
                    <Text key={index} style={styles.task}>
                        {task}
                    </Text>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 8,
    },
    taskList: {
        marginTop: 20,
    },
    task: {
        fontSize: 18,
        padding: 5,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
    },
});

export default ToDoForm;