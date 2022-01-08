import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native'

const {width} = Dimensions.get('window')

export default StyleSheet.create({
    
    image:{
        left:80,
        width:200,
        height:200,
        resizeMode:'contain',
        tintColor:'#e57373',
    }
});
