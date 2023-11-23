import { Component } from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";

export default class Resultado extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
  
    render() {
      const { texto } = this.props;
      return (
        <View style={styles.container}>
          <Text style={styles.texto}>{texto}</Text>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: 100,
      marginBottom: 20,
      borderBottomWidth: 2,
      borderBottomColor: 'black'
    },
    contenedor2: {
      flexDirection: 'row',
    },
    texto: {
      fontSize: 20,
      textAlign: 'center',
      color:"black",
    },
  });
  