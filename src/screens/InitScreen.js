import React from "react";
import { Text, SafeAreaView, StyleSheet, View, Image } from "react-native";
import BotonPersonalizado from "../components/BotonPersonalizado";
import { Colores } from "../utils/Colores";
import { margenVertical} from "../utils/Dimensiones";
import image from "../../assets/superheroes.png"
import { width } from "../utils/Dimensiones";

const InitScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.contenedor}>
            <Text style={styles.titulo}> ¡Bienvenido! </Text>
            <Text style={styles.texto}>Con esta APP podrá buscar información sobre sus personajes de ficción favoritos.</Text>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={image}/>
            </View>
            <BotonPersonalizado
                title={"Comenzar!"}
                backgroundColor={Colores.botonInit}
                textColor={Colores.textInputText}
                onPress={()=> navigation.navigate("SearchScreen")} 
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        backgroundColor: Colores.background,
        alignItems: "center",
        justifyContent: "space-between",
    },

    titulo: {
        color: Colores.titulo,
        fontSize: 50,
        textAlign: "center",
        fontWeight: "bold",
        marginTop: margenVertical,
    },

    texto: {
        color: Colores.texto,
        fontSize: 20,
        textAlign: "center",
        marginTop: margenVertical,
    },
   
    imageContainer: {
        justifyContent: "center",
        alignItems: "center",
    },

    image: {
        width: width,
        height: 200,
        resizeMode: "cover",
    },
})

export default InitScreen