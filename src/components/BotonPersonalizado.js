import React from 'react';
import { Text, Pressable, StyleSheet} from 'react-native';
import { Colores } from "../utils/Colores";
import { width, margenes, margenVertical } from "../utils/Dimensiones";

const BotonPersonalizado = ({title, onPress, backgroundColor, textColor}) => {
    return (
        <Pressable onPress={onPress} style={[styles.button,{backgroundColor: backgroundColor}]}>
            <Text style={[styles.text, {color: textColor}]}>{title}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
      opacity: 0.7,
      width: 200,
      height: 70,
      padding: margenes,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: margenVertical,
      borderRadius: 25,
    },
    text: {
      color: Colores.text,
      fontSize: 25,
      fontWeight: "bold",
    },
    
  });

export default BotonPersonalizado;