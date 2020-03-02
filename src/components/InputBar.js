import React from 'react';
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity } from 'react-native';

const imgPath = './../images/icons/setting.png';

const InputBar = (props) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                onChangeText={(todoInput) => props.textChange(todoInput)} 
                value={props.todoInput}
            />
            <TouchableOpacity 
                style={styles.addButton}
                onPress={props.addNewTodo}
            >
                <Text style={styles.addButtonText}>
                    <Image source={require(imgPath)} style={styles.img} />
                    Generator
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        shadowOffset: { width: 0, height: 3 },
        shadowColor: '#171717',
        shadowOpacity: .1
    },
    input: {
        backgroundColor: 'gray',
        flex: 1,
        fontSize: 18,
        height: 40,
    },
    addButton: {
        width: 100,
        backgroundColor: '#FFCE00',
        alignItems: 'center',
        justifyContent: 'center',
    },
    addButtonText: {
        color: '#171717',
        fontSize: 18,
        fontWeight: '700'
    },
    img: {
        width: 20,
        height: 20,
        position: 'relative',
    }
});
export default InputBar;