import { StyleSheet } from 'react-native';
import colors from './../styles/colors';

const styleViews = StyleSheet.create({
  container: {
    flex: 1,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 30,
    color: colors.DarkOliveGreen,
  },

  headerContainer: {
    flex: 0.3,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    // borderBottomWidth: 1,
    // borderColor: colors.MidnightBlue,
  },

  bodyContainer: {
    flex: 0.6, 
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingTop: 20,
  },

  bannerContainer: {
    flex: 0.1, 
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },

  tinyLogo: {
    width: 100,
    height: 100,
  },
  
});

module.exports = styleViews;