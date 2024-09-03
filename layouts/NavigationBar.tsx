import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, TouchableOpacity, Keyboard } from "react-native";
import Icon from 'react-native-vector-icons/Foundation';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import Icon3 from 'react-native-vector-icons/FontAwesome6';


interface NavigationType {
    page: string,
    navigator: any
}

const Navigation: React.FC<NavigationType> = ({ page, navigator }) => {

    const [keyboardVisible, setKeyboardVisible] = useState(false);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => setKeyboardVisible(true)
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => setKeyboardVisible(false)
        );

        // Clean up the event listeners on component unmount
        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);
    return (keyboardVisible ? <></> :
        <View style={styles.container}>
            <TouchableOpacity onPress={() => { navigator.navigate('Dashboard') }} style={page === "home" ? styles.itemActive : styles.item}><Icon name="home" size={26} color='#3081D0' /><Text style={styles.label}>Home</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => { navigator.navigate('History') }} style={page === "history" ? styles.itemActive : styles.item}><Icon1 name="insert-chart" size={25} color='#3081D0' /><Text style={styles.label}>History</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => { navigator.navigate('Transaction') }} style={page === "purchase" ? styles.itemActive : styles.item}><Icon3 name="money-bill-transfer" size={24} color='#3081D0' /><Text style={styles.label}>Purchase</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => { navigator.navigate('Settings') }} style={page === "settings" ? styles.itemActive : styles.item}><Icon2 name="gear" size={25} color='#3081D0' /><Text style={styles.label}>Profile</Text></TouchableOpacity>
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
    itemActive: {
        width: "20%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#3081D0"
    },
    label: {
        color: '#3081D0',
        fontSize: 10,
        fontWeight: "400",
        padding: "2%"
    },

})
export default Navigation;