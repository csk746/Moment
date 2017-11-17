import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Recommand from '../component/recommend'
import DirectorySwipe from '../component/directorySwipe'
import PictureBrowser from '../component/picureBrowser'
export default class Main extends Component {
  render() {
    return (
      <View>
        <Recommand/>
        <DirectorySwipe/>
        <PictureBrowser/>
      </View>
    )
  }
}