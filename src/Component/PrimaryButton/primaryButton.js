import React from 'react';
import {styleSheet, View, TouchableOpacity } from 'react-native';
 function PrimaryButton(){
    return(
        <View style={{height:50, width:250, backgroundColor:'white'}}>
             <TouchableOpacity style={{height:'100%', width:'100%', backgroundColor:'green', borderRadius:5}}></TouchableOpacity>
           </View>
    )
 }
 export default PrimaryButton;