import { View, Text, Image } from "react-native";
import check from "../../assets/check.png";
import { styles } from "./styles";
export const Header = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.text}>2D</Text>
        <Image source={check} style={styles.img} />
        <Text style={styles.text}>list</Text>
      </View>
      <Text style={styles.subText}>You probably have something to do</Text>
    </View>
  );
};
