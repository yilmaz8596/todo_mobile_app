import { styles } from "./styles";
import { TouchableOpacity, View, Text } from "react-native";
export const TabBottomMenu = ({ selectedTabName, onPress }) => {
  const styleHandler = (tabName) => {
    return {
      fontWeight: "bold",
      color: selectedTabName === tabName ? "#2F76E5" : "black",
    };
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onPress("all")}>
        <Text style={styleHandler("all")}>All</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPress("inProgress")}>
        <Text style={styleHandler("inProgress")}>In Progress</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPress("done")}>
        <Text style={styleHandler("done")}>Done</Text>
      </TouchableOpacity>
    </View>
  );
};
