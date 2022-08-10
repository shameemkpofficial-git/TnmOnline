import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import PrimaryButton from "../Component/PrimaryButton/primaryButton";


function createAccount(){
    return(
        <View style={{flex:1, backgroundColor:'#fff'}}>
            <View style={{height:50, width:70, backgroundColor:'white', marginLeft:10, marginTop:10}}>
          <AntDesign name='arrowleft' size={34} color='black'></AntDesign>
        </View>
        <View style={{height:100, backgroundColor:'white', marginHorizontal:20, marginTop:10}}>
            <Text style={{fontSize:30, fontWeight:'600', color:'black'}}>Create an Account</Text>
            <Text style={{color:'black', fontSize:17, marginTop:10}}>Hello, Welcome to Sids Shop</Text>
        </View>

        <View style={{height:360, backgroundColor:'#fff', marginHorizontal:20, marginTop:30, width:260}}>
            <TextInput placeholder='Enter Your Name' style={{height:60, backgroundColor:'#fff', borderBottomColor:'#17B107', borderLeftColor:'#fff', borderRightColor:'#fff', borderWidth:1, borderTopColor:'#fff',marginTop:10}}></TextInput>
            <TextInput placeholder='Enter Email Address' style={{height:60, backgroundColor:'#fff', borderBottomColor:'#17B107', borderLeftColor:'#fff', borderRightColor:'#fff', borderWidth:1, borderTopColor:'#fff', marginTop:10}}></TextInput>
            <TextInput placeholder='Enter Mobile Number' style={{height:60, backgroundColor:'#fff', borderBottomColor:'#17B107', borderLeftColor:'#fff', borderRightColor:'#fff', borderWidth:1, borderTopColor:'#fff',marginTop:10}}></TextInput>
            <TextInput placeholder='Enter Password' style={{height:60, backgroundColor:'#fff', borderBottomColor:'#17B107', borderLeftColor:'#fff', borderRightColor:'#fff', borderWidth:1, borderTopColor:'#fff', marginTop:10}}></TextInput>
            <TextInput placeholder='Re Enter Password' style={{height:60, backgroundColor:'#fff', borderBottomColor:'#17B107', borderLeftColor:'#fff', borderRightColor:'#fff', borderWidth:1, borderTopColor:'#fff', marginTop:10}}></TextInput>
        </View>

        <View style={{height:50, backgroundColor:'#fff', marginHorizontal:20, flexDirection:'row', marginTop:10}}>
            <Text style={{fontSize:14}}>already have an Account ?</Text>
            <Text style={{fontSize:14, color:'black', fontWeight:'600', marginLeft:5}}>Login</Text>
        </View>

        <View style={{height:50, justifyContent:"center", flexDirection:'row', marginTop:40, marginHorizontal:40}}>
            <PrimaryButton>
                <Text>Get OTP</Text>
                </PrimaryButton>        
        </View>
        </View>
    )
}

export default createAccount;