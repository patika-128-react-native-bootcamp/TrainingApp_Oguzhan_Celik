import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: '#0277bd',
    marginBottom: 15,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.51,
    shadowRadius: 50,
    elevation: 10,
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    color: 'white',
    justifyContent: 'space-between',
  },
  inner_container: {},
  time: {
    color: 'white',
    fontSize: 12,
    marginTop: 10,
  },
  distance: {
    color: 'white',
    fontSize: 12,
  },
  date: {
    color: 'white',
    fontSize: 12,
    fontStyle: 'italic',
  },
});
