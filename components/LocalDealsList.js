import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList,Image,TouchableOpacity,Dimensions,ImageBackground } from 'react-native';
import Constants from 'expo-constants';

const data = [
  { 
    key:'1',
    imageUrl:
      'https://images.pexels.com/photos/917732/pexels-photo-917732.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title:"15% OFF on Cardio & Yoga",
    subTitle:"on Yearly Subscription",
      
  },
   { 
    key:'2',
    imageUrl:
      'https://images.pexels.com/photos/1882007/pexels-photo-1882007.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
     title:"15% OFF on Cardio & Yoga",
    subTitle:"on Yearly Subscription",
      
  },
  { 
    key:'3',
    imageUrl:
      'https://images.pexels.com/photos/1882005/pexels-photo-1882005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
     title:"15% OFF on Cardio & Yoga",
    subTitle:"on Yearly Subscription",
      
  },
  { 
    key:'4',
    imageUrl:
      'https://images.pexels.com/photos/1375883/pexels-photo-1375883.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
     title:"15% OFF on Cardio & Yoga",
    subTitle:"on Yearly Subscription",
      
  },
  { 
    key:'5',
    imageUrl:
      'https://images.pexels.com/photos/866021/pexels-photo-866021.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title:"15% OFF on Cardio & Yoga",
    subTitle:"on Yearly Subscription",
      
  },
];

export default class LocalDealsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
    };
  }

renderItem=({item})=>{
   return (
          <View  style={{backgroundColor:'white',width:Dimensions.get('window').width-170}}>
          <View style={{flex:1}}> 
             <ImageBackground  style={{height:130,width:Dimensions.get('window').width-170,}} resizeMode='cover' source={{uri: item.imageUrl}}>
<View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'flex-end' }}>
      <View style={{flexDirection:'row',justifyContent:"space-between", backgroundColor:'rgba(0,0,0,0.6)',height:40,width:"100%",alignItems:'center',padding:5 }}>
         <Text style={{color:'white',fontSize:12}}>Gold's gym</Text>
          <Text style={{color:'white',fontSize:12}}>Exp.15 Jun 2020</Text>
      </View>
    
   </View>     
             </ImageBackground>
          </View>
         
            <View style={{padding:5,justifyContent:'center'}}>
                      <Text style={{fontSize:14,}}>{item.title}</Text>
                      <Text style={{fontSize:14,color:'#C0C0C0',marginTop:2 }}>{item.subTitle}</Text>
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

