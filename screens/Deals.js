import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList,Image,TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';
  
 const data =  [
      { 
        title: 'Dining',
        imageUrl:'https://img.icons8.com/ios/2x/restaurant-table.png',
        color:'#fc6c85'
      },
      {
         item1:
              { 
                title: 'Entertainment',
                imageUrl:'https://img.icons8.com/wired/2x/controller.png',
                 color:'#00a877'
              }, 
         item2: 
             { 
                title: 'Technology',
                imageUrl:'https://img.icons8.com/dotty/2x/delete-widget.png',
                color:'#ff8243'
             } 
      },
      {
         item1:
              { 
                title: 'Medical',
                imageUrl:'https://img.icons8.com/android/2x/stethoscope.png',
                color:'#00bfff'
              }, 
         item2: 
             { 
                title: 'Dentist',
                imageUrl:'https://img.icons8.com/wired/2x/dental-braces.png',
                color:'#fcc200'
             } 
      },
      {
         item1:
              { 
                title: 'Hopital',
                imageUrl:'https://img.icons8.com/windows/2x/hospital.png',
                color:'#98817b'
                
              }
      },
];
  

export default class Deals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
    };
  }
  
 renderItem = ({item, index}) => {
    if (index === 0) {
      return (
        <View style={[styles.bigSquare,{backgroundColor:item.color}]}>
                <Image 
                source={{uri: item.imageUrl}}
                style={{height:50,width:50, alignItems: "center",resizeMode:'contain',
               justifyContent: "center",textAlign: "bottom",tintColor:'white'}}>
              </Image>
         <Text style={{color:'white'}}>{item.title}</Text>
        </View>
      )
    } else {
      return (
        <View>
          <View style={[styles.smallSquare,{backgroundColor: item.item1.color}]}>
              <Image 
                source={{uri: item.item1.imageUrl}}
                style={{height:25,width:25, alignItems: "center",
               justifyContent: "center",textAlign: "bottom",tintColor:'white'}}>
              </Image>
            <Text style={{color:'white'}}>{item.item1.title}</Text>
          </View>
          {item.item2 ? <View style={[styles.smallSquare, {backgroundColor: item.item2.color}]}>
            <Image 
                source={{uri: item.item2.imageUrl}}
                style={{height:25,width:25, alignItems: "center",
               justifyContent: "center",textAlign: "bottom",tintColor:'white'}}>
              </Image>
            <Text style={{color:'white'}}>{item.item2.title}</Text>
          </View>: null}
        </View>
      )
    }
  }

 keyExtractor = (item, index) => `${index}`;
 
  render() {
    return (
      <View style={styles.container}>
        <View>
         <FlatList
          horizontal={true}
           showsHorizontalScrollIndicator={false}
           style={{backgroundColor:'black'}}
           keyExtractor={this.keyExtractor}
            data={this.state.data}
            renderItem={this.renderItem}
          //  ItemSeparatorComponent={() => <View style={{ margin: 10 }} />}
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
   bigSquare: {
    height: 160, 
    width: 140, 
    margin: 10, 
  //  backgroundColor: 'pink', 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  smallSquare: {
    height: 70, 
    width: 130, 
    margin: 10, 
  //  backgroundColor: 'green', 
    justifyContent: 'center', 
    alignItems: 'center'
  }
});

