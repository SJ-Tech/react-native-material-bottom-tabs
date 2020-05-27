import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList,Image,TouchableOpacity,Dimensions } from 'react-native';
import Constants from 'expo-constants';

const data = [
  { 
    key:'1',
    imageUrl:
      'https://images.pexels.com/photos/588561/pexels-photo-588561.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title:"LOVE + PROPGANDA",
    subTitle:"SATURDAY'S(seriesgap)",
    detail:"danies event Holi,San Franscisco CA",
    start:"Starts at $809.10"
      
  },
   { 
    key:'2',
    imageUrl:
      'https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    title:"LOVE + PROPGANDA",
    subTitle:"SATURDAY'S(seriesgap)",
    detail:"danies event Holi,San Franscisco CA",
    start:"Starts at $809.10"
      
  },
  { 
    key:'3',
    imageUrl:
      'https://images.pexels.com/photos/37351/silhouette-aerialist-female-woman.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title:"LOVE + PROPGANDA",
    subTitle:"SATURDAY'S(seriesgap)",
    detail:"danies event Holi,San Franscisco CA",
    start:"Starts at $809.10"
      
  },
  { 
    key:'4',
    imageUrl:
      'https://images.pexels.com/photos/315843/pexels-photo-315843.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title:"LOVE + PROPGANDA",
    subTitle:"SATURDAY'S(seriesgap)",
    detail:"danies event Holi,San Franscisco CA",
    start:"Starts at $809.10"
      
  },
  { 
    key:'5',
    imageUrl:
      'https://images.pexels.com/photos/906097/pexels-photo-906097.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title:"LOVE + PROPGANDA",
    subTitle:"SATURDAY'S(seriesgap)",
    detail:"danies event Holi,San Franscisco CA",
    start:"Starts at $809.10"
      
  },
];

export default class EventsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
    };
  }

  renderItem=({item})=>{
     return (
          <View style={{flexDirection:'row',height:110,width:Dimensions.get('window').width-80,}}>
          <View>
             <Image style={{height:140,width:100}} resizeMode='cover' source={{uri: item.imageUrl}}></Image>
          </View>
         
            <View style={{flex:1,padding:8,justifyContent:'center',backgroundColor:'white'}}>
                <Text style={{fontSize:16,marginTop:2}}>{item.title}</Text>
                <Text style={{fontSize:14,marginTop:2}}>{item.subTitle}</Text>
                <Text style={{fontSize:14,marginTop:2,color:'#C0C0C0'}}>{item.detail}</Text>
                <Text style={{fontSize:14,marginTop:2,color:'grey'}}>{item.start}</Text>
          </View>
          </View>
  );
  }
  render() {
    return (
  <View style={styles.container}>
    <View style={{shadowColor: 'black',shadowOpacity: 0.2,elevation: 2,shadowOffset: { width: 0, height: 1 }, }}>
          <FlatList
           horizontal={true}
        //  style={{borderRadius:10}}
           showsHorizontalScrollIndicator={false}
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

