import React,{useState} from 'react';
import {Text,View,StyleSheet,Button, Alert, ImagePropTypes} from "react-native";

const Gameover=(props)=>{
    
    return(
        <View style={styles.title}>
      <View style={styles.titname}>
      <Text style={{fontSize:40,color:"#6E0112"}} >Tic-Tac-Toe</Text>
      </View>
    
        <View style={styles.ov}>
            
           <View style={styles.bor}><Text style={styles.win}>{props.onwinname} </Text></View>
        <View style={styles.but} ><Button color='green'title="reset" onPress={props.onRestar}/></View>
        </View>
        </View>
    )
}
const styles=StyleSheet.create({
    title:{
        alignItems:'center',
        flex:1,
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
    win:{
        fontSize:30,
        color:'red',fontWeight:'700'
    },
    bor:{marginVertical:45,
        borderBottomWidth:3,
        padding:10,
        alignItems:'center',
        justifyContent:'center'
    },
    but:{
        width:90
    },
    ov:{
        alignItems:'center',
        justifyContent:'center'
    }
})
export default Gameover;