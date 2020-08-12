import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Alert, Keyboard } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
export const AddTodo = ({onSubmit}) => {
    const [value, setValue] = useState('')
    const presHandler = () => {
        if (value.trim()) {
            onSubmit(value)
            setValue('')
            Keyboard.dismiss()
        } else {
            Alert.alert("Укажите задачу")
        }
    }
    return (
        <View style={styles.block}>
            <TextInput
                style={styles.input}
                onChangeText={setValue}
                value={value}
                placeholder="Введите задачу"
                autoCorrect={false}
                autoCapitalize='none'
            />
            <AntDesign.Button onPress={presHandler} name="pluscircleo">
                Добавить
            </AntDesign.Button>
            {/* <Button
                style={styles.button}
                onPress={presHandler}
                title="  +  "/> */}
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15
    },
    input: {
        width: '69%',
        padding: 3,
        paddingLeft: 10,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#3949ab80',
        borderRadius: 2,
        fontSize: 14,
    },
    button: {
        width: '10%',
        color: '#000',
        paddingHorizontal: 50,
        backgroundColor: '#3949ab',
    }
})