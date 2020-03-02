import React from 'react';
import { Button, View, StyleSheet } from 'react-native';

const buttons = [
    7, 8, 9,
    4, 5, 6,
    1, 2, 3,
    0, 'ok'
];

const MyButton = () => {
    return (
        <View>
            <View style={styles.row}>
                <Button title={'7'} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        alignItems: 'stretch',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 100,
    }
});

export default MyButton;