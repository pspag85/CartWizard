import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

var List = function (){
  return (
    <View>
      <ScrollView>
        <Text>item 1</Text>
        <Text>item 2</Text>
        <Text>item 3</Text>
        <Text>item 4</Text>
      </ScrollView>
    </View>
  )

};


const styles = StyleSheet.create({
  item1: {
    color: 'red',
  },
});

export default List

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
