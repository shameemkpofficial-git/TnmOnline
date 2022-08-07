import React from "react";
import { FlatList, View, Image, TextInput, Text, ScrollView, } from "react-native";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

function HomeScreenCart(){

    const Deals = [
        {
            id:1,
            image: require('../Assets/Images/ChocoChip.png'),
            title: 'Happy Happy Choco-chip Cookies',
            quantity: '9 Pcs',
            price: '£̶5̶8̶',
            offerPrice:'£58',
            dealTimer:'02d:12h: 20m : 00s'
        },
        {
            id:2,
            image: require('../Assets/Images/Yuja.png'),
            title: 'Yuja Niacin                           -',
            quantity: '9 Pcs',
            price: '£̶5̶8̶',
            offerPrice:'£58',
            dealTimer:'02d:12h: 20m : 00s'
        },
        {
            id:3,
            image: require('../Assets/Images/ChocoChip.png'),
            title: 'Happy Happy Choco-chip Cookies',
            quantity: '9 Pcs',
            price: '£̶5̶8̶',
            offerPrice:'£58',
            dealTimer:'02d:12h: 20m : 00s'
        },
        {
            id:4,
            image: require('../Assets/Images/Yuja.png'),
            title: 'Yuja Niacin                           -',
            quantity: '9 Pcs',
            price: '£̶5̶8̶',
            offerPrice:'£58',
            dealTimer:'02d:12h: 20m : 00s'
        }
    ]

    const renderDeal =({item}) => (
        
        <View style={{height:270, backgroundColor:'#fff', marginTop:10, width:165, marginLeft:5}}>
            <Image source={item.image} style={{alignSelf:'center', height:120}}></Image>
            <Ionicons name='radio-button-on' size={20} color='#17B107' style={{position:'absolute', left:140}}></Ionicons>
            <Text style={{fontSize:14, color:'black'}}>{item.title}</Text>
            <View style={{height:20, backgroundColor:'#fff', flexDirection:'row', marginTop:5}}>
            <Text style={{color:'#7F807F'}}>{item.quantity}</Text>
            <Ionicons name='chevron-down-sharp'  size={18} color='#17B107'></Ionicons>
            </View>
            <View style={{height:30, backgroundColor:'#fff', flexDirection:'row', paddingTop:10 }}>
                <Text style={{color:'black', fontWeight:'700'}}>{item.offerPrice}</Text>
                <Text style={{marginLeft:10}}>{item.price}</Text>
            </View>
            <View style={{height:60, backgroundColor:'#5A25CB', borderRadius:10}}>
                <Text style={{textAlign:'center', color:'#fff', marginTop:5, fontSize:13}}>Deals Ends In</Text>
                <Text style={{textAlign:'center', color:'#fff'}}>{item.dealTimer}</Text>
            </View>
            
        </View>
    )

    return(
        <KeyboardAwareScrollView>
    <View style={{flex:1, backgroundColor:'#fff'}}>
        
        <View style={{height:60, backgroundColor:'#fff', marginHorizontal:20, flexDirection:'row', marginTop:10}}>
            <Image source={require('../Assets/Images/SidsShop.png')} style={{marginTop:10, width:60, height:50, resizeMode:'stretch'}}></Image>
            <Text style={{fontSize:25, marginLeft:10, marginTop:15, fontWeight:'700', color:'black'}}>Hi,</Text>
            <Text style={{fontSize:25, marginTop:15, color:'black'}}>Sidhik</Text>
            <MaterialCommunityIcons name='bell-circle-outline' size={35} color='black' style={{marginTop:15, marginLeft:90}}></MaterialCommunityIcons>
            <Ionicons name='options' size={35} color='black' style={{marginLeft:10, marginTop:15}}></Ionicons>
        </View>

        <View style={{height:60, backgroundColor:'#fff', marginHorizontal:20, marginTop:10,}}>
            <TextInput placeholder='Search Your Item' style={{flex:1,backgroundColor:'#F6F6F6', borderRadius:10, flexDirection:'row', paddingLeft:20, fontSize:16}}>
            </TextInput>
            <Ionicons name='search'size={30} style={{position:'absolute', left:300, top:10}}></Ionicons>
        </View>

        <View style={{height:70, backgroundColor:'#fff', marginHorizontal:20, marginTop:10, flexDirection:'row', justifyContent:'space-between'}}>
            <View style={{height:70, width:70, backgroundColor:'#E1F4FE', borderRadius:40}}>
                <Image source={require('../Assets/Images/Grape.png')} style={{resizeMode:'cover', marginTop:5, marginLeft:5}}></Image>
            </View>
            <View style={{height:70, width:70, backgroundColor:'#E1F4FE', borderRadius:40}}>
                <Image source={require('../Assets/Images/Burger.png')} style={{resizeMode:'cover', marginTop:10, marginLeft:15}}></Image>
            </View>
            <View style={{height:70, width:70, backgroundColor:'#E1F4FE', borderRadius:40}}>
                <Image source={require('../Assets/Images/Meat.png')} style={{resizeMode:'cover', marginTop:10, marginLeft:15}}></Image>
            </View>
            <View style={{height:70, width:70, backgroundColor:'#E1F4FE', borderRadius:40}}>
                <Image source={require('../Assets/Images/More.png')} style={{resizeMode:'cover', marginTop:10, marginLeft:15}}></Image>
            </View>
        </View>
        <View style={{height:30, backgroundColor:'#fff', marginHorizontal:20, flexDirection:'row', justifyContent:'space-around'}}>
            <Text style={{fontSize:15, fontWeight:'600', color:'black'}}>Vegetables</Text>
            <Text style={{fontSize:15, fontWeight:'600', color:'black'}}>Food       </Text>
            <Text style={{fontSize:15, fontWeight:'600', color:'black'}}>Meat</Text>
            <Text style={{fontSize:15, fontWeight:'600', color:'black'}}>View More</Text>

        </View>

        <View style={{height:10, width:20, backgroundColor:'#17B107', borderRadius:10, alignSelf:'center'}}></View>

        <View style={{backgroundColor:'#fff', height:150, marginHorizontal:20, marginTop:10}}>
            <Image source={require('../Assets/Images/Banner.png')} style={{flex:1, width:'100%',}}></Image>
        </View>

        <View style={{height:5, backgroundColor:'#707070', marginTop:5}}></View>

        <View style={{height:30, backgroundColor:'#fff', marginHorizontal:20, marginTop:10, flexDirection:'row', justifyContent:'space-between'}}>
            <Text style={{fontSize:22, color:'black', fontWeight:'600'}}>Deals</Text>
            <Text style={{color:'#17B107', fontSize:16, marginTop:5, fontWeight:'500'}}>VIEW ALL</Text>
        </View>
        
        <FlatList 
        data={Deals}
        renderItem={renderDeal}
        numColumns={2}
        scrollEnabled={true}
        style={{marginHorizontal:20}}></FlatList>

        <View style={{height:5, backgroundColor:'#707070', marginTop:10}}></View>

        <View style={{height:90, backgroundColor:'#17B107', marginTop:10, marginHorizontal:20, flexDirection:'row', width:350}}>
            <View style={{height:'100%', backgroundColor:'#17B107', width:200,}}>
                <Text style={{fontSize:27, fontWeight:'800', color:'#fff'}}>Sell your Phone With Us</Text>
                <MaterialCommunityIcons name='chevron-right-circle-outline' size={30} color='#F6F6F6' style={{position:'absolute', left:110, top:35}}></MaterialCommunityIcons>
            </View>
            <View style={{height:'100%', backgroundColor:'#17B107', width:150}}>
                <Image source={require('../Assets/Images/Couple.png')} style={{marginLeft:10}}></Image>
            </View>
        </View>
        
    </View>
    </KeyboardAwareScrollView>
    
    )
}
export default HomeScreenCart;