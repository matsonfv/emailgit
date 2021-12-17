import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Image, View, FlatList, } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';


export default function Emails({ navigation }) {
    const [emails, setEmails] = useState([]);

    useEffect(function(){
        async function getData() {
            const response = await fetch('https://mobile.ect.ufrn.br:3002/emails');
            const emails = await response.json();
            setEmails(emails);
        }
        getData();
    }, [])


    function renderItem({ item }) {
        return <TouchableOpacity style={styles.emails} onPress={() => navigation.navigate('EmailScreen', { id: item.id } )} >
        <View style={styles.emailesquerda} >
            <Image style={styles.image} source={{ uri: item.picture }} />
              <View style={styles.texto}>
                <Text style={{fontWeight: "bold", fontSize: 18}} >{item.to}</Text>
                <Text>{item.tittle}</Text>
              </View>
        </View>
        <View style={styles.emaildireita}>
            <Text>{item.time}</Text>
            <FontAwesome5 style={styles.star} name={item.star ? 'star' : 'star'} size={22} color= {item.star ? "yellow" : "gray"} />
        </View>
        </TouchableOpacity>
    }



    return (
        <View style={styles.emails}>
            <FlatList 
                data={emails}
                renderItem={renderItem}
                keyExtractor={item => item.id }
                
            />
        </View>
    )
};

const styles = StyleSheet.create({
    emails: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#fff',
      height: 70,
      justifyContent: 'space-between',
      margin: 5,
    },
    image: {
      padding: 27,
      height: 50,
      width: 50,
      borderRadius: 25,
      margin: 10,
    },
    texto: {
      flexDirection: 'column',
    },
    emailesquerda: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    emaildireita: {
      flexDirection: 'column',
      height: 50,
      width: 48,
      justifyContent: 'space-between', 
    },
  });