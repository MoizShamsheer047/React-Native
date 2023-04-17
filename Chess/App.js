import React from "react";
import { View, StyleSheet } from "react-native";

const Board = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.black} />
        <View style={styles.white} />
        <View style={styles.black} />
        <View style={styles.white} />
        <View style={styles.black} />
        <View style={styles.white} />
        <View style={styles.black} />
        <View style={styles.white} />
      </View>

      <View style={styles.row}>
        <View style={styles.white} />
        <View style={styles.black} />
        <View style={styles.white} />
        <View style={styles.black} />
        <View style={styles.white} />
        <View style={styles.black} />
        <View style={styles.white} />
        <View style={styles.black} />
      </View>

      <View style={styles.row}>
        <View style={styles.black} />
        <View style={styles.white} />
        <View style={styles.black} />
        <View style={styles.white} />
        <View style={styles.black} />
        <View style={styles.white} />
        <View style={styles.black} />
        <View style={styles.white} />
      </View>

      <View style={styles.row}>
        <View style={styles.white} />
        <View style={styles.black} />
        <View style={styles.white} />
        <View style={styles.black} />
        <View style={styles.white} />
        <View style={styles.black} />
        <View style={styles.white} />
        <View style={styles.black} />
      </View>

      <View style={styles.row}>
        <View style={styles.black} />
        <View style={styles.white} />
        <View style={styles.black} />
        <View style={styles.white} />
        <View style={styles.black} />
        <View style={styles.white} />
        <View style={styles.black} />
        <View style={styles.white} />
      </View>

      <View style={styles.row}>
        <View style={styles.white} />
        <View style={styles.black} />
        <View style={styles.white} />
        <View style={styles.black} />
        <View style={styles.white} />
        <View style={styles.black} />
        <View style={styles.white} />
        <View style={styles.black} />
      </View>

      <View style={styles.row}>
        <View style={styles.black} />
        <View style={styles.white} />
        <View style={styles.black} />
        <View style={styles.white} />
        <View style={styles.black} />
        <View style={styles.white} />
        <View style={styles.black} />
        <View style={styles.white} />
      </View>

      <View style={styles.row}>
        <View style={styles.white} />
        <View style={styles.black} />
        <View style={styles.white} />
        <View style={styles.black} />
        <View style={styles.white} />
        <View style={styles.black} />
        <View style={styles.white} />
        <View style={styles.black} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderWidth:2,
    borderColor:"black"
  },
  row: {
    flexDirection: "row",
  },
  black: {
    width: 40,
    height: 40,
    backgroundColor: "black",
  },
  white: {
    width: 40,
    height: 40,
    backgroundColor: "beige",
  },
});

export default Board;
