import React, {useState} from 'react'
import { View, Text } from 'react-native'
import FoodItem from './FoodItem'


import Carousel from 'react-native-snap-carousel';

class SwipeCarousel extends Component {

    _renderItem = ({item, index}) => {
        return (
            <View style={styles.slide}>
                <Text style={styles.title}>{ item.title }</Text>
            </View>
        );
    }

    render () {
        return (
            <Carousel
              ref={(c) => { this._carousel = c; }}
              data={this.state.entries}
              renderItem={this._renderItem}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
            />
        );
    }
}

export default SwipeCarousel