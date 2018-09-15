
# react-native-expandable-fab-menu [![npm version](https://img.shields.io/npm/v/react-native-expandable-fab-menu.svg)](https://www.npmjs.com/package/react-native-expandable-fab-menu)
<img src="https://raw.githubusercontent.com/lvlrSajjad/react-native-expandable-fab-menu/master/img.gif">

## Getting started

`$ npm install react-native-expandable-fab-menu --save`

## Props
    closeIcon,openIcon = React Native Component (You Can Use Image Component or vector icon components or 
		anything you want, recommanded width and height are 32)
		
    menuIcons = array of React Native Component recommanded width and height are 24 , maximum lenght is 4
	
    menuItemClicked= function returned index is index of menuIcons array
	
## Usage
```javascript
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {ExpandableFabMenu} from 'react-native-expandable-fab-menu';


type Props = {};
export default class App extends Component<Props> {
    render() {
        return (

            <View style={styles.container}>
                
                
                <ExpandableFabMenu
                    closeIcon={
                        <Image
                            style={{alignSelf: 'center', width: 32, height: 32}}
                            source={require('./menu.png')}/>
                    }
                    openIcon={
                        <Image
                            style={{alignSelf: 'center', width: 32, height: 32}}
                            source={require('./close_dark.png')}/>
                    }
                    menuIcons={[
                        <Image
                            style={{alignSelf: 'center', width: 24, height: 24}}
                            source={require('./biohazard.png')}/>,
                        <Image
                            style={{alignSelf: 'center', width: 24, height: 24}}
                            source={require('./nuke.png')}/>,
                        <Image
                            style={{alignSelf: 'center', width: 24, height: 24}}
                            source={require('./menu.png')}/>,
                        <Image
                            style={{alignSelf: 'center', width: 24, height: 24}}
                            source={require('./menu.png')}/>
                    ]}
                    menuItemClicked={(index) => console.log(index)}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EEEEEE',
    },
});

```
