import React, {useState,useEffect} from 'react'
import {SafeAreaView,Text, FlatList, View} from 'react-native'
import axios from 'axios'
import {RestaurantListItem, SearchBar} from '../components'


const RestaurantList=props=>{
 const[restaurantList, setRestaurantList]=useState([])
 const[loading,setLoading]=useState(false)
 const[orginalRestaurantList, setOrginalRestaurantList]=useState([])

 useEffect(()=>{
     fetchRestaurantList()
 },[])

 const fetchRestaurantList= async()=>{
     setLoading(false)
     let dataRestaurant = await axios.get("http://opentable.herokuapp.com/api/restaurants?city="+props.route.params.citiesName)
     setRestaurantList(dataRestaurant.data.restaurants)
     setOrginalRestaurantList(dataRestaurant.data.restaurants)
     setLoading(true)
 }
 const renderRestaurants=({item})=>{
     return(
         <RestaurantListItem propsData={item} pressResItems={RestaurantItemPress}/>
     )
 }
 function RestaurantItemPress(item){
    props.navigation.navigate("RestaurantInfo", {ResInfo:item})
 }
 function SearchRestaurant(text){
     let searchRestaurants = orginalRestaurantList.filter((item)=>{
         const itemData = item.name.toUpperCase()
         const textData = text.toUpperCase()
         return itemData.indexOf(textData) > -1
     })
     setRestaurantList(searchRestaurants)
 }
    return(
    <SafeAreaView>
        {loading ?
        <View>
            <SearchBar changeText={SearchRestaurant} searchBarPlaceholder={"Search Restaurant"}/>
            <FlatList
        keyExtractor={(item,index)=>index.toString()}
        data={restaurantList}
        renderItem={renderRestaurants}
        />
        </View>
        
        :
        <Text>Loading</Text>
        }
    </SafeAreaView>
    )
   
}
export {RestaurantList}