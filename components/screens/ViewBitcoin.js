import React from 'react';
import { View, Text, Image  } from 'react-native';
import Header from './Header';
import styleViews from './../styles/views';
import Bitcoin from './../coins/Bitcoin';
import { AdMobBanner } from 'expo-ads-admob';

export default function ViewBitcoin({ navigation }) {
  return (
    <View style={styleViews.container}>
      <Header title="Bitcoin" navigation={navigation} />
      <View style={styleViews.headerContainer}>
        <Image style={styleViews.tinyLogo} source={require('./../../assets/flags/bitcoin.png')} />
      </View>
      <View style={styleViews.bodyContainer}>
        <Bitcoin />
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
