import { useState } from 'react';
import {StyleSheet, View, FlatList,Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [modalVisible, setModalVisible] = useState(false);
  const [courseGoals,setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalVisible(true);
  }

  function endAddGoalHandler() {
    setModalVisible(false);
  }


  function addGoalHandler(enteredGoal) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoal, id: Math.random().toString()},
     ]);
  }; 
  
  function deleteGoalHandler(id) {
      setCourseGoals((currentCourseGoals) => {
        return currentCourseGoals.filter( (goal) => goal.id !== id);
      });
  }


  return (
    <View style={styles.appContainer}> 
    <Button  title= 'Add New Goal' color="#415a77" onPress={startAddGoalHandler}/>
    <GoalInput onAddGoal={addGoalHandler} 
    visible={modalVisible}
    cancel={endAddGoalHandler}
    />
     <View style={styles.goalsContainer}>
    <FlatList data={courseGoals} 
      renderItem={(itemData) => {
        return  (<GoalItem 
        text={itemData.item.text} 
        onDeleteItem={deleteGoalHandler} 
        id={itemData.item.id} />
        );
      }}
      keyExtractor={(item,index) => {
        return item.id;
      }}
      alwaysBounceVertical={false} />
    </View>
    </View>
  ); 
}

const styles = StyleSheet.create({
  appContainer : {
    backgroundColor: '#cccccc',
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20
  } ,

  goalsContainer: {
    flex: 18,
  },
 

});
