import React, { Component } from "react";
import { Text, TouchableOpacity, View, StyleSheet, Image, SafeAreaView } from "react-native";

export class ButtonTouch extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <TouchableOpacity style={this.props.state ? styles.container : styles.containerGray}>
                    <View style={styles.itemsAlign}>
                        <Image source={{uri: this.props.googleSign}} style={styles.imgStyle} />
                        <Text style={styles.textStyle}> { this.props.text } </Text>  
                    </View>
            </TouchableOpacity>
        )
    }
}

export default ButtonTouch;

const styles = StyleSheet.create({
    container: {
        width:325,
        height:50,
        backgroundColor: '#5c6ef8',
        borderRadius:10, 
        marginTop:50, 
        justifyContent: 'center',
        alignSelf: 'center',
        shadowColor: "#5c6ef8",
        shadowOffset: {width: 0,height: 11,},
        shadowOpacity: 0.40,
        shadowRadius: 15.19,
        elevation: 23
    },
    containerGray: {
        width:325,
        height: 50,
        backgroundColor: '#b6b7ba',
        borderRadius:10, 
        marginTop:50, 
        justifyContent: 'center',
        alignSelf: 'center'
    },
    itemsAlign: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    imgStyle:{
        width:21,
        height:21,
        marginRight:40
    },
    textStyle: {
        color: 'white',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontWeight: '700',
        fontSize: 16,
        marginRight:75
    }
})