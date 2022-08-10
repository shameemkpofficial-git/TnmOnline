import React from "react";
import { StyleSheet, View, Text, FlatList, Image, ScrollView,TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";






function Cart1(){
    return(
        <ScrollView>
        <View style={{flex:1, backgroundColor:'#fff'}}>
            <View style={{height:50, width:150, backgroundColor:'white', marginLeft:10, marginTop:10, flexDirection:'row'}}>
                <AntDesign name='arrowleft' size={34} color='black'></AntDesign>
                <Text style={{fontSize:25, fontWeight:'700', color:'black', marginLeft:10, marginTop:5}}>Cart</Text>
            </View>

            <View style={{height:120, backgroundColor:'#fff', marginHorizontal:20, marginTop:10, flexDirection:'row'}}>
                <Image source={require('../Assets/Images/ChocoChip.png')} style={{height:100, marginTop:10, width:110,}}></Image>
                    <View style={{flex:1, height:110, backgroundColor:'#fff', marginTop:10}}>
                         <Text style={{fontSize:17, fontWeight:'600', color:'black'}}>Superfood</Text>
                        <Text style={{fontSize:17, fontWeight:'500', marginTop:5}}>9 pcs</Text>
                        <View style={{height:20, backgroundColor:'#fff', flexDirection:'row', width:70, position:'absolute', marginLeft:170, top:5, borderRadius:10, borderWidth:1, borderColor:'#CFCFCF'}}>
                            <AntDesign name='minus' size={20} color='#17B107'></AntDesign>
                            <Text style={{fontSize:16, fontWeight:'600', color:'black'}}> 3 </Text>
                            <AntDesign name='plus' size={20} color='#17B107'></AntDesign>

                        </View>
                        <AntDesign name='down' size={20} color='#17B107' style={{position:'absolute', left:50, top:30}}></AntDesign>
                        <View style={{backgroundColor:'#fff', height:40, flexDirection:'row', marginTop:10}}>
                            <Text style={{fontSize:17, fontWeight:'600'}}>£58</Text>
                            <Text style={{color:'#7F807F', fontSize:17, marginLeft:10}}>£̶5̶8̶</Text>
                            <Text style={{color:'#17B107', marginLeft:20, fontSize:17}}>Save £2 </Text>
                            <Text style={{color:'black', fontSize:17, fontWeight:'600', marginLeft:10}}>Pepsi</Text>
                        </View>
                    </View>
            </View>

            <View style={{height:140, backgroundColor:'#fff', marginHorizontal:20, marginTop:10, flexDirection:'row'}}>
                <Image source={require('../Assets/Images/Biscuit.png')} style={{height:100, marginTop:10, width:110,}}></Image>
                    <View style={{flex:1, height:110, backgroundColor:'#fff', marginTop:10}}>
                         <Text style={{fontSize:17, fontWeight:'600', color:'black'}}>Happy Happy Choco-chip Cookies</Text>
                        <Text style={{fontSize:17, fontWeight:'500', marginTop:5}}>9 pcs</Text>
                        <View style={{height:20, backgroundColor:'#fff', flexDirection:'row', width:70, position:'absolute', marginLeft:170, top:5, borderRadius:10, borderWidth:1, borderColor:'#CFCFCF'}}>
                            <AntDesign name='minus' size={20} color='#17B107'></AntDesign>
                            <Text style={{fontSize:16, fontWeight:'600', color:'black'}}> 3 </Text>
                            <AntDesign name='plus' size={20} color='#17B107'></AntDesign>

                        </View>
                        <AntDesign name='down' size={20} color='#17B107' style={{position:'absolute', left:50, top:50}}></AntDesign>
                        <View style={{backgroundColor:'#fff', height:40, flexDirection:'row', marginTop:10}}>
                            <Text style={{fontSize:17, fontWeight:'600'}}>£58</Text>
                            <Text style={{color:'#7F807F', fontSize:17, marginLeft:10}}>£̶5̶8̶</Text>
                            <Text style={{color:'#17B107', marginLeft:20, fontSize:17}}>Save £2 </Text>
                            <Text style={{color:'black', fontSize:17, fontWeight:'600', marginLeft:10}}>Pepsi</Text>
                        </View>
                    </View>
            </View>

            <View style={{height:5, backgroundColor:'#F6F6F6'}}></View>

            <View style={{backgroundColor:'#fff', height:90, marginTop:10, marginHorizontal:20}}>
                <Text style={{color:'black', fontSize:18, fontWeight:'400'}}>Recomended Products</Text>
                <View style={{height:50, backgroundColor:'#F6F6F6', borderRadius:5, flexDirection:'row', justifyContent:'space-around'}}>
                    <Text style={{color:'black', fontSize:18, fontWeight:'400', marginTop:10}}>851442</Text>
                    <AntDesign name='checkcircleo' size={28} color='#17B107' style={{marginTop:10}}></AntDesign>
                </View>
            </View>
            <View style={{height:5, backgroundColor:'#F6F6F6'}}></View>
            <View style={{flex:1, backgroundColor:'#fff', marginHorizontal:20, marginTop:10}}>
                <Text style={{fontSize:20, color:'black', fontWeight:'500'}}>Payment Details</Text>
                <View style={{backgroundColor:'#fff', height:40, marginTop:20, flexDirection:'row', justifyContent:'space-between'}}>
                    <Text style={{color:'black', fontSize:16, fontWeight:'600'}}>Item Tottal</Text>
                    <Text style={{color:'black', fontSize:16, fontWeight:'600'}}>£170</Text>
                </View>
                <View style={{backgroundColor:'#fff', height:40, marginTop:20, flexDirection:'row', justifyContent:'space-between'}}>
                    <Text style={{color:'black', fontSize:16, fontWeight:'600'}}>Delivery fee</Text>
                    <Text style={{color:'black', fontSize:16, fontWeight:'600'}}>£0</Text>
                </View>
                <View style={{backgroundColor:'#fff', height:40, marginTop:20, flexDirection:'row', justifyContent:'space-between'}}>
                    <Text style={{color:'black', fontSize:16, fontWeight:'600'}}>Discont</Text>
                    <Text style={{color:'black', fontSize:16, fontWeight:'600'}}>-£10</Text>
                </View>
                <View style={{backgroundColor:'#fff', height:40, marginTop:20, flexDirection:'row', justifyContent:'space-between'}}>
                    <Text style={{color:'black', fontSize:16, fontWeight:'700'}}>Total</Text>
                    <Text style={{color:'black', fontSize:16, fontWeight:'700'}}>£150</Text>
                </View>
                <View style={{height:70, backgroundColor:'#fff', flexDirection:'row', marginLeft:10, justifyContent:'space-around'}}>
                    <AntDesign name='shoppingcart' size={35} color='black'></AntDesign>
                    <View style={{backgroundColor:'#fff', width:120, marginLeft:10}}>
                        <Text style={{color:'#7F807F', fontSize:18}}>2 Item</Text>
                        <Text style={{color:'black', fontSize:19, fontWeight:'700'}}>£170</Text>
                    </View>
                    <TouchableOpacity style={{height:40, backgroundColor:'#17B107', width:130, borderRadius:5}}>
                        <Text style={{fontSize:17, textAlign:'center', marginTop:5, color:'#fff'}}>Confirm Order</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
        </ScrollView>
    )
}

export default Cart1;