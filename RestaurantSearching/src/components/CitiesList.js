import React from 'react'
import {Text, View,TouchableOpacity} from 'react-native'
import styles from './Style'

const CitiesList = props => {
    return(
    <TouchableOpacity style={styles.cities.container} onPress={()=>props.press(props.dataItem)}>
        <View>
        <Text style={styles.cities.text}>{props.dataItem}</Text>
        </View>
    </TouchableOpacity>  
    )
}
export {CitiesList}