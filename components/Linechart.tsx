import React, { useRef } from "react"
import { TouchableOpacity, StyleSheet, Text, View } from "react-native"
import { LineChart} from "react-native-gifted-charts";
import Icon2 from 'react-native-vector-icons/AntDesign';

export default () => {
    const ref: any = useRef(null)
    const lineData = [
        { value: 4, label: '1 Jan', dataPointText: '4' },
        { value: 14, label: '10 Jan', dataPointText: '14' },
        { value: 8, label: '20 Jan', dataPointText: '8' },
        { value: 38, label: '30 Jan', dataPointText: '38' },
        { value: 36, label: '1 Feb', dataPointText: '3' },
        { value: 28, label: '10 Feb', dataPointText: '28' },
        { value: 14, label: '20 Feb', dataPointText: '14' },
        { value: 28, label: '28 Feb', dataPointText: '28' },
        { value: 4, label: '1 Mar', dataPointText: '4' },
        { value: 14, label: '10 Mar', dataPointText: '14' },
        { value: 8, label: '20 Mar', dataPointText: '8' },
        { value: 14, label: '30 Mar', dataPointText: '14' },
        { value: 8, label: '1 Apr', dataPointText: '8' },
        { value: 38, label: '10 Apr', dataPointText: '38' },
        { value: 14, label: '20 Apr', dataPointText: '14' },
        { value: 28, label: '30 Apr', dataPointText: '28' },
        { value: 4, label: '1 May', dataPointText: '4' },
        { value: 10, label: '10 May', dataPointText: '10' },
        { value: 8, label: '20 May', dataPointText: ' 8' },
        { value: 14, label: '30 May', dataPointText: '14' },
        { value: 8, label: '1 Jun', dataPointText: '8' },
        { value: 38, label: '10 Jun', dataPointText: '38' },
        { value: 14, label: '20 Jun', dataPointText: '14' },
        { value: 28, label: '30 Jun', dataPointText: '28' },
        { value: 4, label: '1 Jul', dataPointText: '4' },
        { value: 28, label: '10 Jul', dataPointText: '28' },
        { value: 4, label: '20 Jul', dataPointText: '4' },
        { value: 14, label: '30 Jul', dataPointText: '14' },
    ];

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
                        >Records</Text>
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
                                >Finance</Text>
                                <Icon2 name="down" size={15} color='white' />
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={styles.mainView}>
                    <LineChart
                        scrollRef={ref}
                        data={lineData}
                        thickness={1}
                        dataPointsColor="#3081D0"
                        curved
                        noOfSections={4}
                        hideRules
                        initialSpacing={0}
                        rotateLabel
                        yAxisColor="#3081D0"
                        showVerticalLines
                        verticalLinesColor="#3081D0"
                        xAxisColor="#3081D0"
                        color="#3081D0"
                        height={170}
                        width={280}
                        textShiftX={-12}
                        textFontSize={13}
                        textColor1="lightgray"
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
        marginTop: "12%"
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
        justifyContent: "center"
    },
    labelOne: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold"
    },
    action1: {
    }
})