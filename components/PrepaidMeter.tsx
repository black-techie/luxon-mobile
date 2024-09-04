import React, { useState, useEffect } from "react"
import { StyleSheet, View, Text } from "react-native"





interface DisplayProp {
    values: any,
    handler: any
}

const PrepaidMeter: React.FC<DisplayProp> = ({ values, handler }) => {

    const displayCodes = ["007", "008", "001", "002", "005"]
    const displayValue = ["unitsBalance", "power", "voltage", "current", "frequency"]
    const siUnits = ["kWh", "kW", "V", "A", "Hz"]
    const [toggle, setToggle] = useState(false)
    const [code, setCode] = useState("---")
    const [value, setValue] = useState("")
    const [unit, setUnit] = useState("---")
    const [voltage, setVoltage] = useState(0)
    const [unitsBalance, setUnitsBalance] = useState(100.0)
    const [alarm, setAlarm] = useState(0)
    const [c, setC] = useState(0)


    useEffect(() => {
        const interval = setInterval(() => {
            setToggle(true);
            setTimeout(() => {
                setC(c < 4 ? c + 1 : 0)
                if (("boot" in values) == false) {
                    if ("unitsBalance" in values) {
                        setCode(displayCodes[c] + " (" + ((c == 0) ? "balance" : displayValue[c]) + ") ")
                        setValue(values[displayValue[c]])
                        setUnit(siUnits[c])
                        setVoltage(values["voltage"])
                        setUnitsBalance(parseFloat(values["unitsBalance"]))
                        setAlarm(values["alarm"])
                    }
                }
                else {
                    switch (c) {
                        case 0: setUnit("---"); break;
                        case 1: setUnit("--- "); break
                        case 2: setUnit("---  "); break
                        case 3: setUnit("---   "); break
                        case 4: setUnit("---    "); break
                    }
                }
                setToggle(false);
            }, 100);
        }, 3000);
        return () => clearInterval(interval);
    }, [c]);



    return (
        <React.Fragment>
            <View
                style={styles.container}
            >
                <View style={styles.manufacturerDetails}>
                    <Text style={{ color: "white", paddingLeft: "5%" }}>
                        <Text style={{ fontWeight: "bold" }}>Meter Name :</Text> Nyumbani Vikindu
                    </Text>
                    <Text style={{ color: "white", paddingLeft: "5%" }}>
                        <Text style={{ fontWeight: "bold" }}>Meter Type   :</Text> Single Phase
                    </Text>
                    <Text style={{ color: "white", paddingLeft: "5%" }}>
                        <Text style={{ fontWeight: "bold" }}>Meter No       :</Text> 5861700123
                    </Text>
                </View>
                <View
                    style={styles.mainFrame}
                >
                    <View style={styles.innerFrame}>
                        <View style={styles.innerFrameRow0}>
                            <Text style={{
                                fontWeight: "400", color: "black",
                                fontSize: 20
                            }}>{code}</Text>
                        </View>
                        <View style={styles.innerFrameRow1}>
                            <Text style={{
                                fontWeight: "500", color: "black",
                                fontSize: 37
                            }}>{value} {unit}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.meterDetails}>
                    <View
                        style={{
                            alignItems: "center"
                        }}
                    ><View style={toggle ? styles.circleActive : styles.circle} /><Text style={{ color: "white", fontWeight: "bold" }}>pulse</Text>
                    </View>
                    <View
                        style={{
                            alignItems: "center"
                        }}
                    ><View style={unitsBalance < 10 ? styles.circleActive : styles.circle} /><Text style={{ color: "white", fontWeight: "bold" }}>credit</Text>
                    </View>
                    <View
                        style={{
                            alignItems: "center"
                        }}
                    ><View style={alarm ? styles.circleActive : styles.circle} /><Text style={{ color: "white", fontWeight: "bold" }}>alarm</Text>
                    </View>
                    <View
                        style={{
                            alignItems: "center"
                        }}
                    ><View style={voltage > 180 ? styles.circleActive : styles.circle} /><Text style={{ color: "white", fontWeight: "bold" }}>power</Text>
                    </View>
                </View>
            </View>
        </React.Fragment>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        width: "90%",
        height: "78%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    },
    manufacturerDetails: {
        height: "30%",
        width: "100%",
        alignItems: "flex-start",
        justifyContent: "flex-end",
        paddingBottom: "5%"
    },
    mainFrame: {
        height: "50%",
        width: "92%",
        backgroundColor: "#FFE382",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "black"
    },
    meterDetails: {
        height: "20%",
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "5%"
    },
    innerFrame: {
        height: "80%",
        width: "90%",
        borderColor: "black",
        borderRadius: 5,
        borderWidth: 1,

        backgroundColor: "#FFE382"
    },
    innerFrameRow0: {
        height: "50%",
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        paddingLeft: "4%",
    },
    innerFrameRow1: {
        height: "50%",
        width: "100%",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        paddingRight: "4%",
        paddingBottom: "4%"
    },
    manufacturerView: {
        marginLeft: "4%",
        flexDirection: "row",
        backgroundColor: "white",
        alignItems: "center",
        borderRadius: 10,
        padding: 5,
        height: "70%",
        alignContent: "center",
        justifyContent: "center"
    },
    circle: {
        width: 10,
        height: 10,
        borderRadius: 100 / 2,
        backgroundColor: "#674747",
        alignItems: "center",
        justifyContent: "center"
    },
    circleActive: {
        width: 10,
        height: 10,
        borderRadius: 100 / 2,
        backgroundColor: "#F5004F",
        alignItems: "center",
        justifyContent: "center"
    },
})

export default PrepaidMeter;