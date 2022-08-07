import React from "react";
import { View, Image, Text, FlatList } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";

function Category(){

  const  Product = [
        {
            id:1,
            image: require('../Assets/Images/Biscuit.png'),
            name: 'Happy Happy Choco-chip Cookies',
            price: '£̶5̶8̶',
            offerPrice:'£58',
            offerPerc:'20%off',
            weight: null
        },
        {
            id:2,
            image: require('../Assets/Images/Cerlac.png'),
            name: 'Nestle Cerelac Wheat -  Rice Mixed Fruit Cereal',
            price: '£58',
            offerPrice:'£58',
            offerPerc:'20%off',

        },
        {
            id:3,
            image: require('../Assets/Images/Whiskas.png'),
            name: 'Whiskas Adult (+1 year) Tuna 3 kg Dry Adult Cat ….',
            weight: '3kg',
            price: '£58',
            offerPrice:'£58',
            offerPerc:'20%off',
        }
    ]


    const renderItem = ({ item }) => (


        <View style={{height:110, backgroundColor:'#fff', marginTop:10, marginHorizontal:20, width:220, flexDirection:'row'}}>
        <Image source={item.image}></Image>
        <View style={{height:'100%', backgroundColor:'#fff', width:220, marginLeft:10}}>
            <Text style={{fontSize:18, fontWeight:'600', color:'black'}}>{item.name}</Text>
            <View style={{height:65, width:220, backgroundColor:'#fff', flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={{color:'black', fontSize:18, marginTop:30}}>{item.offerPrice}</Text>
                <Text style={{color:'#7F807F', fontSize:18, marginTop:30}}>{item.price}</Text>
                <Text style={{color:'#17B107', fontSize:18, marginTop:30,marginRight:40}}>{item.offerPerc}</Text>
                <AntDesign name='pluscircle' size={28} color='#17B107' style={{marginTop:20}}></AntDesign>

            </View>
        </View>
    </View>
     )
    return(
        <View style={{height:'100%', width:'100%', backgroundColor:'#fff', marginTop:10}}>
            <View style={{height:50, backgroundColor:'white', marginLeft:10, marginTop:10, flexDirection:'row', marginHorizontal:20}}>
                <AntDesign name='arrowleft' size={34} color='black'></AntDesign>
                <Text style={{fontSize:22, fontWeight:'600', color:'black', marginLeft:20, marginTop:5}}>Bakery</Text>
                <Ionicons name='search-circle' size={33} color='#707070' style={{marginLeft:150}}></Ionicons>
                <Entypo name='unread' size={34} color='#707070' style={{marginLeft:20}}></Entypo>
            </View>

            <View style={{height:50, backgroundColor:'#fff', marginTop:20, flexDirection:'row', marginHorizontal:20}}>
                <View style={{height:'100%', backgroundColor:'#F6F6F6', width:100, borderRadius:15, flexDirection:'row', justifyContent:'center'}}>
                    <Text style={{color:'black', fontSize:18, fontWeight:'400', marginTop:10}}>Filter</Text>
                    <AntDesign name='filter' size={30} color='black' style={{marginTop:5}}></AntDesign>
                </View>

                <View style={{height:'100%', backgroundColor:'#F6F6F6', width:100, borderRadius:15, flexDirection:'row', marginLeft:15, justifyContent:'center'}}>
                    <Text style={{color:'black', fontSize:18, fontWeight:'400', marginTop:10}}>Sort By</Text>
                    <Ionicons name='swap-vertical' size={30} color='black' style={{marginTop:5}}></Ionicons>
                </View>
            </View>

            <FlatList
                data={Product}
                horizontal={false}
                renderItem={renderItem}
                showsHorizontalScrollIndicator={false}
                style={{marginTop:20}}></FlatList>
        </View>
    )
}

export default Category;