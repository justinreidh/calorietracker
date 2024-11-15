import { Text, View, StyleSheet, FlatList, Dimensions, ScrollView } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';


const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

export default function CaloriePage() {
    return (
        <View style={styles.container}>
            <Text style={styles.header}><Text style={styles.calories}>1800</Text> calories left</Text>
            <View style={styles.macros}>
                <View style={styles.macroCard}>
                    <Text style={styles.text}>Carbs</Text>
                    <Text style={styles.text}>26g</Text>
                </View>
                <View style={styles.macroCard}>
                    <Text style={styles.text}>Protien</Text>
                    <Text style={styles.text}>46g</Text>
                </View>
                <View style={styles.macroCard}>
                    <Text style={styles.text}>Fats</Text>
                    <Text style={styles.text}>16g</Text>
                </View>
            </View>

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