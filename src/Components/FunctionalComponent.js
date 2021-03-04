import React from 'react'
import { View, Text } from 'react-native'

export default function FunctionalComponent(props) {
    return (
        <View>
            <Text style={props.style}>{props.name}</Text>
        </View>
    )
}

