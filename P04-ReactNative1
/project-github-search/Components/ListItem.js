import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'


const ListItem = ({item}) => {
    return (
        <TouchableOpacity style={styles.listItem}>
            <View style={styles.listItemView}>
                <Text style={styles.listItemTitle}>{item.title}</Text>
                <Text style={styles.listItemText}>Description: {item.description}</Text>
                <Text style={styles.listItemText}>Owner: {item.owner}</Text>
                <Text style={styles.listItemText}>Forks: {item.forks}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 15,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderColor: '#eee',
    },
    listItemView: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    listItemText: {
        fontSize: 18,
    },
    listItemTitle: {
        fontSize: 24,
        color: 'grey',
    },
})

export default ListItem
