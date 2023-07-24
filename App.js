import { StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Todos from "./pages/Todos";
import { AppContext } from "./context";
export default function App() {
  return (
    <AppContext>
      <SafeAreaProvider style={styles.container}>
        <Todos />
      </SafeAreaProvider>
    </AppContext>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
