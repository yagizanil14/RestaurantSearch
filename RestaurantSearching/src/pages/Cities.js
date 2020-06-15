import React, {useState,useEffect} from 'react'
import {SafeAreaView,Text, View, FlatList} from 'react-native'
import axios from 'axios'
import {CitiesList, SearchBar} from '../components'




const Cities=props=>{

 const[citiesList, setCitiesList]=useState([])
 const[loading,setLoading]=useState(false)
 const[orginalCitiesList,setOrginalCitiesList]=useState([])


 useEffect(()=>{
     fetchData()
 },[])


 const fetchData=async()=>{
 setLoading(false)
 let data = await axios.get("http://opentable.herokuapp.com/api/cities")
 setCitiesList(data.data.cities)
 setOrginalCitiesList(data.data.cities)
 setLoading(true)
 }

 const renderItems=({item})=>{
     return(
        <CitiesList dataItem={item} press={CitiesListPress}/>
     )
 }
 function CitiesListPress(item){
 console.log(item)
 props.navigation.navigate("RestaurantList", {citiesName:item})
 }

 function searchCities(text){
     let searchCity = orginalCitiesList.filter((item)=>{
         const ıtemData = item.toUpperCase()
         const textData = text.toUpperCase()
         return ıtemData.indexOf(textData) > -1
     })
     setCitiesList(searchCity)
 }
    return(
    <SafeAreaView>
        {loading ?
        <View>
            <SearchBar changeText={searchCities} searchBarPlaceholder={"Search Cities"}/>
        <FlatList 
        keyExtractor={(item,index)=>index.toString()}
        data={citiesList}
        renderItem={renderItems}
        />
        </View>
         :
        <Text>Loading</Text> 
        }
    </SafeAreaView>
    )
    
}
export {Cities}