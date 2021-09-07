import { StyleSheet } from 'react-native';
import colors from './colors';

const styleCoins = StyleSheet.create({
  coinContainer: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center',    
  },

  valueInfo: {
    width: 300,
    flexDirection: 'row',
    justifyContent: 'space-around',
    // backgroundColor: '#eee',
    padding: 10,
    margin: 10,
    borderBottomWidth: 1,
    borderColor: colors.MidnightBlue
  },

  title: {
    color: colors.MidnightBlue,
    fontSize: 25,
    padding: 10, 
    margin: 10,
    fontWeight: 'bold',
  },

  height: {
    color: 'green',
    fontSize: 18,
    fontWeight: 'bold',
  },

  normal: {
    color: colors.MidnightBlue,
    fontSize: 18,
    fontWeight: 'bold',
  },

  low: {
    color: 'red',
    fontSize: 18,
    fontWeight: 'bold',
  },

  logo: {
    width: 66,
    height: 58,
  },
});

module.exports = styleCoins;