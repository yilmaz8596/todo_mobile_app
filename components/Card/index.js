import { Card, Text } from "react-native-paper";
import {
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
  Image,
} from "react-native";
import { styles } from "./styles";

export const Cart = ({ text, onPress, isComplete, todo, onLongPress }) => {
  const TouchableComponent =
    Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;

  return (
    <TouchableComponent
      onLongPress={() => onLongPress(todo)}
      onPress={() => onPress(todo)}
      elevation="5"
      style={styles.container}
    >
      <Card style={styles.card}>
        <Card.Content style={styles.content}>
          <Text variant="titleLarge" style={isComplete ? styles.text : ""}>
            {text}
          </Text>
          {isComplete && (
            <Image
              source={require("../../assets/check.png")}
              style={styles.image}
            />
          )}
        </Card.Content>
      </Card>
    </TouchableComponent>
  );
};
