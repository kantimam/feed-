import React, {useState} from 'react'
import { View, Text } from 'react-native'
import FoodItem from './FoodItem'
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';


const SwipeList = ({data, style={backgroundColor: "red", flexGrow: 1}}) => {
    const [slides, setSlides]=useState(["red","blue","yellow"])
    console.log("was swiped")
    const handleLeft=(gestureState)=>{
        
    }
    const handleRight=(gestureState)=>{

    }

    return (
        
        <View style={{flex: 1, backgroundColor: "red"}}>
            <GestureRecognizer style={{flex: 1, backgroundColor: "white"}} onSwipeLeft={handleLeft} onSwipeRight={handleRight}>
                <FoodItem data={slides[1]}/>
            
            </GestureRecognizer>
        </View>
        
        
    )
}

export default SwipeList


