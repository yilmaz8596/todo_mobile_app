import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  card: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    backgroundColor: "white",
    height: 115,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 13,
    justifyContent: "center",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    textDecorationLine: "line-through",
  },
  image: {
    height: 25,
    width: 25,
  },
});
