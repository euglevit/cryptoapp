import React,{Component} from 'react';
import {View,Text, StyleSheet} from 'react-native';
import CoinInfo from './CoinInfo';

class Coins extends Component {
  coins = [
    {type: 'BTC', price: 63.82, difference: -0.22},
    {type: 'ETH', price: 75.21, difference: -0.30},
    {type: 'EUG', price: 43.26, difference: -0.54},
    {type: 'ROB', price: 88.61, difference: 0.22},
    {type: 'AND', price: 91.27, difference:  -0.32},
    {type: 'MAT', price: 103.45, difference: 1.20},
  ]

  componentDidMount(){
    console.log('component mounted');
  }
  
  createCoinList(){
    this.coins.map(coin => {
      console.log(coin.type);
      return(
        <CoinInfo 
          coinType={coin.type} 
          coinPrice={coin.price} 
          coinDifference={coin.difference}
        />
      )
    })
  }
      
  render(){
    console.log('yo');
    return(
      <View style={styles.container} >{this.createCoinList()}</View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#000000',
  },
})

export default Coins;