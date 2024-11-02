import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';

export default function CategoryItem({ category, onCategoryPress }) {
    return (
        <TouchableOpacity onPress={()=>onCategoryPress(category)}>

         {/* <View> */}
            <View style={{padding:16,
            backgroundColor:'#E6E6FA',
            borderRadius:99,
            marginRight:13,
            

            }}>
            
            <Image
                source={{ uri: category.iconUrl }}
                style={{ width: 40, height: 40,  }}
            />
            </View>
            <Text style={{
                fontSize: 12,
                fontFamily: 'outfit-medium',
                textAlign: 'center',
                marginTop:5
            }} >{category.name}</Text>

            </TouchableOpacity>
           
        // </View>
    );
}
