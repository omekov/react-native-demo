import React, { useState, useEffect, useContext } from "react";
import { View, FlatList, StyleSheet, Image, Dimensions } from "react-native";
import { AddTodo } from "../components/AddTodo";
import { Todo } from "../components/Todo";
import { THEME } from "../theme";
import { TodoContext } from "../context/todo/TodoContext";
import { ScreenContext } from "../context/screen/screenContext";

export const MainScreen = () => {
  const { addTodo, todos, removeTodo } = useContext(TodoContext);
  const { changeScreen } = useContext(ScreenContext);
  const [deviceWidth, setDeviceWidth] = useState(Dimensions.get('window').width - THEME.PADDING_HORIZONTAL * 2)
  useEffect(() => {
    const update = () => {
      const width = Dimensions.get('window').width - THEME.PADDING_HORIZONTAL * 2;
      setDeviceWidth(width)
    }
    Dimensions.addEventListener('change', update)
    return () => {
      Dimensions.removeEventListener('change', update)
    }
  })
  let content = (
    <View style={{width: deviceWidth}}>
      <FlatList
        data={todos}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <Todo todo={item} onRemove={removeTodo} onOpen={changeScreen}/>
        )}
      />
    </View>
  );
  if (todos.length === 0) {
    content = (
      <View style={styles.imgWrp}>
        <Image style={styles.image} source={require("../../assets/original.png")} resizeMode="contain"/>
        {/* <Image style={styles.image} source={{uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"}} resizeMode="contain"/> */}
      </View>
    )
  }
  return (
    <View>
      <AddTodo onSubmit={addTodo} />
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  imgWrp: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    height: 300,
  },
  image: {
    width: '100%',
    height: '100%',
  }
});
