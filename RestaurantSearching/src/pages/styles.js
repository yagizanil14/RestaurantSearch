import {StyleSheet,Dimensions} from 'react-native'

const styles={
    restaurantInfo:StyleSheet.create({
        restaurantImg:{
            height:Dimensions.get("window").height * 0.4,
            width:Dimensions.get("window").width * 1
        },
        restaurantInfoSafe:{
            backgroundColor:"#e0e0e0",
            width:Dimensions.get("window").width*1,
            height:Dimensions.get("window").height*1
        },
        restaurantItemCard:{
            width:Dimensions.get("window").width * 0.9,
            height:Dimensions.get("window").height * 0.05,
            backgroundColor:"#1D89E4",
            borderRadius:10,
            flexDirection:"row",
            marginVertical:5,
            alignSelf:"center"
        },
        restaurantItemIcon:{
            alignSelf:"center",
            color:"white",
            marginHorizontal:10
        },
        restaurantInfoText:{
            alignSelf:"center",
            color:"white",
            fontSize:12
        },
        restaurantInfoTitle:{
            fontSize:20,
            fontWeight:"bold",
            alignSelf:"center"
        }
    })
}
export default styles