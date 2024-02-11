import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image, ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
const HomeScreen = ({ navigation }) => {
  const user = useSelector(state => state.user.userDetail);
  const token = useSelector(state => state.user.token);
  const [questions, setQuestions] = useState([]);
  const [categories, setCategories] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  useEffect(() => { }, [navigation]);

  const getCategories = async () => {
    url = "https://sawari-backend.vercel.app/category/";
    await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      },

    }).then(data => data.json()).then(cdata => {
      if (cdata.message !== "Success") return
      setCategories(cdata.categories)
      console.log("categories detail", cdata)
    });
  }
  const getQuestions = async () => {
    let qdata = await fetch("https://sawari-backend.vercel.app/question/", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      },

    });
    qdata = await qdata.json();
    if (qdata.message !== "Success") return
    setQuestions(qdata.questions)
    console.log("question detail", qdata)
  }

  const filterQuestions = (filtercat) => {
    let data = questions.filter(question => {
      let cat = question.categories.some(category => {
        return category.categoryLetter == filtercat
      })
      return cat;
    })
    console.log("Filtered is:", data);
    return data;

  }
  const getVehicles = async () => {
    url = "https://sawari-backend.vercel.app/vehicle/";
    await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      },

    }).then(data => data.json()).then(vdata => {
      if (vdata.message !== "Success") return
      setVehicles(vdata.vehicles)
      console.log("vehicles detail", vdata)
    });


  }
  const getImage = (name) => {
    switch (name) {
      case "Motorcycle":
        return require('../assets/Motorcycle.png');
      case "Car":
        return require('../assets/Car.png');
      case "Bus":
        return require('../assets/Bus.png');
      case "Crane":
        return require('../assets/Crane.png');
      case "Forklift":
        return require('../assets/Forklift.png');
      case "Loader":
        return require('../assets/Loader.png');
      case "E-Rickshaw":
        return require('../assets/E-Rickshaw.png');
      case "Grader":
        return require('../assets/Grader.png');
      case "Scooter":
        return require('../assets/Scooter.png');
      case "Moped":
        return require('../assets/Moped.png');
      case "Jeep":
        return require('../assets/Jeep.png');
      case "Dozer":
        return require('../assets/Loader.png');
      case "Power Tiller":
        return require('../assets/Power-Tiller.png');
      case "Other":
        return require('../assets/Other.png');
      case "Road Roller":
        return require('../assets/Roller.png');
      case "Tempo":
        return require('../assets/Tempo.png');
      case "Tractor":
        return require('../assets/Tractor.png');
      case "Truck":
        return require('../assets/Truck.png');
      case "Auto Rickshaw":
        return require('../assets/Rickshaw.png');
      case "Minibus":
        return require('../assets/Minibus.png');
      case "Excavator":
        return require('../assets/Excavator.png');
      case "Delivery Van":
        return require('../assets/Delivery-Van.png');
      case "Minitruck":
        return require('../assets/Minitruck.png');
      case "Lorry":
        return require('../assets/Lorry.png');
      case "Backhoe Loader":
        return require('../assets/Backhoe-Loader.png');
      case "Fire Brigade":
        return require('../assets/Fire-Brigade.png')
      default:
        return require('../assets/killer.png');
    }

  }
  const handleVehiclePress = (vehicleName) => {
    let cat = categories.find(category => {
      //  let vec= category.vehicles.find(veh=>{
      //     return veh.name===vehicleName
      //   })
      //   if (vec) return true 
      //    return false
      // })
      return category.vehicles.some(vehicle => {
        return vehicle.name === vehicleName
      })




    })
    console.log(cat)
    let quest = filterQuestions(cat.categoryLetter);
    navigation.navigate("Opt", { category: cat, questions: quest })
  }
  useEffect(() => { getVehicles(); getQuestions(), getCategories() }, []);

  return (

    <View style={{ flex: 1 }}>

      <View style={{ flex: 1, backgroundColor: '#5ce1e6' }}>
        <Text style={{ fontSize: 22, fontWeight: '700', paddingHorizontal: 20, marginTop: 20 }}>
          How can we help you? {user.username}
        </Text>
      </View>
      <View style={{ flex: 10 }}>
        <ScrollView style={{ backgroundColor: 'white', borderWidth: 2, paddingTop: 20, borderColor: 'grey' }}
          contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
          {
            vehicles.map(vehicle => {

              return (
                <TouchableOpacity key={vehicle._id} onPress={() => { handleVehiclePress(vehicle.name) }} style={{ height: 180, width: "40%", marginLeft: 10, borderWidth: 0.5, borderRadius: 8, marginTop: 20, borderColor: '#dddddd' }}>
                  <View style={{ flex: 1 }}>
                    <View style={{ flex: 4, justifyContent: "center", alignItems: 'center', borderColor: 'grey', borderWidth: 2, borderRadius: 10 }}>


                      <Image source={getImage(vehicle.name)}
                        style={{ flex: 1, width: 130, height: 140, resizeMode: 'cover' }} />


                    </View>
                    <View style={{ flex: 1, backgroundColor: 'white', borderColor: 'grey', borderWidth: 2, borderRadius: 10 }}>
                      <Text style={{ textAlign: 'center', marginTop: 2 }}>{vehicle.name}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )
            })


          }

        </ScrollView>
      </View>
    </View>


  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;