import React from "react"
import { Text, StyleSheet, TouchableOpacity } from "react-native"


interface ButtonProps {
    title: String,
    type: string
}


const Button: React.FC<ButtonProps> = ({ title, type }) => {

    if(type === "outline"){
        return (
            <React.Fragment>
                <TouchableOpacity style={styles.buttonOutline}>
                    <Text style={styles.buttonTextOutline}>{title}</Text>
                </TouchableOpacity>
            </React.Fragment>
        )
    }
    return (
        <React.Fragment>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>{title}</Text> 
            </TouchableOpacity>
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    fontColor: {
        color: "white",
    },
    button: {
        backgroundColor: '#5356FF',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        width: "90%",
        height: "20%",
        margin: 5

    },
    buttonText: {
        alignSelf: "center",
        color: '#EEF5FF',
        fontSize: 16,
    },
    buttonOutline: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor:"#5356FF",
        width: "90%",
        height: "20%",

    },
    buttonTextOutline: {
        alignSelf: "center",
        color: '#5356FF',
        fontSize: 16,
        fontWeight: "bold"
    },
});


export default Button;

// button primary: #5356FF, Main primary 3081D0
// white: #EEF5FF
// black: #021526