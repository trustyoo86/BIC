import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Link } from 'react-router-native';
import MapView from  'react-native-maps';

const Map = () => {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
      {/* <Text>Map Page</Text>
      <Link to='/'>
        <Text>Move to Home</Text>
      </Link> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    flex: 1,
  },
});

export default Map;