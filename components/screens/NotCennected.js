import React from "react";
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import colors from './../styles/colors';

export default function NoConnected() {
  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <Text style={styles.title}>Conectando...</Text>
      </View>
     
      <View style={styles.body}>
        <ActivityIndicator size="large" color="#978745" animating={true} 
          style={{padding: 100}}
        />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    flex: 0.3,
    
  },
  body: {
    flex: 0.4,
  },

  title: {
    padding: 60,
    fontSize: 20,
    color: colors.DarkOliveGreen,
    textAlign: "center"
  },

});