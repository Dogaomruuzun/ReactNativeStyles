import React from 'react';
import { Image, StyleSheet } from 'react-native';

const img = require('../../img/logo.png');

const styles = StyleSheet.create({
    logo: {
        height: 100,
        borderBottomColor: "darkblue",
        borderBottomWidth: StyleSheet.hairlineWidth
    }
});

export const Logo = () => (
    // Yukarıda tanımladığın değişken adıyla aynı olmalı
    <Image source={img} style={styles.logo} />
);