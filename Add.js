import React, { useState } from 'react';
import {View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity, Image} from 'react-native';
import { dataSource } from './Data';

const Add = ({ navigation }) => {
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const [type, setType] = useState('');

    const addItem = () => {
        if (!description || !value || !type) {
            Alert.alert("Error", "All fields are required.");
            return;
        }

        const newItem = {
            id: dataSource.length + 1,
            description,
            type,
            value: parseFloat(value),
        };
        dataSource.push(newItem);
        navigation.navigate('Home');
    };

    return (
        <View style={styles.container}>
            <View style={styles.Title}>
                <Text style={styles.TitleNamee}>ADD INCOME OR EXPENSE</Text>
            </View>

            <Text style={styles.Text}>Description:</Text>
            <TextInput
                style={styles.input}
                onChangeText={setDescription}
                placeholder="Enter description"
            />

            <Text style={styles.Text}>Type (Income/Expense):</Text>
            <TextInput
                style={styles.input}
                onChangeText={setType}
                placeholder="Enter type"
            />

            <Text style={styles.Text}>Value ($):</Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                onChangeText={setValue}
                placeholder="Enter value"
            />

            <Button title="Add Item" onPress={addItem} color="green" />
            <TouchableOpacity
                style={styles.BackButton}
                onPress={() => navigation.navigate('Home')}
            >
                <Text style={styles.BackButtonText}>BACK</Text>
            </TouchableOpacity>


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        backgroundColor: 'lightgray',
        flex: 1,
    },
    input: {
        borderWidth: 1,
        padding: 5,
        marginVertical: 10
    },
    Title: {
        backgroundColor: 'black',
        height: 70,
        justifyContent: 'center',
    },
    TitleNamee: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    Text: {
        fontWeight: 'bold',
        marginVertical: 5,
    },
    BackButton: {
       backgroundColor: 'black',
        padding: 10,
        marginTop: 20,
        alignItems: 'center',
    },
    BackButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    }
});

export default Add;
