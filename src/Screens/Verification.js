import React from "react";
import { View, Text, TextInput, ScrollView } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import SecondaryButton from "../Component/secondaryButton/secondaryButton";

function Veri_Code(){
    return(
        <View style={{height:'100%', width:'100%', backgroundColor:'#fff'}}>
            <View style={{height:50, width:70, backgroundColor:'white', marginTop:10, marginLeft:10}}>
            <AntDesign name='arrowleft' size={34} color='black'></AntDesign>
            </View>

            <View style={{height:100, backgroundColor:'#fff', marginTop:40, marginHorizontal:20}}>
                <Text style={{fontSize:30, color:'black', fontWeight:'600'}}>Verification Code</Text>
                <Text style={{fontSize:16}}>We have sent OTP to your mobile</Text>
            </View>

            <View style={{height:50, backgroundColor:'#fff', marginHorizontal:20, marginTop:10, flexDirection:'row'}}>
                <Text style={{fontSize:18, fontWeight:'600', color:'black'}}>+44 9854 25452</Text>
                <Feather name='edit' size={25} color='green' style={{marginLeft:10}}></Feather>
            </View>

            <View style={{height:70,flexDirection:'row', backgroundColor:'white', marginHorizontal:20, marginTop:60, width:375}}>
            <View style={{height:'100%', width:250,backgroundColor:'#fff',flexDirection:'row', justifyContent:'space-around'}}>
                <TextInput style={{height:50, width:50, borderWidth:1, borderBottomColor:'green', borderLeftColor:'#fff', borderRightColor:'#fff', borderTopColor:'#fff'}}></TextInput>
                <TextInput style={{height:50, width:50, borderWidth:1, borderBottomColor:'green', borderLeftColor:'#fff', borderRightColor:'#fff', borderTopColor:'#fff'}}></TextInput>
                <TextInput style={{height:50, width:50, borderWidth:1, borderBottomColor:'green', borderLeftColor:'#fff', borderRightColor:'#fff', borderTopColor:'#fff'}}></TextInput>
                <TextInput style={{height:50, width:50, borderWidth:1, borderBottomColor:'green', borderLeftColor:'#fff', borderRightColor:'#fff', borderTopColor:'#fff'}}></TextInput>
            </View>
            <View style={{backgroundColor:'#fff', width:90,height:'100%'}}>
            <AntDesign name='rightcircle' size={44} color='green' style={{marginLeft:40, marginTop:20}}></AntDesign>

            </View>
            </View>

            <View style={{height:50, backgroundColor:'white', marginTop:20, flexDirection:'row', marginHorizontal:20}}>
                <Text style={{fontSize:14}}>If you dont get OTP</Text>
                <Text style={{fontSize:14, fontWeight:'600', color:'black', marginLeft:10}}>Resend</Text>
            </View>
            
        </View>
    )
}

export default Veri_Code;