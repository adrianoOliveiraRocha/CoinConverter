import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import styleCoins from './../styles/coins';
import CheckInternet from './../../helpers/CheckInternet';

function DolarComercial() {
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
      fetch('https://economia.awesomeapi.com.br/all/USD-BRL')
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

    setInterval(() => {
      if(connectStatus) update(); 
    }, 180000);

  }, []);

  return (
    ready 
    ? (
    <View>
      <View style={styleCoins.coinContainer}>
        <Text style={styleCoins.title}>{data.USD.code}</Text>
        <View style={styleCoins.valueInfo}>
          <Text style={styleCoins.low}>-{data.USD.low}</Text>
          <Text style={styleCoins.height}>+{data.USD.high}</Text>             
        </View>  
        <View style={styleCoins.valueInfo}>
          <Text style={styleCoins.normal}>Compra</Text>
          <Text style={styleCoins.normal}>{data.USD.bid}</Text>             
        </View>   
        <View style={styleCoins.valueInfo}>
          <Text style={styleCoins.normal}>Venda</Text>
          <Text style={styleCoins.normal}>{data.USD.varBid}</Text>             
        </View>  
        <View style={styleCoins.valueInfo}>
          <Text style={styleCoins.normal}>Variação</Text>
          <Text style={styleCoins.normal}>{data.USD.pctChange} %</Text>             
        </View>   
        <Text>Atualizado em {data.USD.create_date}</Text>    
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

export default DolarComercial;
