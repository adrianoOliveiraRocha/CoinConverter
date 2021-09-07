import React from 'react';
import { View, Text, Image  } from 'react-native';
import Header from './Header';
import { AdMobBanner } from 'expo-ads-admob';
import styleViews from './../styles/views';

import DolarTurismo from './../coins/DolarTurismo';

export default function ViewDolarTurismo({ navigation }) {
  return (
    <View style={styleViews.container}>
      <Header title="Dólar Turismo" navigation={navigation} />
      <View style={styleViews.headerContainer}>
        <Image style={styleViews.tinyLogo} source={require('./../../assets/flags/united-states.png')} />
      </View>
      <View style={styleViews.bodyContainer}>
        <DolarTurismo />
      </View>
      <View style={styleViews.bannerContainer}>
        <AdMobBanner
          adUnitID="ca-app-pub-7854818002814670/5341297721"
          servePersonalizedAds={false}
          servePersonalizedAds={true}
          onDidFailToReceiveAdWithError={(error) => console.log(error)}
        />
      </View>
    </View>
  );
}
