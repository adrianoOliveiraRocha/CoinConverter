import React from 'react';
import { View, Text, Image  } from 'react-native';
import Header from './Header';
import styleViews from './../styles/views';
import { AdMobBanner } from 'expo-ads-admob';

import DolarAustraliano from './../coins/DolarAustraliano';

export default function ViewDolarAustraliano({ navigation }) {
  return (
    <View style={styleViews.container}>
      <Header title="Dólar Australiano" navigation={navigation} />
      <View style={styleViews.headerContainer}>
        <Image style={styleViews.tinyLogo} source={require('./../../assets/flags/australia.png')} />
      </View>
      <View style={styleViews.bodyContainer}>
        <DolarAustraliano />
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
