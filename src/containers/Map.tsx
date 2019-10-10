import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Link } from 'react-router-native';
import MapView from  'react-native-maps';

const Map = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        />
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