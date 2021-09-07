import React from 'react';
import { View, Text, Image  } from 'react-native';
import Header from './Header';
import { AdMobBanner } from 'expo-ads-admob';
import styleViews from './../styles/views';

import Ethereum from './../coins/Ethereum';

export default function ViewEthereum({ navigation }) {
  return (
    <View style={styleViews.container}>
      <Header title="Ethereum" navigation={navigation} />
      <View style={styleViews.headerContainer}>
        <Image style={styleViews.tinyLogo} source={require('./../../assets/flags/ethereum.png')} />
      </View>
      <View style={styleViews.bodyContainer}>
        <Ethereum />
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
