import React, { useRef } from "react"
import { TouchableOpacity, StyleSheet, Text, View } from "react-native"
import { LineChart } from "react-native-gifted-charts";
import Icon2 from 'react-native-vector-icons/AntDesign';

export default () => {
    const ref: any = useRef(null)
    const lineData = [
        { value: 4, label: '1 Jan', dataPointText: '4' },
        { value: 14, label: '10 Jan', dataPointText: '14' },
        { value: 8, label: '20 Jan', dataPointText: '8' },
        { value: 38, label: '30 Jan', dataPointText: '38' },
        { value: 36, label: '1 Feb', dataPointText: '36' },
        { value: 28, label: '10 Feb', dataPointText: '28' },
        { value: 14, label: '20 Feb', dataPointText: '14' },
        { value: 28, label: '28 Feb', dataPointText: '28' },
        { value: 98, label: '1 Mar', dataPointText: '4' },
        { value: 85, label: '10 Mar', dataPointText: '14' },
        { value: 8, label: '20 Mar', dataPointText: '8' },
        { value: 14, label: '30 Mar', dataPointText: '14' },
        { value: 8, label: '1 Apr', dataPointText: '8' },
        { value: 38, label: '10 Apr', dataPointText: '38' },
        { value: 14, label: '20 Apr', dataPointText: '14' },
        { value: 28, label: '30 Apr', dataPointText: '28' },
        { value: 4, label: '1 May', dataPointText: '4' },
        { value: 10, label: '10 May', dataPointText: '10' },
        { value: 8, label: '20 May', dataPointText: '8' },
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
    
    const lineData1 = [
        { value: 12, label: '1 Jan', dataPointText: '7' },
        { value: 25, label: '10 Jan', dataPointText: '25' },
        { value: 12, label: '20 Jan', dataPointText: '12' },
        { value: 55, label: '30 Jan', dataPointText: '55' },
        { value: 18, label: '1 Feb', dataPointText: '18' },
        { value: 60, label: '10 Feb', dataPointText: '60' },
        { value: 22, label: '20 Feb', dataPointText: '22' },
        { value: 70, label: '28 Feb', dataPointText: '70' },
        { value: 15, label: '1 Mar', dataPointText: '15' },
        { value: 30, label: '10 Mar', dataPointText: '30' },
        { value: 14, label: '20 Mar', dataPointText: '14' },
        { value: 65, label: '30 Mar', dataPointText: '65' },
        { value: 11, label: '1 Apr', dataPointText: '11' },
        { value: 78, label: '10 Apr', dataPointText: '78' },
        { value: 25, label: '20 Apr', dataPointText: '25' },
        { value: 85, label: '30 Apr', dataPointText: '85' },
        { value: 13, label: '1 May', dataPointText: '13' },
        { value: 45, label: '10 May', dataPointText: '45' },
        { value: 20, label: '20 May', dataPointText: '20' },
        { value: 90, label: '30 May', dataPointText: '90' },
        { value: 18, label: '1 Jun', dataPointText: '18' },
        { value: 80, label: '10 Jun', dataPointText: '80' },
        { value: 23, label: '20 Jun', dataPointText: '23' },
        { value: 95, label: '30 Jun', dataPointText: '95' },
        { value: 21, label: '1 Jul', dataPointText: '21' },
        { value: 52, label: '10 Jul', dataPointText: '52' },
        { value: 26, label: '20 Jul', dataPointText: '26' },
        { value: 75, label: '30 Jul', dataPointText: '75' },
    ];
    
    const lineData2 = [
        { value: 38, label: '1 Jan', dataPointText: '9' },
        { value: 30, label: '10 Jan', dataPointText: '30' },
        { value: 16, label: '20 Jan', dataPointText: '16' },
        { value: 62, label: '30 Jan', dataPointText: '62' },
        { value: 22, label: '1 Feb', dataPointText: '22' },
        { value: 68, label: '10 Feb', dataPointText: '68' },
        { value: 28, label: '20 Feb', dataPointText: '28' },
        { value: 75, label: '28 Feb', dataPointText: '75' },
        { value: 20, label: '1 Mar', dataPointText: '20' },
        { value: 35, label: '10 Mar', dataPointText: '35' },
        { value: 18, label: '20 Mar', dataPointText: '18' },
        { value: 80, label: '30 Mar', dataPointText: '80' },
        { value: 25, label: '1 Apr', dataPointText: '25' },
        { value: 85, label: '10 Apr', dataPointText: '85' },
        { value: 30, label: '20 Apr', dataPointText: '30' },
        { value: 88, label: '30 Apr', dataPointText: '88' },
        { value: 26, label: '1 May', dataPointText: '26' },
        { value: 50, label: '10 May', dataPointText: '50' },
        { value: 32, label: '20 May', dataPointText: '32' },
        { value: 85, label: '30 May', dataPointText: '85' },
        { value: 22, label: '1 Jun', dataPointText: '22' },
        { value: 90, label: '10 Jun', dataPointText: '90' },
        { value: 28, label: '20 Jun', dataPointText: '28' },
        { value: 87, label: '30 Jun', dataPointText: '87' },
        { value: 30, label: '1 Jul', dataPointText: '30' },
        { value: 55, label: '10 Jul', dataPointText: '55' },
        { value: 35, label: '20 Jul', dataPointText: '35' },
        { value: 78, label: '30 Jul', dataPointText: '78' },
    ];
    
    const lineData3 = [
        { value: 20, label: '1 Jan', dataPointText: '12' },
        { value: 28, label: '10 Jan', dataPointText: '28' },
        { value: 19, label: '20 Jan', dataPointText: '19' },
        { value: 70, label: '30 Jan', dataPointText: '70' },
        { value: 27, label: '1 Feb', dataPointText: '27' },
        { value: 62, label: '10 Feb', dataPointText: '62' },
        { value: 34, label: '20 Feb', dataPointText: '34' },
        { value: 80, label: '28 Feb', dataPointText: '80' },
        { value: 30, label: '1 Mar', dataPointText: '30' },
        { value: 40, label: '10 Mar', dataPointText: '40' },
        { value: 22, label: '20 Mar', dataPointText: '22' },
        { value: 85, label: '30 Mar', dataPointText: '85' },
        { value: 28, label: '1 Apr', dataPointText: '28' },
        { value: 75, label: '10 Apr', dataPointText: '75' },
        { value: 36, label: '20 Apr', dataPointText: '36' },
        { value: 90, label: '30 Apr', dataPointText: '90' },
        { value: 33, label: '1 May', dataPointText: '33' },
        { value: 58, label: '10 May', dataPointText: '58' },
        { value: 40, label: '20 May', dataPointText: '40' },
        { value: 88, label: '30 May', dataPointText: '88' },
        { value: 36, label: '1 Jun', dataPointText: '36' },
        { value: 80, label: '10 Jun', dataPointText: '80' },
        { value: 42, label: '20 Jun', dataPointText: '42' },
        { value: 85, label: '30 Jun', dataPointText: '85' },
        { value: 40, label: '1 Jul', dataPointText: '40' },
        { value: 60, label: '10 Jul', dataPointText: '60' },
        { value: 44, label: '20 Jul', dataPointText: '44' },
        { value: 75, label: '30 Jul', dataPointText: '75' },
    ];

    const lineData4 = [
        { value: 30, label: '1 Jan', dataPointText: '5' },
        { value: 28, label: '10 Jan', dataPointText: '22' },
        { value: 24, label: '20 Jan', dataPointText: '6' },
        { value: 38, label: '30 Jan', dataPointText: '68' },
        { value: 39, label: '1 Feb', dataPointText: '30' },
        { value: 41, label: '10 Feb', dataPointText: '40' },
        { value: 60, label: '20 Feb', dataPointText: '20' },
        { value: 37, label: '28 Feb', dataPointText: '77' },
        { value: 55, label: '1 Mar', dataPointText: '15' },
        { value: 23, label: '10 Mar', dataPointText: '33' },
        { value: 48, label: '20 Mar', dataPointText: '8' },
        { value: 72, label: '30 Mar', dataPointText: '82' },
        { value: 41, label: '1 Apr', dataPointText: '11' },
        { value: 37, label: '10 Apr', dataPointText: '87' },
        { value: 55, label: '20 Apr', dataPointText: '25' },
        { value: 75, label: '30 Apr', dataPointText: '85' },
        { value: 46, label: '1 May', dataPointText: '16' },
        { value: 15, label: '10 May', dataPointText: '55' },
        { value: 10, label: '20 May', dataPointText: '30' },
        { value: 60, label: '30 May', dataPointText: '90' },
        { value: 37, label: '1 Jun', dataPointText: '17' },
        { value: 25, label: '10 Jun', dataPointText: '95' },
        { value: 82, label: '20 Jun', dataPointText: '22' },
        { value: 90, label: '30 Jun', dataPointText: '92' },
        { value: 24, label: '1 Jul', dataPointText: '14' },
        { value: 78, label: '10 Jul', dataPointText: '58' },
        { value: 18, label: '20 Jul', dataPointText: '28' },
        { value: 35, label: '30 Jul', dataPointText: '75' },
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
                                >All</Text>
                                <Icon2 name="down" size={15} color='white' />
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={styles.mainView}>
                    <LineChart
                        scrollRef={ref}
                        data={lineData}
                        data2={lineData1}
                        data3={lineData2}
                        data4={lineData3}
                        data5={lineData4}
                        color="#3081D0"
                        color2="orange"
                        color3="red"
                        color4="green"
                        color5="black"
                        thickness={1}
                        dataPointsColor="#3081D0"
                        dataPointsColor2="orange"
                        dataPointsColor3="red"
                        dataPointsColor4="green"
                        dataPointsColor5="black"
                        curved
                        noOfSections={4}
                        hideRules
                        initialSpacing={0}
                        rotateLabel
                        yAxisColor="#3081D0"
                        showVerticalLines
                        verticalLinesColor="#3081D0"
                        xAxisColor="#3081D0"
                        height={170}
                        width={280}
                        textShiftX={-12}
                        textFontSize={13}
                        // textColor1="#3081D0"
                        // textColor2="orange"
                        // textColor3="red"
                        // textColor4="green"
                        // textColor5="black"
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
        justifyContent: "center",
    },
    labelOne: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold"
    },
    action1: {
    }
})