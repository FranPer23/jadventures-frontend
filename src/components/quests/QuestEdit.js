import { FOCUSABLE_SELECTOR } from "@testing-library/user-event/dist/utils";
import axios from "axios";
import { useState } from "react";

const QuestEdit = () => {
    const [editQuest, setEditQuest]= useState([]);

    function synchronize(e) {

        let clone = { ...editQuest};
        clone[e.target.name] = e.targetvalue;
        setEditQuest(clone);
    }

    function sendForm() {

        axios.put(`/quest/${editQuest.id}`, editQuest).then((response)=> {
            setEditQuest(response.data);
        });
    }

   
    return (
        <>
          <div className="container my-2">
            <div className="card ">
              <label>Map</label>
    
              <img
                src={editQuest.map_url}
                className="card-img-top object-fit-contain"
                alt="img Map"
                onChange={synchronize}
              />
              <div className="card-body">
                <div className="input-group mb-3">
                  <form>
                    <label>Quest</label>

                    <select
                            className="form-select mt-4"
                            aria-label="Default select example"
                            value={editQuest.type}
                            onChange={synchronize}
                        >
                            <option value="Type">Type</option>
                            <option value="dungeon">Dungeon</option>
                            <option value="monster hunt">Monster Hunt</option>
                            <option value="village defence">Village Defence</option>
                            <option value="errand">Errand</option>
                            <option value="bodyguard">Bodyguard</option>
                            <option value="patrol">Patrol</option>
                        </select>
    
                    <input
                      name="description"
                      type="text"
                      className="form-control"
                      value={editQuest.description}
                      onChange={synchronize}
                    ></input>
                    <label>Surame</label>
    
                    <input
                      name="area"
                      type="text"
                      className="form-control"
                      value={editQuest.area}
                      onChange={synchronize}
                    ></input>
                    <label>reward</label>
    
                    <input
                      name="reward"
                      type="number"
                      className="form-control"
                      value={editQuest.reward}
                      onChange={synchronize}
                    ></input>

                    <select
                                className="form-select ms-2"
                                aria-label="Default select example"
                                value={editQuest.rank}
                                onChange={synchronize}
                            >
                                <option value="Rank">Rank</option>
                                <option value="S">S</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                    </select>
                   
                    <select
                                className="form-select ms-2"
                                aria-label="Default select example"
                                value={editQuest.status}
                                onChange={synchronize}
                            >
                                <option value="status">Status</option>
                                <option value="AWAITING">AWAITING</option>
                                <option value="PENDING">PENDING</option>
                                <option value="SUCCESS">SUCCESS</option>
                                <option value="FAILED">FAILED</option>
                                
                    </select>
                    <input
                      className="btn btn-primary"
                      type="button"
                      value="Salva"
                      onClick={sendForm}
                    />
                    <input
                      className="btn btn-warning"
                      type="button"
                      value="Annulla"
                      onClick={editQuest.annulla}
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      );
};

export default QuestEdit;