import '../../styles.css';
import { details, guildLogged, partyLogged } from "../../App";
import { useAtom } from 'jotai';
import { useState, useEffect } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';


export default function QuestDetails()
{
    
    const { id } = useParams(); 
    const [quest, setQuest] = useState(details);
    const [party, setParty] = useAtom(partyLogged);
    const [guild, setGuild] = useAtom(guildLogged);

  
  useEffect(() => {
    console.log("ID estratto:", id); // Verifica l'ID 
    
    axios.get(`/quests/${id}`).then((resp) => {
        console.log("Dati ottenuti dalla richiesta API:", resp.data); // Verifica i dati ottenuti dalla richiesta API
       
        setQuest(resp.data);
    
    }).catch(error => {
        console.error('Errore durante il recupero dei dettagli della quest:', error);
    });
    }, [id, setQuest]);



    return (
        <>
            <div className="col-4 d-flex justify-content-center text-center">
                <div className="card">
                    <div className="card-body ">
               

                  
                        <div className="mb-auto">
                            <h3 className="card-title"><b>Type:</b> {quest.type}</h3>
                            <h4 className="card-subtitle mb-2 text-muted">Rank: {quest.rank}</h4>
                            <h5 className="card-subtitle mb-2 text-muted">Reward: {quest.reward}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Area: {quest.area}</h6>
                        </div>
                        <div className="mt-auto">
                            <img style={{ width: "100%", maxHeight: "150px" }} src={quest.map_url} alt="Map" />
                          
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}