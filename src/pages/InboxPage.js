import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

import MailList from '../components/MailList'

const InboxPage = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text style={styles.title}>Inbox</Text>
            <MailList />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 32,
        marginLeft: 15,
        marginTop: 10,
        marginBottom: 10
    }
});

export default InboxPage;