import React from 'react';
import { Text, StyleSheet, SafeAreaView } from 'react-native';
import { Button } from '../components/Button';
import SwipeList from '../components/SwipeCarousel'

const data=[
    {data: "red"},
    {data: "blue"},
    {data: "orange"},
    {data: "grey"},
    {data: "black"},

]


export default function LinksScreen() {
  
  return (
    <SafeAreaView style={styles.container}>
      <SwipeList data={data}/>
      <Button>View Meals</Button>
    </SafeAreaView>
  );
}

LinksScreen.navigationOptions = {
  title: 'Links',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,  
  },
});
