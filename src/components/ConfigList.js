import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome'

const ConfigList = () => {
    return (
        <View style={styles.container}>
            <View style={styles.setting}>
                <Icon name='edit' size={40} color='#aaaaaa' />
                <Text style={styles.settingText}>User Info</Text>
            </View>
            
            <View style={styles.setting}>
                <Icon name='gear' size={40} color='#aaaaaa' />
                <Text style={styles.settingText}> Settings</Text>
            </View>

            <View style={styles.setting}>
                <Icon name='long-arrow-right' size={40} color='#aaaaaa' />
                <Text style={styles.settingText}>Log Out</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 10
    },
    setting: {
        flexDirection: 'row',
        margin: 10,
        alignItems: 'center'
    },
    settingText: {
        fontSize: 24,
        fontWeight: '300',
        marginLeft: 10
    }
});

export default ConfigList;