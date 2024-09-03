import { StyleSheet,TextInput,Button,View,Modal } from "react-native";
import { useState } from "react";

function GoalInput(props) {

    const [enteredGoal,setEnteredGoal] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoal(enteredText);
      };
    
    
    function addGoalHandler() {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
        props.cancel(); 
    }

        return (
        <Modal  visible={props.visible} animationType="fade">
        <View style={styles.inputContainer}>
            <TextInput style={styles.textInput} placeholder='Enter Your Goal' onChangeText={goalInputHandler}/>
            <View style={styles.buttonContainer}>
            <View style={styles.button}>
            <Button title='Add Goal' onPress={addGoalHandler}/>
            </View>
            <View style={styles.button}>
            <Button title='Cancel' onPress={props.cancel}/>
            </View>
            </View>
       </View>
       </Modal>
        );
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 20,
        borderBottomWidth: 3, 
        borderColor: 'white',
        padding: 15,
      },
      textInput: {
        borderWidth: 2,
        borderColor: '#778da9',
        width: '80%',
        padding: 10,
        backgroundColor: '#edede9',
        borderRadius: 7,
      },
      buttonContainer: {
        flexDirection: 'row',
        marginTop: 20,
      },
      button: {
        width: '30%',
        marginHorizontal: 10,
      }


});