import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
    return(
        <View style={styles.header}>
            <Tex style={styles.title}>My ToDos</Tex>

        </View>
    )   
}; export default Header;

const styles = StyleSheet.create({
    header: {
        height: 80,
        padding: 38,
        backgroundColor:'coral',
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',

    }
})