import React, { useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

const ImageList = () => {
    const [listData, setListData] = useState([
        {id: 'a1', itemUrl: require('../pictures/room1.jpg'), name: 'Luxurious Apartment Room', price: '2.050.000 IDR/night'},
        {id: 'a2', itemUrl: require('../pictures/room2.jpg'), name: 'Designer Comfortable Room', price: '1.200.000 IDR/night'},
        {id: 'a3', itemUrl: require('../pictures/room3.jpg'), name: 'Causal 4 Room + Kitchen', price: '1.500.000 IDR/night'},
        {id: 'a4', itemUrl: require('../pictures/room4.jpg'), name: 'Oak Apartment Room', price: '800.000 IDR/night'},
        {id: 'a5', itemUrl: require('../pictures/room5.jpg'), name: 'Cheap Kosan', price: '250.000 IDR/night'}
    ]);

    return (
        <View style={styles.viewStyle}>
            <FlatList 
                style={styles.listStyle}
                data={listData}
                renderItem={({ item }) => (
                    <View style={styles.itemStyle}>
                        <Image
                            style={styles.imgStyle}
                            source={item.itemUrl}
                        />
                        <Text style={styles.nameStyle}>{item.name}</Text>
                        <Text style={styles.priceStyle}>{item.price}</Text>
                    </View> 
                )}
                keyExtractor={item=>item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1
    },
    listStyle: {
        margin: 10
    },
    itemStyle: {
        paddingBottom: 25,
        flex: 1
    }, 
    nameStyle: {
        fontSize: 24
    },
    priceStyle: {
        fontSize: 12
    },
    imgStyle: {
        width: '100%',
        height: 225,
        borderRadius: 10
    }
});

export default ImageList;