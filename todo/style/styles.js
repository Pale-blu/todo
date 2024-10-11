import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#121212',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 20,
        alignSelf: 'center',
    },
    input: {
        height: 50,
        borderColor: '#333',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        color: '#fff',
        backgroundColor: '#1E1E1E',
        marginBottom: 10,
        fontSize: 16,
    },
    addTaskButton: {
        backgroundColor: '#3a3a3a', // Darker grey background
        paddingVertical: 15,
        borderRadius: 20,
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
        backgroundColor: '#1E1E1E',
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#333',
    },
    todoText: {
        color: '#fff',
        fontSize: 16,
        flexShrink: 1,
    },
    deleteButton: {
        width: 24,
        height: 24,
    },
    emptyText: {
        color: '#888',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 50,
    },
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)', // Semi-transparent dark background
    },
    modalContainer: {
        backgroundColor: '#181818',
        marginHorizontal: 20,
        padding: 20,
        borderRadius: 8,
    },
    modalTitle: {
        color: '#E5E7EB',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
    },
    taskDetailTitle: {
        color: '#E5E7EB',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    taskDetailDescription: {
        color: '#E5E7EB',
        fontSize: 16,
        marginBottom: 20,
    },
    transparentButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderColor: '#fff',
        borderWidth: 2,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        width: '100%',
        backgroundColor: 'transparent',
    },
    transparentButtonWithBg: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderColor: '#888',
        borderWidth: 2,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        width: '100%',
        backgroundColor: '#2e2e2e', // Light grey background for the button
    },
    transparentButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
