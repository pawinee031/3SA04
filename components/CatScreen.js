import React , {useState , useEffect}from 'react'
import {View,Text,StyleSheet,Image} from 'react-native'
const CatScreen = () => {
    const [apiData,setApiData] = useState(
        {
          url : ''
        }
    )
    useEffect(()=>{
        fetch('https://aws.random.cat/meow?ref=apilist.fun&fbclid=IwAR3QnoL7ehGX0kAhiVXqu0F8UWO23WHVyzx1nLeHBTMt-Nn9Y5qp-Z3O9Xg')
        .then(response => response.json())
            .then(json => {
                console.log(json)
                setApiData({
                       url : json.file
                })
            })
    },[])
    return(
        <View style={{alignContent : "center",justifyContent : "center",flex : 1}}>
            <Image
                style = {{ width : 256 , height : 256,borderRadius : 100 }}
                source = {{ uri : apiData.url}}
            />           
        </View>
    )
}
export default CatScreen