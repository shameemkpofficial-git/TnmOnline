import React from "react";
import { View, Image, Text } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";

function Category(){
    return(
        <View style={{height:'100%', width:'100%', backgroundColor:'red'}}>
            <View style={{height:50, backgroundColor:'white', marginLeft:10, marginTop:10, flexDirection:'row', marginHorizontal:20}}>
                <AntDesign name='arrowleft' size={34} color='black'></AntDesign>
                <Text style={{fontSize:22, fontWeight:'600', color:'black', marginLeft:20, marginTop:5}}>Bakery</Text>
                <Ionicons name='search-circle' size={30} color='#F6F6F6' style={{marginLeft:190}}></Ionicons>
                <Entypo name='unread' size={34} color='#F6F6F6' style={{marginLeft:20}}></Entypo>
            </View>

            <View style={{height:50, backgroundColor:'#fff', marginTop:20, flexDirection:'row', marginHorizontal:20}}>
                <View style={{height:'100%', backgroundColor:'#707070', width:100, borderRadius:15, flexDirection:'row', justifyContent:'center'}}>
                    <Text style={{color:'black', fontSize:18, fontWeight:'400', marginTop:10}}>Filter</Text>
                    <AntDesign name='filter' size={30} color='black' style={{marginTop:5}}></AntDesign>
                </View>

                <View style={{height:'100%', backgroundColor:'#707070', width:100, borderRadius:15, flexDirection:'row', marginLeft:15, justifyContent:'center'}}>
                    <Text style={{color:'black', fontSize:18, fontWeight:'400', marginTop:10}}>Sort By</Text>
                    <Ionicons name='swap-vertical' size={30} color='black' style={{marginTop:5}}></Ionicons>
                </View>
            </View>
        </View>
    )
}

export default Category;