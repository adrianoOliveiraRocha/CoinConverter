import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ActivityIndicator } from 'react-native';
import styleViews from './../styles/views';
import { Picker } from '@react-native-picker/picker';
import CheckInternet from './../../helpers/CheckInternet';
import colors from './../styles/colors';

export default function Conversor(props) {

  

  const [connectStatus, setConnectStatus] = React.useState(false);

  const [ready, setReady] = React.useState(false);

  const [_from, setFrom] = React.useState('BRL');
  const [_to, setTo] = React.useState('USD');

  const [value1, setValue1] = React.useState(null); // value to be converted
  const [value2, setValue2] = React.useState(null); // response

  const [allCoins, setAllCoins] = React.useState(null);

  const [rate, setRate] = React.useState(null);

  CheckInternet().then(res => {
    setConnectStatus(true);
  });

  React.useEffect(() => { 
    
    function update() {
      
      let isMounted = true;
      fetch('https://economia.awesomeapi.com.br/all')
        .then(response => response.json())
        .then((response) => {          
          if(isMounted) {
            setAllCoins(response);
            setReady(true);   
            if(!rate) {
              let res = "1 USD = " + (1 / parseFloat(response.USD.bid)).toFixed(6) + " BRL";
              setRate(res) 
            }        
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
  
  function buildRate(f, t) {
    if(f === "BRL" && t !== "BRL") {
      let res = 1 / allCoins[t].bid;
      res = "1 " + f + " = " + res.toFixed(6).toString() + ": " + t;
      setRate(res);
    } else if(f == t) {
      setRate("1.0");
    } else if(f !== "BRL" && t === "BRL") {
      let brl = allCoins[f].bid;
      let res = "1 " + f + " = " + brl + ": " + t;
      setRate(res);
    } else if(f !== "BRL" && t !== "BRL") {
      let Tbrl = allCoins[t].bid;
      let Fbrl = allCoins[f].bid;
      let res = `1 ${f} = ${(Fbrl/Tbrl).toFixed(6).toString()} ${t}`;
      setRate(res);
    }  
  }

  function changeFrom(itemValue, itemIndex) {
    setFrom(itemValue)
    setValue2(null);
    setValue1(null);
    buildRate(itemValue, _to);
  }

  function changeTo(itemValue, itemIndex) {
    setTo(itemValue)
    setValue2(null);
    setValue1(null);
    buildRate(_from, itemValue);
  }

  function onSetValue1(text) {
    if(text.length > 0) {
      setValue1(text);  
      convert(parseFloat(text));     
    } else {
      setValue1(null);
      setValue2(null);
    } 
  }

  function convert(value) {
    if(!value) {
      // console.log("Por favor, digite um valor numérico maior que zero!");
    } else if(isNaN(value)) {
      alert("Por favor, digite um valor numérico");
    } else {
      if(_from === "BRL" && _to !== "BRL") {
        // You don't need convert the first value to real. It is in real
        let res = value / allCoins[_to].bid;
        setValue2(res.toFixed(6).toString());        
      } else if(_from === _to) {
        alert("Você está tentando converter para a mesama moeda!")
      } else if(_from !== "BRL") {
        let rValue = value * allCoins[_from].bid;
        let fixTo = _to === "BRL" ? 1 : allCoins[_to].bid; // you should at first convert the value1 to real
        let res = rValue / fixTo;
        setValue2(res.toFixed(6).toString());
      }
    }
  }
  
  return (
    ready 
    ? (
    <View style={styleViews.container}>
  
      <View style={conversorStyle.bodyContainer}>
        {/* <Text>De</Text> */}
        <View style={conversorStyle.boxCoin}>
          <Picker
            selectedValue={_from}
            style={conversorStyle.pickerStyle}
            onValueChange={changeFrom}>
            <Picker.Item label="BRL" value="BRL"/>
            <Picker.Item label="USD" value="USD"/> 
            <Picker.Item label="CAD" value="CAD"/> 
            <Picker.Item label="AUD" value="AUD" />  
            <Picker.Item label="EUR" value="EUR"/> 
            <Picker.Item label="GBP" value="GBP"/>  
            <Picker.Item label="ARS" value="ARS"/>  
            <Picker.Item label="BTC" value="BTC"/>  
            <Picker.Item label="LTC" value="LTC" /> 
            <Picker.Item label="JPY" value="JPY" />
            <Picker.Item label="CHF" value="CHF" />
            <Picker.Item label="CNY" value="CNY" />
            <Picker.Item label="ILS" value="ILS" />
            <Picker.Item label="ETH" value="ETH" />
            <Picker.Item label="XRP" value="XRP" />
          </Picker>
          <TextInput 
            style={conversorStyle.field} 
            placeholder="Digite o valor"
            keyboardType="numeric"
            value={value1}
            onChangeText={(text => onSetValue1(text))}
            // autoFocus={true}
          />
        </View>
        
        <View style={conversorStyle.boxCoin}>
          <Picker
            selectedValue={_to}
            style={conversorStyle.pickerStyle}
            onValueChange={changeTo}>
            <Picker.Item label="BRL" value="BRL"/>
            <Picker.Item label="USD" value="USD"/>  
            <Picker.Item label="CAD" value="CAD"/> 
            <Picker.Item label="AUD" value="AUD" />   
            <Picker.Item label="EUR" value="EUR"/>  
            <Picker.Item label="GBP" value="GBP"/>  
            <Picker.Item label="ARS" value="ARS"/>  
            <Picker.Item label="BTC" value="BTC"/>
            <Picker.Item label="LTC" value="LTC" />
            <Picker.Item label="JPY" value="JPY" />
            <Picker.Item label="CHF" value="CHF" />
            <Picker.Item label="CNY" value="CNY" />
            <Picker.Item label="ILS" value="ILS" />
            <Picker.Item label="ETH" value="ETH" />
            <Picker.Item label="XRP" value="XRP" />
          </Picker>        
          <TextInput 
            style={conversorStyle.field}
            editable={false}
            value={value2}
          />
        </View>

        <View style={styleViews.bodyContainer}>
          <Text style={conversorStyle.titleRate}>{rate}</Text>
        </View>

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

const conversorStyle = StyleSheet.create({
  titleRate: {
    color: colors.DarkCyan,
    fontSize: 20,
    fontWeight: 'bold',
  },

  bodyContainer: {
    flex: 0.9,
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  boxCoin: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: 400,
    padding: 15
  },

  pickerStyle: {
    height: 50, 
    width: 100, 
    color: colors.DarkOliveGreen, fontWeight: 'bold',
  },

  boxBtn: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: 300,
    padding: 10,
    marginTop: 10
  },

  field: {
    borderBottomWidth: 1, 
    width: 200,
    textAlign: 'center',
    color: colors.MidnightBlue,
    fontSize: 20, fontWeight: 'bold',
    color: colors.MidnightBlue
  },

  btn: {
    color: 'black', 
    padding: 5,
    width: 100,
    textAlign: 'center',
    backgroundColor: colors.DarkOliveGreen,
    color: 'white'
  }

});
