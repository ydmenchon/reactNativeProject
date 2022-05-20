import React, { useEffect, useState } from 'react';
import {Text, StyleSheet, View, FlatList, TextInput, Image, Pressable, ActivityIndicator } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import BotonPersonalizado from '../components/BotonPersonalizado';
import {Colores} from "../utils/Colores";
import {margenVertical, width, height} from "../utils/Dimensiones";
import { personajesFiccion } from '../services/Fetchers';

info ={};

const SearchScreen = ({navigation}) => {

  const [personaje,setPersonaje]=useState("");
  const [busqueda,setBusqueda]=useState(false);
  const [cargando, setCargando] = useState(false);

  if (cargando) {
    return (
      <View
        style={{
          backgroundColor: Colores.background,
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ActivityIndicator color={Colores.idNameBack} size={"large"} />
      </View>
    );
  }

  return (
      <View style={styles.contenedor}>
          <TextInput
              value={personaje}
              onChangeText={(value)=> {setPersonaje(value);
              setBusqueda(false);}}
              style={styles.textIn}
              selectTextOnFocus
          />       
          <View style={{ marginTop: 25 }}>
            <BotonPersonalizado 
                title={"Buscar"}
                onPress={
                    async () => {
                        setCargando(true);
                        info = await personajesFiccion ({personaje});
                        setBusqueda(true);
                        setCargando(false);
                    }
                } 
                backgroundColor={Colores.idNameBack} 
                textColor={Colores.textInputText}
            />
          </View>
        
          <FlatList
              showsVerticalScrollIndicator={false}
              data={info}
              keyExtractor={(item) => item.id}
              ItemSeparatorComponent={() => (
                <View
                style={{ borderBottomWidth: 10, borderColor: Colores.background, }}
                />
              )}
              renderItem={({ item }) => {
                if (busqueda){
                return (
                  <View
                    style={{
                      width: width * 0.95,
                      marginVertical: 2,

                    }}
                  >
                    
                    <Pressable onPress={()=>{ navigation.navigate("SuperHeroInfoScreen",{item}); setPersonaje(""); setBusqueda(false);}}>
                      <View
                        style={{
                          flexDirection: "row",
                          borderWidth: 2,
                          borderRadius: 25,
                          borderColor: Colores.idNameBack,
                          backgroundColor: Colores.idNameBack,
                          height: height * 0.12,
                        }}
                      >
                      <View style={{width: width*0.70, justifyContent:"center"}}>
                          <Text style={styles.texto}>{item.id} - {item.name}</Text>
                      </View>
                        <View style={{justifyContent:"center"}}>
                          <Image style={{width: width*0.30, height: height *0.1 , resizeMode: "contain", borderRadius:150}} source={{uri: item.image.url}}/>
                        </View>
                      </View>
                    </Pressable>
                  </View>
                );
              }
            }}
          />
      
      </View>
  )
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        backgroundColor: Colores.background,
        alignItems: "center",
    },

    textIn: {
        backgroundColor: Colores.textInputBackground,
        borderTopColor: Colores.textInputBorder,
        borderTopWidth: 3,
        borderBottomColor: Colores.textInputBorder,
        borderBottomWidth: 3,
        borderLeftColor: Colores.textInputBorder,
        borderLeftWidth: 3,
        borderRightColor: Colores.textInputBorder,
        borderRightWidth: 3, 
        borderRadius: 10,
        width: width * 0.9,
        color: Colores.textInputBorder,
        fontSize: 35,
        textAlign: "center",
        marginTop: 10,
    },

    titulo: {
        color: Colores.titulo,
        fontSize: 50,
        textAlign: "center",
        fontWeight: "bold",
        marginTop: margenVertical,
    },

    texto: {
        color: Colores.textInputText,
        fontSize: 30,
        textAlign: "left",
        marginTop: 15,
        marginBottom: 15,
        marginLeft: 25,
        backgroundColor: Colores.idNameBack,
    },
    
});

export default SearchScreen
