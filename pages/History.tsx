import React, { useRef } from "react"
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Navigation from "../layouts/NavigationBar";
import LineChart from "../components/Linechart";
import { LinearGradient, Stop } from 'react-native-svg';

import { PieChart, PopulationPyramid } from "react-native-gifted-charts";
import Barchart from "../components/Barchart";




export default ({navigation}: any) => {

    return (
        <React.Fragment>
            <View style={styles.main}>
                <View
                    style={styles.container}
                >
                    <View
                        style={styles.row0}
                    >
                        <LineChart />
                    </View>
                    <View
                        style={styles.row1}
                    >
                        <Barchart />
                    </View>
                    <View
                        style={styles.row2}
                    >
                        <Navigation page="history" navigator={navigation} />
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
        height: "100%",
        width: "100%",
    },
    row0: {
        height: "46%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    row1: {
        height: "46%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    row2: {
        height: "8%",
        width: "100%"
    }
});