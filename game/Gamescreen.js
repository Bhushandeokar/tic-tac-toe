import React,{useEffect, useState} from 'react';
import { StyleSheet, Text, View ,Button, Modal,TouchableOpacity,Vibration} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Gameover from '../game/Gameover';
const Gamescreen=(props)=>{
    
    const[curx,setx]=useState('');
    const[curo,seto]=useState('');
    const[curxw,setxw]=useState('');
    const[curow,setow]=useState('');
    const[curov,setov]=useState('');
    const[CurrentNum,SetNum]=useState(0);
    const [curarray]=useState([[0,0,0],[0,0,0],[0,0,0]]);
    
    
     xo=(r,c)=>{
        
        if(curarray[r][c]==0)
        { 
        if(CurrentNum%2==0){
            setx("X");
            setxw("       X    \nWINNER!")
            curarray[r][c]=1;     

        }else
        {
            seto("O");
            setow("       O    \nWINNER!")
            setov("   XO  \nDRAW!")
            curarray[r][c]=2;   
        }
        
        if(CurrentNum<10){
            SetNum(CurrentNum+1);
        }

        }else{
            
            Vibration.vibrate(100);
        }      
       
      
    };
    const tex=(a,b)=>{
        if(curarray[a][b]==1){
            
           return(<Text style={{fontSize:35,color:'#FD0211'}}> {curx}</Text>)
        }else if(curarray[a][b]==2){
            
            return(<Text style={{fontSize:35,color:'#53FD02'}}> {curo}</Text>)
         }
    } 
    let al;
     if(curarray[0][0]==1 && curarray[0][1]==1 && curarray[0][2]==1 ||
        curarray[1][0]==1 && curarray[1][1]==1 && curarray[1][2]==1 ||
        curarray[2][0]==1 && curarray[2][1]==1 && curarray[2][2]==1||
        curarray[0][0]==1 && curarray[1][0]==1 && curarray[2][0]==1 ||
        curarray[0][1]==1 && curarray[1][1]==1 && curarray[2][1]==1 ||
        curarray[0][2]==1 && curarray[1][2]==1 && curarray[2][2]==1 ||
        curarray[0][0]==1 && curarray[1][1]==1 && curarray[2][2]==1 ||
        curarray[0][2]==1 && curarray[1][1]==1 && curarray[2][0]==1 ){
          al= props.onOver();
          props.onwinner(curxw);
        }else if(curarray[0][0]==2 && curarray[0][1]==2 && curarray[0][2]==2 ||
            curarray[1][0]==2 && curarray[1][1]==2 && curarray[1][2]==2 ||
            curarray[2][0]==2 && curarray[2][1]==2 && curarray[2][2]==2||
            curarray[0][0]==2 && curarray[1][0]==2 && curarray[2][0]==2 ||
            curarray[0][1]==2 && curarray[1][1]==2 && curarray[2][1]==2 ||
            curarray[0][2]==2 && curarray[1][2]==2 && curarray[2][2]==2 ||
            curarray[0][0]==2 && curarray[1][1]==2 && curarray[2][2]==2 ||
            curarray[0][2]==2 && curarray[1][1]==2 && curarray[2][0]==2 ){
             al=props.onOver();
             props.onwinner(curow);
            }else if(CurrentNum==9 )
                {
                    
                   al= props.onOver();
                   props.onwinner(curov);
                };
            
                
    return(
        <View style={styles.title}>
      <View style={styles.titname}>
      <Text style={{fontSize:40,color:"#6E0112"}} >Tic-Tac-Toe</Text>
      </View>
    
        <View>
            
            <View style={styles.box}>
            
            <View >
    <TouchableOpacity style={styles.subbox} onPress={()=>xo(0,0)}><Text>{tex(0,0)}</Text></TouchableOpacity> 
    <TouchableOpacity style={styles.subbox} onPress={()=>xo(0,1)}><Text>{tex(0,1)}</Text></TouchableOpacity> 
    <TouchableOpacity style={styles.subbox} onPress={()=>xo(0,2)}><Text>{tex(0,2)}</Text></TouchableOpacity> 
            </View>
            <View>
            <TouchableOpacity style={styles.subbox} onPress={()=>xo(1,0)}><Text>{tex(1,0)}</Text></TouchableOpacity> 
            <TouchableOpacity style={styles.subbox} onPress={()=>xo(1,1)}><Text>{tex(1,1)}</Text></TouchableOpacity>
            <TouchableOpacity style={styles.subbox} onPress={()=>xo(1,2)}><Text>{tex(1,2)}</Text></TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity style={styles.subbox} onPress={()=>xo(2,0)}><Text>{tex(2,0)}</Text></TouchableOpacity> 
            <TouchableOpacity style={styles.subbox} onPress={()=>xo(2,1)}><Text>{tex(2,1)}</Text></TouchableOpacity>
            <TouchableOpacity style={styles.subbox} onPress={()=>xo(2,2)}><Text>{tex(2,2)}</Text></TouchableOpacity>
            </View>
           
            </View>
            </View>

      </View>
      
    );

};
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
    box:{
        width:270,
        height:270,
        borderColor:"black",
        borderWidth:1,
        flexDirection:'row',
        elevation:15,
        backgroundColor:"black"
    },
    subbox:{
        width:90,
        height:90,
        borderWidth:1,
        borderColor:"white",
        alignItems:'center',
        justifyContent:'center',
        
    }
});
export default Gamescreen;