import React from 'react';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    item: {
        padding: 10,
        height: 60,
        flexDirection: "row",
        alignItems: "center",
        borderBottomColor: "red",
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    tab: {
        width: 60,
        backgroundColor: "black",
        padding: 8,
        borderRadius: 4,
        justifyContent: "center",
        alignItems: "center"
    },
    tabText: {
        color: "white",
        fontSize: 12,
		whiteSpace: "nowrap",
        textAlign: "center"
    },
    tabCenter: {
        flex: 1,
        paddingLeft: 15
    },
    nameText: {
        fontSize: 16,
        fontWeight: "bold"
    }
});

export const ConcertListItem = ({ navigation, item }) => {
    return (
        <TouchableHighlight 
            underlayColor="#f0f0f0"
            onPress={() => navigation.navigate("Details", { item })}
        >
            <View style={styles.item}>
                <View style={styles.tab}>
                    <Text style={styles.tabText}>
                        {item.date.toLocaleDateString("en-us", { day: "2-digit", month: "short" })}
                    </Text>
                </View>

                <View style={styles.tabCenter}>
                    <Text style={styles.nameText}>
                        {item.name}
                    </Text>
                </View>
            </View>
        </TouchableHighlight>
    );
};