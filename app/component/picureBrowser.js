import React, { Component } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    Dimensions,
    Modal
} from 'react-native';

import ImageElement from './ImageElement';

export default class PictureBrowser extends Component {

    state = {
        modalVisible: false,
        modalImage: require('../image/ryan1.jpg'),
        // images from img folder
        images: [
            require('../image/ryan1.jpg'),
            require('../image/ryan2.jpg'),
            require('../image/ryan3.jpg'),
            require('../image/ryan4.jpg'),
            require('../image/ryan5.jpg'),
            require('../image/ryan6.jpg'),
            require('../image/ryan7.jpg'),
            require('../image/ryan8.jpg'),
            require('../image/ryan9.jpg'),
            require('../image/ryan10.jpg'),
            require('../image/ryan11.jpg'),
            require('../image/ryan12.jpg')
        ]
    };

    setModalVisible(visible, imageKey) {
        this.setState({ modalImage: this.state.images[imageKey] });
        this.setState({ modalVisible: visible });
    }

    render() {

        let images = this.state.images.map((val, key) => {
            return <TouchableWithoutFeedback key={key}
                                             onPress={() => { this.setModalVisible(true, key)}}>
                <View style={styles.imagewrap}>
                    <ImageElement imgsource={val}></ImageElement>
                </View>
            </TouchableWithoutFeedback>
        });

        return(
            <ScrollView>
                <View style={styles.container}>
                    <Modal style={styles.modal} animationType={'fade'}
                           transparent={true} visible={this.state.modalVisible}
                           onRequestCose={() => {}}>

                        <View style={styles.modal}>
                            <Text style={styles.text}
                                  onPress={() => {this.setModalVisible(false)}}>Close</Text>
                            <ImageElement imgsource={this.state.modalImage}></ImageElement>
                        </View>

                    </Modal>

                    { images }
                </View>
            </ScrollView>
        );

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#eee'
    },
    imagewrap: {
        margin: 2,
        padding: 2,
        height: (Dimensions.get('window').height/6) - 12,
        width: (Dimensions.get('window').width/3) - 4,
        backgroundColor: '#fff'
    },
    modal: {
        flex: 1,
        padding: 40,
        backgroundColor: 'rgba(0,0,0, 0.9)'
    },
    text: {
        color: '#fff'
    }
});