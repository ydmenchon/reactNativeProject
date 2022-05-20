import React, { useEffect, useState } from 'react';
import {Text, Image, StyleSheet, View, ScrollView } from 'react-native';
import {Colores} from "../utils/Colores";
import { width, height} from "../utils/Dimensiones";

const SuperHeroInfoScreen = ({navigation, route}) => {

    return (
        <ScrollView style={styles.cont}>
            <View>
                <Text style={styles.nombre}>{route.params.item.name}</Text>
            </View>
            <View style={styles.contImagenPowerStats}>
                <View style={styles.contImagen}>
                <Image style={styles.imagen} source={{uri: (route.params.item.image.url)}}/>
                </View>
                    <View style={styles.contPowerstats}>
                    <View style={styles.contCadaPowerStats}> 
                        <View style={styles.contTextoPowerStats}> 
                            <Text style={styles.textoPowerStats}>Inteligencia</Text>
                        </View>
                        {route.params.item.powerstats.intelligence > 0 && route.params.item.powerstats.intelligence < 100 &&
                            <View style={styles.contCadaPowerStats}>
                                <View style={{borderWidth: 1, borderColor:"grey", borderTopLeftRadius: 5, borderBottomLeftRadius:5, width: width* (0.70*(route.params.item.powerstats.intelligence)/100),height: 22, backgroundColor:"red",}}/>
                                <View style={{borderWidth: 1, borderColor:"grey", borderTopRightRadius: 5, borderBottomRightRadius:5, width: width* (0.70*(1-(route.params.item.powerstats.intelligence)/100)), height: 22, backgroundColor:"silver"}}/>                  
                            </View>
                        }
                        {route.params.item.powerstats.intelligence == 100 &&
                            <View style={{borderWidth: 1, borderColor:"grey", borderRadius: 5, width: width* 0.70, height: 22, backgroundColor:"red"}}/>                  
                        }
                        {route.params.item.powerstats.intelligence == "null" &&
                            <View style={{borderWidth: 1, borderColor:"grey", borderRadius: 5, width: width* 0.70, height: 22, backgroundColor:"silver"}}/>                  
                        }
                    </View>
                    <View style={styles.contCadaPowerStats}> 
                        <View style={styles.contTextoPowerStats}> 
                            <Text style={styles.textoPowerStats}>Fuerza</Text>
                        </View>
                        {route.params.item.powerstats.strength > 0 && route.params.item.powerstats.strength < 100 &&
                            <View style={styles.contCadaPowerStats}>
                                <View style={{borderWidth: 1, borderColor:"grey", borderTopLeftRadius: 5, borderBottomLeftRadius:5, width: width* (0.70*(route.params.item.powerstats.strength)/100),height: 22, backgroundColor:"red",}}/>
                                <View style={{borderWidth: 1, borderColor:"grey", borderTopRightRadius: 5, borderBottomRightRadius:5, width: width* (0.70*(1-(route.params.item.powerstats.strength)/100)), height: 22, backgroundColor:"silver"}}/>                  
                            </View>
                        }
                        {route.params.item.powerstats.strength == 100 &&
                            <View style={{borderWidth: 1, borderColor:"grey", borderRadius: 5, width: width* 0.70, height: 22, backgroundColor:"red"}}/>                  
                        }
                        {route.params.item.powerstats.strength == "null" &&
                            <View style={{borderWidth: 1, borderColor:"grey", borderRadius: 5, width: width* 0.70, height: 22, backgroundColor:"silver"}}/>                  
                        }
                    </View>
                    <View style={styles.contCadaPowerStats}> 
                        <View style={styles.contTextoPowerStats}> 
                            <Text style={styles.textoPowerStats}>Velocidad</Text>
                        </View>
                        {route.params.item.powerstats.speed > 0 && route.params.item.powerstats.speed < 100 &&
                            <View style={styles.contCadaPowerStats}>
                                <View style={{borderWidth: 1, borderColor:"grey", borderTopLeftRadius: 5, borderBottomLeftRadius:5, width: width* (0.70*(route.params.item.powerstats.speed)/100),height: 22, backgroundColor:"red",}}/>
                                <View style={{borderWidth: 1, borderColor:"grey", borderTopRightRadius: 5, borderBottomRightRadius:5, width: width* (0.70*(1-(route.params.item.powerstats.speed)/100)), height: 22, backgroundColor:"silver"}}/>                  
                            </View>
                        }
                        {route.params.item.powerstats.speed == 100 &&
                            <View style={{borderWidth: 1, borderColor:"grey", borderRadius: 5, width: width* 0.70, height: 22, backgroundColor:"red"}}/>                  
                        }
                        {route.params.item.powerstats.speed == "null" &&
                            <View style={{borderWidth: 1, borderColor:"grey", borderRadius: 5, width: width* 0.70, height: 22, backgroundColor:"silver"}}/>                  
                        }
                    </View>
                    <View style={styles.contCadaPowerStats}> 
                        <View style={styles.contTextoPowerStats}> 
                            <Text style={styles.textoPowerStats}>Durabilidad</Text>
                        </View>
                        {route.params.item.powerstats.durability > 0 && route.params.item.powerstats.durability < 100 &&
                            <View style={styles.contCadaPowerStats}>
                                <View style={{borderWidth: 1, borderColor:"grey", borderTopLeftRadius: 5, borderBottomLeftRadius:5, width: width* (0.70*(route.params.item.powerstats.durability)/100),height: 22, backgroundColor:"red",}}/>
                                <View style={{borderWidth: 1, borderColor:"grey", borderTopRightRadius: 5, borderBottomRightRadius:5, width: width* (0.70*(1-(route.params.item.powerstats.durability)/100)), height: 22, backgroundColor:"silver"}}/>                  
                            </View>
                        }
                        {route.params.item.powerstats.durability == 100 &&
                            <View style={{borderWidth: 1, borderColor:"grey", borderRadius: 5, width: width* 0.70, height: 22, backgroundColor:"red"}}/>                  
                        }
                        {route.params.item.powerstats.durability == "null" &&
                            <View style={{borderWidth: 1, borderColor:"grey", borderRadius: 5, width: width* 0.70, height: 22, backgroundColor:"silver"}}/>                  
                        }
                    </View>
                    <View style={styles.contCadaPowerStats}> 
                        <View style={styles.contTextoPowerStats}> 
                            <Text style={styles.textoPowerStats}>Energía</Text>
                        </View>
                        {route.params.item.powerstats.power > 0 && route.params.item.powerstats.power < 100 &&
                            <View style={styles.contCadaPowerStats}>
                                <View style={{borderWidth: 1, borderColor:"grey", borderTopLeftRadius: 5, borderBottomLeftRadius:5, width: width* (0.70*(route.params.item.powerstats.power)/100),height: 22, backgroundColor:"red",}}/>
                                <View style={{borderWidth: 1, borderColor:"grey", borderTopRightRadius: 5, borderBottomRightRadius:5, width: width* (0.70*(1-(route.params.item.powerstats.power)/100)), height: 22, backgroundColor:"silver"}}/>                  
                            </View>
                        }
                        {route.params.item.powerstats.power == 100 &&
                            <View style={{borderWidth: 1, borderColor:"grey", borderRadius: 5, width: width* 0.70, height: 22, backgroundColor:"red"}}/>                  
                        }
                        {route.params.item.powerstats.power == "null" &&
                            <View style={{borderWidth: 1, borderColor:"grey", borderRadius: 5, width: width* 0.70, height: 22, backgroundColor:"silver"}}/>                  
                        }
                    </View>
                    <View style={styles.contCadaPowerStats}> 
                        <View style={styles.contTextoPowerStats}> 
                            <Text style={styles.textoPowerStats}>Combate</Text>
                        </View>
                        {route.params.item.powerstats.combat > 0 && route.params.item.powerstats.combat < 100 &&
                            <View style={styles.contCadaPowerStats}>
                                <View style={{borderWidth: 1, borderColor:"grey", borderTopLeftRadius: 5, borderBottomLeftRadius:5, width: width* (0.70*(route.params.item.powerstats.combat)/100),height: 22, backgroundColor:"red",}}/>
                                <View style={{borderWidth: 1, borderColor:"grey", borderTopRightRadius: 5, borderBottomRightRadius:5, width: width* (0.70*(1-(route.params.item.powerstats.combat)/100)), height: 22, backgroundColor:"silver"}}/>                  
                            </View>
                        }
                        {route.params.item.powerstats.combat == 100 &&
                            <View style={{borderWidth: 1, borderColor:"grey", borderRadius: 5, width: width* 0.70, height: 22, backgroundColor:"red"}}/>                  
                        }
                        {route.params.item.powerstats.combat == "null" &&
                            <View style={{borderWidth: 1, borderColor:"grey", borderRadius: 5, width: width* 0.70, height: 22, backgroundColor:"silver"}}/>                  
                        }
                    </View>
                </View>
            </View>
            <View style={styles.contAbout}>
                <Text style={{fontSize: 30, fontStyle: "italic", textAlign: "center", color:Colores.textInputText}}>#MÁSINFO </Text>
                <View style={styles.viewTextAbout}>
                    <Text style={styles.tituloTextAbout}>Nombre Completo:</Text><Text style={styles.textAbout}> {route.params.item.biography['full-name']}</Text>
                </View>
                <View style={styles.viewTextAbout}>
                    <Text style={styles.tituloTextAbout}>También conocid@ como:</Text>
                    <View>
                        {route.params.item.biography.aliases.map((alias,idx) => {
                            return(
                                <Text style={styles.textAbout} key={idx}>{alias}</Text>
                            )
                            })}
                    </View>
                </View>
                <View style={styles.viewTextAbout}>
                    <Text style={styles.tituloTextAbout}>Familiares:</Text><Text style={styles.textAbout}>{route.params.item.connections.relatives} </Text>
                </View>
                <View style={styles.viewTextAbout}>
                    <Text style={styles.tituloTextAbout}>Nació en:</Text><Text style={styles.textAbout}>  {route.params.item.biography['place-of-birth']} </Text>
                </View>
                <View style={styles.viewTextAbout}>
                    <Text style={styles.tituloTextAbout}>Primera aparición:</Text><Text style={styles.textAbout}>  {route.params.item.biography['first-appearance']}</Text>
                </View>
                <View style={styles.viewTextAbout}>
                    <Text style={styles.tituloTextAbout}>Editorial:</Text><Text style={styles.textAbout}>  {route.params.item.biography.publisher} </Text>
                </View>
            </View>
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    cont: {
        backgroundColor: Colores.background,
    },
    
    nombre:{
        fontSize: 40,
        fontWeight: "bold",
        textAlign: "center",
        color: Colores.idNameBack,
        marginTop:5,
        textTransform: "uppercase",
        letterSpacing: 5,        
    },

    contImagenPowerStats:{
        flexDirection:"column", 
        alignItems: "center",
    },

    contImagen:{ 
        width: width, 
        height: height * 0.45,
    },

    imagen:{
        width: width, 
        height: height *0.45 , 
        resizeMode: "cover", 
        borderRadius: 25,
    },

    contPowerstats:{
        borderWidth: 1, 
        borderColor: Colores.idNameBack, 
        width: width * 0.95, 
        height: height * 0.25, 
        justifyContent:"space-evenly",
        marginTop: 10,
    },
    contCadaPowerStats:{
        flexDirection:"row",
    },
    contTextoPowerStats:{
        width: width*0.22,
    },
    textoPowerStats:{
        fontSize: 14,
        color: Colores.idNameBack,
        fontWeight: "bold",
        marginLeft: 5,
    },
    
    contAbout:{
        width: width,
        height: height,
        backgroundColor: Colores.idNameBack,
        marginTop: 10,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        justifyContent:"space-evenly",
        alignContent: "flex-start",
    },
    tituloTextAbout:{
        fontSize: 18,
        color: Colores.textMasInfo,
        fontStyle: "italic",
        width: width*0.3,
        textTransform: "uppercase",
    },
    textAbout:{
        fontSize: 18,
        color: Colores.textInputText,
        width: width*0.7,
        textAlign: "center",
    },
    viewTextAbout:{
        flexDirection:"row",
        
    },

})

export default SuperHeroInfoScreen