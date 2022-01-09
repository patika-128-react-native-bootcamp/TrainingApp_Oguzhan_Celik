import {StyleSheet,Dimensions} from 'react-native';

const deviceSize=Dimensions.get('window')
export default StyleSheet.create({
    container:{
        flex:1,
        marginBottom:20,
    },
    mapView:{
        flex:4,
    },
    buttonContainer:{
        marginBottom:20,
    },
    inner_container:{
        borderWidth:1,
        borderColor:'#e0e0e0',
        padding:15
    },
    timer_container:{
        marginTop:15,
        flexDirection:'row',
        alignItems:'center'
    },
    modal_container:{
        backgroundColor:'white',
        padding:15,
        marginHorizontal:10,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        height:deviceSize.height/3,
    },
    modal:{
        justifyContent:'flex-end',
        margin:0,
    },
    distance:{
        fontSize:20,
        fontWeight:'bold',
        color:'black'
    },
    timer:{
        fontSize:20,
        fontWeight:'bold',
        color:'black'
    }
});
