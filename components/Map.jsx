import React from "react";
import { Text, StyleSheet } from "react-native";
import MapView,{Polyline} from 'react-native-maps'
const Map = () => {
    // let points=[];
    // for(let i=0;i<20;i++){
    //     points.push({
    //         latitude:31.5497,
    //         longitude: 74.3436
    //     });
    // }
    return <MapView style={styles.map}
    region={{
        latitude: 31.515424215570537,
        longitude: 74.30828335635269,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
    }}
       
        >
            {/* <Polyline coordinates={points} /> */}
            </MapView>
            
           
            
    
};
const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
        height: 350,
        bottom: 220

    }
});
export default Map;