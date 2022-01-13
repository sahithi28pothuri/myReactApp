import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import AppHeader from '../AppHeader';
import db from '../config';

export default class InfoScreen1 extends Component {
  likeB = () => {
    var like = db.ref('likes/'+'/').update({
      like1: 'TOM AND JERRY',
    });
  };
  render() {
    return (
      <View>
        <TouchableOpacity
          style={{ marginTop: 10, backgroundColor: '#E8E13D', width: 200 }}
          onPress={() => this.props.navigation.navigate('Home')}>
          <Text>click to go to HomeScreen</Text>
        </TouchableOpacity>
        <Text style={styles.text}>
          Tom and Jerry debuted on February 10th 1940. Its first episode was
          titled ‘Puss gets the boot” and was created by makers William Hanna
          and Joseph Barbera. <br />
          Ever since then, there have been a total of 164 shorts. The first
          episode was the longest.
          <br />
          The title of the animation series Tom and Jerry originated from an
          1823 book titled the Life in London or The Adventures of Jerry
          Hawthorne and his elegant friend “Corinthian Tom”
        </Text>
        <TouchableOpacity style={styles.button} onPress={this.likeB}>
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
