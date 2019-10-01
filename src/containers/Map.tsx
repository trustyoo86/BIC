import * as React from 'react';
import { View, Text } from 'react-native';
import { Link } from 'react-router-native';

const Map = () => {
  return (
    <View style={styles.container}>
      <Text>Map Page</Text>
      <Link to='/'>
        <Text>Move to Home</Text>
      </Link>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default Map;