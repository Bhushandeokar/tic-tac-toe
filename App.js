import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Button, Modal} from 'react-native';
import { useState } from 'react';
import Startgamescreen from "./game/Startgamescreen";
import Gamescreen from './game/Gamescreen';
import Gameover from './game/Gameover';

export default function App() {
  
  const[numm,setnum]=useState(0);
  const[curxo,setxo]=useState('');

  const startgamehand=()=>{
   setnum(1);
     };
  const Gameoverhand=()=>{
    setnum(2);
   };
   const Gamerestart=()=>{
    setnum(0);
   };
   const Gamewinner=(xo)=>{
      setxo(xo);
   }
    
  let content= <Startgamescreen onStartgame={startgamehand} />
  if (numm==1)
  {
    content=<Modal animationType="slide" ><Gamescreen onOver={Gameoverhand} onwinner={Gamewinner}/></Modal>
  }else if(numm==2){
    content=<Modal animationType="slide" ><Gameover onRestar={Gamerestart} onwinname={curxo}/></Modal>
  }
  return (
    <View style={styles.title}>
      <View style={styles.titname}>
      <Text style={{fontSize:40,color:"#6E0112"}} >Tic-Tac-Toe</Text>
      </View>
     {content}
     
       </View>
      
    
  );
}
const styles=StyleSheet.create({
  title:{
    alignItems:'center',
    flex:1,
    marginTop:20,
    backgroundColor:'#DDDDFE'
  },
  titname:{
    width:"80%",
    padding:30,
    alignItems:"center",
    backgroundColor:'#9292FE',
    borderColor:'red',
    borderWidth:1,
    margin:40,
    borderRadius:15,
    elevation:30
    
  },
  start:{

  }
})
