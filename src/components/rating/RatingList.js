import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import FAB from '../common/FAB';
import RatingDetail from './RatingDetail';
import axios from 'axios';

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
    //  <View>
      //  <FAB />
        <ScrollView>
          {this.renderRatings()}
        </ScrollView>
    //  </View>
    );
  }
}

export default RatingList;
