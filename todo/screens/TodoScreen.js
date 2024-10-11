import React, { useState, useRef } from 'react';
import {
    View,
    Text,
    TextInput,
    FlatList,
    TouchableOpacity,
    StatusBar,
    Modal,
    Pressable,
    Image,
    Animated
} from 'react-native';
import styles from '../style/styles'; // Import the styles from the new styles.js file

export default function TodoScreen() {
    const [todos, setTodos] = useState([]);
    const [newTodoTitle, setNewTodoTitle] = useState('');
    const [newTodoDetails, setNewTodoDetails] = useState('');
    const [taskDetailVisible, setTaskDetailVisible] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);
    const [isAddingTask, setIsAddingTask] = useState(false);

    // Animated scale values for Add and Close buttons
    const scaleAnimAdd = useRef(new Animated.Value(1)).current;
    const scaleAnimClose = useRef(new Animated.Value(1)).current;

    // Function to handle the scaling effect
    const handleButtonPressIn = (anim) => {
        Animated.spring(anim, {
            toValue: 0.95, // Scale down slightly
            useNativeDriver: true,
        }).start();
    };

    const handleButtonPressOut = (anim, callback) => {
        Animated.spring(anim, {
            toValue: 1, // Scale back to original size
            useNativeDriver: true,
        }).start(() => {
            if (callback) callback(); // Call the function after the animation completes
        });
    };

    // Function to add a new task
    const addTodo = () => {
        if (newTodoTitle.trim()) {
            setTodos([...todos, { key: Math.random().toString(), title: newTodoTitle.trim(), details: newTodoDetails.trim() }]);
            setNewTodoTitle('');
            setNewTodoDetails('');
            setIsAddingTask(false); // Close add task popup
        }
    };

    // Function to remove a task by its key
    const removeTodo = (key) => {
        setTodos(todos.filter((todo) => todo.key !== key));
    };

    // Show task details in modal
    const showTaskDetails = (task) => {
        setSelectedTask(task);
        setTaskDetailVisible(true);
    };

    return (
        <View style={styles.container}>
            {/* Status Bar for better UI on dark background */}
            <StatusBar barStyle="light-content" backgroundColor="#121212" />

            {/* App Title */}
            <Text style={styles.title}>Todo List</Text>

            {/* Add Task Button */}
            <TouchableOpacity style={styles.addTaskButton} onPress={() => setIsAddingTask(true)}>
                <Text style={styles.addButtonText}>Add Task</Text>
            </TouchableOpacity>

            {/* Todo List */}
            <FlatList
                style={styles.todoList}
                data={todos}
                renderItem={({ item }) => (
                    <View style={styles.todoItem}>
                        <TouchableOpacity style={{ flex: 1 }} onPress={() => showTaskDetails(item)}>
                            <Text style={styles.todoText}>{item.title}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => removeTodo(item.key)}>
                            <Image
                                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1828/1828843.png' }} // Dustbin favicon
                                style={styles.deleteButton}
                            />
                        </TouchableOpacity>
                    </View>
                )}
                ListEmptyComponent={<Text style={styles.emptyText}>No tasks yet. Add some!</Text>}
            />

            {/* Modal for Adding Task */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={isAddingTask}
                onRequestClose={() => setIsAddingTask(false)}
            >
                <View style={styles.modalBackground}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalTitle}>Add New Task</Text>

                        <TextInput
                            style={styles.input}
                            placeholder="Title"
                            placeholderTextColor="#888"
                            value={newTodoTitle}
                            onChangeText={(text) => setNewTodoTitle(text)}
                        />
                        <TextInput
                            style={[styles.input, { height: 100 }]} // Adjusted the height to make the details textbox longer
                            placeholder="Details"
                            placeholderTextColor="#888"
                            value={newTodoDetails}
                            onChangeText={(text) => setNewTodoDetails(text)}
                            multiline
                        />

                        {/* Add Button with Animation */}
                        <Animated.View style={{ transform: [{ scale: scaleAnimAdd }] }}>
                            <Pressable
                                style={styles.transparentButtonWithBg}
                                onPressIn={() => handleButtonPressIn(scaleAnimAdd)}
                                onPressOut={() => handleButtonPressOut(scaleAnimAdd, addTodo)}
                            >
                                <Text style={styles.transparentButtonText}>Add</Text>
                            </Pressable>
                        </Animated.View>
                    </View>
                </View>
            </Modal>

            {/* Modal for Task Details */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={taskDetailVisible}
                onRequestClose={() => setTaskDetailVisible(false)}
            >
                <View style={styles.modalBackground}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalTitle}>Task Details</Text>

                        {/* Display Title */}
                        <Text style={styles.taskDetailTitle}>
                            {selectedTask ? selectedTask.title : ''}
                        </Text>

                        {/* Display Details */}
                        <Text style={styles.taskDetailDescription}>
                            {selectedTask ? selectedTask.details : ''}
                        </Text>

                        {/* Close Button with Animation */}
                        <Animated.View style={{ transform: [{ scale: scaleAnimClose }] }}>
                            <Pressable
                                style={styles.transparentButton}
                                onPressIn={() => handleButtonPressIn(scaleAnimClose)}
                                onPressOut={() => handleButtonPressOut(scaleAnimClose, () => setTaskDetailVisible(false))}
                            >
                                <Text style={styles.transparentButtonText}>Close</Text>
                            </Pressable>
                        </Animated.View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}
