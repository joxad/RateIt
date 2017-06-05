import React from 'react';
import { View } from 'react-native';

const color = require('../../styles/color.json');

const CardSection = (props) => {
    return (
      <View style={styles.containerStyle}>
        {props.children}
      </View>
    );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#FFF',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: color.borderColor,
    position: 'relative'
  }
};

export default CardSection;
