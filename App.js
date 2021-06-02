import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task,setTask] = useState('');
  const [taskItems,setTaskItems] = useState([]);

  const handleAddTask = () => {
      Keyboard.dismiss();
     setTaskItems([...taskItems,task])
     setTask(null);

  } 
  const taskDone = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>
      
      <View style={styles.tasks}>
        <Text style={styles.sectionTitle}>ToDo</Text>
      <ScrollView style={styles.scrollView}>
      <View style={styles.tasksBody}>
          {/* tasks goes here */}
          {
            taskItems.map((item,index)=>{
              return(
                <TouchableOpacity onPress={()=>taskDone(index)} key={index}>
                    <Task text={item} key={index}/>
                </TouchableOpacity>
                
              )
            })
          }
          {/* <Task text={"hello task fgfgnhnhnhnhnx thbtrgb thgbs tghgb"}/>
          <Task text={"hello task"}/>
          <Task text={"hello task"}/> */}
        </View> 
      </ScrollView>
        
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS==="ios"?"padding":"height"}
        style={styles.writeTask}
      >
        <TextInput style={styles.input} placeholder={"Add Task"} value={task} onChangeText={text => setTask(text)}/>
        <TouchableOpacity onPress={()=>handleAddTask()}>
          <View style={styles.addButton}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasks:{
    paddingTop:80,
    paddingLeft:20,
    paddingRight:20,
  },
  sectionTitle:{
    fontSize:36,
    fontWeight:"bold"
  },
  tasksBody:{
    marginTop:25,
  },
  writeTask:{
    position:"absolute",
    bottom:20,
    width: '100%',
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
  },
  input:{
    backgroundColor:"#ffffff",
    paddingVertical:15,
    width: 250,
    borderRadius:60,
    paddingHorizontal:15,
    borderColor:"#C0C0C0",
    borderWidth:1,
  },
  addButton:{
    width: 60,
    height:60,
    backgroundColor:"#ffffff",
    borderRadius:60,
    borderColor:"#C0C0C0",
    borderWidth:1,
    alignItems:"center",
    justifyContent:"center"
  },
  addText:{},
  scrollView:{
    // marginHorizontal: 20,
  },
 
});
