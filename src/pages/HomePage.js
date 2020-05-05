import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

import ImageList from '../components/ImageList'

const HomePage = () => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <Text style={styles.title}>Home Listing</Text>
            <ImageList />
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

export default HomePage;