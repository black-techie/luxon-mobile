import React from "react"
import { StyleSheet, ImageBackground, View, Text, TouchableOpacity, Alert } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import Button from "../components/Button";
import Input from "../components/Input";


import { useState } from "react";



export default ({ navigation }: any) => {

    const [phone, setPhone] = useState("")
    const [meter, setMeter] = useState("")
    const [units, setUnits] = useState("")

    const submitTransaction = async () => {
        if (phone == "" || meter == "" || units == "") {
            Alert.alert("Please fill in the form")
            return;
        }
        fetch("http://192.168.1.100:3400/api/transaction/create/",
            {
                method: "POST", headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ phone, meter, units })

            }
        )
            .then(res => res.json())
            .then((res) => {
                console.log("Response from server", res)
            })

    }
    return (
        <React.Fragment>
            <View style={styles.main}>
                <TouchableOpacity style={{
                    alignSelf: "flex-start",
                    borderColor: "#3081D0",
                    flexDirection: "row",
                    alignItems: "center",
                    borderRadius: 10,
                    marginLeft: 10,
                    marginBottom: 5
                }}
                    onPress={() => { navigation.navigate('Dashboard') }}
                >
                    <Icon name="arrow-back-sharp" size={15} color='#3081D0' /><Text style={{ color: "#3081D0", padding: 10 }}>Quit Create Transaction</Text></TouchableOpacity>
                <View style={styles.glassView}>
                    <Input placeHolder={"Phone Number"} secured={false} keyboard="numeric" value={phone} setValue={setPhone} />
                    <Input placeHolder={"Meter Number"} secured={false} keyboard="numeric" value={meter} setValue={setMeter} />
                    <Input placeHolder={"Units"} secured={false} keyboard="numeric" value={units} setValue={setUnits} />
                    <Button title={"CREATE"} type="default" handleButton={submitTransaction} />
                </View>
            </View>
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "#20262E",
        alignItems: "center",
        justifyContent: "center"
    },
    fontColor: {
        color: "white",
    },
    background: {
        flex: 1,
        resizeMode: 'stretch',
        justifyContent: 'center',
        alignItems: "center",
        width: "100%",
        height: "100%"

    },
    content: {
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        color: 'white',
    },
    glassView: {
        width: "96%",
        height: 300,
        padding: "5%",
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
});
