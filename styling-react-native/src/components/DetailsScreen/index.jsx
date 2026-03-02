import React from 'react';
import { Text, Image, Button, ScrollView, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        margin: 20,
        padding: 20, // 'pedding' düzeltildi
        borderRadius: 10,
    },
    image: {
        height: 200,
        width: "100%", // 'weight' -> 'width' yapıldı, tam genişlik daha iyi durur
        resizeMode: 'cover',
        marginBottom: 15
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10
    },
    dateText: {
        fontSize: 18,
        color: 'gray',
        marginBottom: 10
    },
    description: {
        fontSize: 16,
        lineHeight: 22,
        marginBottom: 20
    }
});

export const DetailsScreen = ({ route }) => {
    // route.params.item kontrolü (hata almamak için)
    const { name, date } = route.params?.item || {};

    return (
        <ScrollView style={styles.container}>
            {/* Resim Text'in dışına çıkarıldı */}
            <Image 
                source={require('../../img/img-3.jpg')} 
                style={styles.image} 
            />
            
            <Text style={styles.title}>{name}</Text>
            
            <Text style={styles.dateText}>
                {date?.toLocaleDateString("en-us", {
                    day: "numeric", 
                    weekday: "long", 
                    month: "long", 
                    year: "numeric"
                })}
            </Text>

            <Text style={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nunc eget tellus fringilla, tempus magna ut, accumsan lectus.
            </Text>

            <Button title="Purchase Tickets" onPress={() => {}} />
            
            {/* ScrollView altında boşluk bırakmak için ufak bir View */}
            <View style={{ height: 40 }} />
        </ScrollView>
    );
};