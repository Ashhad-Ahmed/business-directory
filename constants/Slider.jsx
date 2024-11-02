import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { db } from './../configs/FirebaseConfig';
import { collection, query, getDocs } from 'firebase/firestore';

export default function Slider() {
    const [sliderList, setSliderList] = useState([]);

    useEffect(() => {
        GetSliderList();
    }, []);

    const GetSliderList = async () => {
        setSliderList([]);
        try {
            const q = query(collection(db, 'Slider'));
            const querySnapshot = await getDocs(q);

            const data = [];
            querySnapshot.forEach((doc) => {
                data.push(doc.data());
            });
            setSliderList(data);
        } catch (error) {
            console.error('Error fetching slider list:', error);
        }
    };

    return (
        <View>
            <Text
                style={{
                    fontFamily: 'outfit-bold',
                    fontSize: 20,
                    padding: 20,
                    paddingLeft: 20,
                    paddingTop: 20,
                    marginBottom: 5,
                }}>
                #Special for you.
            </Text>
            <FlatList
                data={sliderList}
                horizontal={true}
                style={{ paddingLeft: 20 }}
                renderItem={({ item }) => (
                    <View style={{ marginRight: 15 }}>
                        <Image
                            source={{ uri: item.imageUrl }} // URL from your database
                            style={{
                                width: 300,
                                height: 220,
                                borderRadius: 15,
                                marginBottom: 5,
                            }}
                            onError={() => console.log('Error loading image:', item.imageUrl)} // Log error if image fails to load
                        />
                        <Text style={{
                            fontFamily: 'outfit-bold',
                            fontSize: 16,
                            color: '#333',
                            textAlign: 'center'
                        }}>
                            {item.Title} 
                        </Text>
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()} // Unique key for each item
            />
        </View>
    );
}








