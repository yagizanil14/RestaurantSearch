import React, { useState, useEffect } from 'react'
import { SafeAreaView, Text, View, Image } from 'react-native'
import styles from './styles'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const RestaurantInfo = props => {
    const propsItem = props.route.params.ResInfo

    return (
        <SafeAreaView style={styles.restaurantInfo.restaurantInfoSafe}>
            <View>
                <Image style={styles.restaurantInfo.restaurantImg} source={{ uri: propsItem.image_url }} />
                <Text style={styles.restaurantInfo.restaurantInfoTitle}>{propsItem.name}</Text>
                <View style={styles.restaurantInfo.restaurantItemCard}>
                    <FontAwesome5 style={styles.restaurantInfo.restaurantItemIcon} name={'map-marker-alt'} size={20}/>
                    <Text style={styles.restaurantInfo.restaurantInfoText}>{propsItem.city} / </Text>
                    <Text style={styles.restaurantInfo.restaurantInfoText}>{propsItem.area}</Text>
                </View>
                <View style={styles.restaurantInfo.restaurantItemCard}>
                <FontAwesome5 style={styles.restaurantInfo.restaurantItemIcon} name={'home'} size={20}/>
                    <Text style={styles.restaurantInfo.restaurantInfoText}>{propsItem.address}</Text>
                </View>
                <View style={styles.restaurantInfo.restaurantItemCard}>
                <FontAwesome5 style={styles.restaurantInfo.restaurantItemIcon} name={'phone'} size={20}/>
                    <Text style={styles.restaurantInfo.restaurantInfoText}>{propsItem.phone}</Text>
                </View>
            </View>
        </SafeAreaView>
    )

}
export { RestaurantInfo }