import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { dataSource } from './Data';

const Total = ({ navigation }) => {
    const income = dataSource
        .filter((item) => item.type === "Income")
        .reduce((acc, item) => acc + item.value, 0);

    const expense = dataSource
        .filter((item) => item.type === "Expense")
        .reduce((acc, item) => acc + item.value, 0);

    const total = income - expense;
    const isSurplus = total >= 0;

    return (
        <View style={styles.container}>
            <View style={styles.Title}>
                <Text style={styles.TitleName}>TOTAL INCOME/EXPENSE</Text>
            </View>

            <Text style={styles.IncomeText}>Total Income: ${income.toFixed(2)}</Text>
            <Text style={styles.ExpenseText}>Total Expense: ${expense.toFixed(2)}</Text>
            <Text
                style={[
                    styles.Text,
                    { color: isSurplus ? 'green' : 'red' }
                ]}
            >
                {isSurplus ? "Surplus" : "Deficit"}: ${Math.abs(total).toFixed(2)}
            </Text>

            <Image
                source={
                    isSurplus
                        ? require('./img/money-gif-15.gif')
                        : require('./img/losing.gif')
                }
                style={styles.gif}
            />

            <TouchableOpacity
                style={styles.BackButton}
                onPress={() => navigation.navigate('Home')}
            >
                <Text style={styles.BackButtonText}>Back to Home</Text>
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
    Title: {
        backgroundColor: 'black',
        height: 70,
        justifyContent: 'center',
        marginBottom: 20,
    },
    TitleName: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    Text: {
        fontWeight: 'bold',
        marginVertical: 10,
        fontSize: 16,
        textAlign: 'center',
    },
    IncomeText: {
        color: 'green',
        fontWeight: 'bold',
        fontSize: 16,
        marginVertical: 10,
        textAlign: 'center',
    },
    ExpenseText: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 16,
        marginVertical: 10,
        textAlign: 'center',
    },
    BackButton: {
        backgroundColor: 'black',
        padding: 10,
        marginTop: 20,
        alignItems: 'center',
        borderRadius: 5,
    },
    BackButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    gif: {
        width: 420,
        height: 420,
        alignSelf: 'center',
        marginVertical: 20,
    },
});

export default Total;
