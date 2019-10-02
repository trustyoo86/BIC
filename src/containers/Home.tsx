import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Link } from 'react-router-native';
import { NavigationBar, ImageBackground, Title, Icon } from '@shoutem/ui';

const Home = () => {
  return (
    <React.Fragment>
      <ImageBackground
        source={{uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-3.png'}}
        style={{ width: '100%', height: 70 }}
      >
        <NavigationBar
          styleName='clear'
          leftComponent={<Icon name='sidebar'/>}
          centerComponent={<Title>메인</Title>}
        />
      </ImageBackground>
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
    flex: 1,
    backgroundColor: '#c6c6c6',
  },
});

export default Home;