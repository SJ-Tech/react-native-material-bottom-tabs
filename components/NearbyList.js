import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList,Image,TouchableOpacity,Dimensions } from 'react-native';
import Constants from 'expo-constants';

const data = [
  { 
    key:'1',
    imageUrl:
      'https://images.pexels.com/photos/903171/pexels-photo-903171.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title:"Gold's gym",
    subTitle:"Fitness & Training",
    distance:"3.7Km",
    offers:"3 OFFERS"
      
  },
   { 
    key:'2',
    imageUrl:
      'https://images.pexels.com/photos/3775589/pexels-photo-3775589.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
     title:"Gold's gym",
    subTitle:"Fitness & Training",
    distance:"3.7Km",
    offers:"3 OFFERS"
      
  },
  { 
    key:'3',
    imageUrl:
      'https://images.pexels.com/photos/917660/pexels-photo-917660.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
     title:"Gold's gym",
    subTitle:"Fitness & Training",
    distance:"3.7Km",
    offers:"3 OFFERS"
      
  },
  { 
    key:'4',
    imageUrl:
      'https://images.pexels.com/photos/863977/pexels-photo-863977.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
     title:"Gold's gym",
    subTitle:"Fitness & Training",
    distance:"3.7Km",
    offers:"3 OFFERS"
      
  },
  { 
    key:'5',
    imageUrl:
      'https://images.pexels.com/photos/866019/pexels-photo-866019.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title:"Gold's gym",
    subTitle:"Fitness & Training",
    distance:"3.7Km",
    offers:"3 OFFERS"
      
  },
];

export default class NearbyList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
    };
  }

renderItem=({item})=>{
   return (
          <View style={{backgroundColor:'white',height:150,width:Dimensions.get('window').width-120,}}>
          <View style={{flex:1}}> 
             <Image style={{height:100,width:Dimensions.get('window').width-120}} resizeMode='cover' source={{uri: item.imageUrl}}></Image>
          </View>
         
            <View style={{padding:5,justifyContent:'center'}}>
                <View style={{flexDirection:'row',justifyContent:"space-between"}}>
                      <Text style={{fontSize:16,}}>{item.title}</Text>
                      <Text style={{fontSize:14,color:'#C0C0C0'}}>{item.distance}</Text>

                </View>
            
              <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{fontSize:14,color:'grey'}}>{item.subTitle}</Text>
                    <Text style={{fontSize:14,color:'#228B22'}}>{item.offers}</Text>
              </View>
          </View>
          
          </View>
  );
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{shadowColor: 'black',shadowOpacity: 0.2,elevation: 2,shadowOffset: { width: 0, height: 1 },}}>
          <FlatList
           horizontal={true}
           showsHorizontalScrollIndicator={false}
         //  style={{borderRadius:10}}
           keyExtractor={item => item.key}
            data={this.state.data}
            renderItem={this.renderItem}
    
           ItemSeparatorComponent={() => <View style={{ margin: 8 }} />}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
});

