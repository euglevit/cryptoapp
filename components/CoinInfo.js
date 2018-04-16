import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

class CoinInfo extends Component(){
  constructor(props){
    super(props);
  }

  static propTypes = {
    coinType: PropTypes.string,
    coinPrice: PropTypes.number,
    coinDifference: PropTypes.number
  }

  render(){
    return(
      <View>
        <Text>{this.props.coinType}</Text>
        <Text>{this.props.coinPrice}</Text>
        <Text>{this.props.coinDifference}</Text>
      </View>
    )
  }
}

export default CoinInfo;