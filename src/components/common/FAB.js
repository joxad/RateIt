import React from 'react';
import { TouchableHighlight, View, Text } from 'react-native';

const FAB = () => {
  return (
    <View>
      <TouchableHighlight
        style={styles.fab} underlayColor='#ff7043'
        onPress={() => { console.log('pressed'); }} >
          <Text style={{ fontSize: 50, color: 'white' }}>+</Text>
      </TouchableHighlight>
    </View>
  );
};
const styles = {
  fab: {
    backgroundColor: '#ff5722',
    borderColor: '#ff5722',
    borderWidth: 1,
    height: 50,
    width: 50,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20,
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    }
  }
}

export default FAB;
