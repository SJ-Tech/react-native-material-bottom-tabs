import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList,Image,Dimensions,Modal,Button,
TouchableOpacity
,TouchableHighlight,TouchableWithoutFeedback,TextInput } from 'react-native';
import Constants from 'expo-constants';
import Icon from 'react-native-vector-icons/FontAwesome';

const data = [
  { 
    key:'1',
    title:"Roger Sofa Wood One",
    subTitle:"Seater Sofa in...",
    price:"$199.50",
    quantity:"02",
    totalPrice:"$399.00"    
  },
   { 
    key:'2',
    title:"Roger Sofa Wood One",
    subTitle:"Seater Sofa in...",
    price:"$199.50",
    quantity:"02",
    totalPrice:"$399.00"   
  },
  
];

export default class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      modalVisible: false, //state of modal default false  
    };
  }

renderItem=({item})=>{
   return (
     <TouchableWithoutFeedback  onPress = {() => {this.setState({ modalVisible: true})}}>
          <View style={{backgroundColor:'white',height:80,width:'100%'}}>
          <View style={{flexDirection:'row',margin:10}}>

           <View>
              <Text style={{fontSize:16}}>{item.title}</Text>
               <Text style={{fontSize:16}}>{item.subTitle}</Text>
              <Text style={{fontSize:16}}>{item.price}</Text>
           </View>   

            <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <Text  style={{fontSize:16}}>X{'   '}{item.quantity}</Text>
                    <Text style={{color:'#228B22',fontSize:16}}>{item.totalPrice}</Text>

            </View>

          </View>
          
          </View>
     </TouchableWithoutFeedback>
                
  );
  }
  
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  render() {
     const { modalVisible } = this.state;
    return (
      <View style={styles.container}>

      <View style = {{height:60,justifyContent:'center',alignItems:'center'}}>
            <View style={{flexDirection:'row',padding:10,justifyContent:'center',alignItems:'center'}}> 
                  <Icon style = {{marginRight:10 }}name="chevron-left" size={24} color="#8fb1aa" />
                  <Text style={{flex:1,fontWeight:'300',fontSize:30,color:'grey'}}>Checkout</Text>
            </View>
        </View>
         <View style={{height: 0.3, width: '100%', backgroundColor: 'grey'}}/>

      <View style={{ padding:10 }}>
          <Text style={{fontSize:16,fontWeight:'600'}}>ORDER SUMMARY</Text>
      </View>
      
        <View>
          <FlatList
        //  style={{backgroundColor:'red'}}
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={item => item.key}
           ItemSeparatorComponent={() => <View style={{ margin: 5 }} />}
          />
        </View>
        <View style={{margin:10}}>
            <View style={{flexDirection:'row',marginTop:10}}>
            <Text style={{fontSize:18,fontWeight:'500'}}>Total Cost:</Text>
            <Text style={{fontSize:18,fontWeight:'500'}}>$1199.00</Text>
            </View>

            <View style={{flexDirection:'row',marginTop:10}}>
            <Text style={{fontSize:18,fontWeight:'500'}}>Discount Price:</Text>
            <Text style={{fontSize:18,fontWeight:'500'}}>$1199.00</Text>
            </View>

            <View style={{flexDirection:'row',marginTop:10}}>
            <Text style={{fontSize:18,fontWeight:'500'}}>Sub Total Price:</Text>
            <Text style={{color:'red',fontSize:18,fontWeight:'500'}}>$1299.00</Text>
            </View>
       </View>

    <Modal
      animationType={"slide"}
      transparent={true}
      visible={this.state.modalVisible}
      onRequestClose={() => {alert("Modal has been closed.")}}>

     <TouchableOpacity 
         activeOpacity={1} 
         onPressOut={() => {this.setModalVisible(false)}}
         style={{flex: 1,backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
         
    <View style ={{flex:1, alignItems: 'center', justifyContent: 'flex-end'}}>
          <TouchableWithoutFeedback>
          <View style={{backgroundColor: '#ffffff', width: '100%', height: 240}}>
              <Text style={{fontSize:18,padding:10,marginTop:10 }}>Credit/Debit Card Details</Text>
              <View style={{borderWidth:1,borderColor:'grey',margin:10}}>
                  <View style={{flexDirection:'row',borderBottomWidth:1 ,borderBottomColor:'grey',justifyContent:'space-between'}}>
                    <TextInput style={{fontSize:18,padding:8}} placeholder="XXXX-XXXX-XXXX-XXXX"/>
                    <Image style={{width:24,height:24,alignSelf:'center',marginRight:8}}source = {require('../assets/visa-icon-0.png')}
                              resizeMode='contain'/>
                  </View>
                  <View style={{flexDirection:'row'}}> 
                  <TextInput style={{flex:1,fontSize:18,borderRightWidth:1,borderRightColor:'grey',padding:8}}                        
                     placeholder="MM-YY"/>
                    <TextInput style={{flex:1,fontSize:18,padding:8}}  placeholder="CCV"/>
                  </View>
                </View>
                
                <Text style={{color:'purple',alignSelf:'center',fontSize:22,marginTop:5 }}>Stripe</Text>
                <Image style ={{ height:40,width:40,alignSelf:'center'}} source={require('../assets/Stripeimages.png')}/>

          </View>
          </TouchableWithoutFeedback>
          
    <TouchableHighlight
          style={{backgroundColor: '#228B22', width: '100%', height: 40,justifyContent:'center',alignItems:'center' }}
          onPress={() => {this.setModalVisible(!modalVisible)}}>
          <Text style={{color:'white',alignSelf:'center',fontSize:22,fontWeight:'600'}}>Proceed</Text>
        </TouchableHighlight>
 
    </View>
    

     </TouchableOpacity>
    </Modal> 

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  //  modalView: {
  //   margin: 20,
  //   backgroundColor: "white",
  //   borderRadius: 20,
  //   padding: 35,
  //   alignItems: "center",
  //   shadowColor: "#000",
  //   shadowOffset: {
  //     width: 0,
  //     height: 2
  //   },
  //   shadowOpacity: 0.25,
  //   shadowRadius: 3.84,
  //   elevation: 5,
  // },  
  //  modalText: {
  //   marginBottom: 15,
  //   textAlign: "center"
  // },
  // button: {
  //   backgroundColor: "#2196F3",
  //   borderRadius: 20,
  //   padding: 10,
  //   elevation: 2
  // },
  // textStyle: {
  //   color: "white",
  //   fontWeight: "bold",
  //   textAlign: "center"
  // },
});

