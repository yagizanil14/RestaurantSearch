import React from 'react'
import {Text, View,TouchableOpacity} from 'react-native'


const RestaurantListItem = props => {
    return(
    <TouchableOpacity onPress={()=>props.pressResItems(props.propsData)}>
        <View style={{flexDirection:"row", marginVertical:10}}>
        <Text style={{marginRight:10, color:"red"}}>{props.propsData.name}</Text>
        <Text>{props.propsData.city}</Text>
        <Text>{props.propsData.address}</Text>
        <Text>{props.propsData.area}</Text>
        </View>
    </TouchableOpacity>  
    )
}
export {RestaurantListItem}