import React from 'react';
import { View, Text, Image  } from 'react-native';
import Header from './Header';
import { AdMobBanner } from 'expo-ads-admob';
import styleViews from './../styles/views';

import PesoArgentino from './../coins/PesoArgentino';

export default function ViewPesoArgentino({ navigation }) {
  return (
    <View style={styleViews.container}>
      <Header title="Peso Argentino" navigation={navigation} />
      <View style={styleViews.headerContainer}>
        <Image style={styleViews.tinyLogo} source={require('./../../assets/flags/argentina.png')} />
      </View>
      <View style={styleViews.bodyContainer}>
        <PesoArgentino />
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
