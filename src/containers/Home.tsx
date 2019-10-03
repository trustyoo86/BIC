import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Link } from 'react-router-native';
import { NavigationBar, ImageBackground, Title, Icon } from '@shoutem/ui';

const Home = () => {
  return (
    <React.Fragment>
      <NavigationBar
        leftComponent={<Icon name='sidebar'/>}
        centerComponent={<Title>메인</Title>}
      />
      <View style={styles.container}>
        <Link to='/map'>
          <Text>맵으로 이동</Text>
        </Link>
      </View>
    </React.Fragment>
  );
};

// const Home = () => {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.tsx to start working on your app!</Text>
//       <Link to='/map'>
//         <Text>Move to Map</Text>
//       </Link>
//     </View>
//   );
// };

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
  },
});

export default Home;