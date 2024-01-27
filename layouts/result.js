import { StyleSheet, Text, View, Image, Button, Pressable } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'

const ResultScreen = ({navigation}) => {
  const route = useRoute();
  console.log(route.params);
  let point = (route.params.points)
  let que = (route.params.question)

  
  return (
    <View style={styles.container}>
      <View styles={{flex:1,}}>

      <Image source={require('../assets/killer.png')} style={styles.logo} />

      <View styles={styles.result}>
        <Text style={{
          color: 'black',
          backgroundColor: '#5ce1e6',
          padding: 10,
          fontWeight: 'bold',
          fontSize: 25,
          borderRadius:5,
        }}>You Score : {point+'/'+20}</Text>

      

      </View>
      </View>


      <View style={{flexDirection: 'row', backgroundColor: '#5ce1e6', justifyContent: 'center', alignItems: 'center', flex: 1,marginTop:'86%' }}>
        <View style={{flex:1}}>
       <Pressable onPress={() => navigation.pop(2)}>
        <Text style={{color:'white',
        fontSize:20,
        fontWeight:'bold',
        padding:10,
        borderWidth:0.5,
        backgroundColor:'#306EFF',
        borderRadius:5,
        textAlign:'center',
        margin:15
        }} >Reset</Text>
       </Pressable>
      </View>
      <View style={{flex:2,}}>
       <Pressable onPress={() => navigation.navigate('Navigator')}>
        <Text style={{color:'white',
        fontSize:20,
        fontWeight:'bold',
        marginLeft:150,
        padding:10,
        borderWidth:0.5,
        backgroundColor:'#306EFF',
        borderRadius:5,
        textAlign:'center',
        margin:15,
        width:'39%'
        }} >Exit</Text>
       </Pressable>
      </View>
      </View>
    </View>
  )
}


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
    borderRadius: 90,
   marginTop:'50%',
   marginLeft:45,

  },
});

export default ResultScreen