import React, { useEffect, useState } from "react";

import { StyleSheet ,View, Text, Image} from "react-native";
import { WebView } from "react-native-webview";
import { FontAwesome5 } from '@expo/vector-icons';

export default function EmailScreen({ route, item }) {
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

    return (
        
        <>
            <View data={email} style={styles.titulo}>
                    <Text style={{fontSize: 25}}>{email.tittle}</Text>
                    <FontAwesome5 name={email.star ? 'star' : 'star'} size={22} color= {email.star ? "yellow" : "gray"} />
            </View>
            <View style={styles.container}>
                <View data={email} style={styles.dados}>
                    <Image style={styles.image} source={{ uri: email.picture }} />
                    <View style={styles.texto}>
                        <Text style={{fontWeight: "bold", fontSize: 18}} >{email.to}</Text>
                        <Text>{email.from}</Text>
                    </View>
                </View>
                <View data={email} style={styles.emaildireita}>
                    <Text>{email.time}</Text>
                </View>
            </View>
        <WebView
            data={email}
            style={styles.body}
            originWhitelist={['*']}
            source={{html: `<h1 style="font-size: 50;">${email.body}</h1>`}}
            />
        </>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
    },
    container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        height: 90,
        justifyContent: 'space-between',
        margin: 2,
    },
    titulo:{
        alignItems: 'center',
        height: 50,
        backgroundColor: '#fff',
        fontSize: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    dados: {
        height: 60,
        flexDirection: 'row',
    },
    image: {
        padding: 35,
        height: 50,
        width: 50,
        borderRadius: 33,
        margin: 10,
    },
    texto: {
        padding: 10,
        height: 60,
        width: 80,
        flexDirection: 'column',
    },
    emailesquerda: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    emaildireita: {
        margin: 10,
        height: 70,
        width: 50,
    },
  });