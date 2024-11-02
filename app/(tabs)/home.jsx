import { FlatList, View } from 'react-native';
import React from 'react';
import Header from '../../constants/Header';
import Slider from '../../constants/Slider';
import Category from '../../constants/Category';
import PopularBusinessList from '../../constants/PopularBusiness';

export default function Home() {
  const renderHeader = () => (
    <>
      <Header />
      <Slider />
      <Category />
    </>
  );

  return (
    <FlatList
      ListHeaderComponent={renderHeader} // Header components (Header, Slider, Category)
      data={[]} // No data here because PopularBusinessList handles it
      renderItem={null} // No items to render in this FlatList
      ListFooterComponent={<PopularBusinessList />} // PopularBusinessList as the footer
    />
  );
}


