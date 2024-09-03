import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {

    return (
      <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
        <View style={styles.goalStyle}> 
        <Text style={styles.goalText}>{props.text}</Text> 
        </View>
        </Pressable>
        
    );
};

export default GoalItem;

const styles = StyleSheet.create({
    goalStyle: {
        fontSize: 15,
        borderRadius: 10,
        padding: 5,
        margin: 5,
        backgroundColor: '#415a77',
        alignItems: 'center',
      },
      pressedItem: {
        opacity: 0.5,
      },  
      goalText: {
        color: 'white',
        fontStyle: 'italic',
      }

});