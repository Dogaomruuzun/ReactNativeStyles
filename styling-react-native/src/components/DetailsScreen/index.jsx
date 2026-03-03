import React from 'react';
import { Text, Image, Button, ScrollView, StyleSheet, View, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    coverer: {
        flex: 1, // Tüm ekranı kaplaması için
        backgroundColor: "#f5f5f5", // Arka planı hafif gri yapar
    },
    image: {
        width: '100%', // Resmin genişliğini ekran genişliğine eşitler
        height: 250, // Sabit yükseklik verir
    },
    imageThumbcoverer: {
        flexDirection: "row", // İçindeki resimleri yan yana dizer
        flexWrap: "wrap", // Sığmayan resimleri alt satıra atar
        justifyContent: "space-between", // Resimler arasında eşit boşluk bırakır
        paddingHorizontal: 10, // Sağ ve soldan iç boşluk
        marginTop: 20, // Üstten 20 birim boşluk verir
    },
    thumbnail: {
        width: (width / 3) - 15, // Ekranı 3'e böler, boşlukları hesaba katar
        height: 100, // Küçük resim yüksekliği
        borderRadius: 8, // Köşeleri yuvarlar
        marginBottom: 10, // Alt alta gelen resimler arasına boşluk koyar
    },
    contentcoverer: {
        padding: 20, // Yazıların etrafına boşluk bırakır
    },
    title: {
        fontSize: 26, // Başlık boyutu
        fontWeight: 'bold', // Yazıyı kalınlaştırır
        color: '#333', // Koyu gri renk
        marginBottom: 8 // Altına boşluk bırakır
    },
    dateText: {
        fontSize: 16,
        color: '#666',
        marginBottom: 15,
        fontStyle: 'italic' // Tarihi eğik yazar
    },
    description: {
        fontSize: 16,
        lineHeight: 24, // Satır arası boşluğu ayarlar (okumayı kolaylaştırır)
        color: '#444',
        marginBottom: 25
    },
    buttoncoverer: {
        marginTop: 10,
        borderRadius: 8, // Buton köşelerini yuvarlar
        overflow: 'hidden' // Köşelerin düzgün görünmesini sağlar
    },
});

export const DetailsScreen = ({ route }) => {
    // Veri gelmezse uygulamanın çökmemesi için varsayılan değerler atadık
    const { name, date } = route.params?.item || { name: "Event Name", date: "Date not set" };
    
    // Resim yollarını klasör yapına göre güncelledim (2 kez geri çıkış)
    const images = [
        require('../../img/img-1.jpg'),
        require('../../img/img-2.jpg'),
        require('../../img/img-3.jpg'),
        require('../../img/img-1.jpg'),
        require('../../img/img-2.jpg'),
        require('../../img/img-3.jpg'),
    ];

    return (
        <ScrollView style={styles.coverer}>
          
            {/* Galeri Alanı */}
            <View style={styles.imageThumbcoverer}>
                {images.map((img, index) => (
                    <Image 
                        key={index}
                        resizeMode='cover'
                        source={img} 
                        style={styles.thumbnail} 
                    />
                ))}
            </View>

            {/* Yazı Alanı */}
            <View style={styles.contentcoverer}>
                <Text style={styles.title}>{name}</Text>
                
                <Text style={styles.dateText}>
                    {date instanceof Date ? date.toLocaleDateString("en-us", {
                        day: "numeric", 
                        weekday: "long", 
                        month: "long", 
                        year: "numeric"
                    }) : date}
                </Text>

                <Text style={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nunc eget tellus fringilla, tempus magna ut, accumsan lectus.
                </Text>

                <View style={styles.buttoncoverer}>
                    <Button title="Purchase Tickets" color="#2196F3" onPress={() => {}} />
                </View>
            </View>
            
            {/* Alt tarafta ekstra boşluk bırakır */}
            <View style={{ height: 40 }} />
        </ScrollView>
    );
};