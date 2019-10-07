import React, {useState,useEffect} from 'react';
import {View, Text , StyleSheet} from 'react-native';
import api from '../services/api';

export default function SpotList({tech}){
    const [spots, setSpots] = useState([]);

    useEffect(() =>{
        async function loadSpots(){
            const respose = await api.get('/spots',{
                params: {tech}
            })
            setSpots(response.data);
        }
        loadSpots();
    },[]);
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Empresas que usam <Text style={style.bold}>{tech}</Text></Text>
        </ View>
    )
}
const styles = StyleSheet.create({
    container: {}
});