import React from 'react';
import { View, TextInput, Pressable, StyleSheet} from 'react-native';
import { Colores } from "../utils/Colores";
import { margenes, margenVertical } from "../utils/Dimensiones";

const SearchBarPersonalizada = () => {

    return (
      <View style={styles.contenedor} >
        <TextInput
          onChangeText={(search) => this.setState({search})} 
          style={styles.input}
        />
      </View>
    );
}
const styles = StyleSheet.create({
  contenedor: {
    borderBottomColor: Colores.texto,
    backgroundColor: Colores.background,
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    width: 300,
    borderTopColor: Colores.searchBarBorder,
    borderTopWidth: 3,
    borderBottomColor: Colores.searchBarBorder,
    borderBottomWidth: 3,
    borderRightColor: Colores.searchBarBorder,
    borderRightWidth: 3,
    borderLeftColor: Colores.searchBarBorder,
    borderLeftWidth: 3,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    color: Colores.text,
    fontSize: 30,
    paddingHorizontal: 5,
    textAlign: "left",
  },
  });

export default SearchBarPersonalizada;