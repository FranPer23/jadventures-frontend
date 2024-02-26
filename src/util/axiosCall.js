import axios from "axios";


export function deleteQ(id, funzione){

    //restituisce la promise
    axios.delete("/quests/"+ id).then((resp) => {
        funzione(true); 
    });
}