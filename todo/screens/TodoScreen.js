import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

export const TodoScreen = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    const addTodo = () => {
        if (newTodo.length > 0) {
            setTodos([...todos, { key: Math.random().toString(), text: newTodo }]);
            setNewTodo('');
        }
    };

    const removeTodo = (key) => {
        setTodos(todos.filter((todo) => todo.key !== key));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Todo App</Text>
            <TextInput
                style={styles.input}
                placeholder="Add a new task"
                value={newTodo}
                onChangeText={(text) => setNewTodo(text)}
            />
            <Button title="Add Task" onPress={addTodo} />
            <FlatList
                data={todos}
                renderItem={({ item }) => (
                    <View style={styles.todoItem}>
                        <Text>{item.text}</Text>
                        <TouchableOpacity onPress={() => removeTodo(item.key)}>
                            <Text style={styles.deleteButton}>Delete</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f0f0f0',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    todoItem: {
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    deleteButton: {
        color: 'red',
    },
});
