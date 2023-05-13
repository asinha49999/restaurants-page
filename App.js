import React, { Component } from "react";
import { View, StyleSheet, Image, ScrollView } from "react-native";

const appIcon = require("./assets/MenuMateLogo.png");

const RoundedBox = ({ color, borderRadius, width, height }) => {
  const styles = StyleSheet.create({
    box: {
      backgroundColor: color,
      borderRadius: borderRadius,
      width: width,
      height: height,
      justifyContent: "center",
      alignItems: "center",
    },
  });

  return <View style={styles.box} />;
};

export default class Login extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          <View style={styles.upperContainer}>
            <Image source={appIcon} style={styles.appIcon} />
          </View>
          <View style={styles.line} />
          <View style={styles.boxContainer}>
            <View style={styles.grayBox}>
              <RoundedBox color="white" borderRadius={10} width="95%" height="90%" style={styles.whiteBox} />
            </View>
            <View style={styles.grayBox}>
              <RoundedBox color="white" borderRadius={10} width="95%" height="90%" style={styles.whiteBox} />
            </View>
            <View style={styles.grayBox}>
              <RoundedBox color="white" borderRadius={10} width="95%" height="90%" style={styles.whiteBox} />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#ABC19B",
  },
  upperContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "0%",
    paddingBottom: 0,
  },
  appIcon: {
    width: "35%",
    height: "35%",
    resizeMode: "contain",
    marginTop: "-20%",
  },
  line: {
    height: 2,
    backgroundColor: "white",
    width: "100%",
    marginTop: "-25%",
    marginBottom: "5%",
  },
  boxContainer: {
    flex: 1,
    alignItems: "center",
    paddingBottom: 40, 
  },
  grayBox: {
    backgroundColor: "#bbbabc",
    borderRadius: "10%",
    width: "100%",
    height: "35%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20, 
  },
  whiteBox: {
    marginLeft: "10%",
    width: "90%",
    height: "90%",
  },
});
