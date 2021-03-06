import React from 'react';
import { View, Text, Image } from 'react-native';
import { Card, CardSection, Button } from '../common';

const RatingDetail = ({ rating }) => {
  const { title, artist, thumbnail_image, image } = rating;
  const {
    thumbnailStyle,
    imageStyle,
    headerContentStyle,
    thumbnailContainerStyle,
    headerTextStyle
  } = styles;
  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style={imageStyle} source={{ uri: image }} />
      </CardSection>
      <CardSection>
        <Button
          onPress={() => console.log(title)}
          title={'Voir le détail'}
        />
      </CardSection>
    </Card>

  );
};

const styles = {
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10
  },
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default RatingDetail;
