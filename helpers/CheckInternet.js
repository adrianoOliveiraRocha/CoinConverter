import NetInfo from '@react-native-community/netinfo';

export default function CheckInternet() {
  return (
    NetInfo.fetch().then(state => {
      return state.isConnected;
    })    
  );
}