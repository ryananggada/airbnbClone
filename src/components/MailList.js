import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import UserAvatar from 'react-native-user-avatar';

const MailList = () => {
    const [inbox, setInbox] = useState([
        { id: 'a1', user: 'Kathy', message: 'Get the latest deal from AirBnb, 30% off!' },
        { id: 'a2', user: 'Bob', message: 'Hello, how are we planning our trips now?' },
        { id: 'a3', user: 'John', message: 'Testing 1, 2, 3' },
        { id: 'a4', user: 'Wade', message: 'Text placeholder' },
        { id: 'a5', user: 'Andrew', message: 'What\'s this?' },
        { id: 'a6', user: 'Matt', message: 'You have been invited to a trip' },
        { id: 'a7', user: 'Chris', message: 'I am your father' },
        { id: 'a8', user: 'Ryan', message: 'One trip to USA please!' },
        { id: 'a9', user: 'Daniel', message: '...' }
    ]);

    return (
        <View style={styles.container}>
            <FlatList
                data={inbox}
                renderItem={({ item }) => (
                    <View style={styles.viewStyle}>
                        <View style={styles.avatar}>
                            <UserAvatar size={75} name={item.user[0]} bgColor='#cccccc' />
                        </View>
                        <View style={styles.chatStyle}>
                            <Text style={styles.nameStyle}>{item.user}</Text>
                            <Text>{item.message}</Text>
                        </View>
                    </View>
                )}
                keyExtractor={item=>item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    viewStyle: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: 10,
        marginTop: 5,
        marginBottom: 5
    },
    avatar: {
        width: 75
    },
    chatStyle: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 10
    },
    nameStyle: {
        fontSize: 24,
        fontWeight: '500',
        paddingBottom: 15
    }
});

export default MailList;