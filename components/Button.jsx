import React from 'react'
import {  TouchableOpacity, Text } from 'react-native'

const buttonDefaultStyle={
    padding: 14,
    backgroundColor: "purple",
    width: 200,
    borderRadius: 100,
    alignSelf: "center"
}
const textDefaultStyle={
    color: "white",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",

}

export const Button = ({children, style=buttonDefaultStyle, textStyle=textDefaultStyle}) => {
    return (
        <TouchableOpacity style={style}>
            <Text style={textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    )
}


