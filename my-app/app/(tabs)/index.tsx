import { Text, View, StyleSheet, FlatList, Dimensions, ScrollView } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from "expo-router";
import CaloriePage from '../../components/CaloriePage'
import Weight from '../../components/Weight'

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

type dummyDataType = {
  title:string;
}

const dummyData = [
  {title: 'Slide 1'},
  {title: 'Slide 2'},
  {title: 'Slide 3'},
]

const dummyScrollData = [
  {title: 'Breakfast'},
  {title: 'Lunch'},
  {title: 'Dinner'},
  {title: 'Snack'},
]

function Scroll({title}:dummyDataType) {
  return (
    <View style={styles.slideCard}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

function ScrollLog() {
  return (
    <ScrollView style={styles.scroll}>
      {dummyScrollData.map((item, index) => (
        <Scroll key={index} title={item.title} />
      ))}
    </ScrollView>
  )
}


function Slide({title}: dummyDataType) {
  return (
    <View style={styles.carouselCard}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

// function Carousel() {
//   return (
//     <View style={{height:windowHeight*.3}}>
//       <FlatList
//         data={dummyData}
//         style={styles.carousel}
//         contentContainerStyle={{ height: windowHeight * 0.3 }} 
//         horizontal
//         pagingEnabled
//         showsHorizontalScrollIndicator
//         renderItem={({item}) => {
//           return <Slide title={item.title}></Slide>
//         }}
//       />
//     </View>
//   )
// }

function Carousel() {
  return (
        <View style={{height:windowHeight*.3}}>
          <ScrollView
          style={styles.carousel}
                  contentContainerStyle={{ height: windowHeight * 0.3 }} 
                  horizontal
                  pagingEnabled
                  showsHorizontalScrollIndicator
          ><CaloriePage />
          <Weight />
          </ScrollView>
        </View>
      )
}

export default function Index() {
  return (
    <SafeAreaView style={ styles.container}>
     
      <Carousel/>
      <Text style={styles.text}>Log Meals</Text>
      <ScrollLog />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
    height: windowHeight,
    
  },
  text: {
    color: '#fff',
  },
  profileButton: {
    width: windowWidth,
    color: '#fff',
    borderColor: '#fff',
    borderWidth: 2,
    textAlign: 'right',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
  carouselCard: {
    width:windowWidth * 0.9,
    height: windowHeight * 0.3,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  carousel: {
    borderWidth:1,
    borderColor:'#fff',
    width:windowWidth * 0.9,
    borderRadius: 10,
    marginBottom: 10,
  },
  slideCard: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.1,
    borderColor: '#fff',
    borderWidth: 3,
    justifyContent:'center',
    padding: 5,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 10,
  },
  scroll: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.3,
    borderRadius: 10,
  }
});