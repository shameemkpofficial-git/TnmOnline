import React from 'react';
import {styleSheet, View, TouchableOpacity, Text} from 'react-native';
function PrimaryButton(props) {
  return (
    <TouchableOpacity
      style={{
        height: '100%',
        width: '60%',

        backgroundColor: '#17B107',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#CFD2CF',
        alignItems: 'center',
        justifyContent: 'center',
        ...props?.style,
      }}>
      <Text style={{color: '#fff'}}>{props?.children}</Text>
    </TouchableOpacity>
  );
}
export default PrimaryButton;