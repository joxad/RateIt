import React from 'react';
import { View } from 'react-native';
import Header from '../common/Header';
import RatingList from '../rating/RatingList';

const RootPage = () => {
 return (
   <View style={{ flex: 1 }}>
    <Header title={'RateIt'} />
    <RatingList />
  </View>
  );
};


export default RootPage;
