import React from "react";
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import PrimaryButton from "../Component/PrimaryButton/primaryButton";

function PayNow(){
    return(

        <ScrollView>
        <View style={{backgroundColor:'#fff', flex:1}}>
            <View style={{ height: 50, width: 150, backgroundColor: 'white', marginLeft: 10, marginTop: 10, flexDirection: 'row', justifyContent:'space-between' }}>
                    <AntDesign name='arrowleft' size={34} color='black'></AntDesign>
                    <Text style={{color:'black', fontSize:20, fontWeight:'600'}}>Payment</Text>
                </View>
                <View style={{height:50, backgroundColor:'#fff', marginTop:10, marginHorizontal:20, flexDirection:'row', justifyContent:'space-between'}}>
                    <Text style={{color:'black', fontSize:20, fontWeight:'600'}}>Delivery Address</Text>
                    <Text style={{fontSize:16, color:'#17B107'}}>Change</Text>
                </View>
                <View style={{height:50, backgroundColor:'#fff', marginHorizontal:20, width:'60%'}}>
                    <Text style={{fontSize:16, color:'black'}}>Kemp House 152 – 160 City Road London EC1V 2NX</Text>
                </View>
                <View style={{ height: 5, backgroundColor: '#F6F6F6' }}></View>

                <View style={{height:30, backgroundColor:'#fff', marginHorizontal:20, marginTop:10, flexDirection:'row', justifyContent:'space-between'}}>
                    <Text style={{fontSize:18, color:'black', fontWeight:'500'}}>Product Details</Text>
                    <Text style={{fontSize:14, marginLeft:140}}>3 Items</Text>
                    <AntDesign name='down' size={20} color='#17B107'></AntDesign>
                </View>

                <View style={{height:90, backgroundColor:'#fff', marginHorizontal:20, marginTop:10, flexDirection:'row', justifyContent:'space-between'}}>
                    <Image source={require('../Assets/Images/ChocoChip.png')} style={{width:90, resizeMode:'contain'}}></Image>
                    <AntDesign name='closesquare' size={20} color='red' style={{position:'absolute', marginTop:10}}></AntDesign>
                    <View style={{backgroundColor:'#fff', width:120, height:'100%', justifyContent:'space-around', marginRight:50}}>
                        <Text style={{fontWeight:'500', color:'black', fontSize:16}}>Superfood</Text>
                        <Text style={{fontWeight:'500', color:'#7F807F', fontSize:16}}>9 Pcs</Text>
                        <Text style={{fontWeight:'500', color:'black', fontSize:18}}>£58</Text>
                    </View>
                    <View style={{backgroundColor:'#CFCFCF', width:80, height:20, borderRadius:10, marginTop:60}}>
                        <Text style={{textAlign:'center', fontSize:16, fontWeight:'bold'}}>2</Text>
                    </View>
                </View>

                <View style={{height:90, backgroundColor:'#fff', marginHorizontal:20, marginTop:10, flexDirection:'row', justifyContent:'space-between'}}>
                    <Image source={require('../Assets/Images/Biscuit.png')} style={{width:90, resizeMode:'contain'}}></Image>
                    <AntDesign name='closesquare' size={20} color='red' style={{position:'absolute', marginTop:10}}></AntDesign>
                    <View style={{backgroundColor:'#fff', width:120, height:'100%', justifyContent:'space-around', marginRight:50}}>
                        <Text style={{fontWeight:'500', color:'black', fontSize:16}}>Happy Happy Choco-chip Cookies</Text>
                        <Text style={{fontWeight:'500', color:'black', fontSize:18}}>£54</Text>
                    </View>
                    <View style={{backgroundColor:'#CFCFCF', width:80, height:20, borderRadius:10, marginTop:60}}>
                        <Text style={{textAlign:'center', fontSize:16, fontWeight:'bold'}}>1</Text>
                    </View>
                </View>
                <View style={{ height: 5, backgroundColor: '#F6F6F6', marginTop:10 }}></View>

                <View style={{height:260, backgroundColor:'#fff', marginHorizontal:20}}>
                    <Text style={{fontSize:20, color:'black'}}>Payment Details</Text>

                    <View style={{height:40, backgroundColor:'#fff', flexDirection:'row', justifyContent:'space-between', marginTop:20}}>
                        <Text style={{fontSize:16, color:'black'}}>Item total</Text>
                        <Text style={{fontSize:18, color:'black', fontWeight:'500'}}>£170</Text>
                    </View>
                    <View style={{ height: 2, backgroundColor: '#F6F6F6' }}></View>

                    <View style={{height:40, backgroundColor:'#fff', flexDirection:'row', justifyContent:'space-between', }}>
                        <Text style={{fontSize:16, color:'black'}}>Delivery fee</Text>
                        <Text style={{fontSize:18, color:'black', fontWeight:'500'}}>£0</Text>
                    </View>
                    <View style={{ height: 2, backgroundColor: '#F6F6F6' }}></View>

                    <View style={{height:40, backgroundColor:'#fff', flexDirection:'row', justifyContent:'space-between',}}>
                        <Text style={{fontSize:16, color:'black'}}>Cash back</Text>
                        <Text style={{fontSize:18, color:'black', fontWeight:'500'}}>£50</Text>
                    </View>
                    <View style={{ height: 2, backgroundColor: '#F6F6F6' }}></View>

                    <View style={{height:40, backgroundColor:'#fff', flexDirection:'row', justifyContent:'space-between', }}>
                        <Text style={{fontSize:16, color:'black'}}>Discont</Text>
                        <Text style={{fontSize:18, color:'black', fontWeight:'500'}}>-£10</Text>
                    </View>
                    <View style={{ height: 2, backgroundColor: '#F6F6F6' }}></View>

                    <View style={{height:40, backgroundColor:'#fff', flexDirection:'row', justifyContent:'space-between', }}>
                        <Text style={{fontSize:16, color:'black', fontWeight:'500'}}>Total</Text>
                        <Text style={{fontSize:18, color:'black', fontWeight:'bold'}}>£150</Text>
                    </View>
                </View>
                <View style={{ height: 5, backgroundColor: '#F6F6F6', marginTop:10,  }}></View>
                <View style={{height:40, backgroundColor:'#fff', marginHorizontal:20, flexDirection:'row', justifyContent:'space-between', marginTop:10}}>
                <AntDesign name='checkcircleo' size={25} color='#17B107' style={{ marginTop:5}}></AntDesign> 
                <Text style={{fontSize:18, fontWeight:'500', color:'black', marginRight:120, marginTop:5}}>No Contact Delivery</Text> 
                <AntDesign name='infocirlceo' size={25} color='#7F807F' style={{marginTop:5}}></AntDesign>
                </View>
                <View style={{ height: 5, backgroundColor: '#F6F6F6', marginTop:10,  }}></View>

                <View style={{height:40, backgroundColor:'#fff', marginHorizontal:20, flexDirection:'row', justifyContent:'space-between', marginTop:10}}>
                <AntDesign name='checkcircleo' size={25} color='#17B107' style={{ marginTop:5}}></AntDesign> 
                <Text style={{fontSize:18, fontWeight:'500', color:'black', marginRight:90, marginTop:5}}>Do You Need Cashback</Text> 
                <AntDesign name='infocirlceo' size={25} color='#7F807F' style={{marginTop:5}}></AntDesign>
                </View>

                <View style={{height:60, backgroundColor:'#fff', marginTop:10, flexDirection:'row', marginHorizontal:20, justifyContent:'space-between'}}>
                    <View style={{borderColor:'#17B107', borderWidth:1, borderRadius:20, width:80, height:40, marginTop:10}}>
                        <Text style={{color:'green', textAlign:'center', marginTop:10}}>£50</Text>
                    </View>
                    <View style={{borderColor:'#707070', borderWidth:1, borderRadius:20, width:80, height:40, marginTop:10}}>
                        <Text style={{color:'#707070', textAlign:'center', marginTop:10}}>£100</Text>
                    </View>
                    <View style={{borderColor:'#707070', borderWidth:1, borderRadius:20, width:80, height:40, marginTop:10}}>
                        <Text style={{color:'#707070', textAlign:'center', marginTop:10}}>£150</Text>
                    </View>
                    <View style={{borderColor:'#707070', borderWidth:1, borderRadius:20, width:80, height:40, marginTop:10}}>
                        <Text style={{color:'#707070', textAlign:'center', marginTop:10}}>£200</Text>
                    </View>
                </View>
                <View style={{ backgroundColor: '#fff', height: 70, marginTop: 20, borderTopColor: '#F6F6F6', borderWidth: 1, borderLeftColor: '#fff', borderRightColor: '#fff', borderBottomColor: '#fff', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <MaterialCommunityIcons name='cart-outline' size={30} color='black' style={{ marginTop: 20 }}></MaterialCommunityIcons>
                    <View style={{ height: '100%', backgroundColor: '#fff', width: 60,marginRight:100 }}>
                        <Text style={{ fontSize: 20, color: '#7F807F', fontWeight: '600' }}>2 Item</Text>
                        <Text style={{ fontSize: 22, color: 'black', fontWeight: '600' }}>£170</Text>
                    </View>
                    <View style={{height:50, width:140, marginTop:10}}>
                    <PrimaryButton>
                       <Text>Pay Now</Text>
                       </PrimaryButton>
                    </View>
                    
                    


                </View>
        </View>
        </ScrollView>

    )
}

export default PayNow;