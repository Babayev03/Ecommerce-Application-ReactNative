import { View, Text, Image } from 'react-native'
import React from 'react'

const CartScreen = () => {
  return (
    <View style={{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"}}>
      <Image source={require('../images/27282.jpg')} style={{width:350,height:300}}/>
    </View>
  )
}

export default CartScreen