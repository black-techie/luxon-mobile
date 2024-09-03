import React, { useState, useEffect, useRef } from "react"
import { Text, View, StyleSheet, Image } from "react-native"
import Navigation from "../layouts/NavigationBar";
import SummaryCard from "../components/SummaryCard";
import PrepaidMeter from "../components/PrepaidMeter";
import io from 'socket.io-client';
import { paymentUrl } from "../tools/BaseUrl";

const baseUrl = paymentUrl()
const socket = io(baseUrl);


export default ({ navigation }: any) => {
    const [messages, setMessages] = useState({ "alarm": 1, "current": 0, "energy": 0, "frequency": 0, "id": "0", "power": 0, "unitsBalance": 0, "voltage": 0, "boot": false });
    function callMe(e: any) { }
    useEffect(() => {
        socket.on('mqtt_message', async (data) => {
            if ("data" in data) {
                setMessages(data.data)
            }
        });
        return () => {
            socket.off('mqtt_message');
            socket.off('mqtt_message');
        };
    }, []);

    return (
        <React.Fragment>
            <View style={styles.main}>
                <View style={styles.container}>
                    <View style={{
                        width: "100%",
                        height: "47%",
                        alignItems: "center",
                        paddingBottom: "2%"
                    }}>
                        <View style={{
                            height: "30%",
                            width: "100%",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}>
                            <Image
                                source={require("../assets/luxon.png")}
                                style={styles.luxonLogo}
                            />
                            <Text style={{ color: "white", paddingRight: "5%" }}>luxon.technologies.com</Text>
                        </View>
                        <PrepaidMeter values={messages} handler={callMe} />
                    </View>
                    <View
                        style={{
                            width: "100%",
                            height: "45%",
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                        <SummaryCard />
                    </View>
                    <View
                        style={{
                            width: "100%",
                            height: "8%",
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                        <Navigation page="home" navigator={navigation} />
                    </View>
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
    container: {
        width: "100%",
        height: "100%"
    },
    luxonLogo: {
        height: 40,
        width: 40,
        tintColor: "#3081D0",
        margin: "5%",
    }
})