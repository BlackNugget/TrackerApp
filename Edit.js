import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { dataSource } from './Data';

const Edit = ({ route, navigation }) => {
    const { item } = route.params;
    const [description, setDescription] = useState(item.description);
    const [value, setValue] = useState(item.value.toString());
    const [type, setType] = useState(item.type);

    const saveItem = () => {
        const index = dataSource.findIndex((i) => i.id === item.id);
        dataSource[index] = {
            ...dataSource[index],
            description,
            value: parseFloat(value),
            type,
        };
        navigation.navigate('Home');
    };

    const deleteItem = () => {
        const index = dataSource.findIndex((i) => i.id === item.id);
        dataSource.splice(index, 1);
        navigation.navigate('Home');
    };

    return (
        <View style={styles.container}>
            <View style={styles.Title}>
                <Text style={styles.TitleNamee}>EDIT ITEM</Text>
            </View>

            <Text style={styles.Text}>Description:</Text>
            <TextInput
                style={styles.input}
                value={description}
                onChangeText={setDescription}
            />

            <Text style={styles.Text}>Type:</Text>
            <TextInput
                style={styles.input}
                value={type}
                onChangeText={setType}
            />

            <Text style={styles.Text}>Value:</Text>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={setValue}
                keyboardType="numeric"
            />

            <TouchableOpacity style={[styles.ActionButton, styles.SaveButton]} onPress={saveItem}>
                <Text style={styles.ActionButtonText}>Save Changes</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.ActionButton, styles.DeleteButton]} onPress={deleteItem}>
                <Text style={styles.ActionButtonText}>Delete Item</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.BackButton}
                onPress={() => navigation.navigate('Home')}
            >
                <Text style={styles.BackButtonText}>Back</Text>
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
        marginVertical: 10,
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
    },
    ActionButton: {
        padding: 10,
        marginTop: 20,
        alignItems: 'center',
        borderRadius: 5,
    },
    SaveButton: {
        backgroundColor: 'green',
    },
    DeleteButton: {
        backgroundColor: 'red',
    },
    ActionButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Edit;
