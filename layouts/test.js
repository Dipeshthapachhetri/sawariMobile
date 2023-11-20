import React, { useEffect } from 'react';
import { StyleSheet, View, Image,ActivityIndicator,Text,Button,TouchableOpacity,Dimensions } from 'react-native';
import { Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const screenHeight = Dimensions.get('window').height;
const scrollHeight=screenHeight*0.85;
const TestScreen = ({ navigation }) => {

    const showAlertAndNavigate = () => {
        console.log("pressed");
        Alert.alert(
          'Result',
          'Your score is:',
          [
            {
              text: 'Cancel',
              style: 'cancel'
            },
            {
              text: 'OK',
              onPress: () => navigation.navigate('Navigator')
            }
          ],
          { cancelable: false }
        );
      }
   
  return (
    
    <View style={{flex:1}}>
    <View style={{flexDirection:'row',backgroundColor:'#5ce1e6',justifyContent:'center',alignItems:'center',height:'10%'}}>
    
      <View style={{flex:2, marginLeft:5}}>
        <TouchableOpacity style={{ backgroundColor: 'blue', padding: 10,borderRadius:5 }} onPress={showAlertAndNavigate}>
         <Text style={{ color: 'white',textAlign:'center' }}>Submit</Text>
        </TouchableOpacity>
      </View>

      <View style={{flex:2}}>
        <Text style={{fontSize:22,fontWeight:'700',paddingHorizontal:20,textAlign:'center'}}>
            Test
        </Text>
      </View>

      <View style={{flex:2, marginRight:5}}>
        <TouchableOpacity style={{ backgroundColor: 'blue', padding: 10, borderRadius:5 }}onPress={() => navigation.navigate('Navigator')}>
         <Text style={{ color: 'white',textAlign:'center' }}>Quit</Text>
        </TouchableOpacity>
      </View>

    </View>

    <View style={styles.container}>
        <ScrollView style={{width:'100%'}}>
        <View style={{height:scrollHeight/3, width:'100%'}}>
        
            <View style={{flex:4,backgroundColor:'red',borderColor:'grey',borderWidth:2,borderRadius:10}}>
              
            </View>
            <View style={{flex:1,backgroundColor:'white',borderColor:'grey',borderWidth:2,borderRadius:10}}>
          <Text style={{textAlign:'center',marginTop:2}}>Answer</Text>
            </View>
        </View>
        <View style={{height:scrollHeight/3,width:'100%'}}>
        
            <View style={{flex:4,backgroundColor:'red',borderColor:'grey',borderWidth:2,borderRadius:10}}>
              
            </View>
            <View style={{flex:1,backgroundColor:'white',borderColor:'grey',borderWidth:2,borderRadius:10}}>
          <Text style={{textAlign:'center',marginTop:2}}>Answer</Text>
            </View>
        </View>
        <View style={{height:scrollHeight/3,width:'100%'}}>
        
        <View style={{flex:4,backgroundColor:'red',borderColor:'grey',borderWidth:2,borderRadius:10}}>
          
        </View>
        <View style={{flex:1,backgroundColor:'white',borderColor:'grey',borderWidth:2,borderRadius:10}}>
            <Text style={{textAlign:'center',marginTop:2}}>Answer</Text>
        </View>
        </View>
        <View style={{height:scrollHeight/3,width:'100%'}}>
        
        <View style={{flex:4,backgroundColor:'red',borderColor:'grey',borderWidth:2,borderRadius:10}}>
          
        </View>
        <View style={{flex:1,backgroundColor:'white',borderColor:'grey',borderWidth:2,borderRadius:10}}>
            <Text style={{textAlign:'center',marginTop:2}}>Answer</Text>
        </View>
        </View>
    </ScrollView>
    </View>
    
    <View style={{backgroundColor:'#5ce1e6',justifyContent:'center',alignItems:'center',height:'5%'}}>
   
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height:'85%',
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius:90
    
  },
});

export default TestScreen;
