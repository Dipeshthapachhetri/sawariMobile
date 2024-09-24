import React, { useEffect,useState } from 'react';
import { StyleSheet, View, Image,ActivityIndicator,Text,Button } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';



// Fisher-Yates Shuffle Algorithm
function fisherYatesShuffle(array) {
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // Swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]
    ];
  }

  return array;
}

// Function to remove duplicate questions
function removeDuplicateQuestions(array) {
  const uniqueQuestions = [];
  const questionSet = new Set();

  array.forEach(question => {
    if (!questionSet.has(question.question)) {
      questionSet.add(question.question);
      uniqueQuestions.push(question);
    }
  });

  return uniqueQuestions;
}



const QuestionScreen = ({ navigation }) => {


  const route = useRoute();
  const [quest, setQuest] = useState([]);

  useEffect(() => {
    // Get the questions from the route parameters
    let questions = route.params.questions;

    // Remove duplicates if there are any
    let uniqueQuestions = removeDuplicateQuestions(questions);
console.log("uniquequestions",uniqueQuestions)
    // Shuffle the unique questions
    let shuffledQuestions = fisherYatesShuffle([...uniqueQuestions]);

    // Set the shuffled and unique questions to state
    setQuest(shuffledQuestions);
  }, [route.params.questions]);
   
  return (
    <View style={{flex:1}}>
      <View style={{flex:1,backgroundColor:'#5ce1e6',justifyContent:'center',alignItems:'center'}}>
    <Text style={{fontSize:22,fontWeight:'700',paddingHorizontal:20 }}>
    Questions
    </Text>
    </View>
    <View style={styles.container}>
    <ScrollView>
     {quest.map(question=>{
        return(
      
        <View style={{margin:10}}>
         <Text>{question.number}.{question.question}</Text>
         {[0,1,2,3].map(index=>{
          let correct= question.options[index]== question.correct;
          return(
            
         <Text style={{backgroundColor:correct?'green':'white'}}>{index+1}.{question.options[index]}</Text>
     )})}
        </View>
      )
      })}
      </ScrollView>
    </View>
    <View style={{flex:1, flexDirection:'row',backgroundColor:'#5ce1e6',justifyContent:'center',alignItems:'center'}}>
    <Button title="Back"onPress={() => navigation.navigate('Navigator')}/>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius:90
    
  },
});

export default QuestionScreen;
