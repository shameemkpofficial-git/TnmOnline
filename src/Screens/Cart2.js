import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Modal, Button, Alert, ScrollView, Dimensions } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import PrimaryButton from "../Component/PrimaryButton/primaryButton";


function Cart2() {
    const [modalVisible, setModalVisible] = useState(true);
    return (
        <ScrollView>
        <View style={{ height: '100%', width: '100%', backgroundColor: '#fff' }}>

            <Modal animationType='slide'
                transparent={true}
                visible={modalVisible}
                presentationStyle="overFullScreen"
                
                onRequestClose={() => {
                    Alert.alert('Modal has been closed');
                    setModalVisible(!modalVisible);
                }}>
                    <View style={{backgroundColor:'rgba(0,0,0,0.1)', flex:1, flexDirection:'column-reverse',}}>
                <View style={{ height: 420, backgroundColor: '#fff', borderRadius:10}}>
                    <View style={{height:40, backgroundColor:'#fff', marginTop:10, flexDirection:'row', marginHorizontal:20, justifyContent:'space-between'}}>
                        <Text style={{color:'black', fontSize:20, fontWeight:'500'}}>Address</Text>
                        <MaterialCommunityIcons name='close-box-outline' size={30} color='black'></MaterialCommunityIcons>
                    </View>
                    <View style={{height:50, backgroundColor:'#fff', marginHorizontal:20, flexDirection:'row', marginTop:10, justifyContent:'space-between'}}>
                      <AntDesign name='home' size={30} color='black'></AntDesign>  
                      <View style={{height:50, width:250, backgroundColor:'#fff'}}>
                          <Text style={{color:'black', fontSize:16, fontWeight:'500'}}>Kemp House </Text>
                          <Text style={{color:'black', fontSize:13, fontWeight:'400'}}>152 – 160  City Road  London EC1V 2NX </Text>
                      </View>
                      <AntDesign name='checkcircleo' size={28} color='#17B107' style={{marginTop:10}}></AntDesign>  
                    </View>

                    <View style={{height:50, backgroundColor:'#fff', marginHorizontal:20, flexDirection:'row', marginTop:10, justifyContent:'space-between'}}>
                    <MaterialCommunityIcons name='office-building-marker-outline' size={28} color='black' style={{marginTop:10}}></MaterialCommunityIcons>  
                      <View style={{height:50, width:250, backgroundColor:'#fff'}}>
                          <Text style={{color:'black', fontSize:16, fontWeight:'500'}}>Kemp House </Text>
                          <Text style={{color:'black', fontSize:13, fontWeight:'400'}}>152 – 160  City Road  London EC1V 2NX </Text>
                      </View>
                      <MaterialCommunityIcons name='checkbox-blank-circle-outline' size={28} color='#F6F6F6' style={{marginTop:10}}></MaterialCommunityIcons>  
                    </View>

                    <View style={{height:50, backgroundColor:'#fff', marginTop:90, marginHorizontal:20, flexDirection:'row'}}>
                        <Ionicons name='add-circle-outline' size={30} color='#17B107'></Ionicons>
                        <Text style={{fontSize:16, color:'#17B107' ,marginLeft:10}}>Add New Address</Text>
                    </View>
                </View>
                </View>
            </Modal>

            <View style={{ height: 50, width: 120, backgroundColor: 'white', marginHorizontal: 20, marginTop: 10, flexDirection: 'row' }}>
                <AntDesign name='arrowleft' size={34} color='black'></AntDesign>
                <Text style={{ fontSize: 20, fontWeight: '700', color: 'black', marginTop: 5, marginLeft: 20 }}>Cart</Text>
            </View>

            <View style={{ height: 50, backgroundColor: '#fff', marginTop: 10, marginHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 20, color: 'black' }}>Delivery Address</Text>
                <Text style={{ fontSize: 18, color: '#17B107' }}>Change</Text>
            </View>

            <View style={{ height: 80, backgroundColor: '#fff', marginHorizontal: 20, marginTop: 10 }}>
                <Text style={{ fontSize: 18, color: '#313830' }}>Kemp House 152-160</Text>
                <Text style={{ fontSize: 18, color: '#313830' }}>City Road London EC1V 2NX</Text>
            </View>

            <View style={{ height: 5, backgroundColor: '#F6F6F6' }}></View>

            <View style={{ height: 50, backgroundColor: '#fff', marginTop: 10, marginHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 20, color: 'black' }}>Product Details</Text>
                <View style={{ height: '100%', backgroundColor: '#fff', width: 100, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 18, color: '#7F807F' }}>3 Items</Text>
                    <AntDesign name='down' size={18} color='#17B107' style={{ marginTop: 5 }}></AntDesign>

                </View>
            </View>
            <View style={{ height: 5, backgroundColor: '#F6F6F6' }}></View>

            <View style={{ height: 80, backgroundColor: '#EDFCF0', marginTop: 10, marginHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                <MaterialCommunityIcons name='brightness-percent' size={35} color='green' style={{ marginTop: 20, marginLeft: 10 }}></MaterialCommunityIcons>
                <View style={{ backgroundColor: '#EDFCF0', height: '100%', width: 220, marginLeft: 10 }}>
                    <Text style={{ color: '#17B107', fontSize: 18, marginTop: 10 }}>ASD45422</Text>
                    <Text style={{ color: '#105B08', fontSize: 14, marginTop: 10 }}>10% off  on product      |     -£170     </Text>
                </View>
                <MaterialCommunityIcons name='close-octagon-outline' size={32} color='#707070' style={{ marginTop: 20 }}></MaterialCommunityIcons>
            </View>

            <View style={{ height: '100%', backgroundColor: '#fff', marginTop: 10, marginHorizontal: 20 }}>
                <Text style={{ fontSize: 20, fontWeight: '600', color: 'black', marginBottom: 20 }}>Payment Details</Text>
                <View style={{ height: 50, backgroundColor: '#fff', flexDirection: 'row', justifyContent: 'space-between', borderWidth: 1, borderBottomColor: '#F6F6F6', borderLeftColor: '#fff', borderRightColor: '#fff', borderTopColor: '#fff' }}>
                    <Text style={{ fontSize: 18, color: 'black' }}>Item total</Text>
                    <Text style={{ fontSize: 18, color: 'black' }}>£170</Text>
                </View>

                <View style={{ height: 50, backgroundColor: '#fff', flexDirection: 'row', justifyContent: 'space-between', borderWidth: 1, borderBottomColor: '#F6F6F6', borderLeftColor: '#fff', borderRightColor: '#fff', borderTopColor: '#fff' }}>
                    <Text style={{ fontSize: 18, color: 'black' }}>Delivery fee</Text>
                    <Text style={{ fontSize: 18, color: 'black' }}>£0</Text>
                </View>
                <View style={{ height: 50, backgroundColor: '#fff', flexDirection: 'row', justifyContent: 'space-between', borderWidth: 1, borderBottomColor: '#F6F6F6', borderLeftColor: '#fff', borderRightColor: '#fff', borderTopColor: '#fff' }}>
                    <Text style={{ fontSize: 18, color: 'black' }}>Cash back</Text>
                    <Text style={{ fontSize: 18, color: 'black' }}>£50</Text>
                </View>
                <View style={{ height: 50, backgroundColor: '#fff', flexDirection: 'row', justifyContent: 'space-between', borderWidth: 1, borderBottomColor: '#F6F6F6', borderLeftColor: '#fff', borderRightColor: '#fff', borderTopColor: '#fff' }}>
                    <Text style={{ fontSize: 18, color: 'black' }}>Discont</Text>
                    <Text style={{ fontSize: 18, color: 'black' }}>-£10</Text>
                </View>
                <View style={{ height: 50, backgroundColor: '#fff', flexDirection: 'row', justifyContent: 'space-between', borderWidth: 1, borderBottomColor: '#F6F6F6', borderLeftColor: '#fff', borderRightColor: '#fff', borderTopColor: '#fff' }}>
                    <Text style={{ fontSize: 18, color: 'black', fontWeight: '700' }}>Total</Text>
                    <Text style={{ fontSize: 18, color: 'black', fontWeight: '700' }}>£150</Text>
                </View>

                <View style={{ backgroundColor: '#fff', height: 70, marginTop: 20, borderTopColor: '#F6F6F6', borderWidth: 1, borderLeftColor: '#fff', borderRightColor: '#fff', borderBottomColor: '#fff', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <MaterialCommunityIcons name='cart-outline' size={30} color='black' style={{ marginTop: 20 }}></MaterialCommunityIcons>
                    <View style={{ height: '100%', backgroundColor: '#fff', width: 60, marginRight:60 }}>
                        <Text style={{ fontSize: 20, color: '#7F807F', fontWeight: '600' }}>2 Item</Text>
                        <Text style={{ fontSize: 22, color: 'black', fontWeight: '600' }}>£170</Text>
                    </View>
                    <TouchableOpacity  onPress={() => setModalVisible(true)} style={{ height: 50, width: 140, backgroundColor: '#17B107', borderRadius:10 , marginTop:10}}>
                        <Text style={{textAlign:'center', color:'#fff', fontSize:18, marginTop:10, fontWeight:'500'}}>Pay Now</Text>
                    </TouchableOpacity>


                </View>
            </View>



        </View>
        </ScrollView>
    )
}

export default Cart2;