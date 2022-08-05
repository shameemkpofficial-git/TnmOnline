import react from 'react';
import {styleSheet, View, } from 'react-native';

function arrowButton(){
    return(
        <View style={{height:50, width:70, backgroundColor:'red', marginTop:20}}>
             <AntDesign name="rightcircle" size={34} color='green'></AntDesign>
           </View>
    )
 }
 export default arrowButton;