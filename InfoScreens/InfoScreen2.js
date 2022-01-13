import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import AppHeader from '../AppHeader';
import db from '../config'

export default class InfoScreen2 extends Component {
   likeB = () => {
    var like = db.ref('likes/'+'/').update({
      like2: 'MICKEY MOUSE',
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.propogater}
          onPress={() => this.props.navigation.navigate('Home')}>
          <Text>click to go to HomeScreen</Text>
        </TouchableOpacity>
        <Text style={styles.text}>
          Mickey Mouse is a cartoon character created in 1928 by Walt Disney,
          and is the mascot of The Walt Disney Company. An anthropomorphic mouse
          who typically wears red shorts, large yellow shoes, and white gloves,
          Mickey is one of the world's most recognizable fictional characters.
        </Text>
        <TouchableOpacity style={styles.button}onPress={this.likeB}>
          <Text>Like</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>DisLike</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#B2AF76',
    height: '100%',
  },
  propogater: {
    marginTop: 10,
    backgroundColor: '#E8E13D',
    width: 200,
  },
  text: {
    fontStyle: 'italic',
    fontFamily: 'cursive',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 20,
    fontSize: 18,
  },
  button: {
    width: '20%',
    height: 30,
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8E13D',
    marginTop: 10,
    marginLeft: 100,
    fontSize: 20,
    fontFamily: 'Rajdhani_600SemiBold',
    borderRadius: 20,
    borderWidth: 4,
    borderColor: 'black',
  },
});
