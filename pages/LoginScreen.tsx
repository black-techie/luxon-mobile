import React from "react"
import { StyleSheet, ImageBackground, View, Text } from "react-native";
import Button from "../components/Button";
import Input from "../components/Input";




export default () => {

    return (
        <React.Fragment>
            <ImageBackground
                source={require('../assets/background_login.jpg')}
                style={styles.background}
            >
                <Text style={{
                    color: "white",
                    alignSelf: "flex-start",
                    marginLeft: 20,
                    marginBottom: 15,
                    fontSize: 34,
                    fontWeight: "800"
                }}>
                    Hi!
                </Text>
                <View style={styles.glassView}>
                    <Input placeHolder={"Phone"} secured={false} keyboard="numeric" />
                    <Input placeHolder={"Password"} secured={true} keyboard="default" />
                    <Button title={"Login"} type="default" />
                    <Text
                    style={{
                        color:"white",
                        margin:12,
                        fontWeight:"400",
                        alignSelf:"flex-start",
                        marginLeft:22
                    }}
                    >Forgot your password?</Text>
                </View>
            </ImageBackground>
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
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
        height: 280,
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
});
