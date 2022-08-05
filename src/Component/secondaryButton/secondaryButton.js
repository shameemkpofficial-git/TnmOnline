import React from 'react';
import {styleSheet, View, TouchableOpacity } from 'react-native';
 function SecondaryButton(){
    return(
        <View style={{height:50, backgroundColor:'white', width:'100%'}}>
             <TouchableOpacity style={{height:'100%', width:'60%', backgroundColor:'#F6F6F6', borderRadius:5, borderWidth:1, borderColor:'#CFD2CF', alignSelf:'center'}}></TouchableOpacity>
           </View>
    )
 }
 export default SecondaryButton;