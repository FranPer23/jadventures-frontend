import { useEffect, useState } from "react";
import axios from "axios";
import { guildLogged } from '../../App';
import QuestOverview from "../quests/QuestOverview";
import { useAtom } from "jotai";
import '../../styles.css';

export default function HomepageGuild() {
    const [allQuests, setAllQuests] = useState([]);
    const [gilda, setGilda] = useAtom(guildLogged);
    const [currentDate,setCurrentDate] = useState(new Date());
    const [reRender, setReRender] = useState(false);

    const [quest, setQuest] = useState({
        date_created: currentDate,
        status: "PENDING",
        rank: "",
        reward: "",
        area: "",
        date_completed: "",
        map_url: "",
        description: "",
        type: "",
        patron: JSON.parse(localStorage.getItem("logged")).id
    });

    useEffect(() => {
        let id;
        if (localStorage.getItem("logged")) {
            id = JSON.parse(localStorage.getItem("logged")).id;
        
          } 
          console.log(id);
        axios.get("/guilds/" + (id || gilda.id) + "/quests").then((resp) => {
            setAllQuests(resp.data.postedQuests);
            if (reRender) {
                setReRender(false);
            }
        });
    }, [gilda, reRender]);


   
    function deleteQuest(id){
        axios.delete("/quests/"+ id).then((resp) => {
            setReRender(true);
        });
    }

    function sendForm() {
        axios.post("/quests", quest).then(() => {
            // Resetta lo stato della quest a valori di default o vuoti
            setQuest({
                date_created: new Date(), // Assicurati che la data venga aggiornata se necessario
                status: "AWAITING",
                rank: "",
                reward: "",
                area: "",
                date_completed: "",
                map_url: "",
                description: "",
                type: "",
                patron: ""
            });
            // Incrementa il contatore per forzare il refresh della lista delle quest
            setReRender(true);
        }).catch((error) => {
            console.error("There was an error submitting the quest:", error);
        });
    }


    function synchronize(e) {
        let clone = { ...quest };
        clone[e.target.name] = e.target.value;
        setQuest(clone);
    }


    return (
        <>
            <div className="mainOverview row gy-5 px-3">
                <div className="col-3 text-center">
                    <div>
                        <h2>Enter New Quest</h2>

                        <form className="px-3">
                            {/* TIPO */}
                            <div className="selector form-group mb-1">
                                <label for="exampleFormControlTextarea1">Type</label>
                                <select onChange={synchronize} value={quest.type} name="type" className="form-select"
                                    aria-label="Default select example">
                                    <option value="" selected hidden>Please select</option>
                                    <option value="dungeon">Dungeon</option>
                                    <option value="monster hunt">Monster Hunt</option>
                                    <option value="village defence">Village Defence</option>
                                    <option value="errand">Errand</option>
                                    <option value="bodyguard">Bodyguard</option>
                                    <option value="patrol">Patrol</option>
                                </select>
                            </div>

                            {/* RANK */}
                            <div class="selector form-group mb-1">
                                <label for="exampleFormControlTextarea1">Rank</label>
                                <select onChange={synchronize} value={quest.rank} name="rank" className="form-select"
                                    aria-label="Default select example">
                                    <option value="" selected hidden>Please select</option>
                                    <option value="S">S</option>
                                    <option value="A">A</option>
                                    <option value="B">B</option>
                                    <option value="C">C</option>
                                    <option value="D">D</option>
                                </select>
                            </div>

                            {/* RICOMPENSA */}
                            <div className="form-group mb-1">
                                <label for="exampleFormControlTextarea1">Reward</label>
                                <input onChange={synchronize} value={quest.reward} name="reward" type="number" class="form-control" id="" aria-describedby="" />
                            </div>

                            {/* AREA */}
                            <div class="form-group mb-1">
                                <label for="exampleFormControlTextarea1">Area</label>
                                <input onChange={synchronize} value={quest.area} name="area" type="text" class="form-control" id="" aria-describedby="" />
                            </div>

                            {/* URL MAPPA */}
                            <div className="form-group mb-1">
                                <label for="exampleFormControlTextarea1">Map url</label>
                                <input onChange={synchronize} value={quest.map_url} name="map_url" type="text" class="form-control" id="" aria-describedby="" />
                            </div>

                            {/* DESCRIZIONE */}
                            <div className="form-group mb-1">
                                <label for="exampleFormControlTextarea1">Description</label>
                                <textarea onChange={synchronize} rows={5} value={quest.description} name="description" class="form-control" aria-describedby="" />
                            </div>

                            <button
                                type="button"
                                className="btn btn-primary"
                                value="Save"
                                onClick={sendForm}
                            >
                                Submit
                            </button>
                        </form>

                    </div>
                </div>
                <div className="col-9 pe-5">
                    <div className="row gy-5">
                        {allQuests.map((q) => (
                            <QuestOverview key={q.id} {...q} deleteQuest={deleteQuest}/>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
