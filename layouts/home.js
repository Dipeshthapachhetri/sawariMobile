import React, { useEffect } from 'react';
import { StyleSheet, View, Image,ActivityIndicator,Text,TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const HomeScreen = ({ navigation }) => {
  useEffect(() => {
    }, [navigation]);

const categories=['Bike','scooter','car','bus','excavator','micro'];
  return (
   
    <View style={{flex:1}}>
    
      <View style={{flex:1,backgroundColor:'#5ce1e6'}}>
    <Text style={{fontSize:22,fontWeight:'700',paddingHorizontal:20, marginTop:20}}>
    What can we help you with, dipesh?
    </Text>
    </View>
    <View style={{flex:10}}>
    <ScrollView style={{backgroundColor:'white',borderWidth:2,paddingTop:20,borderColor:'grey'}} 
       contentContainerStyle={{flexDirection:'row',flexWrap:'wrap',justifyContent:'space-around'}}>
        {
          categories.map(category=>{
            return( 
            <TouchableOpacity onPress={() => navigation.navigate("Opt")} style={{height:180, width:"40%",marginLeft:10, borderWidth:0.5, borderRadius:8,marginTop:20,borderColor:'#dddddd'}}>
            <View style={{flex:1}}>
            <View style={{flex:4, justifyContent:"center",alignItems:'center',borderColor:'grey',borderWidth:2,borderRadius:10}}>
              <Image source={require('../assets/killer.png')}
              style={{flex:1,width:130,height:140,resizeMode:'cover'}}/>
            </View>
            <View style={{flex:1,backgroundColor:'white',borderColor:'grey',borderWidth:2,borderRadius:10}}>
          <Text style={{textAlign:'center',marginTop:2}}>{category}</Text>
            </View>
            </View>
          </TouchableOpacity>)

          })
        
     
}
    </ScrollView>
    </View>
    </View>
    

  )}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
