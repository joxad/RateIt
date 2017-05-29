import React from 'react';
import { Text } from 'react-native';
import Card from './Card';

const RatingDetail = (props) => {
  return (
    <Card>
      <Text>{props.rating.title}</Text>
    </Card>
  );
};

export default RatingDetail;
