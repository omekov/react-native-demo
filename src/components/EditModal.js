import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Modal, Alert } from "react-native";
import { THEME } from "../theme";
import { AppButton } from "./ui/AppButton";

export const EditModal = ({ visible, onCancel, value, onSave }) => {
    const [title, setTitle] = useState(value)
    const saveHandler = () => {
        if (title.trim().length < 3) {
            Alert.alert(
                'Ошибка', 
                `Минимальная длина 3 символа. ${title.trim().length}`
                )
        } else {
            onSave(title)
        }
    }
  const cancelHHandler = () => {
    setTitle(value)
    onCancel()
  }
  return (
    <Modal visible={visible} animationType="slide" transparent={false}>
      <View style={styles.wrap}>
        <TextInput
          style={styles.input}
          placeholder="Ввидите задачу"
          autoCapitalize="none"
          autoCorrect={false}
          maxLength={60}
          value={title}
          onChangeText={setTitle}
        />
        <View style={styles.buttons}>
          <AppButton onPress={cancelHHandler} color={THEME.DANGER_COLOR}>
            Отменить
          </AppButton>
          <AppButton onPress={saveHandler}>
            Сохранить
          </AppButton>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    padding: 10,
    borderBottomColor: THEME.MAIN_COLOR,
    borderWidth: 2,
    width: "80%",
  },
  buttons: {
    width: "100%",
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    color: "#fff",
  },
});
