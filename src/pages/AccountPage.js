import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

import UserStatus from '../components/UserStatus';
import ConfigList from '../components/ConfigList';

const AccountPage = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Account</Text>
            <UserStatus />
            <ConfigList />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        fontSize: 32,
        marginLeft: 15,
        marginTop: 10,
        marginBottom: 10
    }
});

export default AccountPage;