import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = (props) => {

    const { label, value, onChangeTextFnc, placeHolder, secure } = props;
    const { textInputStyles, labelStyles, containerStyles } = styles;
    return (
        <View style={containerStyles}>
            <Text style={labelStyles}> {label} </Text>
            <TextInput
                secureTextEntry={secure}
                value={value}
                onChangeText={onChangeTextFnc}
                style={textInputStyles}
                autoCorrect={false}
                placeholder={placeHolder}
            />
        </View>
    )
};

const styles = {
    textInputStyles: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2,
        borderColor: "#0060ac"
    },

    labelStyles: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },

    containerStyles: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
};


export { Input };