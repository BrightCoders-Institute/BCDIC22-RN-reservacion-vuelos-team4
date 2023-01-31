import React, { Component } from 'react'
import {TextInput, StyleSheet } from 'react-native'
import{ stylesObj, styles} from '../theme/StyleBookingInputs'

export default class BookingInput extends Component {
    constructor(props) {
        super(props);
        this.state = { hasFocus: false };
    }

    render() {
        return (<TextInput
            style={this.state.hasFocus ? styles.focusedTextInput : styles.textInput}
            onFocus={this.setFocus.bind(this, true)}
            onBlur={this.setFocus.bind(this, false)}
        />);
    }
    setFocus(hasFocus) {
        this.setState({ hasFocus });
    }
};

