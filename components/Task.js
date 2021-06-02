import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Task = ({text}) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{text}</Text>
            </View>
            <View style={styles.circular}>

            </View>
            
        </View>
    )
}

export default Task

const styles = StyleSheet.create({

    item:{

        backgroundColor:"white",
        padding: 15,
        borderRadius:15,
        flexDirection:"row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom:15,
    },
    itemLeft:{
        flexDirection:"row",
        alignItems: "center",
        flexWrap:"wrap"
    },
    square:{    
        width: 24,
        height:24,
        backgroundColor:"#55BCF6",
        borderRadius:5,
        marginRight:10,
        opacity: 0.4,

    },
    itemText:{
        maxWidth:"80%",
        fontSize:18
    },
    circular:{
        width:12,
        height:12,
        borderColor:"#ff0000",
        opacity:0.5,
        borderWidth:2,
        borderRadius:5
    }, 

})
