import React, { Component } from 'react';
import { View } from 'react-native';
import RatingDetail from './RatingDetail';
import axios from 'axios';
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
