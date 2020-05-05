import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import UserAvatar from 'react-native-user-avatar';

const UserStatus = () => {
    const [accountStats, setAccountStats] = useState(
        { name: 'John Smith', points: '150' }
    );

    return (
        <View style={styles.userContainer}>
            <View style={styles.avatar}>
                <UserAvatar size={75} name={accountStats.name} bgColor='#cccccc' />
            </View>
            <View style={styles.userStatus}>
                <Text style={styles.userName}>{accountStats.name}</Text>
                <Text>Loyalty Points: {accountStats.points}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    avatar: {
        width: 75
    },
    userContainer: {
        marginLeft: 10,
        flexDirection: 'row'
    },
    userStatus: {
        flexDirection: 'column',
        marginLeft: 10,
        marginTop: 5
    },
    userName: {
        fontWeight: '700',
        fontSize: 24
    },
    account: {
        marginLeft: 10
    }
});

export default UserStatus;