import React from "react"
import { Text, View, StyleSheet } from "react-native"

export default () => {



    return (
        <React.Fragment>
            <View style={styles.container}>
                <Text style={{ color: "white" }}> hello bro </Text>
            </View>

        </React.Fragment>
    )
}


const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%"
    }
})