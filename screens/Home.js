import React from 'react';
import { Pressable } from 'react-native';
import { View,StyleSheet, Text } from 'react-native';

const Home=({ navigation})=> {

    const handlePress= ()=>{
        navigation.navigate('Portfolio')
    }

    return (
       

        <View style={styles.container}>
           
            <Text style={styles.text}>Home</Text>
            <Pressable
                style={({pressed})=> ({ backgroundColor: pressed ? 'lightseagreen' : 'rebeccapurple' })}
                onPress={handlePress}
            >
                <Text style={styles.btn}>Vers Portfolio</Text>
            </Pressable>
        </View>
    );
}

export default Home

const styles = StyleSheet.create({
    container:{ 
        backgroundColor: '#AFAFAF',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        fontSize: 24,

    },
    btn:{
        padding: 12,
        color: "white",
    }
})