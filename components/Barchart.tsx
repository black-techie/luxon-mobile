import React, { useRef } from "react"
import { TouchableOpacity, StyleSheet, Text, View } from "react-native"
import { BarChart } from "react-native-gifted-charts";
import Icon2 from 'react-native-vector-icons/AntDesign';

export default () => {
    const ref: any = useRef(null)
    const barData = [
        {
            value: 230,
            label: 'Jan',
            frontColor: '#4ABFF4',
            sideColor: '#23A7F3',
            topColor: '#92e6f6',
        },
        {
            value: 180,
            label: 'Feb',
            frontColor: '#79C3DB',
            sideColor: '#68BCD7',
            topColor: '#9FD4E5',
        },
        {
            value: 195,
            label: 'Mar',
            frontColor: '#28B2B3',
            sideColor: '#0FAAAB',
            topColor: '#66C9C9',
        },
        {
            value: 250,
            label: 'Apr',
            frontColor: '#4ADDBA',
            sideColor: '#36D9B2',
            topColor: '#7DE7CE',
        }]
    return (
        <React.Fragment>
            <View style={styles.main}>
                <View style={styles.topView}>
                    <View
                        style={{
                            height: "100%",
                            paddingTop: "8%"
                        }}>
                        <Text
                            style={styles.labelOne}
                        >Purchases</Text>
                        <Text
                            style={{ color: "white" }}
                        >Year: 2024</Text>
                    </View>
                    <View style={styles.action1}>
                        <TouchableOpacity
                            style={{
                                backgroundColor: "#3081D0",
                                height: 30,
                                width: 80,
                                borderRadius: 5
                            }}>
                            <View
                                style={{
                                    height: "100%",
                                    width: "100%",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-around"
                                }}>
                                <Text
                                    style={{ color: "white", fontWeight: "800", fontSize: 12, paddingLeft: 5 }}
                                >Quarter 1</Text>
                                <Icon2 name="down" size={15} color='white' />
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={styles.mainView}>
                    <BarChart
                        showFractionalValues
                        frontColor={'#177AD5'}
                        noOfSections={4}
                        data={barData}
                        barWidth={45}
                        sideWidth={20}
                        isThreeD
                        height={170}
                        width={270}
                        side="right"
                        yAxisColor="#3081D0"
                        xAxisColor="#3081D0"
                        yAxisTextStyle={{ color: 'lightgray' }}
                        xAxisLabelTextStyle={{ color: 'lightgray' }}
                        isAnimated
                    />
                </View>
            </View>
        </React.Fragment>
    )
}


const styles = StyleSheet.create({
    main: {
        height: "90%",
        width: "90%",
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        borderRadius: 10,
        marginTop: "4%"
    },
    topView: {
        height: "25%",
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: "5%",
        paddingRight: "5%"
    },
    mainView: {
        height: "70%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        padding: "2%"
    },
    labelOne: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold"
    },
    action1: {
    }
})






