import React from "react";
import { StyleSheet, View, Text,Image, ScrollView } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";


function ProductView1() {
    return(
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
                <View style={{ height:270, backgroundColor: '#fff', marginHorizontal: 20 }}>
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
                    <View style={{height:60, backgroundColor:'#5A25CB', marginTop:10, flexDirection:'row', justifyContent:'space-evenly'}}>
                        <Text style={{color:'#fff', fontSize:18, marginTop:15}}>Deal Ends in</Text>
                        <View style={{height:60, width:2, backgroundColor:'#A178FB'}}></View>
                        <Text style={{fontSize:18, color:'#fff', marginTop:15}}>02d:12h: 20m : 00s</Text>
                    </View>
                </View>
                <View style={{ height: 5, backgroundColor: '#F6F6F6', width: '100%',}}></View>
                <View style={{ height: 30, backgroundColor: '#fff', marginTop: 10, flexDirection: 'row', marginHorizontal:20 }}>
                        <Text style={{ fontSize: 18,  fontWeight: '500' }}>Product Details</Text>
                        <Text style={{ fontSize: 18, marginLeft: 10, fontWeight: '500', color:'#17B107' }}>S͟p͟e͟c͟i͟f͟i͟c͟a͟t͟i͟o͟n͟</Text>
                </View>

                <View style={{height:100, backgroundColor:'red', flexDirection:'row', marginHorizontal:20, marginTop:10}}>
                    <View style={{height:'100%', backgroundColor:'#fff', width:'50%'}} >
                        <Text style={{color:'black', fontSize:16}}>Lormipsam</Text>
                        <Text style={{color:'black', fontSize:16, marginTop:10}}>Baked to perfection and topped with delicious i</Text>
                    </View>
                    <View style={{height:'100%', backgroundColor:'#fff', width:'50%'}} >
                    <Text style={{color:'black', fontSize:16}}>Lormipsam</Text>
                        <Text style={{color:'black', fontSize:16, marginTop:10}}>Baked to perfection and topped with delicious i</Text>
                    </View>
                </View>
                <View style={{ height: 5, backgroundColor: '#F6F6F6', width: '100%',}}></View>

                <View style={{height:100, backgroundColor:'red', flexDirection:'row', marginHorizontal:20, marginTop:10}}>
                    <View style={{height:'100%', backgroundColor:'#fff', width:'50%'}} >
                        <Text style={{color:'black', fontSize:16}}>Lormipsam</Text>
                        <Text style={{color:'black', fontSize:16, marginTop:10}}>Baked to perfection and topped with delicious i</Text>
                    </View>
                    <View style={{height:'100%', backgroundColor:'#fff', width:'50%'}} >
                    <Text style={{color:'black', fontSize:16}}>Lormipsam</Text>
                        <Text style={{color:'black', fontSize:16, marginTop:10}}>Baked to perfection and topped with delicious i</Text>
                    </View>
                </View>

            </View>           
            </ScrollView>
    )
}
export default ProductView1;