import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";
export const NewTodo = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text style={styles.txt}>+ New Todo</Text>
    </TouchableOpacity>
  );
};
