/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';





const App: () => Node = () => {
  

  return (
   <View style={{height:'100%', width:'100%', backgroundColor:'white'}}>
     <View style={{height:50, width:70, backgroundColor:'green', marginLeft:10}}>
       <AntDesign name='arrowleft' size={34} color='black'></AntDesign>
     </View>
      
     <View style={{height:90, backgroundColor:'white', marginHorizontal:10, marginTop:10}}>
     <Text style={{fontWeight:'bold', fontSize:34, color:'black'}}>Account Login</Text>
     <Text style={{fontSize:19, marginTop:10}}>Hello welcome to Sids Shop</Text>
     </View>

     <View style={{height:50, width:260, backgroundColor:'white', marginHorizontal:10}}>
       <TextInput placeholder='Enter Mobile Number or Email' style={{backgroundColor:'white', height:'100%', width:'100%', borderRadius:5, borderWidth:1, borderBottomColor:'green', borderLeftColor:'white', borderRightColor:'white', borderTopColor:'white', fontSize:17}}></TextInput>
     </View>

     <View style={{height:70, backgroundColor:'#fff', flexDirection:'row', marginHorizontal:10}}>
     <TextInput placeholder='Password' style={{backgroundColor:'white', height:50, width:'70%', borderRadius:5, borderWidth:1, borderBottomColor:'green', borderLeftColor:'white', borderRightColor:'white', borderTopColor:'white', fontSize:17}}></TextInput>
     <AntDesign name='rightcircle' size={34} color='green' style={{marginLeft:40, marginTop:20}}></AntDesign>

     </View>

     <View style={{height:50, flexDirection:'row', backgroundColor:'white', marginHorizontal:10}}>
       <Text style={{fontSize:17}}>New Here?</Text>
       <Text style={{fontSize:17, fontWeight:'600', marginLeft:10, color:'black'}}>Create an account</Text>
       <Text style={{fontSize:17, color:'red', fontWeight:'600', marginLeft:10}}>Forgot Password</Text>
     </View>
     
   </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
