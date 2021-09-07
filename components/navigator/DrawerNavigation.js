import * as React from 'react';
import { View, StyleSheet, ScrollView, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import { Platform } from 'react-native';
import Home from './../screens/Home';
import ViewDolarComercial from './../screens/ViewDolarComercial';
import ViewDolarCanadense from './../screens/ViewDolarCanadense';
import ViewDolarTurismo from './../screens/ViewDolarTurismo';
import ViewEuro from './../screens/ViewEuro';
import ViewLibraEsterlina from './../screens/ViewLibraEsterlina';
import ViewPesoArgentino from './../screens/ViewPesoArgentino';
import ViewBitcoin from './../screens/ViewBitcoin';
import ViewLitecoin from './../screens/ViewLitecoin'
import ViewIeneJapones from './../screens/ViewIeneJapones';
import ViewFrancoSuico from './../screens/ViewFrancoSuico';
import ViewDolarAusatraliano from './../screens/ViewDolarAusatraliano';
import ViewYuanChines from './../screens/ViewYuanChines';
import ViewNovoShekelIsraelense from './../screens/ViewNovoShekelIsraelense';
import ViewEthereum from './../screens/ViewEthereum';
import ViewRipple from './../screens/ViewRipple';
import colors from './../styles/colors';
import styleViews from './../styles/views';

function CustomdrawerContent(props) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.drawerHeader}>
        <View>
          <Text style={styles.drawerHeaderText}>Menu</Text>
        </View>        
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem 
          icon={() => <Icon name={Platform.OS === 'ios' ? 'ios-close' : 'md-close'} color='black' size={22}/>}
          label="Fechar"
          onPress={() => props.navigation.closeDrawer()}
          />                  
      </DrawerContentScrollView>
    </ScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator backBehavior="history" drawerContent={props => <CustomdrawerContent {...props}/>}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Dólar Comercial" component={ViewDolarComercial} />
      <Drawer.Screen name="Dólar Cadadense" component={ViewDolarCanadense} />
      <Drawer.Screen name="Dólar Australiano" component={ViewDolarAusatraliano} />
      <Drawer.Screen name="Dólar Turismo" component={ViewDolarTurismo} />
      <Drawer.Screen name="Euro" component={ViewEuro} />
      <Drawer.Screen name="Libras Esterlina" component={ViewLibraEsterlina} />
      <Drawer.Screen name="Peso Argentino" component={ViewPesoArgentino} />
      <Drawer.Screen name="Bitcoin" component={ViewBitcoin} />
      <Drawer.Screen name="Litecoin" component={ViewLitecoin} />
      <Drawer.Screen name="Iene Japonês" component={ViewIeneJapones} />
      <Drawer.Screen name="Franco Suiço" component={ViewFrancoSuico} />
      <Drawer.Screen name="Yuan Chinês" component={ViewYuanChines} />
      <Drawer.Screen name="Novo Shekel Israelense" component={ViewNovoShekelIsraelense} />
      <Drawer.Screen name="Ethereum" component={ViewEthereum} />
      <Drawer.Screen name="Ripple" component={ViewRipple} />
      {/* <Drawer.Screen name="Conversor" component={Conversor} /> */}
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
  },

  drawerHeader: {
    backgroundColor: colors.DarkOliveGreen,
    // backgroundColor: '#FF7F50',
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row'
  },

  drawerHeaderText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  }
});

export default function DrawerNavigation() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}