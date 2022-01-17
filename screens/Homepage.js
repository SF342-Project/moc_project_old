import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity
} from 'react-native';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello</Text>
      <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate('TongfahScreen')}>
        <Text style={styles.ButtonText}>
          สถานที่ร้านธงฟ้า
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate('ComparePrice')}>
        <Text style={styles.ButtonText}>
          เปรียบเทียบราคาสินค้า
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({

    Button: {
      marginVertical: 10,
      backgroundColor: 'black',
      width: 320,
      height: 60,
      borderRadius: 10,
      shadowColor: "#000000",
      shadowOpacity: 5,
      shadowRadius: 5,
      elevation: 5
    },
    ButtonText: {
      textAlign: 'center',
      color: '#F0FFFF',
      fontWeight: 'bold',
      fontSize:20,
      padding: 15
    },
  
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingTop: 50,
    },
  
  });
export default Home;


