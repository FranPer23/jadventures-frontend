import { useAtom } from "jotai"
import { useEffect, useState } from "react";
import QuestOverview from "./QuestOverview";
import axios from "axios";

export default function AllQuests(props) {

    const [quests, setQuests] = useState([]);

    useEffect(
        () => {
            axios.get("/quests").then(
                (resp) => {
                    setQuests(resp.data);
                }
            );
        },
        []
    );






    return (
        <>
            <div className="row gy-5 px-3">
                <div className="col-3">
                    <div>
                        <h2>Filter</h2>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Type</option>
                            <option value="1">Dungeon</option>
                            <option value="2">Monster Hunt</option>
                            <option value="3">Village Defence</option>
                            <option value="4">Errand</option>
                            <option value="5">Bodyguard</option>
                            <option value="6">Patrol</option>
                        </select>

                        <div>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Min Rank</option>
                                <option value="1">D</option>
                                <option value="2">C</option>
                                <option value="3">B</option>
                                <option value="4">A</option>
                                <option value="5">S</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Max Rank</option>
                                <option value="5">S</option>
                                <option value="4">A</option>
                                <option value="3">B</option>
                                <option value="2">C</option>
                                <option value="1">D</option>
                            </select>
                        </div>
                        <input type="number" placeholder="Min Reward" /><br />
                        <input type="text" placeholder="Area" /><br />
                        <input type="button" value="Filter" />
                    </div>
                </div>
                <div className="col-9 pe-5">
                    <div className="row gy-5">
                        {
                            quests
                                .map(q => <QuestOverview key={q.id} {...q} />)
                        }
                    </div>
                </div>
            </div>
        </>

    )
}
