import React, { Component } from "react";
import { TouchableOpacity, Text } from "react-native";
import { StyleSheet } from "react-native";

export default class BotonCalc extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { texto } = this.props;
    return (
      <TouchableOpacity style={styles.container} onPress={() => this.props.pulsar(texto)} >
        <Text style={styles.texto}>{texto}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5C5C5C',
    width: 100,
    height: 100,
    justifyContent: 'center',
    borderColor: "black",
    borderWidth: 2,
  },
  texto: {
    textAlign: "center",
    fontSize: 20,
    color: "white",
  },
});
