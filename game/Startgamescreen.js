import React,{useState} from 'react';
import {Text,View,StyleSheet,Button, Alert} from "react-native";



const Startgamescreen=Props=>{
    
    return(
        <View style={styles.startscreen}>
        
      <View style={styles.startsc}>
        <Text style={{fontSize:21,color:"blue",borderBottomColor:"black",}} >
            Only Two Player Can Be Paly
        </Text>
      </View>
      
      <View style={styles.startbut}>
         <Text style={{fontSize:18,color:'blue'}}>click Start button to Start game</Text>
         <View style={{margin:20,width:100,backgroundColor:'green'}}>
      <Button color="green" title='start'onPress={()=>Props.onStartgame()}/>
    </View>
    </View>
    </View>
   
    );
};

const styles=StyleSheet.create({
    startscreen:{
        alignItems:'center',
        justifyContent:'center'

    },
    startsc:{fontSize:20,
        color:"blue",
        borderBottomColor:"black",
        borderBottomWidth:5,
        padding:10,
        paddingBottom:2,
        alignItems:'center'
    },
     startbut:{ width:"80%",
     alignItems:"center",
     borderColor:'red', 
     borderWidth:1,
     marginTop:60,
     height:120,
     padding:10,
     elevation:25,
     borderRadius:10,
     backgroundColor:'#C1C1FF'}   

}
);

export default Startgamescreen;