import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

class TheBestRestaurants extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <MapView
            provider={PROVIDER_GOOGLE}
            initialRegion={{
              latitude: 37.78825,
              longitude: 127.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            style={styles.mapStyle}
          />
        </View>
        {/*맛집 리스트*/}
      </View>
    );
  }
}

export default TheBestRestaurants;

const screen = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    width: screen.width,
    height: screen.height - 250,
    marginTop: 50,
  },
  mapStyle: {
    width: screen.width,
    height: 400,
  },
});