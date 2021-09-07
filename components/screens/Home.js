import React from 'react';
import { View, Text, Keyboard } from 'react-native';
import Header from './Header';
import styleViews from './../styles/views';
import Conversor from './Conversor';
import { AdMobBanner } from 'expo-ads-admob';

/*
The time "Setting a timer"
This problem cannot be fixed. Just doesn't show the message
*/ 

import { LogBox } from 'react-native';
import _ from 'lodash';

LogBox.ignoreLogs(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};

export default function Home({ navigation }) {

  const [keyboardVisibly, setKeyboardVisibly] = React.useState(false);
  
  Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
  Keyboard.addListener('keyboardDidHide', _keyboardDidHide);

  function _keyboardDidShow() {
    setKeyboardVisibly(true);
  }

  function _keyboardDidHide() {
    setKeyboardVisibly(false);
  }

  return (
    <View style={styleViews.container}>
      
      <Header title="Home" navigation={navigation} />

      <View style={styleViews.headerContainer}>
        <Text style={[styleViews.title]}>Conversor</Text>
      </View>
      <View style={styleViews.bodyContainer}>
        <Conversor />
      </View> 
      {!keyboardVisibly
      ? (
        <View style={styleViews.bannerContainer}>
          <AdMobBanner
            adUnitID="ca-app-pub-7854818002814670/5341297721"
            servePersonalizedAds={false}
            servePersonalizedAds={true}
            onDidFailToReceiveAdWithError={(error) => console.log(error)}
          />
        </View>
      )
      : (
        <View style={styleViews.bannerContainer}></View>
      )}      

    </View>
    
  );
}

