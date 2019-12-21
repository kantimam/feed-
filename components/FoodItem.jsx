import React from 'react'
import { View, Text } from 'react-native'

const FoodItem = ({data}) => {
    console.log(data)
    return (
        <View style={{backgroundColor: data, flex: 1}}>
            <Text>{data}asdasd</Text>
        </View>
    )
}

export default FoodItem
