import React, { useEffect } from "react"
import { StyleSheet, View, Keyboard, Alert, ActivityIndicator, Text } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import Button from "../components/Button";
import Input from "../components/Input";


import { useState } from "react";
import { paymentUrl } from "../tools/BaseUrl";
import Navigation from "../layouts/NavigationBar";
import { Picker } from '@react-native-picker/picker';

const baseUrl = paymentUrl()

export default ({ navigation }: any) => {

    const [phone, setPhone] = useState("")
    const [meter, setMeter] = useState("")
    const [units, setUnits] = useState("")
    const [submit, setSubmit] = useState(false)
    const [selectedValue, setSelectedValue] = useState("java");





    const submitTransaction = async () => {
        setSubmit(true)
        if (phone == "" || meter == "" || units == "") {
            Alert.alert("Please fill in the form")
            setSubmit(false)
            return;
        }
        fetch(baseUrl + "/api/transaction/create/",
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
                setSubmit(false)
                if (res.message) {
                    navigation.navigate('Dashboard');
                }
            })


    }
    return (
        <React.Fragment>
            <View style={styles.container}>
                <View style={styles.main}>
                    <View style={styles.glassView}>
                        <Input placeHolder={"     Phone - 0789105606"} secured={false} keyboard="numeric" value={phone} setValue={setPhone} />
                        <View style={styles.picker}>
                            <Picker
                                selectedValue={meter}
                                onValueChange={(itemValue) => setMeter(itemValue)}
                            >
                                <Picker.Item style={{ fontSize: 14.5, color: "black" }} label="Choose Meter" value="" />
                                <Picker.Item style={{ fontSize: 14.5, color: "grey" }} label="Nyumbani Vikindu" value="12345678901" />
                            </Picker>
                        </View>
                        <Input placeHolder={"     Units in Kwh"} secured={false} keyboard="numeric" value={units} setValue={setUnits} />
                        {
                            (submit == true) ? <ActivityIndicator size="large" color="#0000ff" /> : <Button title={"CREATE"} type="default" handleButton={submitTransaction} />
                        }
                    </View>
                </View>
                <View
                    style={{
                        height: "10%",
                        width: "100%"
                    }}
                >
                    <Navigation page="purchase" navigator={navigation} />
                </View>
            </View>
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#20262E",
        alignItems: "center",
        justifyContent: "center"
    },
    main: {
        height: "90%",
        width: "100%",
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
    label: {
        fontSize: 18,
        marginBottom: 10,
    },
    picker: {
        height: "21%",
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        margin: 8,
        backgroundColor: 'white',
        width: "90%",
    },
    selectedValue: {
        marginTop: 20,
        fontSize: 18,
    },
});
