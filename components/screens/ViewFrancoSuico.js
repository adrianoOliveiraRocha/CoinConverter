import React from 'react';
import { View, Text, Image  } from 'react-native';
import Header from './Header';
import { AdMobBanner } from 'expo-ads-admob';
import styleViews from './../styles/views';

import FrancoSuico from './../coins/FrancoSuico';

export default function ViewFrancoSuico({ navigation }) {
  return (
    <View style={styleViews.container}>
      <Header title="Franco Suiço" navigation={navigation} />
      <View style={styleViews.headerContainer}>
        <Image style={styleViews.tinyLogo} source={require('./../../assets/flags/switzerland.png')} />
      </View>
      <View style={styleViews.bodyContainer}>
        <FrancoSuico />
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
