import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default function Unsplash({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Unsplash Screen</Text>
            <Button
                title="Unsplash Screen"
                onPress={() => navigation.push('Unsplash')}
            />
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
            <Button title="Go back" onPress={() => navigation.goBack()} />
            <Button
                title="Go back to first screen in stack"
                onPress={() => navigation.popToTop()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    }
})
