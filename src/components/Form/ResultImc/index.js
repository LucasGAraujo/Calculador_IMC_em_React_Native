import React from "react";
import {View, Text, StyleSheet} from "react-native"

export default function ResultImc(props){
    return(
        <View style={styles.container}>
      <Text style={styles.resultText}>{props.resultImc}</Text>
      <Text style={styles.messageText}>{props.messageResultImc}</Text>
    </View>
    )
}
const styles = StyleSheet.create({
    container: {
      marginTop: 20,
      padding: 20,
      backgroundColor: '#f2f2f2',
      borderRadius: 5,
      alignItems: 'center',
    },
    resultText: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    messageText: {
      fontSize: 16,
      textAlign: 'center',
    },
  });
  