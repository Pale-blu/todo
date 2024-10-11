// screens/TodoScreen.js
import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    StatusBar,
} from 'react-native';

export default function TodoScreen() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    // Function to add a new task
    const addTodo = () => {
        if (newTodo.trim()) {
            setTodos([...todos, { key: Math.random().toString(), text: newTodo.trim() }]);
            setNewTodo('');
        }
    };

    // Function to remove a task by its key
    const removeTodo = (key) => {
        setTodos(todos.filter((todo) => todo.key !== key));
    };

    return (
        <View style={styles.container}>
            {/* Status Bar for better UI on dark background */}
            <StatusBar barStyle="light-content" backgroundColor="#101010" />

            {/* App Title */}
            <Text style={styles.title}>Todo List</Text>

            {/* Input Field */}
            <TextInput
                style={styles.input}
                placeholder="Add a new task"
                placeholderTextColor="#6B7280"
                value={newTodo}
                onChangeText={(text) => setNewTodo(text)}
            />

            {/* Add Task Button */}
            <TouchableOpacity style={styles.addButton} onPress={addTodo}>
                <Text style={styles.addButtonText}>Add Task</Text>
            </TouchableOpacity>

            {/* Todo List */}
            <FlatList
                style={styles.todoList}
                data={todos}
                renderItem={({ item }) => (
                    <View style={styles.todoItem}>
                        <Text style={styles.todoText}>{item.text}</Text>
                        <TouchableOpacity onPress={() => removeTodo(item.key)}>
                            <Text style={styles.deleteButton}>🗑️</Text>
                        </TouchableOpacity>
                    </View>
                )}
                ListEmptyComponent={<Text style={styles.emptyText}>No tasks yet. Add some!</Text>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#101010', // ChatGPT's dark background
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#E5E7EB', // Off-white text
        marginBottom: 20,
        alignSelf: 'center',
    },
    input: {
        height: 50,
        borderColor: '#303030',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        color: '#E5E7EB', // Off-white text
        backgroundColor: '#181818',
        marginBottom: 10,
        fontSize: 16,
    },
    addButton: {
        backgroundColor: '#10B981', // Emerald color
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 20,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    todoList: {
        flex: 1,
    },
    todoItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#181818',
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#303030',
    },
    todoText: {
        color: '#E5E7EB', // Off-white text
        fontSize: 16,
        flexShrink: 1, // Allows text to wrap if too long
    },
    deleteButton: {
        color: '#EF4444', // Red color for delete button
        fontSize: 18,
    },
    emptyText: {
        color: '#6B7280', // Grey color for empty state
        fontSize: 16,
        textAlign: 'center',
        marginTop: 50,
    },
});
