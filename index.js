import React, {Component} from 'react';
import {Animated, StyleSheet, View, TouchableOpacity, Dimensions, ImageBackground, Image} from 'react-native';

let {width} = Dimensions.get('window');

export class ExpandableFabMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            offsetY: new Animated.Value(100),
            fadeIn: new Animated.Value(0),
            leftOffsetX: new Animated.Value(-40),
            rightOffsetX: new Animated.Value(40),
            leftFarOffsetX: new Animated.Value(-80),
            rightFarOffsetX: new Animated.Value(80)

        };
        openFab = openFab.bind(this);
        closeFab = closeFab.bind(this);

    }

    render() {
        return (

            <View style={styles.container}>
                {(this.state.open && this.props.menuIcons[3] !== null && this.props.menuIcons[3] !== undefined) ?
                    <Animated.View style={{
                        opacity: this.state.fadeIn,
                        transform: [{translateX: this.state.leftFarOffsetX}],
                        width: 50,
                        height: 50,
                    }}>
                        <ImageBackground style={{
                            alignSelf: 'center',
                            width: 48,
                            height: 48,
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: 4
                        }}
                                         source={require('./shadow.png')}
                        >
                            <TouchableOpacity
                                onPress={() => this.props.menuItemClicked(3)}
                                style={styles.mediumButton}>
                                {this.props.menuIcons[3]}

                            </TouchableOpacity>
                        </ImageBackground>
                    </Animated.View> :
                    <View style={{
                        width: 50,
                        height: 50,
                    }}/>
                }
                {(this.state.open && this.props.menuIcons[1] !== null && this.props.menuIcons[1] !== undefined) ?
                    <Animated.View style={{
                        opacity: this.state.fadeIn,
                        transform: [{translateX: this.state.leftOffsetX}],
                        width: 50,
                        height: 50,
                        marginTop: 32
                    }}>

                        <ImageBackground style={{
                            alignSelf: 'center',
                            width: 48,
                            height: 48,
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: 4
                        }}
                                         source={require('./shadow.png')}
                        >
                            <TouchableOpacity
                                onPress={() => this.props.menuItemClicked(1)}

                                style={[styles.mediumButton]}>

                                {this.props.menuIcons[1]}


                            </TouchableOpacity>
                        </ImageBackground>
                    </Animated.View> :
                    <View style={{
                        width: 50,
                        height: 50,
                    }}/>
                }

                < ImageBackground style={{
                    alignSelf: 'center',
                    width: 70,
                    height: 70,
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: 4,
                    marginTop: 50
                }}
                                  source={require('./shadow.png')}
                >
                    <TouchableOpacity onPress={() => {
                        if (this.state.open) {
                            closeFab()
                        } else {
                            openFab()
                        }
                    }} style={styles.mainButton}>

                        {this.state.open ? this.props.openIcon : this.props.closeIcon}
                    </TouchableOpacity>
                </ImageBackground>

                {(this.state.open && this.props.menuIcons[0] !== null && this.props.menuIcons[0] !== undefined) ?
                    <Animated.View style={{
                        opacity: this.state.fadeIn,
                        transform: [{translateX: this.state.rightOffsetX}],
                        width: 50,
                        height: 50,
                        marginTop: 32
                    }}>
                        <ImageBackground style={{
                            alignSelf: 'center',
                            width: 48,
                            height: 48,
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: 4
                        }}
                                         source={require('./shadow.png')}
                        >
                            <TouchableOpacity
                                onPress={() => this.props.menuItemClicked(0)}

                                style={[styles.mediumButton]}>
                                {this.props.menuIcons[0]}
                            </TouchableOpacity>
                        </ImageBackground>
                    </Animated.View>
                    :
                    <View style={{
                        width: 50,
                        height: 50,
                    }}/>
                }
                {(this.state.open && this.props.menuIcons[2] !== null && this.props.menuIcons[2] !== undefined) ?
                    <Animated.View style={{
                        opacity: this.state.fadeIn,
                        transform: [{translateX: this.state.rightFarOffsetX}],
                        width: 50,
                        height: 50,
                    }}>
                        <ImageBackground style={{
                            alignSelf: 'center',
                            width: 48,
                            height: 48,
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: 4
                        }}
                                         source={require('./shadow.png')}
                        >
                            <TouchableOpacity
                                onPress={() => this.props.menuItemClicked(2)}
                                style={styles.mediumButton}>
                                {this.props.menuIcons[2]}
                            </TouchableOpacity>
                        </ImageBackground>
                    </Animated.View> :
                    <View style={{
                        width: 50,
                        height: 50,
                    }}/>
                }
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: width,
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 24
    },
    mainButton: {
        width: 64,
        height: 64,
        borderRadius: 32,
        elevation: 16,
        backgroundColor: 'white',
        borderWidth: 0.5,
        borderColor: '#d4d4d4',
        zIndex: 999,
        alignItems: 'center',
        justifyContent: 'center'
    },
    mediumButton: {
        width: 42,
        height: 42,
        borderRadius: 21,
        elevation: 16,
        backgroundColor: 'white',
        borderWidth: 0.5,
        borderColor: '#d4d4d4',
        margin: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    mediumMarginTop: {marginTop: 32}

});

export function openFab() {

    this.setState({open: true}, () => {
        Animated.parallel([
            Animated.timing(
                this.state.fadeIn,
                {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true
                }
            ),
            Animated.timing(
                this.state.rightOffsetX,
                {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true
                }
            ),
            Animated.timing(
                this.state.leftOffsetX,
                {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true
                }
            ),
            Animated.timing(
                this.state.rightFarOffsetX,
                {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true
                }
            ),
            Animated.timing(
                this.state.leftFarOffsetX,
                {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true
                }
            )
        ]).start();

    });


}

export function closeFab() {
    Animated.parallel([
        Animated.timing(
            this.state.fadeIn,
            {
                toValue: 0,
                duration: 500,
                useNativeDriver: true
            }
        ),
        Animated.timing(
            this.state.rightOffsetX,
            {
                toValue: 40,
                duration: 300,
                useNativeDriver: true
            }
        ),
        Animated.timing(
            this.state.leftOffsetX,
            {
                toValue: -40,
                duration: 300,
                useNativeDriver: true
            }
        ),
        Animated.timing(
            this.state.rightFarOffsetX,
            {
                toValue: 80,
                duration: 300,
                useNativeDriver: true
            }
        ),
        Animated.timing(
            this.state.leftFarOffsetX,
            {
                toValue: -80,
                duration: 300,
                useNativeDriver: true
            }
        )
    ]).start(() => this.setState({open: false}));

}
