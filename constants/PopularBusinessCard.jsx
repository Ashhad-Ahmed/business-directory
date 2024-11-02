import { View, Text, Image } from 'react-native';
import React from 'react';
import { Colors } from './Colors';

export default function PopularBusinessCard({ business }) {
  
  

  return (
    <View style={{
      marginLeft: 20,
      padding: 10,
      borderRadius: 15,
      backgroundColor: '#fff'
    }}>
      
        <Image
          source={{ uri: business.imageUrl }}
          style={{
            width: 200,
            height: 130,
            borderRadius: 15
          }}
        />
      <View style={{marginTop:7, gap:5}} >
        <Text style={{
          fontFamily:'outfit-bold',
          fontSize:17
        }} >{business?.name}</Text>
         <Text style={{
          fontFamily:'outfit',
          fontSize:13,
          color:Colors.GRAY

        }} >{business?.address}</Text>


        <View>
        <View style={{display:'flex',flexDirection:'row', gap:5}} >
          <Image source={require('./../assets/images/star.png')}
          style={{
            width:15,
            height:15
          }}
          
          />
          <Text style={{fontFamily:'outfit'}} >4.5</Text>
        </View>
        <Text>{business?.category}</Text>
        </View>
        
      </View>
    </View>
  );
}

