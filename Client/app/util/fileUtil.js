import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';


import * as imageActions from '../reducers/images/imageActions'


var RNFS = require('react-native-fs');
var imageType = ["jpg", "png", "gif"];
var blockPath = ["/mnt","/Android", "/data", "/system", "/root", "/proc"]

function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators({ ...imageActions }, dispatch)
    }
  }
function mapStateToProps(state) {
    return {
    }
}


export default class FileUtil extends Component {


    static isImageFile(name) {

        imageType.forEach((type) => {
            if (name.indexOf("." + type) > 0) return true;
        })
        return false;
    }
    static isBlockDir(path) {
        blockPath.forEach((bPath) => {
            if (path.indexOf(bPath) >= 0) return true;
        })
        return false ; 
    }

    static readFile(file) {
        if (file.isFile()) {
            return RNFS.readFile(statResult[1], 'utf8');
        }
    }
    static findImageFiles(path) {
        if (FileUtil.isBlockDir(path)) {
            console.log(" isBlock Path : " + path);
        }
        else {
            RNFS.readDir(path)
                .then((result) => {
                    if (result != null) {
                        this.props.actions.addImage(result[i].path, result[i].name, result[i].size, result[i].mtime);
                        for (let i = 0; i < result.length; i++) {
                            if (result[i].isDirectory()) {
                                FileUtil.findImageFiles(result[i].path);
                            }
                            else {
                                if (FileUtil.isImageFile(result[i].name)) {
                                    console.log(result[i].name);
                                }
                            }
                        }
                    }
                    //return Promise.all([RNFS.stat(result[0].path), result[0].path]);
                })
                .catch((err) => {
                    console.log(err.message, err.code);
                });
        }
    }



}