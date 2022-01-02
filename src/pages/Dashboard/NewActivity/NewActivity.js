import React, {useEffect, useState,useRef} from 'react';
import Geolocation from '@react-native-community/geolocation';
import NewActivityLayout from './layout/NewActivityLayout';
import MapView, {PROVIDER_GOOGLE, Marker, LatLng} from 'react-native-maps';


export default function NewActivity() {
  const [coord, setCoord] = useState([]);
  const [loading,setLoading] = useState(false);
  const timerRef = useRef(null);
  
  // function Start(){
  //     Geolocation.getCurrentPosition(
  //       (position) => {
  //         console.log(position)
  //         setCoord([...coord,{latitude: position.coords.latitude, longitude: position.coords.longitude}]);
  //       },
  //       (error) => console.log(error),
  //       {
  //         enableHighAccuracy: true,
  //       },
  //     );
  // }
  


  function handleLocation(c){
      setCoord([...coord,{
        latitude:c.coords.latitude,
        longitude:c.coords.longitude
      }])
  }
  
  const getPosition=()=>{
      Geolocation.getCurrentPosition(
        (c)=>{handleLocation(c);},
        (error)=>console.log(error),
        {
          enableHighAccuracy:true
        }
      )
  }

  const handleTimer=(t)=>{
    console.log(t)
    if(t%2==0){
      getPosition()
    }
  }



  useEffect(()=>{
    Geolocation.getCurrentPosition((c)=>{handleLocation(c);setLoading(true)}, 
    (error)=>console.log(error),{
      enableHighAccuracy:true
    }
    );
  },[])

  

  function handleStart(){
    timerRef.current.start();
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
    <NewActivityLayout coord={coord} handleStart={handleStart} handleFinish={handleFinish} loading={loading} timerRef={timerRef} handleTimer={handleTimer}/>
    
  );
}
