import axios from "axios";


export const personajesFiccion = async (datos) => {  
    try {
        const url = `https://www.superheroapi.com/api.php/10159967918527366/search/${datos.personaje}`;
        const { data } = await axios.get(url);
        return data.results;
      } catch (error) {
        console.log(error);
      }
    };