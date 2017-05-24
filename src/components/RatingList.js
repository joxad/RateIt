import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
// cmd D in simulator to debug
class RatingList extends Component {
  componentWillMount() {
    console.log('componentWillMount');
    //debugger;
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => console.log(response));
  }
  render() {
    return (
      <View>
        <Text>Rating List 2</Text>
      </View>
    );
  }
}

export default RatingList;
