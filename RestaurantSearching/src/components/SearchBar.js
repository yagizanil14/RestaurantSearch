import React from 'react'
import {TextInput, View} from 'react-native'
import styles from './Style'

const SearchBar = props =>{
    return(
        <View style={styles.searchBar.barContainer}>
            <TextInput onChangeText={props.changeText} placeholder={props.searchBarPlaceholder}/>
        </View>
    )
}
export {SearchBar}