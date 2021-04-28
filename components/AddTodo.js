import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

const AddTodo = ( props ) => {

    const [text, setText] = useState('');

    const handleChange = (value) => {
        setText(value);
    }
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="new toDo..."
                onChangeText={ (value) => handleChange(value)}
            />
            <Button 
            style={styles.button}
                onPress={ props.handleSubmit } 
                title="add todo" 
                color= "coral"
            />
        </View>
    )

}; export default AddTodo;

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    button: {
        borderRadius: 5,
    }
})
