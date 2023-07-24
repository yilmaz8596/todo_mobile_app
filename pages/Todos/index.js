import SafeAreaView from "react-native-safe-area-view";
import { Header } from "../../components/Header";
import { styles } from "./styles";
import { NewTodo } from "../../components/NewTodo";
import Dialog from "react-native-dialog";
import { Cart } from "../../components/Card";
import { ScrollView } from "react-native";
import { useGlobalContext } from "../../context";
import { View, Text } from "react-native";
import { TabBottomMenu } from "../../components/TabBottomMenu";
import { Alert } from "react-native";
export default function Todos() {
  const {
    isShow,
    setIsShow,
    todos,
    setTodos,
    setTodo,
    todo,
    selectedTabName,
    setSelectedTabName,
  } = useGlobalContext();

  const openModal = () => {
    setIsShow(true);
  };

  const saveTodo = (todo) => {
    setTodos((preVal) => {
      return [...preVal, { id: Math.random(), todo: todo, isComplete: false }];
    });
    setIsShow(false);
  };

  const updateTodo = (todo) => {
    const updatedTodo = {
      ...todo,
      isComplete: !todo.isComplete,
    };
    const updatedTodoList = [...todos];
    const todoIndex = todos.findIndex((todo) => todo.id === updatedTodo.id);
    updatedTodoList[todoIndex] = updatedTodo;
    setTodos(updatedTodoList);
  };

  let filteredTodos;
  if (selectedTabName === "all") {
    filteredTodos = todos;
  } else if (selectedTabName === "inProgress") {
    filteredTodos = todos.filter((todo) => !todo.isComplete);
  } else if (selectedTabName === "done") {
    filteredTodos = todos.filter((todo) => todo.isComplete);
  } else {
    filteredTodos = [];
  }

  const deleteTodo = (todo) => {
    Alert.alert("Delete todo", "Are you sure?", [
      {
        text: "Delete",
        style: "destructive",
        onPress: () => {
          filteredTodos = filteredTodos.filter((t) => t.id !== todo.id);
          setTodos(filteredTodos);
        },
      },
      { text: "Cancel", style: "cancel" },
    ]);
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Header />
        <ScrollView style={{ flex: 1 }}>
          {filteredTodos.length === 0 ? (
            <Text style={styles.noTodosText}>No todos here !</Text>
          ) : (
            filteredTodos.map((todo, index) => (
              <Cart
                todo={todo}
                text={todo.todo}
                key={index}
                isComplete={todo.isComplete}
                onPress={updateTodo}
                onLongPress={deleteTodo}
              />
            ))
          )}
        </ScrollView>
        <NewTodo onPress={openModal} />
        <Dialog.Container
          visible={isShow}
          onBackdropPress={() => setIsShow(false)}
        >
          <Dialog.Title>Add Todo</Dialog.Title>
          <Dialog.Description>Describe your todo</Dialog.Description>
          <Dialog.Input
            placeholder="Ex: Go to market"
            onChangeText={setTodo}
            value={todo}
          />
          <Dialog.Button
            label="Cancel"
            color="gray"
            onPress={() => setIsShow(false)}
          />
          <Dialog.Button label="Save" onPress={() => saveTodo(todo)} />
        </Dialog.Container>
        <View style={styles.footer}>
          <TabBottomMenu
            selectedTabName={selectedTabName}
            onPress={setSelectedTabName}
          />
        </View>
      </SafeAreaView>
    </>
  );
}
