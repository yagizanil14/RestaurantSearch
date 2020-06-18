import React from 'react'
import {Text, View,TouchableOpacity, Image} from 'react-native'
import styles from './Style'

const RestaurantListItem = props => {
    return(
    <TouchableOpacity onPress={()=>props.pressResItems(props.propsData)}>
        <View style={styles.restaurantListItem.cardItem}>
        <Image style={styles.restaurantListItem.itemImg} source={{uri:props.propsData.image_url}} />
        <View style={styles.restaurantListItem.itemInfo}>
        <Text style={styles.restaurantListItem.itemTitle}>{props.propsData.name}</Text>
        <View style={styles.restaurantListItem.itemLocate}> 
        <Text>{props.propsData.city} / </Text>
        <Text>{props.propsData.address}</Text>
        </View>
        </View>
        
        </View>
    </TouchableOpacity>  
    )
}
export {RestaurantListItem}