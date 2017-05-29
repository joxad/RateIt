import React from 'react';
import { View, Text } from 'react-native';

const RatingDetail = (props) => {
  return (
    <View>
      <Text>
        {props.rating.title}
      </Text>
    </View>
  );
};


export default RatingDetail;
