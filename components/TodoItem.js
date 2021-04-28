import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const TodoItem = (props) => {
     return (
         <TouchableOpacity onPress={ props.handlePress }> 
             <Text style={styles.item}>{ props.item.text } </Text>
         </TouchableOpacity>
        
     )
}; export default TodoItem;

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop:16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
    }

})