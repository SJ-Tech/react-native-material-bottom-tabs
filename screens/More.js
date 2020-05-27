import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  SafeAreaView,
  ScrollView,
  SectionList,
  Dimensions,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const DATA = [
  {
    title: 'ACCOUNT',
    data: [{name: 'Update Profile'}, {name: 'Inbox',value:'07'}]
  }, 
  {
   title: 'MY FAVOURITE',
   data: [{name: 'Business',value:'15'},{name: 'Deals',value:'07'},
          {name: 'Events',value:'05'},{name: 'Product',value:'05'}]
  },
  {
    title: 'ACCOUNT',
    data: [{name: 'Shopping Cart',value:'05'}]
  },
];


export default class More extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: DATA,
    };
  }

renderItem = ({item}) =>{
  return(
    <View style={[styles.item,{flexDirection:'row',justifyContent:'space-between',alignItems:'center'} ]}>
     <Text style={{color:'grey'}}>{item.name}</Text>
     <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
        <Text style={{marginRight:8,color:'grey'}}>{item.value}</Text>
        <Icon name="chevron-right" size={14} color="grey" />
     </View>
    </View>
    
  );
};

//renderItem = ({item, section}) => (<Text>{`${item.name}(${section.key})`}</Text>)

renderSectionHeader = ({section}) =>{
  return(
        <Text style={styles.sectionHeader}>{section.title}</Text>
  );
}

  itemSeparator = () => {
    return (
      <View style={{height: 0.5, width: '100%', backgroundColor: 'grey'}}/>
    );
  };
  render() {
    return (
      <View style={styles.container}>
      <View style={{backgroundColor:'#228B22'}}>
          <Icon style={{alignSelf:'flex-end',marginTop:10,marginRight:10}} name="chevron-right" size={25} color="white" />
          <View style={{justifyContent:'center',alignItems:'center'}}>
              <Image source= {require('../assets/icons8-percentage-64.png')}
                style={{height:150,width:150,backgroundColor:'white',borderRadius:70}}/>
                <Text style={{color:'white',fontSize:20,fontWeight:'400',marginTop:10}}>John Cornor</Text>
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                    <Icon style ={{marginRight:10}} name="map-marker" size={30} color="white" />
                    <Text style={{color:'white',fontSize:18,}}>51 Street,Hampshire,USA</Text>
                </View>
          </View>
          
                 
      </View>
       <SectionList
            style={{flex:1}}
            sections={this.state.data}
            renderItem={this.renderItem}  
            renderSectionHeader={this.renderSectionHeader} 
            keyExtractor={(item, index) => index}
            ItemSeparatorComponent={this.itemSeparator}
            ListFooterComponent={this.itemSeparator}
       />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionHeader: {  
        paddingTop: 20,  
        paddingLeft: 10,  
        paddingRight: 10,  
        paddingBottom: 5,  
        fontSize: 16,  
        fontWeight: '500',  
        color: "black",  
     //   backgroundColor: '#ececc6',  
         backgroundColor: '#f3f3d9',  
    },  
    item: {  
        padding: 10,  
        fontSize: 14,  
        height: 44,  
    }  
});
