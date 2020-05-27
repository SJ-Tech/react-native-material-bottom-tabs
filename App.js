import React, { Component } from 'react';
import { Text, View, StyleSheet,ScrollView,Image } from 'react-native';
import Constants from 'expo-constants';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'
import {createAppContainer} from 'react-navigation';
import Deals from './screens/Deals';
import Events from './screens/Events';
import Explore from './screens/Explore';
import More from './screens/More';
import Products from './screens/Products';

export default class App extends Component{
  render(){
    const AppContainer = createAppContainer(AppTabNavigator)  
    return(
      
        <View style= {styles.container}>
         <AppContainer/>
        </View>
      
    );
  }
}

const AppTabNavigator = createMaterialBottomTabNavigator({
 
   Events: {
    screen: Events,
    navigationOptions: {
      tabBarLabel: 'Events',
      tabBarIcon: ({ tintColor }) => (
        <Image 
        source={require('./assets/icons8-champagne-64.png')}

        style={{height:25,width:25}} />
      )
    }
  },
   Deals: {
    screen: Deals,
    navigationOptions: {
      tabBarLabel: 'Deals',
      tabBarIcon: ({ tintColor }) => (
        <Image 
        source={require('./assets/icons8-percentage-64.png')}
        style={{height:25,width:25}} />
      )
    }
  },
   Explore: {
    screen: Explore,
    navigationOptions: {
      tabBarLabel: 'Explore',
      tabBarIcon: ({ tintColor }) => (
        <Image 
        source={require('./assets/icons8-i-will-go-50.png')}
        style={{height:25,width:25}} />
      )
    }
  },

  
  Products: {
    screen: Products,
    navigationOptions: {
      tabBarLabel: 'Products',
      tabBarIcon: ({ tintColor }) => (
         <Image 
        source={require('./assets/icons8-shopping-bag-50.png')}
        style={{height:25,width:25}} />
      )
    }
  },
 
  More: {
    screen: More,
    navigationOptions: {
      tabBarLabel: 'More',
      tabBarIcon: ({ tintColor }) => (
        <Image 
        source={require('./assets/icons8-more-50.png')}
        style={{height:25,width:25}} />
      )
    }
  }
}, {
      activeColor: 'black',
      inactiveColor: '#C0C0C0',
      barStyle: {
        backgroundColor: 'white',
        indicatorColor:'green',
        borderTopWidth: 0,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 5
      },
      
    
  })

  const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});

