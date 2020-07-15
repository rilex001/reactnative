import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Sandbox() {
    return (
        <View style={styles.container}>
            <Text style={styles.boxOne}>one</Text>
            <Text style={styles.boxTwo}>two</Text>
            <Text style={styles.boxThree}>three</Text>
            <Text style={styles.boxFour}>four</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: 40,
        backgroundColor: '#ddd',
    },
    boxOne: {
        flex: 1,
        backgroundColor: 'violet',
        padding: 10,       
    },
    boxTwo: {
        flex: 1,
        backgroundColor: 'gold',
        padding: 10,       
    },
    boxThree: {
        flex: 2,
        backgroundColor: 'coral',
        padding: 10,       
    },
    boxFour: {
        flex: 3,
        backgroundColor: 'skyblue',
        padding: 10,       
    },
})