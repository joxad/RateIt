import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';

import RatingDetail from './RatingDetail';
// cmd D in simulator to debug
class RatingList extends Component {

  state = {
    ratings: []
  };

  componentWillMount() {
    console.log('componentWillMount');
    //debugger;
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({
        ratings: response.data
      }
    ));
  }

  renderRatings() {
    return this.state.ratings.map(rating =>
      <RatingDetail key={rating.title} rating={rating} />

    );
  }

  render() {
    return (
      <View>
        {this.renderRatings()}
      </View>
    );
  }
}

export default RatingList;
