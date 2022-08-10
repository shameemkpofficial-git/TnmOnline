import React from 'react';
import {styleSheet, View, TouchableOpacity, Text } from 'react-native';
 function SecondaryButton(props){
    return(
        <View style={{height:50, backgroundColor:'white', width:'100%'}}>
             <TouchableOpacity style={{height:'100%', width:'60%', backgroundColor:'#F6F6F6', borderRadius:5, borderWidth:1, borderColor:'#CFD2CF', alignSelf:'center', ...props?.style, }}>
                <Text style={{color:'#17B107', textAlign:'center', marginTop:10, fontSize:16, fontWeight:'500'}}>{props?.children}</Text>
             </TouchableOpacity>
           </View>
    )
 }
 export default SecondaryButton;