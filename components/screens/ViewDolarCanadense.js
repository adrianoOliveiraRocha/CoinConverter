import React from 'react';
import { View, Text, Image  } from 'react-native';
import Header from './Header';
import { AdMobBanner } from 'expo-ads-admob';
import styleViews from './../styles/views';

import DolarCanadense from './../coins/DolarCanadense';

export default function ViewDolarCanadense({ navigation }) {
  return (
    <View style={styleViews.container}>
      <Header title="Dólar Canadense" navigation={navigation} />
      <View style={styleViews.headerContainer}>
        <Image style={styleViews.tinyLogo} source={require('./../../assets/flags/canada.png')} />
      </View>
      <View style={styleViews.bodyContainer}>
        <DolarCanadense />
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
