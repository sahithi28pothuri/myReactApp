import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import AppHeader from '../AppHeader';
import db from '../config'


export default class InfoScreen2 extends Component {
  likeB = () => {
    var like = db.ref('likes/'+'/').update({
      like3: 'SCOOBY-DOO',
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
          Scooby-Doo's full name is Scoobert Doo but he clearly prefers to be called Scooby as evidenced by his signature catchphrase: “Scooby-Dooby-Doo!”.
          His identical siblings are Skippy-Doo and Dooby-Doo.
        </Text>
        <TouchableOpacity style={styles.button}onPress={this.likeB}>
          <Text>Like</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}onPress={this.likeB}>
          <Text>DisLike</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#48C2B5',
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
