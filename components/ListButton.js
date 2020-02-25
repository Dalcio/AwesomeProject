import React from 'react';
import { View, StyleSheet, Button, Image, TouchableOpacity, Text } from 'react-native';
import { isRequired } from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType';

const ListButton = (props) => {
    return (
        <TouchableOpacity
            onPress={props.showList}
        >
            <View style={styles.listButtonContainer}>
                <Image
                    style={styles.listButtonImage}
                    source={require("./../images/icons/clipboard.png")}
                />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    listButtonContainer: {
        borderRadius: 100 / 2,
        borderColor: 'black',
        borderWidth: 2,
        marginLeft: 10,
        marginBottom: 10,
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    listButtonImage: {
        borderRadius: 100 / 2,
        width: 30,
        height: 30
    }
});

export default ListButton;