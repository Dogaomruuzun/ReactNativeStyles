import 'react-native-gesture-handler';
import React from 'react';
// HATA DÜZELTİLDİ: Navigationcoverer -> NavigationContainer
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Bileşenlerin (Daha önce { } ile export ettiğimiz için bu şekilde kalmalı)
import { HomeScreen } from './src/components/HomeScreen';
import { DetailsScreen } from './src/components/DetailsScreen';
import { Logo } from './src/components/Logo';

// HATA DÜZELTİLDİ: View'ı react-native-web'den değil, react-native'den alıyoruz
import { StyleSheet, View } from 'react-native';

// Stack tanımlaması dışarıda olmalı
const Stack = createStackNavigator();

const styles = StyleSheet.create({
    appcoverer: {
        flex: 1, // 'display: flex' React Native'de varsayılandır, sadece flex:1 yeterli
        flexDirection: "column",
        backgroundColor: 'white'
    },
    navigator: {
        flex: 1
    }
});

export default function App() {
  return (
    // SafeAreaView kullanman mobil cihazlarda çentiğe girmeyi engeller, şimdilik View kalsın
    <View style={styles.appcoverer}> 
      <NavigationContainer>
          <Logo />
          <Stack.Navigator initialRouteName="Home">
              <Stack.Screen 
                name="Home" 
                component={HomeScreen} 
                options={{ title: 'Ana Sayfa' }}
              />
              <Stack.Screen 
                name="Details" 
                component={DetailsScreen} 
                options={{ title: 'Detaylar' }}
              />
          </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}