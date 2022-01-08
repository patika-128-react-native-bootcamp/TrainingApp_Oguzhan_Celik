import React from 'react'
import {View,Button,Text} from 'react-native'
import LastActivityLayout from './layout/LastActivityLayout';
import database from '@react-native-firebase/database';

export default function LastActivity() {

    //Sadece 1 kere getirme işlemi için
    function checkDB(){
        const reference = database().ref('books/');
        reference.once('value').then(snapshot=>{
            const response1=snapshot.val();
            console.log(response1)
        })
    }

    //Realtime getirmek için
    function listenDB(){
        const reference = database().ref('books/');
        reference.on('value',snapshot=>{
            const response2=snapshot.val();
            console.log(response2)
        })
    }

    //Eklencek değerleri öncekini silip üstüne ekler
    function setDB(){
        const reference = database().ref('car/rentable');
        reference.set({
            brand:'audi',
            model:'A8',
            price:127,
        })
    }

    function pushDB(){
        const reference = database().ref('car/rentable');
        reference.push({
            brand:'Passat',
            model:'81',
            price:650,
        })
    }


    return (
        <View>
            <Text>Asd</Text>
            <LastActivityLayout/>
            <Button title='check DB' onPress={checkDB}/>
            <Button title='Listen DB' onPress={listenDB}/>
            <Button title='Push DB' onPress={pushDB}/>
        </View>
    )
}
