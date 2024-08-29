import React from "react"
import { Text, View, StyleSheet, Image } from "react-native"
import Navigation from "../layouts/NavigationBar";
import SummaryCard from "../layouts/SummaryCard";

export default () => {



    return (
        <React.Fragment>
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
                        justifyContent: "space-around",
                        alignItems: "flex-end"
                    }}>
                        <Image
                            source={require("../assets/luxon.png")}
                            style={styles.luxonLogo}
                        />
                    </View>
                    <View
                        style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.15)',
                            width: "90%",
                            height: "78%",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 10
                        }}
                    >
                        <View
                            style={{
                                height: "50%",
                                width: "92%",
                                backgroundColor: "#F1EEDC",
                                borderRadius: 5,
                                justifyContent: "flex-end",
                                alignItems: "flex-end",
                                padding:10
                            }}
                        >
                            <Text style={{
                                fontWeight: "400",
                                fontSize: 35,
                            }}>
                                2.58 kWh
                            </Text>
                        </View>
                    </View>
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
                    <Navigation />
                </View>
            </View>


        </React.Fragment>
    )
}


const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%"
    },
    luxonLogo: {
        height: 50,
        width: 40,
        tintColor: "#3081D0", //FFB200
        marginRight: "4%",
        marginTop: "4%"
    }
})