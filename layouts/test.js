import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image, ActivityIndicator, Text, Button, TouchableOpacity, Dimensions, Pressable } from 'react-native';
import { Alert } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { useRoute, useNavigation } from '@react-navigation/native'
import { current } from '@reduxjs/toolkit';

const screenHeight = Dimensions.get('window').height;
const scrollHeight = screenHeight * 0.85;
const TestScreen = ({ }) => {

  const route = useRoute()
  console.log(route.params.category);
  console.log(route.params.questions);
  let quest = (route.params.questions);
 

  const totalque = 20;

  const navigation = useNavigation();



  //points
  const [points, setPoints] = useState(0);

  //index of the questions 
  const [index, setIndex] = useState(0);

  //answer status (true or false)
  const [answerStatus, setAnswerStatus] = useState(null);

  //answers
  const [answers, setAnswers] = useState([]);

  //selected answer
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

  //counter
  const [counter, setCounter] = useState(15);

  //interval
  let interval = null;

  //selected option
  const [selectedOption, setSelectedOption] = useState(null)


  useEffect(() => {
    if (selectedOption !== null) {
      if (selectedOption === currentQuest.correct) {
        setPoints((points) => points + 1);
        setAnswerStatus(true);
        answers.push({ question: index + 1, options: true })
      } else {
        setAnswerStatus(false);
        answers.push({ question: index + 1, options: false })
      }
    }
  }, [selectedOption]);
  function optionPressed(item, index) {
    setSelectedOption(item);
    setSelectedAnswerIndex(index);
    console.log("hurray!!! ?")
  }
  useEffect(() => {
    setSelectedOption(null);
    setAnswerStatus(null);
    setSelectedAnswerIndex(null);
  }, [index]);
  
  useEffect(() =>{
    const myInterval =() =>{
      if (counter >=1){
        setCounter((counter) => counter -1);
      }
      if (counter ===0){
        setIndex(index+1);
        setCounter (20);
      }
    };
  
    interval == setTimeout(myInterval,1000);
  
      //clean up
      return() =>{
        clearTimeout(interval);
      }
   },[counter]);
  
  
   useEffect(() =>{
    if (index +1 > 20){
      navigation.navigate("Result", {
        answers: answers,
        points:points,
      })
    }
   })
  
  
   useEffect(() =>{
     if(!interval){
      setCounter(15);
     }
   },[index])
  
  const currentQuest = quest[index];
  
  console.log(answerStatus)

  return (

    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', backgroundColor: '#5ce1e6', justifyContent: 'center', alignItems: 'center', flex: 1, }}>

        <View style={{ flex: 2, marginLeft: 5 }}>

          <Text style={{ backgroundColor: '#306EFF', padding: 10, borderRadius: 5, color: 'white', textAlign: 'center',fontSize:18 }}>{counter}</Text>

        </View>



        <View style={{ flex: 2 }}>
          <Text style={{ fontSize: 22, fontWeight: '700', paddingHorizontal: 20, textAlign: 'center', color: '#313232' }}>
            Test
          </Text>
        </View>

        <View style={{ flex: 2, marginRight: 5 }}>
          <TouchableOpacity style={{ backgroundColor: '#306EFF', padding: 10, borderRadius: 5 }} onPress={() => navigation.navigate('Navigator')}>
            <Text style={{ color: 'white', textAlign: 'center',fontSize:18 }}>Quit</Text>
          </TouchableOpacity>
        </View>

      </View>



      <View style={{ marginVertical: 120 }}>

        <View style={{}}  >
          {
                 currentQuest.subject.number==1? 
                 index <5 
                 :currentQuest.subject.number==2
               
                

            
          }
          
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 10, color: 'black' }} >{index+1}.{currentQuest.question}</Text>
        </View>

        <View style={{alignItems:'center'}} >
        
          {(currentQuest.image.bool)?
            <Image src={'https://link.storjshare.io/s/jwbuqlac5om3zyc65bnsjpy7l37a/sawari/'+currentQuest.image.imageData+'?wrap=0'} style={{width: 130, height: 140, resizeMode: 'cover' }}/>
              
          : <Text style={{color:'white'}}>{index}</Text>
          }
          
        </View>

        <View >
          {currentQuest.options.map((item, index) => (

            <Pressable
              onPress={() => { selectedOption === null ? optionPressed(item, index) : console.log("can't") }}
              //onPress={()=>{console.log("Hi")}} 
              style={
                selectedAnswerIndex === index &&
                  selectedOption === currentQuest.correct
                  ? {
                    alignItems: "center",
                    borderWidth: 0.5,
                    color: "#00FFFF",
                    marginVertical: 10,
                    backgroundColor: "green",
                    borderRadius: 20,
                  }
                  : selectedAnswerIndex !== null &&
                    selectedAnswerIndex === index
                    ? {
                      alignItems: "center",
                      borderWidth: 0.5,
                      color: "#00FFFF",
                      marginVertical: 10,
                      backgroundColor: "red",
                      borderRadius: 20,
                    }
                    : {

                    }
              }
              key={item}>

              <Text
                style={{
                  borderColor: "#5ce1e6",
                  textAlign: "left",
                  borderWidth: 1,
                  borderRadius: 10,
                  padding: 10,
                  color: 'black',
                  margin: 5

                }}
              > {item}</Text>
            </Pressable>
          ))}
        </View>

      </View>






      <View style={{ flexDirection: 'row', backgroundColor: '#5ce1e6', justifyContent: 'center', alignItems: 'center', flex: 1, }}>
        <View style={{ flex: 2, backgroundColor: 'white', borderColor: 'grey', justifyContent: 'center', borderWidth: 2, borderRadius: 10, height: '80%', margin: 10 }}>
          <Text style={{ marginLeft: 10, fontSize: 18, color: 'black' }}>Question:{index + 1 + '/' + totalque}   </Text>
        </View>


        <View style={{ flex: 1, marginRight: 5 }}>



          {index + 1 >= 20 ? (
            <Pressable
              onPress={() =>
                navigation.navigate("Result", {
                  points: points,

                  answers: answers,
                })
              }
              style={{
                backgroundColor: "green",
                padding: 10,
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: 20,
                borderRadius: 6,
              }}
            >
              <Text style={{ color: "white" ,fontSize:18,}}>Submit</Text>
            </Pressable>
          ) : (
            <Pressable
              onPress={() => setIndex(index + 1)}
              style={{
                backgroundColor: "#306EFF",
                padding: 10,
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: 20,
                borderRadius: 6,
                width: 120,
                
              }}
            >
              <Text style={{ color: "white", textAlign: "center",fontSize:18, }}>Next</Text>
            </Pressable>
          )}
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
    flex: 1,
    height: '100%'
  },

});

export default TestScreen;
/*
<View style={{flex:2, marginRight:5}}>
<TouchableOpacity style={{ backgroundColor: 'blue', padding: 10, borderRadius:5 }}onPress={() => navigation.navigate('Navigator')}>
 <Text style={{ color: 'white',textAlign:'center' }}>Quit</Text>
</TouchableOpacity>
</View>*/