/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  AppRegistry,
  View
} from 'react-native';
import Header from './src/components/Header';
import RatingList from './src/components/RatingList';

const RateIt = () => (
        <View>
          <Header title={'RateIt'} />
          <RatingList />
        </View>
    );


AppRegistry.registerComponent('rateit', () => RateIt);
