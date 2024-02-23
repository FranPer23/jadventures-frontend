import { useEffect, useState } from "react";
import axios from "axios";
import { guildLogged } from '../../App';
import QuestOverview from "../quests/QuestOverview";
import { useAtom } from "jotai";
import '../../styles.css';

export default function HomepageGuild(props) {
    const [allQuests, setAllQuests] = useState([]);
    const [gilda, setGilda] = useAtom(guildLogged);

    const [quest, setQuest] = useState({
        date_created:"",
        status:"",
        rank:"",
        reward:"",
        date_completed:"",
        map_url:"",
        description:"",
        type:"",
   
     });

    
    

    useEffect(() => {
        axios.get("/guilds/"+gilda.id+"/quests").then((resp) => {
            setAllQuests(resp.data.postedQuests);
            
        });
    }, []);

    function sendForm() {
        axios.post("/quest/" + quest.id, quest).then((response) => {
          setQuest({
             date_created:"",
             status:"",
             rank:"",
             reward:"",
             date_completed:"",
             map_url:"",
             description:"",
             type:"",
        
          });
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
                        
        <form>
        <div class="form-group">
            <label for="exampleFormControlTextarea1">Status</label>
            <select onChange={synchronize}  value={quest.status} name="status"  className="form-select ms-2"
                                aria-label="Default select example">
                               <option value="" selected hidden>Please select</option>
                                <option value="awaiting">awaiting</option>
                                <option value="pending">pending</option>
                                <option value="success">ernesto</option>
                                <option value="failed">federico</option>
                            </select>
        </div>
    
        <div class="form-group">
            <label for="exampleFormControlTextarea1">Area</label>
            <input onChange={synchronize} value={quest.area} name="area" type="text" class="form-control" id="" aria-describedby=""/>
        </div>
        <div class="form-group">
            <label for="exampleFormControlTextarea1">Rank</label>
            <select onChange={synchronize}  value={quest.rank} name="rank"  className="form-select ms-2"
                                aria-label="Default select example">
                               <option value="" selected hidden>Please select</option>
                                <option value="S">S</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                            </select>
        </div>
        <div className="form-group">
            <label for="exampleFormControlTextarea1">Reward</label>
            <input onChange={synchronize}  value={quest.reward} name="reward" type="number" class="form-control" id="" aria-describedby=""/>
        </div>
        <div className="form-group">
            <label for="exampleFormControlTextarea1">Map url</label>
            <input onChange={synchronize}  value={quest.map_url} name="map_url" type="text" class="form-control" id="" aria-describedby=""/>
        </div>
        <div className="form-group">
            <label for="exampleFormControlTextarea1">Description</label>
            <input onChange={synchronize}  value={quest.description} name="description" type="text" class="form-control" id="" aria-describedby=""/>
        </div>
        <div className="form-group">
            <label for="exampleFormControlTextarea1">Type</label>
            <select onChange={synchronize}  value={quest.rank} name="rank" className="form-select mt-4"
                            aria-label="Default select example"
                          
                        >
                            <option value="" selected hidden>Please select</option>
                            <option value="dungeon">Dungeon</option>
                            <option value="monster hunt">Monster Hunt</option>
                            <option value="village defence">Village Defence</option>
                            <option value="errand">Errand</option>
                            <option value="bodyguard">Bodyguard</option>
                            <option value="patrol">Patrol</option>
                        </select>
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
                            <QuestOverview key={q.id} {...q} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
