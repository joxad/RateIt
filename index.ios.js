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
import Header from './src/components/header';

const RateIt = () => (
      <View>
        <Header />
      </View>
    );


AppRegistry.registerComponent('rateit', () => RateIt);
