import React from "react";
import {View, Text, StyleSheet } from "react-native"
const styles = StyleSheet.create({
    container: {
        marginTop:300,
        marginBottom:-150,
      alignItems: 'center',
      justifyContent: 'center',        
     backgroundColor: '#007AFF',
    },
    title:{
        fontSize: 30
    }
    });
  
export default function Title(){
    return(
        <View style={styles.container}>
      <Text style={styles.title}>IMC LUCAS GOMES</Text>
    </View>
    )
}