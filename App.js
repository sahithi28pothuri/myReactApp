import React, { Component } from 'react';
import { Button, View, Text, StyleSheet, Image, TextInput,TouchableOpacity } from 'react-native';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import DisplayScreen from './screens/displayScreen';
import HomeScreen from './screens/HomeScreen';
import FavouritesScreen from './screens/FavouritesScreen';
import RateUsScreen from './screens/RateUsScreen';
import AppHeader from './AppHeader';
import InfoScreen1 from './InfoScreens/InfoScreen1';
import InfoScreen2 from './InfoScreens/InfoScreen2';
import InfoScreen3 from './InfoScreens/InfoScreen3';
import InfoScreen4 from './InfoScreens/InfoScreen4';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AppContainer/>  
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Favourites:FavouritesScreen,
  RateUs:RateUsScreen,
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
       const routeName = navigation.state.routeName;
      console.log(routeName)
      if(routeName === "Home"){
        return(
          <Image
          source={require("./images/homePic.jpg")}
          style={{width:30, height:30}}
        />
        )         
      }
      else if(routeName === "Favourites"){
        return(
          <Image
          source={require("./images/favPic.png")}
          style={{width:30, height:30}}
        />
        )          
      }
      else if(routeName === "RateUs"){
        return(
          <Image
          source={require("./images/ratepic.png")}
          style={{width:30, height:30}}
        />
        ) 
      }
    }
  })
})

const switchNavigator = createSwitchNavigator({
  DisplayScreen: {screen:DisplayScreen},
  TabNavigator: {screen:TabNavigator},
  TomInfo:{screen:InfoScreen1},
  DogInfo:{screen:InfoScreen2},
  MickeyInfo:{screen:InfoScreen3},
  BunnyInfo:{screen:InfoScreen4},
 
},)

const AppContainer = createAppContainer(switchNavigator);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#75DF64',
    width:'100%',
    height:'100%'
  },
});
