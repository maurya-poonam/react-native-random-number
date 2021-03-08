import React, { Component } from 'react'
import { Text, View } from 'react-native'
import RandomNo from 'react-native-random-number';
export class App extends Component {
  render() {
    return (
      <View style={{justifyContent:'center', alignSelf:'center', marginTop:20}}>
        <Text style={{color:'blue', fontSize:20}}> Text In Component </Text>
        <Text style={{color:'green', fontSize:20}}>{RandomNo(0,100)}</Text>
      </View>
    )
  }
}

export default App
