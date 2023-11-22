import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

export const Loader = () => {
    return (
        <View style={styles.loaderContainer}>
            <ActivityIndicator size={50} color="gray" />
            <Text>Cargando...</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    loaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
