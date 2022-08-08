import React from "react";
import { StyleSheet, View, Image, Text, ScrollView, TextInput, TouchableHighlightBase, TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";




function ProductView() {
    return (
        <ScrollView>
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <View style={{ height: 50, width: 50, backgroundColor: 'white', marginLeft: 10, marginTop: 10, flexDirection: 'row' }}>
                    <AntDesign name='arrowleft' size={34} color='black'></AntDesign>
                </View>
                <View style={{ height: 195, backgroundColor: '#fff', marginHorizontal: 20, marginTop: 10, justifyContent: 'center', flexDirection: 'row' }}>
                    <Image source={require('../Assets/Images/ChocoChip.png')} style={{ resizeMode: 'contain', height: 250, width: 200 }}></Image>
                </View>
                <View style={{ height: 15, backgroundColor: '#fff', flexDirection: 'row', justifyContent: 'center' }}>
                    <Entypo name='dot-single' size={24} color='#17B107'></Entypo>
                    <Entypo name='dots-three-horizontal' size={24} color='#CFCFCF'></Entypo>
                </View>
                <View style={{ flex: 1, backgroundColor: '#fff', marginHorizontal: 20 }}>
                    <FontAwesome name='dot-circle-o' size={30} color='#17B107'></FontAwesome>
                    <View style={{ backgroundColor: '#fff', height: 60, width: 260 }}>
                        <Text style={{ fontSize: 22, fontWeight: '600', color: 'black' }}>Happy Happy Choco-chip Cookies</Text>
                    </View>

                    <View style={{ height: 20, width: 90, backgroundColor: '#fff', flexDirection: 'row' }}>
                        <Text style={{ fontSize: 16, fontWeight: '600' }}>9 Pcs</Text>
                        <AntDesign name='down' size={15} color='#17B107' style={{ marginLeft: 10, marginTop: 5 }}></AntDesign>
                    </View>

                    <View style={{ height: 40, backgroundColor: '#fff', flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                        <Text style={{ fontWeight: '600', color: 'black', fontSize: 20 }}>£58</Text>
                        <Text style={{ marginRight: 240, fontWeight: '600', fontSize: 20 }}>£̶5̶8̶</Text>
                        <Ionicons name='add-circle' size={30} color='#17B107'></Ionicons>
                    </View>

                    <View style={{ height: 20, backgroundColor: '#fff', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Image source={require('../Assets/Images/Amul.png')} style={{ height: '100%' }}></Image>
                        <View style={{ flexDirection: 'row', height: '100%' }}>
                            <Entypo name='star' size={20} color='#E5CF0E'></Entypo>
                            <Entypo name='star' size={20} color='#E5CF0E'></Entypo>
                            <Entypo name='star' size={20} color='#E5CF0E'></Entypo>
                            <Entypo name='star' size={20} color='#F6F6F6'></Entypo>
                            <Entypo name='star' size={20} color='#F6F6F6'></Entypo>
                        </View>

                    </View>
                    <View style={{ height: 5, backgroundColor: '#CFCFCF', width: '100%', marginTop: 10 }}></View>

                    <View style={{ height: 30, backgroundColor: '#fff', marginTop: 10, flexDirection: 'row' }}>
                        <Text style={{ fontSize: 18, color: '#17B107', fontWeight: '500' }}>P͟r͟o͟d͟u͟c͟t͟ ͟D͟e͟t͟a͟i͟l͟s͟</Text>
                        <Text style={{ fontSize: 18, marginLeft: 10, fontWeight: '500' }}>Speciification</Text>
                    </View>
                    <View style={{ backgroundColor: '#fff', height: 60, marginTop: 10 }}>
                        <Text style={{ fontSize: 16, color: 'black' }}>Baked to perfection and topped with delicious choco-chips, Happy Happy is a perfect fusion of fun and indulgence...More</Text>
                    </View>
                    <View style={{ height: 30, backgroundColor: '#fff', marginTop: 15 }}>
                        <Text style={{ fontSize: 16, color: 'black' }}>Rating and Reviews</Text>
                    </View>
                    <View style={{ height: 80, backgroundColor: '#fff', flexDirection: 'row' }}>
                        <View style={{ height: 80, backgroundColor: '#fff', width: 130 }}>
                            <Text style={{ color: '#039F22', fontSize: 47 }}>4.4</Text>
                            <Entypo name='star' size={40} color='#039F22' style={{ position: 'absolute', left: 70, top: 10 }}></Entypo>
                            <Text style={{ fontSize: 10 }}>114 Rating and 42 Reviews</Text>
                        </View>
                        <View style={{ height: 100, width: 2, backgroundColor: 'black', }}></View>

                        <View style={{ height: '100%', backgroundColor: '#fff', width: '62%' }}>
                            <View style={{ backgroundColor: '#fff', width: '100%', height: 15, flexDirection: 'row', marginLeft: 10 }}>
                                <Text style={{ fontSize: 15, fontWeight: '500' }}>5</Text>
                                <Entypo name='star' size={20} color='#8F8F8E' style={{}}></Entypo>
                                <View style={{ height: '100%', width: 150, backgroundColor: '#E2E2E2', marginLeft: 5, borderRadius: 10 }}>
                                    <View style={{ height: '100%', width: '70%', backgroundColor: '#039F22', borderRadius: 10 }}></View>
                                </View>
                                <Text style={{ color: '#8F8F8E', fontWeight: '400', marginLeft: 5 }}>70%</Text>
                            </View>
                            <View style={{ backgroundColor: '#fff', width: '100%', height: 15, flexDirection: 'row', marginLeft: 10, marginTop: 5 }}>
                                <Text style={{ fontSize: 15, fontWeight: '500' }}>4</Text>
                                <Entypo name='star' size={20} color='#8F8F8E' style={{}}></Entypo>
                                <View style={{ height: '100%', width: 150, backgroundColor: '#E2E2E2', marginLeft: 5, borderRadius: 10 }}>
                                    <View style={{ height: '100%', width: '90%', backgroundColor: '#039F22', borderRadius: 10 }}></View>
                                </View>
                                <Text style={{ color: '#8F8F8E', fontWeight: '400', marginLeft: 5 }}>90%</Text>
                            </View>
                            <View style={{ backgroundColor: '#fff', width: '100%', height: 15, flexDirection: 'row', marginLeft: 10, marginTop: 5 }}>
                                <Text style={{ fontSize: 15, fontWeight: '500' }}>3</Text>
                                <Entypo name='star' size={20} color='#8F8F8E' style={{}}></Entypo>
                                <View style={{ height: '100%', width: 150, backgroundColor: '#E2E2E2', marginLeft: 5, borderRadius: 10 }}>
                                    <View style={{ height: '100%', width: '5%', backgroundColor: '#039F22', borderRadius: 10 }}></View>
                                </View>
                                <Text style={{ color: '#8F8F8E', fontWeight: '400', marginLeft: 5 }}>5%</Text>
                            </View>
                            <View style={{ backgroundColor: '#fff', width: '100%', height: 15, flexDirection: 'row', marginLeft: 10, marginTop: 5 }}>
                                <Text style={{ fontSize: 15, fontWeight: '500' }}>2</Text>
                                <Entypo name='star' size={20} color='#8F8F8E' style={{}}></Entypo>
                                <View style={{ height: '100%', width: 150, backgroundColor: '#E2E2E2', marginLeft: 5, borderRadius: 10 }}>
                                    <View style={{ height: '100%', width: '2%', backgroundColor: '#FF8001', borderRadius: 10 }}></View>
                                </View>
                                <Text style={{ color: '#8F8F8E', fontWeight: '400', marginLeft: 5 }}>2%</Text>
                            </View>
                            <View style={{ backgroundColor: '#fff', width: '100%', height: 15, flexDirection: 'row', marginLeft: 10, marginTop: 5 }}>
                                <Text style={{ fontSize: 15, fontWeight: '500' }}>1</Text>
                                <Entypo name='star' size={20} color='#8F8F8E' style={{}}></Entypo>
                                <View style={{ height: '100%', width: 150, backgroundColor: '#E2E2E2', marginLeft: 5, borderRadius: 10 }}>
                                    <View style={{ height: '100%', width: '15%', backgroundColor: '#FF0000', borderRadius: 10 }}></View>
                                </View>
                                <Text style={{ color: '#8F8F8E', fontWeight: '400', marginLeft: 5 }}>15%</Text>
                            </View>
                        </View>

                    </View>
                    <View style={{ height: 3, backgroundColor: '#CFCFCF', width: '100%', marginTop: 30 }}></View>

                    <View style={{ height: 90, backgroundColor: '#fff' }}>
                        <Text style={{ fontSize: 16, color: 'black' }}>Jane Doe</Text>
                        <View style={{ height: 30, backgroundColor: '#fff', flexDirection: 'row' }}>
                            <View style={{ height: '100%', width: 60, backgroundColor: '#039F22', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                <Text style={{ color: '#fff', fontSize: 18 }}>4.4</Text>
                                <Entypo name='star' size={20} color='#fff' ></Entypo>
                            </View>
                            <Text style={{ color: '#8F8F8E', fontSize: 14, marginLeft: 5 }}>Verified Buyer</Text>
                        </View>
                        <Text style={{ color: 'black', fontSize: 12 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</Text>
                    </View>
                    <View style={{ height: 3, backgroundColor: '#CFCFCF', width: '100%', marginTop: 10 }}></View>

                    <View style={{ height: 90, backgroundColor: '#fff' }}>
                        <Text style={{ fontSize: 16, color: 'black' }}>Jane Doe</Text>
                        <View style={{ height: 30, backgroundColor: '#fff', flexDirection: 'row' }}>
                            <View style={{ height: '100%', width: 60, backgroundColor: '#039F22', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                <Text style={{ color: '#fff', fontSize: 18 }}>4.4</Text>
                                <Entypo name='star' size={20} color='#fff' ></Entypo>
                            </View>
                            <Text style={{ color: '#8F8F8E', fontSize: 14, marginLeft: 5 }}>Verified Buyer</Text>
                        </View>
                        <Text style={{ color: 'black', fontSize: 12 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</Text>
                    </View>

                    <View style={{ height: 3, backgroundColor: '#CFCFCF', width: '100%', marginTop: 10 }}></View>

                    <View style={{height:120, backgroundColor:'#fff', marginTop:10}}>
                        <View style={{height:20, backgroundColor:'#fff'}}></View>
                        <View style={{backgroundColor:'#fff', height:25, flexDirection:'row'}}>
                        <Image source={require('../Assets/Images/Smile.png')}></Image>
                        <Text style={{color:'black', marginLeft:5, fontSize:16}}>Give us Rating</Text>
                        </View>
                        <View style={{backgroundColor:'#fff', height:30, flexDirection:'row', marginTop:10}}>
                        <Entypo name='star' size={20} color='#E5CF0E'></Entypo>
                        <Entypo name='star' size={20} color='#E5CF0E'></Entypo>
                        <Entypo name='star' size={20} color='#E5CF0E'></Entypo>
                        <Entypo name='star' size={20} color='#F6F6F6'></Entypo>
                        <Entypo name='star' size={20} color='#F6F6F6'></Entypo>
                        </View>

                        <TextInput style={{height:50, backgroundColor:'#fff', borderWidth:1, borderColor:'#F6F6F6', borderRadius:5, color:'F6F6F6'}} placeholder='Say something about food'></TextInput>

                        
                        
                    </View>

                    <View style={{height:50, backgroundColor:'#fff', marginTop:20}}>
                    <TouchableOpacity style={{height:50, backgroundColor:'#17B107', borderRadius:10, marginHorizontal:20}}>
                        <Text style={{fontSize:20, color:'#fff', textAlign:'center', marginTop:10}}>Submit Rating</Text>
                    </TouchableOpacity>
                    </View>
                    <View style={{ height: 3, backgroundColor: '#CFCFCF', width: '100%', marginTop: 10 }}></View>


                    <View style={{height:60, backgroundColor:'#fff', flexDirection:'row'}}>
                    <Ionicons name='cart-outline' size={35} color='black' style={{marginTop:10}}></Ionicons> 
                    <View style={{height:60, backgroundColor:'#fff', marginLeft:20, width:70}}>
                        <Text style={{fontSize:22, color:'#7F807F', fontWeight:'500'}}>2 Item</Text>
                        <Text style={{color:'black', fontSize:22, fontWeight:'600'}}>£58</Text>
                    </View>
                    <View style={{height:40, width:110, backgroundColor:'#fff', marginLeft:110, marginTop:10}}>
                        <TouchableOpacity style={{height:40, width:110, backgroundColor:'#17B107', borderRadius:10,}}>
                            <Text style={{color:'#fff', fontSize:18, textAlign:'center', marginTop:5}}>View Cart</Text>
                        </TouchableOpacity>
                    </View>
                    </View>
                </View>

            </View>
        </ScrollView>
    )
}

export default ProductView;