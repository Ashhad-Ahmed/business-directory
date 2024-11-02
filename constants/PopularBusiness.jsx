import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from './../constants/Colors';
import { collection, doc, getDocs, limit, query } from 'firebase/firestore';
import { db } from '../configs/FirebaseConfig';
import PopularBusinessCard from './PopularBusinessCard';

export default function PopularBusinessList() {

  const [businessList,setBusinessList]=useState([]);

  useEffect(()=>{
    GetBusinessList();
  },[])

  const GetBusinessList=async()=>{
    setBusinessList([]);
    const q=query(collection(db,'BusinessList'));
    const querySnapshot=await getDocs(q);

    querySnapshot.forEach((doc)=>{
      console.log(doc.data());
      setBusinessList(prev=>[...prev,doc.data()])
    })
  }



  return (
    <View>
      <View style={{
                padding: 10,
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'row',
                marginTop: 10,
            }}>
                <Text style={{
                    paddingLeft: 10,
                    marginTop: 10,
                    fontSize: 20,
                    fontFamily: 'outfit-bold'
                }}>
                    Popular Business
                </Text>
                <Text style={{ color: Colors.PRIMARY, fontFamily: 'outfit-medium' }}>
                    View All
                </Text>
            </View>

            <FlatList
            data={businessList}
             horizontal={true}
            //  keyExtractor={(item, index) => index.toString()}
            renderItem={({item,index})=>(
              <PopularBusinessCard
              key={index}
              business={item}
              />
            )}
           
            />
    </View>
  )
}