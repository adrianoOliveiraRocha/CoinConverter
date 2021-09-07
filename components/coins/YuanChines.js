import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import CheckInternet from './../../helpers/CheckInternet';
import styleCoins from './../styles/coins';

function YuanChines() {
  const [connectStatus, setConnectStatus] = React.useState(false);
  const [data, setData] = React.useState({});
  const [ready, setReady] = React.useState(false);

  CheckInternet().then(res => {
    setConnectStatus(res);
  });

  React.useEffect(() => { 
    
    function update() {
      setReady(false);
      let isMounted = true;
      fetch('https://economia.awesomeapi.com.br/all/CNY-BRL')
        .then(response => response.json())
        .then((response) => {          
          if(isMounted) {
            setData(response);
            setReady(true);
          }
        })
        .catch(e => {
          console.error(e);
        });
    }

    update();

    setTimeout(() => {
      if(connectStatus) update(); 
    }, 180000);
    
  }, []);

  return (
    ready
    ? (
      <View>
        <View style={styleCoins.coinContainer}>
          <Text style={styleCoins.title}>{data.CNY.code}</Text>
          <View style={styleCoins.valueInfo}>
            <Text style={styleCoins.low}>-{data.CNY.low}</Text>
            <Text style={styleCoins.height}>+{data.CNY.high}</Text>             
          </View>        
          <View style={styleCoins.valueInfo}>
            <Text style={styleCoins.normal}>Compra</Text>
            <Text style={styleCoins.normal}>{data.CNY.bid}</Text>             
          </View>   
          <View style={styleCoins.valueInfo}>
            <Text style={styleCoins.normal}>Venda</Text>
            <Text style={styleCoins.normal}>{data.CNY.varBid}</Text>             
          </View>  
          <View style={styleCoins.valueInfo}>
            <Text style={styleCoins.normal}>Variação</Text>
            <Text style={styleCoins.normal}>{data.CNY.pctChange} %</Text>             
          </View>   
          <Text>Atualizado em {data.CNY.create_date.toLocaleString("pt-BR")}</Text>    
        </View>  
      </View>
    )
    : (
      <View>
        <ActivityIndicator size="large" color="#978745" animating={true} />
      </View>
    )
  );
  
}

export default YuanChines;
