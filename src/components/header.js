import React from 'react';
import { Text, View } from 'react-native';

const Header = () => {
  const { viewStyle, textStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>RateIt</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#FF5722'
  },
  textStyle: {
    fontSize: 20
  }
};

export default Header;
