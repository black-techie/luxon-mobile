import React from "react"
import { Text, StyleSheet, View } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome5'
import Icon1 from 'react-native-vector-icons/FontAwesome6';
import Icon2 from 'react-native-vector-icons/AntDesign';


export default () => {
    return (
        <React.Fragment>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.headerContent}>
                        <View style={styles.headerContentLeft}>
                            <View>
                                <Icon name="plug" size={35} color='#3081D0' />
                            </View>
                            <View style={{padding: "2%"}}>
                                <View><Text style={{ fontWeight: "300", color: "white", fontSize: 10 }}>This Week</Text></View>
                                <View><Text style={{ fontWeight: "bold", color: "white" }}>100<Text> Kwh</Text></Text></View>
                            </View>
                        </View>
                        <View style={styles.headerContentRight}>
                            <View style={{padding: "2%"}}>
                                <Icon1 name="bolt-lightning" size={32} color='#3081D0' />
                            </View>
                            <View>
                                <View><Text style={{ fontWeight: "300", color: "white", fontSize: 10 }}>This Month</Text></View>
                                <View><Text style={{ fontWeight: "bold", color: "white" }}>100<Text> kWh</Text></Text></View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ height: "100%", width: "100%" }}>
                    <Text
                        style={{
                            color: "white",
                            fontWeight: "600",
                            fontSize: 20,
                            paddingLeft: "6%",
                            paddingTop: "3%",
                        }}
                    >
                        Statistics
                    </Text>
                    <View style={{
                        height: "70%",
                        width: "100%",
                        flexDirection: "row",
                        justifyContent: "space-around",
                        alignItems: "center",
                    }}>
                        <View style={{
                            backgroundColor: "#3081D0",
                            width: "40%",
                            height: "85%",
                            borderRadius: 20,
                            padding: "3%",
                            justifyContent: "space-around"
                        }}>
                            <View>
                                <Text style={{ color: "white", fontWeight: "400", fontSize: 14 }}>Estimated</Text>
                                <Text style={{ color: "white", fontWeight: "400", fontSize: 14 }}>Cost(Yearly)</Text>
                            </View>
                            <Text style={{ color: "white", fontWeight: "800", fontSize: 18 }}>TSH 2,000,000</Text>
                            <View
                                style={{
                                    flexDirection: "row",
                                    width: "100%",
                                    alignItems: "center",
                                }}
                            >
                                <Icon2 name="down" size={15} color='white' /><Text style={{ color: "white", fontWeight: "600", fontSize: 12, paddingLeft: 5 }}>25.7%</Text>
                            </View>
                        </View>
                        <View style={{
                            backgroundColor: "rgba(255, 255, 255, 0.18)",
                            width: "40%",
                            height: "85%",
                            borderRadius: 20,
                            padding: "3%",
                            justifyContent: "space-around"
                        }}>
                            <View>
                                <Text style={{ color: "white", fontWeight: "400", fontSize: 14 }}>Estimated</Text>
                                <Text style={{ color: "white", fontWeight: "400", fontSize: 14 }}>Usage(Monthly)</Text>
                            </View>
                            <Text style={{ color: "white", fontWeight: "800", fontSize: 18 }}>56.8<Text> kWh</Text></Text>
                            <View
                                style={{
                                    flexDirection: "row",
                                    width: "100%",
                                    alignItems: "center",
                                }}
                            >
                                <Icon2 name="up" size={15} color='red' /><Text style={{ color: "red", fontWeight: "600", fontSize: 12, paddingLeft: 5 }}>25.7%</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "80%",
    },
    header: {
        height: "30%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    headerContent: {
        width: "90%",
        height: "90%",
        padding: "1.5%",
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        shadowColor: '#3081D0',
        elevation: 58,
    },
    headerContentLeft: {
        width: "50%",
        height: "80%",
        borderRightColor: "#3081D0",
        borderRightWidth: 2,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    headerContentRight: {
        width: "50%",
        height: "70%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    }
})