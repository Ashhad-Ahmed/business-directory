import { View, Text, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Colors } from './../constants/Colors';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '../configs/FirebaseConfig';
import CategoryItem from './CategoryItem';
import { useRouter } from 'expo-router';

export default function Category() {
    const [categoryList, setCategoryList] = useState([]);
    const router= useRouter();

    useEffect(() => {
        GetCategoryList();
    }, []);

    const GetCategoryList = async () => {
        setCategoryList([]);
        const q = query(collection(db, 'Category'));
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
            console.log(doc.data());
            setCategoryList(prev => [...prev, doc.data()]);
        });
    };

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
                    Category
                </Text>
                <Text style={{ color: Colors.PRIMARY, fontFamily: 'outfit-medium' }}>
                    View All
                </Text>
            </View>

            <FlatList
                data={categoryList}
                showsHorizontalScrollIndicator={false}
                style={{marginLeft:15}}
                horizontal={true}
                renderItem={({ item }) => (
                    <CategoryItem category={item}
                    onCategoryPress={(category)=>router.push('/businesslist/'+item.name)} />
                )}
                keyExtractor={(item, index) => index.toString()}
             /> 
        </View>
    );
}

