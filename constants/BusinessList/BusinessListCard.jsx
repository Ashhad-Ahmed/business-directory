import { View, Text } from 'react-native'
import React from 'react'

export default function BusinessListCard({business}) {
  return (
    <View>
      <Image source = {{uri:business.imageUrl}}
      style={{
        width:200,
        height:130,
        borderRadius: 15
      }}
      
      />
      
    </View>
  )
}