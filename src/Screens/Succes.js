import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import PrimaryButton from "../Component/PrimaryButton/primaryButton";

function Success(){
    return(
        <View style={{flex:1, backgroundColor:'#fff', justifyContent:'center'}}>
            <Image source={require('../Assets/Images/Basket.png')} style={{resizeMode:'contain', height:140, alignSelf:'center'}}></Image>
            <Text style={{fontSize:24, color:'#17B107', textAlign:'center', marginTop:20}}>Order Confirmed</Text>
            <Text style={{fontSize:18, fontWeight:'500', color:'black', textAlign:'center'}}>Order ID #412254</Text>
            <View style={{height:50,alignSelf:'center', marginTop:60, justifyContent:'center', alignItems:'center', alignContent:'center'}}>
                <View style={{width:250, alignSelf:'center', justifyContent:'center', alignItems:'center', alignContent:'center'}}>
                <PrimaryButton>
                    <Text>View Order</Text>
                </PrimaryButton>
                </View>
            </View>
        </View>
    )
}
export default Success;