import React from 'react';
import { View, Text, FlatList, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { dataSource } from './Data';

const Home = ({ navigation }) => {
    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('Edit', { item })}
        >
            <Text style={styles.text}>{item.description}</Text>
            <Text style={styles.text}>{item.type}: ${item.value}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.TitleName}>
                <Text style={styles.TitleNameText}>BANANA</Text>
            </View>

            <FlatList
                data={dataSource}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
            />

            <TouchableOpacity
                style={styles.ADDButton}
                onPress={() => navigation.navigate('Add')}
            >
                <Text style={styles.ADDButtonText}>NEW INCOME/EXPENSE</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.TotalButton}
                onPress={() => navigation.navigate('Total')}
            >
                <Text style={styles.TotalButtonText}>TOTAL INCOME/EXPENSE</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        paddingBottom: 20,
        backgroundColor: 'lightgray',
        flex: 1,
    },
    TitleNameText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    TitleName: {
        backgroundColor: 'black',
        height: 70,
        justifyContent: 'center',
    },
    ADDButton: {
        backgroundColor: 'green',
        padding: 10,
        marginBottom: 20,
        borderRadius: 5,
        alignItems: 'center',
    },
    ADDButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    TotalButton: {
        backgroundColor: 'purple',
        padding: 10,
        marginBottom: 20,
        borderRadius: 5,
        alignItems: 'center',
    },
    TotalButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    item: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
    },
    text: {
        fontSize: 18,
    },
});

export default Home;
