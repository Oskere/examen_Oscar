import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BotonCalc from './componentes/BotonCalc';
import { Component } from 'react';
import Resultado from './componentes/Resultado';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        texto: "",
    }
  }

  pulsado = (numeros) => {
    const num = this.state.texto + numeros;
    this.setState({ texto: num });
  };

  suma = () => {
    const texto = this.state.texto;
    var operacion = texto.match(/\d+/g);
    var total = 0;
    for (var i = 0; i < operacion.length; i++) {
        total += parseInt(operacion[i]);
    }
    this.setState({ texto: total.toString() });
}

resta = () => {
  const texto = this.state.texto;
  var conv = texto.match(/\d+/g);
  let total = parseInt(conv[0]);
  for (let i = 1; i < conv.length; i++) {
    total -= parseInt(conv[i]);
  }
  console.log(texto);
  console.log(total);
  this.setState({ texto: total.toString() });
}

multiplicar = () => {
  const texto = this.state.texto;
  var conv = texto.match(/\d+/g);
  let total = parseInt(conv[0]);
  for (let i = 1; i < conv.length; i++) {
    total *= parseInt(conv[i]);
  }
  this.setState({ texto: total.toString() });
}

dividir = () => {
  const texto = this.state.texto;
  var conv = texto.match(/\d+/g);
  let total = parseInt(conv[0]);
  for (let i = 1; i < conv.length; i++) {
    total /= parseInt(conv[i]);
  }
  this.setState({ texto: total.toString() });
}


  borrar = () => {
    const texto = this.state;
    this.setState({ texto:"" });
  }



igual = () => {
  const texto = this.state.texto;
  if (texto.includes('+')) {
      this.suma();
  } if (texto.includes('C')) {
    this.borrar();
  } if (texto.includes('-')) {
    this.resta();
  } if (texto.includes('X')) {
    this.multiplicar();
  } if (texto.includes('/')) {
    this.dividir();
  }
}

  render() {
    const {texto} = this.state;
    return (
      <View style={styles.container}>
        <Resultado texto={texto}/>
        <View style={styles.body}>
          <View style={styles.containerIzq}>
            <View style={styles.fila}>
              <BotonCalc texto={7} pulsado={this.pulsado}/>
              <BotonCalc texto={8} pulsado={this.pulsado}/>
              <BotonCalc texto={9} pulsado={this.pulsado}/>
            </View>
            <View style={styles.fila}>
              <BotonCalc texto={4} pulsado={this.pulsado}/>
              <BotonCalc texto={5} pulsado={this.pulsado}/>
              <BotonCalc texto={6} pulsado={this.pulsado}/>
            </View>
            <View style={styles.fila}>
              <BotonCalc texto={1} pulsado={this.pulsado}/>
              <BotonCalc texto={2} pulsado={this.pulsado}/>
              <BotonCalc texto={3} pulsado={this.pulsado}/>
            </View>
            <View style={styles.fila}>
              <BotonCalc texto={"+"} pulsado={this.pulsado}/>
              <BotonCalc texto={0} pulsado={this.pulsado}/>
              <BotonCalc texto={"C"} pulsado={this.borrar}/>
            </View>
          </View>
          <View style={styles.contenedor2}>
          <TouchableOpacity style={styles.boton} onPress={this.igual}>
            <Text style={styles.texto}>=</Text>
          </TouchableOpacity>
            <BotonCalc texto={"-"} pulsado={this.pulsado}/>
            <BotonCalc texto={"/"} pulsado={this.pulsado}/>
            <BotonCalc texto={"X"} pulsado={this.pulsado}/>
          </View>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  boton: {
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
    color: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fila: {
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row'
  },
  columna: {
    paddingTop: 45,
    paddingLeft: 33,
    flexDirection: 'column'
  },
  containerIzq: {
    flex: 1,
  },
  body: {
    flexDirection: 'row'
  },
  mostrar: {
    width: 400,
    borderBottomWidth: 2,
    borderBottomColor: 'black'
  },
  numeros: {
    fontSize: 48,
  }
});
