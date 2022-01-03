import React, {useEffect, useState,useRef} from 'react';
import Geolocation from '@react-native-community/geolocation';
import NewActivityLayout from './layout/NewActivityLayout';
import { ActivityIndicator } from 'react-native';

export default function NewActivity() {
  const [coord, setCoord] = useState({
    latitude:0,
    longitude:0,
  });
  const [status,setStatus]=useState(false);
  const [allData, setAllData] = useState({
    allCoords:[],
    distance:0,
    time:0
  });
  const [loading,setLoading] = useState(false);

  const timerRef = useRef(null);
  
  const getPosition=()=>{
      Geolocation.getCurrentPosition(
        (c)=>{
            setCoord({
              latitude:c.coords.latitude,
              longitude:c.coords.longitude
            })
        },
        (error)=>console.log(error),
        {
          accuracy:{
            android:"high"
          },
          enableHighAccuracy:true
        }
      )
  }

  const handleTimer=(t)=>{
    console.log(t)
    if(t%3==0){
      getPosition()
    }
  }

console.log(allData.allCoords);

  useEffect(()=>{
    Geolocation.getCurrentPosition((c)=>{
      setAllData({
        allCoords:[{
          latitude:c.coords.latitude,
          longitude:c.coords.longitude
        }]
      })
      setCoord({
        latitude:c.coords.latitude,
        longitude:c.coords.longitude
      })
      setLoading(false);
    },
    (error)=>console.log(error),
    {
      enableHighAccuracy:true,
    }
    )
  },[])

  useEffect(()=>{
    const length=allData.allCoords.length-1
    if(coord.longitude !=0 && coord.longitude!=allData.allCoords[length].longitude){
      setAllData({
        allCoords:[...allData.allCoords,coord],
        distance:allData.distance + getDistanceFromLatLonInKm(allData.allCoords[length].latitude,allData.allCoords[length].longitude,coord.latitude,coord.longitude),
      })
    }
  },[coord])

  if(loading){
    return <ActivityIndicator/>
  }

  function handleStart(){
    if(!status){
      timerRef.current.start();
      setStatus(true)
    }
  }

  function handleFinish(){

    timerRef.current.stop();
  }


 
 
  //2 konum arasındaki mesafeyi ölçer
  function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1); // deg2rad below
    var dLon = deg2rad(lon2 - lon1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
  }
  function deg2rad(deg) {
    return deg * (Math.PI / 180);
  }

  return (
    <NewActivityLayout coord={coord} handleStart={handleStart} handleFinish={handleFinish} loading={loading} timerRef={timerRef} handleTimer={handleTimer} allData={allData}/>
    
  );
}
