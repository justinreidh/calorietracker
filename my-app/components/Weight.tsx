import { Text, View, StyleSheet, FlatList, Dimensions, ScrollView } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';


const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

export default function Weight() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Weight</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontSize: 16,
    },
    header: {
        fontSize: 16,
        color: 'white',
        margin: 20,
    },
    macroCard: {
        marginLeft: 30,
        marginRight: 30,
    },
    container: {
        height: windowHeight *.3,
        width: windowWidth*.9,
        borderColor: 'white',
        borderWidth: 2, 
    },
    macros: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        alignItems: 'flex-end',
    },
    calories: {
        fontSize: 50,
    },
})