import React, { useEffect,useState } from 'react';
import { StyleSheet, View, Image,ActivityIndicator,Text,Button } from 'react-native';
import { useRoute } from '@react-navigation/native';
import {useSelector} from 'react-redux';



// Fisher-Yates Shuffle Algorithm
function fisherYatesShuffle(array) {
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // Swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}



const MockScreen = ({ navigation }) => {

  const user=useSelector(state=>state.user.userDetail);
  const token=useSelector(state=>state.user.token);

  const route = useRoute();
  const [shuffledQuestions, setShuffledQuestions] = useState([]);


  useEffect(() => {
    // Fetch questions from route params
    let questions = route.params.questions;
    
    // Shuffle questions using Fisher-Yates Shuffle
    let shuffled = fisherYatesShuffle([...questions]);

    // Store shuffled questions in state
    setShuffledQuestions(shuffled);
  }, [route.params.questions]); 

  return (
    <View style={{flex:1}}>
    <View style={{flex:1,backgroundColor:'#5ce1e6'}}>
    <Text style={{fontSize:22,fontWeight:'700',paddingHorizontal:20, marginTop:20}}>
    Ready for the Mocktest,{user.username}?
    </Text>
    </View>

    <View style={styles.container}>
      <Image source={require('../assets/killer.png')} style={styles.logo} />
      <Button
      title="lET'S GO!!!"
      onPress={() => navigation.navigate('Test',{category:route.params.category , questions:shuffledQuestions })}/>
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

export default MockScreen;