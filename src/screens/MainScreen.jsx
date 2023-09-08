// MainScreen.js
import React from "react";
import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";


const MainScreen = () => {
  const navigation = useNavigation();

  const githubUrl = "https://github.com/Holutunde";

  return (
    <View style={styles.container}>
      <Text style={styles.slackName}>Slack Name: Samiel</Text>
      <Image
       style={styles.profileImage}
        source={require('../assets/dp.png')}
      />
   
    <TouchableOpacity onPress={() => {
          navigation.navigate("Github") 
        }} style={styles.buttonContainer}>
         <Text style={{fontSize:14}}>Open GitHub</Text>
    </TouchableOpacity>
    

    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  slackName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 25,
    marginVertical:50
  },
  buttonContainer:{
    backgroundColor:'green',
    paddingVertical:20,
    paddingHorizontal:30,
    borderRadius:15,
    borderWidth:2,

  }
});

export default MainScreen;
