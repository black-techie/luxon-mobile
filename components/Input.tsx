import React from "react"
import { Text, StyleSheet, TextInput } from "react-native"
import { useState } from "react"


interface ButtonProps {
    placeHolder: string,
    secured: boolean
    keyboard: any,
    value: string,
    setValue: any
}


const Input: React.FC<ButtonProps> = ({placeHolder, secured, keyboard, value, setValue}) => {

    return (
        <React.Fragment>
            <TextInput
                style={styles.input}
                placeholder={placeHolder}
                value={value}
                onChangeText={setValue}
                secureTextEntry={secured} 
                keyboardType={keyboard} 
                autoCapitalize="none"
                returnKeyType="done"
            />
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    label: {
        fontSize: 16,
        marginBottom: 8,
        color: 'white',
        alignSelf:"flex-start",
        marginLeft: 22

    },
    input: {
        height: "21%",
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        margin: 8,
        backgroundColor: 'white',
        width: "90%"
    },
});


export default Input;
