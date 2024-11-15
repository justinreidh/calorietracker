import { Text, View, StyleSheet, Button, ScrollView, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

export default function AboutScreen() {
    return (

        <SafeAreaView style={styles.container}>
            <ScrollView >
                <View  style={styles.card}><Text style={styles.text}>Profile</Text></View>
                <View style={styles.card}><Text style={styles.text}>Profile</Text></View>
                <View style={styles.card}><Text style={styles.text}>Profile</Text></View>
                <View style={styles.card}><Text style={styles.text}>Profile</Text></View>
            </ScrollView>
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 20
    },
    card: {
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 10,
        width: windowWidth*.9,
        height: 70,
        marginBottom: 20,
        padding:10,

    }
});