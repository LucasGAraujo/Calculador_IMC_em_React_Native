import React , {
useState}from "react";
import {TextInput, Text, View, Button, StyleSheet, Keyboard } from "react-native"
import ResultImc from "./ResultImc";

export default function Form(){
const [height, setHeight] = useState(null)
const [weight , setWeight] = useState(null)
const [messageImc, setMessageImc] = useState("Preencha o peso e altura")
const [imc, setImc] = useState(null)
const [textButton , setTextButton] = useState("Calcular..")

function imcCalculator(){
    return setImc((weight /(height*height)).toFixed(2))
}
function validationImc(){
    if(weight != null && height != null){
        imcCalculator()
        setHeight(null)
        setWeight(null)
        setMessageImc("Seu imc é igual: ")
        setTextButton("Calcular novamente")
        return
    }
    setImc(null)
    setTextButton("Calcular")
    setMessageImc("Preencha peso e altura")
}
const NumberChange = (text) => {
    // substituir todas as vírgulas (",") por pontos (".")
    const formattedNumber = text.replace(/,/g, '.');
    setHeight(formattedNumber);
  };
  const NumberChsange = (text) => {
    // substituir todas as vírgulas (",") por pontos (".")
    const formattedsNumber = text.replace(/,/g, '.');
    setWeight(formattedsNumber);
  };
  function Submit(){
    validationImc()
    Keyboard.dismiss();
  }
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Altura</Text>
        <TextInput
          style={styles.input}
          onChangeText={NumberChange}
          value={height}
          placeholder="Ex. 1.75"
          keyboardType="numeric"
        />
        <Text style={styles.inputLabel}>Peso</Text>
        <TextInput
          style={styles.input}
          onChangeText={NumberChsange}
          value={weight}
          placeholder="Ex. 75.43"
          keyboardType="numeric"
        />
        <Button onPress={Submit} title={textButton} style={styles.button} />
      </View>
      <ResultImc messageResultImc={messageImc} resultImc={imc} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%',
    alignItems: 'center',
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    padding: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
