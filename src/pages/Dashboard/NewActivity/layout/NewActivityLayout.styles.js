import {StyleSheet, Dimensions} from 'react-native';


export default StyleSheet.create({
  container: {
    flex: 1,
  },
  mapView: {
    flex: 4,
  },
  buttonContainer: {},
  inner_container: {
    borderWidth:1,
    padding:15,
    flexDirection:'row',
    justifyContent:'space-between'
  },

  timer_container:{
    flexDirection:'row'
  },
  distance: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  timer: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  temp:{
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  weather_image:{
    width:30,
    height:30
  },
  main:{
    marginRight:15,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  image_container:{
    flexDirection:'row'
  },
});
