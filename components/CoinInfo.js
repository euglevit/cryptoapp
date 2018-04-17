import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

class CoinInfo extends Component(){
  // constructor(props){
  //   super(props);
  // }

  // static propTypes = {
  //   coinType: PropTypes.string,
  //   coinPrice: PropTypes.number,
  //   coinDifference: PropTypes.number
  // }

  componentDidMount(){
    console.log('component mounted');
  }

  render(){
    return(
      <View>
        <Text>25</Text>
        <Text>24</Text>
        <Text>23</Text>
      </View>
    )
  }
}

export default CoinInfo;