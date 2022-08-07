import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";



function Cart2(){
    return(
        <View style={{height:'100%', width:'100%', backgroundColor:'#fff'}}>
            <View style={{height:50, width:120, backgroundColor:'white', marginHorizontal:20, marginTop:10, flexDirection:'row'}}>
                <AntDesign name='arrowleft' size={34} color='black'></AntDesign>
                <Text style={{fontSize:20, fontWeight:'700', color:'black', marginTop:5, marginLeft:20}}>Cart</Text>
            </View>

            <View style={{height:50, backgroundColor:'#fff', marginTop:10, marginHorizontal:20, flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={{fontSize:20, color:'black'}}>Delivery Address</Text>
                <Text style={{fontSize:18, color:'#17B107'}}>Change</Text>
            </View>

            <View style={{height:80, backgroundColor:'#fff', marginHorizontal:20, marginTop:10}}>
                <Text style={{fontSize:18, color:'#313830'}}>Kemp House 152-160</Text>
                <Text style={{fontSize:18, color:'#313830'}}>City Road London EC1V 2NX</Text>
            </View>

            <View style={{height:5, backgroundColor:'#F6F6F6'}}></View>

            <View style={{height:50, backgroundColor:'#fff', marginTop:10, marginHorizontal:20, flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={{fontSize:20, color:'black'}}>Product Details</Text>
                <View style={{height:'100%', backgroundColor:'#fff', width:100, flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={{fontSize:18, color:'#7F807F'}}>3 Items</Text>
                <AntDesign name='down' size={18} color='#17B107' style={{marginTop:5}}></AntDesign>

                </View>
            </View>
            <View style={{height:5, backgroundColor:'#F6F6F6'}}></View>

            <View style={{height:80, backgroundColor:'#EDFCF0', marginTop:10, marginHorizontal:20, flexDirection:'row', justifyContent:'space-between'}}>
                <MaterialCommunityIcons name='brightness-percent' size={35} color='green' style={{marginTop:20, marginLeft:10}}></MaterialCommunityIcons>
                <View style={{backgroundColor:'#EDFCF0', height:'100%', width:220, marginLeft:10}}>
                    <Text style={{color:'#17B107', fontSize:18, marginTop:10}}>ASD45422</Text>
                    <Text style={{color:'#105B08', fontSize:14, marginTop:10}}>10% off  on product      |     -£170     </Text>
                </View>
                <MaterialCommunityIcons name='close-octagon-outline' size={32} color='#707070' style={{marginTop:20}}></MaterialCommunityIcons>
            </View>

            <View style={{height:'100%', backgroundColor:'#fff', marginTop:10, marginHorizontal:20}}>
                <Text style={{fontSize:20, fontWeight:'600', color:'black', marginBottom:20}}>Payment Details</Text>
                <View style={{height:50, backgroundColor:'#fff', flexDirection:'row', justifyContent:'space-between', borderWidth:1, borderBottomColor:'#F6F6F6', borderLeftColor:'#fff', borderRightColor:'#fff', borderTopColor:'#fff'}}>
                    <Text style={{fontSize:18, color:'black'}}>Item total</Text>
                    <Text style={{fontSize:18, color:'black'}}>£170</Text>
                </View>

                <View style={{height:50, backgroundColor:'#fff', flexDirection:'row', justifyContent:'space-between', borderWidth:1, borderBottomColor:'#F6F6F6', borderLeftColor:'#fff', borderRightColor:'#fff', borderTopColor:'#fff'}}>
                    <Text style={{fontSize:18, color:'black'}}>Delivery fee</Text>
                    <Text style={{fontSize:18, color:'black'}}>£0</Text>
                </View>
                <View style={{height:50, backgroundColor:'#fff',  flexDirection:'row', justifyContent:'space-between', borderWidth:1, borderBottomColor:'#F6F6F6', borderLeftColor:'#fff', borderRightColor:'#fff', borderTopColor:'#fff'}}>
                    <Text style={{fontSize:18, color:'black'}}>Cash back</Text>
                    <Text style={{fontSize:18, color:'black'}}>£50</Text>
                </View>
                <View style={{height:50, backgroundColor:'#fff', flexDirection:'row', justifyContent:'space-between', borderWidth:1, borderBottomColor:'#F6F6F6', borderLeftColor:'#fff', borderRightColor:'#fff', borderTopColor:'#fff'}}>
                    <Text style={{fontSize:18, color:'black'}}>Discont</Text>
                    <Text style={{fontSize:18, color:'black'}}>-£10</Text>
                </View> 
                <View style={{height:50, backgroundColor:'#fff', flexDirection:'row', justifyContent:'space-between', borderWidth:1, borderBottomColor:'#F6F6F6', borderLeftColor:'#fff', borderRightColor:'#fff', borderTopColor:'#fff'}}>
                    <Text style={{fontSize:18, color:'black', fontWeight:'700'}}>Total</Text>
                    <Text style={{fontSize:18, color:'black', fontWeight:'700'}}>£150</Text>
                </View>

                <View style={{backgroundColor:'#fff', height:70, marginTop:20, borderTopColor:'#F6F6F6', borderWidth:1, borderLeftColor:'#fff', borderRightColor:'#fff', borderBottomColor:'#fff', flexDirection:'row', justifyContent:'space-between'}}>
                    <MaterialCommunityIcons name='cart-outline' size={30} color='black' style={{marginTop:20}}></MaterialCommunityIcons>
                    <View style={{height:'100%', backgroundColor:'#fff', width:60}}>
                        <Text style={{fontSize:20, color:'#7F807F', fontWeight:'600'}}>2 Item</Text>
                        <Text style={{fontSize:22, color:'black', fontWeight:'600'}}>£170</Text>
                    </View>

                    <TouchableOpacity style={{height:'100%', width:150, backgroundColor:'#17B107', borderRadius:5}}>
                        <Text style={{textAlign:'center', color:'#fff', marginTop:20, fontSize:20, fontWeight:'700'}}>Pay Now</Text>
                    </TouchableOpacity>
                </View>                 
            </View>



        </View>
    )
}

export default Cart2;