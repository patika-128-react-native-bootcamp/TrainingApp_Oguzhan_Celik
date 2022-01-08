import {StyleSheet} from 'react-native';

const base_style = StyleSheet.create({
  Button: {
    alignItems: 'center',
    borderRadius: 5,
  },
  text:{
    fontWeight:'bold',
  }
});
export default {
  default:StyleSheet.create({
    ...base_style,
  Button: {
    ...base_style.Button,
    marginLeft: 60,
    marginRight: 60,
    marginTop: 10,
    padding: 13,
    backgroundColor: '#e57373',
    borderRadius: 5,
  },
  text: {
    ...base_style.text,
    color: 'white',
    fontSize: 15,
  },
}),
outline:StyleSheet.create({
  ...base_style,
  Button: {
    ...base_style.Button,
    marginLeft: 60,
    marginRight: 60,
    marginTop: 10,
    padding: 13,
    borderColor: '#e57373',
    borderWidth:1,
  },
  text: {
    ...base_style.text,
    color: '#e57373',
    fontSize: 15,
  },
}),
}
