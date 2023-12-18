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
      const questions=[{_id:'a',
        number:1,question:'what is the name of two wheeler?',options:['car','bike','truck','lorry'],correct:'bike',category:[{categoryLetter:'A',vehicles:['bike','scooter']}],subject:'GK',image:{bool:false,imageData:''}
      }]
     
  return (
    
    <View style={{flex:1}}>
    <View style={{flexDirection:'row',backgroundColor:'#5ce1e6',justifyContent:'center',alignItems:'center',flex:1}}>
    
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
    {
          questions.map(question=>{
            return(
              <View>
                <Text>   {question.number}   {question.question}</Text>
                <View>
                  {
                  question.options.map(option=>{
                    return(
                  <Button  style={{margin:10}}title={option}/>
                  )
                })
              }
                </View>
              </View>
            )
          })}
        
    </ScrollView>
    </View>
    
    <View style={{flexDirection:'row',backgroundColor:'#5ce1e6',justifyContent:'center',alignItems:'center',flex:1}}>
    <View style={{flex:2,backgroundColor:'white',borderColor:'grey',justifyContent:'center',borderWidth:2,borderRadius:10,height:'80%',margin:10}}>
          <Text style={{marginLeft:10}}>Question:   </Text> 
    </View>
    <View style={{flex:1, marginRight:5}}>
        <TouchableOpacity style={{ backgroundColor: 'blue', padding: 10, borderRadius:5 }}onPress={() => navigation.navigate('Navigator')}>
         <Text style={{ color: 'white',textAlign:'center' }}>Next</Text>
        </TouchableOpacity>
      </View>

    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    flex:8,
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius:90
    
  },
});

export default TestScreen;
