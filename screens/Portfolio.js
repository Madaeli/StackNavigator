import React from 'react';
import { View,StyleSheet, Text, Button } from 'react-native';

const Portfolio =(props)=> {
    const handlePress= ()=>{
        props.navigation.navigate('Home')
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Portfolio</Text>
            <Button
                title="Revenir vers Home"
                onPress={handlePress}
            />  
        </View>
    );
}

export default Portfolio

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#AFAFAF',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        fontSize: 24,
        
    }
})