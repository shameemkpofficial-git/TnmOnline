import React from "react";
import { View, Text,TextInput, ScrollView, Image } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import SecondaryButton from "../Component/secondaryButton/secondaryButton";

function Home(){
    return(
        <ScrollView>
        <View style={{height:'100%', width:'100%', backgroundColor:'white'}}>
        <View style={{height:50, width:70, backgroundColor:'white', marginLeft:10, marginTop:10}}>
          <AntDesign name='arrowleft' size={34} color='black'></AntDesign>
        </View>

        <Image source={require('../Assets/Images/photo.png')} style={{height:150}}></Image>
         
        <View style={{height:90, backgroundColor:'white', marginHorizontal:10, marginTop:10}}>
        <Text style={{fontWeight:'bold', fontSize:34, color:'black'}}>Account Login</Text>
        <Text style={{fontSize:19, marginTop:10}}>Hello welcome to Sids Shop</Text>
        </View>
   
        <View style={{height:50, width:260, backgroundColor:'white', marginHorizontal:10, marginTop:20}}>
          <TextInput placeholder='Enter Mobile Number or Email' style={{backgroundColor:'white', height:'100%', width:'100%', borderRadius:5, borderWidth:1, borderBottomColor:'green', borderLeftColor:'white', borderRightColor:'white', borderTopColor:'white', fontSize:17}}></TextInput>
        </View>
   
        <View style={{height:70, backgroundColor:'#fff', flexDirection:'row', marginHorizontal:10}}>
        <TextInput placeholder='Password' style={{backgroundColor:'white', height:50, width:'70%', borderRadius:5, borderWidth:1, borderBottomColor:'green', borderLeftColor:'white', borderRightColor:'white', borderTopColor:'white', fontSize:17}}></TextInput>
        <AntDesign name='rightcircle' size={44} color='green' style={{marginLeft:40, marginTop:20}}></AntDesign>
   
        </View>
   
        <View style={{height:50, flexDirection:'row', backgroundColor:'white', marginHorizontal:10, marginTop:20}}>
          <Text style={{fontSize:17}}>New Here?</Text>
          <Text style={{fontSize:17, fontWeight:'600', marginLeft:10, color:'black'}}>Create an account</Text>
          <Text style={{fontSize:17, color:'red', fontWeight:'600', marginLeft:10}}>Forgot Password</Text>
        </View>
        <View style={{height:50}}>
            <SecondaryButton>

            </SecondaryButton>
        </View>
        
      </View>
      </ScrollView>
    )
}

export default Home;