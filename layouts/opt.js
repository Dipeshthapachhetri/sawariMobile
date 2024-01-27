import React, { useEffect } from 'react';
import { StyleSheet, View, Image,ActivityIndicator,Text,Button } from 'react-native';
import { useRoute } from '@react-navigation/native';
const OptScreen = ({ navigation }) => {
   const route=useRoute()
   console.log(route.params.category);
   console.log(route.params.questions);
  return (
    <View style={styles.container}>
      <Image source={require('../assets/killer.png')} style={styles.logo} />
     
        <Text style={styles.text1}>You are about to attempt</Text>
        <Text style={styles.text2}>SAWARIMOBILE Test Questions</Text>
        <Text style={styles.text1}>You will be asked questions of</Text>
        <Text style={styles.text2}>motorcycle</Text>

      <View style={{margin:10}}>
      <Button title="Mock Test"onPress={() => navigation.navigate('Mock',{category:route.params.category , questions:route.params.questions })}/>
      </View>
      <Button title="View All"onPress={() => navigation.navigate('Question',{category:route.params.category , questions:route.params.questions })}/>
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius:90
    
  },
  text1:{
    fontSize:20,
    color:'#414141',
  },
  text2:{
    fontSize:20,
    fontWeight:'bold',
    color:'#313232',
  }


});

export default OptScreen
