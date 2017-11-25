
import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import TensorFlow from 'react-native-tensorflow';

export default class ML extends Component {
  constructor(props) {
    super(props);
  }
  ml() {
    // console.log('aa')
    var model = require('assets/model.pb')
    const tf = new TensorFlow(model)
    // tf.feed({ name: "inputName", data: [1, 2, 3], shape: [1, 2, 4], dtype: "int64" })
    // tf.run(['outputNames'])
    // const output = tf.fetch('outputName')
    // console.log(output)
  }
  render() {
    return (
      <View>
        <Button title="ml" onPress={this.ml}></Button>
      </View>
    )
  }
}