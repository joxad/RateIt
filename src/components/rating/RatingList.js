import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import RatingDetail from './RatingDetail';

const data = require('../../../data.json');

// cmd D in simulator to debug
class RatingList extends Component {

  state = {
    ratings: []
  };

  componentWillMount() {
    console.log('componentWillMount');
    //debugger;
  /*  axios.get(data)//https://rallycoding.herokuapp.com/api/music_albums
    .then(response => this.setState({
        ratings: response.data
      }
    ));*/
    this.setState({
        ratings: data
      }
    );
  }

  renderRatings() {
    return this.state.ratings.map(rating =>
      <RatingDetail key={rating.title} rating={rating} />
    );
  }

  render() {
    return (
      <ScrollView>
        {this.renderRatings()}
      </ScrollView>
    );
  }
}

export default RatingList;
