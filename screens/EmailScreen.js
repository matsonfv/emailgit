import React, { useEffect, useState } from "react";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, WebView ,View, Text, FlatList } from "react-native";

export default function EmailScreen({ route }) {
    const { id } = route.params;

    const [email, setEmail] = useState([]);

    useEffect(function(){
        async function getData() {
            const response = await fetch('https://mobile.ect.ufrn.br:3002/emails/' + id);
            const email = await response.json();
            setEmail(email);
        }
        getData();
    }, []);

    function renderItem({ item }) {
        return <View>
            <Text>{item.from}</Text>
        </View>
    }


    return (
        <View style={styles.container}>
            <StatusBar style="auto"/>
            <View style={styles.body} >
                <FlatList 
                    data={email}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titulo:{
        flex: 1,
    },
    
  });