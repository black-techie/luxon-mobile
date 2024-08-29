import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Foundation';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import Icon3 from 'react-native-vector-icons/FontAwesome6';



const Navigation = () => {

    return (
        <View style={styles.container}>
            <TouchableOpacity style={{ ...styles.item, borderBottomWidth: 1, borderBottomColor: "#3081D0" }}><Icon name="home" size={26} color='#3081D0' /><Text style={styles.label}>Home</Text></TouchableOpacity>
            <TouchableOpacity style={styles.item}><Icon1 name="insert-chart" size={25} color='#3081D0' /><Text style={styles.label}>History</Text></TouchableOpacity>
            <TouchableOpacity style={styles.item}><Icon3 name="money-bill-transfer" size={24} color='#3081D0' /><Text style={styles.label}>Purchase</Text></TouchableOpacity>
            <TouchableOpacity style={styles.item}><Icon2 name="gear" size={25} color='#3081D0' /><Text style={styles.label}>Profile</Text></TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    item: {
        width: "20%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",

    },
    label: {
        color: '#3081D0',
        fontSize: 10,
        fontWeight: "400",
        padding: "2%"
    }
})
export default Navigation;