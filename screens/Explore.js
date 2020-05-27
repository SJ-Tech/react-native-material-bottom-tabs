import React, { Component } from 'react';
import { View, StyleSheet,TextInput,Text ,ScrollView,FlatList,TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';
import Icon from 'react-native-vector-icons/Ionicons';
import EventsList from '../components/EventsList';
import NearbyList from '../components/NearbyList';
import LocalDealsList from '../components/LocalDealsList';
import LatestProductsList from '../components/LatestProductsList';
import TopGridList from '../components/TopGridList';

export default class Explore extends Component {
  render() {
    return (
      <View style={styles.container}>
      
        <View style = {{height:60,justifyContent:'center',alignItems:'center'}}>
            <View style={{flexDirection:'row',padding:10,justifyContent:'center',alignItems:'center'}}> 
                  <Text style={{flex:1,fontWeight:'300',fontSize:30,color:'grey'}}>Explorer</Text>
                <Icon name = "ios-search" size={30}/>
            </View>
        </View>

        <ScrollView>
        <View style={{flex:1}}>
            <TopGridList/>
        </View>

       <View style={{flex:1,marginTop:15,marginHorizontal:10}}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{fontSize:16,color:'grey'}}>Events</Text>
            <TouchableOpacity>
            <Text style={{fontSize:12,color:'#228B22'}}>VIEW ALL</Text>
            </TouchableOpacity>
            </View>

            <View style={{marginTop:10}}>
                <EventsList/>
            </View>
        </View>

        <View style={{flex:1,marginTop:15,marginHorizontal:10}}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{fontSize:16,color:'grey'}}>Nearby Stores</Text>
             <TouchableOpacity>
            <Text style={{fontSize:12,color:'#228B22'}}>VIEW ALL</Text>
            </TouchableOpacity>
            </View>

            <View style={{marginTop:10,}}>
                <NearbyList/>
            </View>
        </View>

        <View style={{flex:1,marginTop:15,marginHorizontal:10}}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{fontSize:16,color:'grey'}}>Local Deals</Text>
            <TouchableOpacity>
            <Text style={{fontSize:12,color:'#228B22'}}>VIEW ALL</Text>
            </TouchableOpacity>
            </View>

            <View style={{marginTop:10,}}>
                <LocalDealsList/>
            </View>
        </View>

        <View style={{flex:1,marginTop:15,marginHorizontal:10}}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{fontSize:16,color:'grey'}}>Latest Products</Text>
             <TouchableOpacity>
            <Text style={{fontSize:12,color:'#228B22'}}>VIEW ALL</Text>
            </TouchableOpacity>
            </View>

            <View style={{marginTop:10,}}>
                <LatestProductsList/>
            </View>
        </View>

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   //  paddingTop: Constants.statusBarHeight,
  },
});
