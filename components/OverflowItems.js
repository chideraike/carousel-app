import * as React from 'react';
import { StyleSheet, View, Animated, Text } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { OVERFLOW_HEIGHT, SPACING } from './Constant';

export default OverflowItems = ({ data, scrollXAnimated }) => {
    const inputRange = [-1, 0, 1];
    const translateY = scrollXAnimated.interpolate({
        inputRange,
        outputRange: [OVERFLOW_HEIGHT, 0, -OVERFLOW_HEIGHT]
    });
    return (
        <View style={styles.overflowContainer}>
            <Animated.View style={{ transform: [{ translateY }] }}>
                {data.map((item, index) => {
                    return (
                        <View key={index} style={styles.itemContainer}>
                            <Text style={[styles.title]} numberOfLines={1}>
                                {item.title}
                            </Text>
                            <View style={styles.itemContainerRow}>
                                <Text style={[styles.location]}>
                                    <EvilIcons
                                        name='location'
                                        size={16}
                                        color='black'
                                        style={{ marginRight: 5 }}
                                    />
                                    {item.location}
                                </Text>
                                <Text style={[styles.date]}>{item.date}</Text>
                            </View>
                        </View>
                    );
                })}
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    overflowContainer: {
        height: OVERFLOW_HEIGHT,
        overflow: 'hidden',
    },
    itemContainer: {
        height: OVERFLOW_HEIGHT,
        padding: SPACING,
    },
    title: {
        fontSize: 28,
        fontWeight: '900',
        textTransform: 'uppercase',
        letterSpacing: -1,
        fontFamily: 'PlayfairDisplay_800ExtraBold'
    },
    itemContainerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    location: {
        fontSize: 16,
        fontFamily: 'Comfortaa_300Light'
    },
    date: {
        fontSize: 12,
        fontFamily: 'Comfortaa_300Light'
    },
});