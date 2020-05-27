import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList,Image,TouchableOpacity,Dimensions,ImageBackground } from 'react-native';
import Constants from 'expo-constants';

const data = [
  { 
    key:'1',
    imageUrl:
      'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title:"Roger Solid Wood One Seater Sofa...",
    price:"$199.50",
    cutPrice:"5500",
    saveOff:"Save $301(68% off)"
  },
   { 
    key:'2',
    imageUrl:
      'https://images.pexels.com/photos/133919/pexels-photo-133919.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title:"Roger Solid Wood One Seater Sofa...",
    price:"$199.50",
    cutPrice:"5500",
    saveOff:"Save $301(68% off)"
      
  },
  { 
    key:'3',
    imageUrl:
      'https://images.pexels.com/photos/276534/pexels-photo-276534.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title:"Roger Solid Wood One Seater Sofa...",
    price:"$199.50",
    cutPrice:"5500",
    saveOff:"Save $301(68% off)"
  },
  { 
    key:'4',
    imageUrl:
      'https://images.pexels.com/photos/271676/pexels-photo-271676.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title:"Roger Solid Wood One Seater Sofa...",
    price:"$199.50",
    cutPrice:"5500",
    saveOff:"Save $301(68% off)"
  },
  { 
    key:'5',
    imageUrl:
      'https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
   title:"Roger Solid Wood One Seater Sofa...",
    price:"$199.50",
    cutPrice:"5500",
    saveOff:"Save $301(68% off)"
  },
];

export default class LatestProductsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
    };
  }

renderItem=({item})=>{
   return (
          <View style={{backgroundColor:'white',width:Dimensions.get('window').width-70}}>
          <View style={{flex:1}}> 
             <ImageBackground  style={{height:150,width:Dimensions.get('window').width-70, }} resizeMode='cover' source={{uri: item.imageUrl}}>
<View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'flex-end' }}>
      <View style={{padding:5}}>
         <Text style={{color:'white',backgroundColor:'rgba(0,0,0,0.6)',alignSelf:'flex-start'}}>
                By Woodsworth</Text>
      </View>

   </View>     
             </ImageBackground>
          </View>
         
            <View style={{padding:5,justifyContent:'center'}}>
                      <Text style={{fontSize:16,}}>{item.title}</Text>
                      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                          <View style={{flexDirection:'row'}}>
                          <Text style={{fontSize:14,color:'#228B22',marginTop:2 }}>{item.price}{'  '}</Text>
                         <Text style={{fontSize:14,color:'#C0C0C0',marginTop:2,textDecorationLine:'line-through' }}>{item.cutPrice}</Text>
                          </View>
                          <Text style={{fontSize:14,color:'#C0C0C0',marginTop:2 }}>{item.saveOff}</Text>
                      </View>   
           </View>
          
          </View>
  );
  }
  render() {
    return (
 <View style={styles.container}>
    <View style={{shadowColor: 'black',shadowOpacity: 0.2,elevation: 2,shadowOffset: { width: 0, height: 1 } }}>
          <FlatList
           horizontal={true}
           showsHorizontalScrollIndicator={false}
           style={{borderRadius:10}}
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

