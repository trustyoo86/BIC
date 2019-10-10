import * as React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Link } from 'react-router-native';
import { NavigationBar, ImageBackground, Title, Icon, Card, Image, View, Subtitle, Caption } from '@shoutem/ui';

const Home = () => {
  return (
    <React.Fragment>
      <NavigationBar
        leftComponent={<Icon name='sidebar'/>}
        centerComponent={<Title>메인</Title>}
      />
      <View style={styles.container}>
        <Card>
          <Image
            styleName='large-banner'
            source={{uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-10.png'}}
          />
          <View styleName="content">
            <Subtitle>Choosing The Right Boutique Hotel For You</Subtitle>
            <Caption>21 hours ago</Caption>
          </View>
        </Card>
        {/* <Link to='/map'>
          <Text>맵으로 이동</Text>
        </Link> */}
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