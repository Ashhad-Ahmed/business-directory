import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { getDocs, query, collection, where } from 'firebase/firestore';
import { FlatList } from 'react-native';
import BusinessListCard from '../../constants/BusinessList/BusinessListCard';
import {db} from '../../configs/FirebaseConfig'

export default function BusinessListByCategory() {
    const navigation = useNavigation();
    const { category } = useLocalSearchParams();
    const [businessList, setBusinessList] = useState([]);

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTitle: category,
        });
        getBusinessList();
    }, []);

    // Used to get business list by category
    const getBusinessList = async () => {
        console.log('buzz')
        const q = query(collection(db, 'BusinessList'), where("category", "==", category));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            console.log('Business Data:', data);  // Log the entire document data
            console.log('Image URL:', data.imageUrl);  // Log the image URL
            setBusinessList(prev => [...prev, data]);
        });
    };

    return (
        <View>
            <FlatList
                data={businessList}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <BusinessListCard
                        business={item}
                        key={index}
                    />
                )}
            />
        </View>
    );
}
