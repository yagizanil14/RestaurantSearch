import {StyleSheet,Dimensions} from 'react-native'

const styles={
    cities:StyleSheet.create({
        container:{
            flex:1,
            flexDirection:"column",
            justifyContent:"center",
            alignSelf:"center",
            height:Dimensions.get("window").height / 18,
            width:Dimensions.get("window").width * 0.5,
            backgroundColor:"#bdbdbd",
            borderRadius:10,
            marginVertical:4
        },
        text:{
            alignSelf:"center",
            fontSize:15,
            fontWeight:"200"
        }
    }),
    searchBar:StyleSheet.create({
        barContainer:{
            alignSelf:"center",
            height:Dimensions.get("window").height / 15,
            width:Dimensions.get("window").width * 0.9,
            backgroundColor:"#e0e0e0",
            borderColor:"#bdbdbd",
            borderWidth:1,
            borderRadius:15,
            marginVertical:15
        }
    })
}
export default styles