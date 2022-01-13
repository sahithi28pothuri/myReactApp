import React, { Component } from 'react';
import { Text,StyleSheet } from 'react-native';

export default class AppHeader extends Component {
  render() {
    return <Text style={styles.title}>cartoons@i</Text>;
  }
}

const styles = StyleSheet.create({
  title: {
    width: '50%',
    height: 45,
    textAlign: 'center',
    backgroundColor: '#E9E925',
    marginTop: 20,
    marginLeft: 80,
    fontSize: 30,
    fontFamily: 'Rajdhani_600SemiBold',
    borderRadius: 20,
    borderWidth: 4,
    borderColor: 'black',
  },
});
