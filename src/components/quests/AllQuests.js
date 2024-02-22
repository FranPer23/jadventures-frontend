// import { useAtom } from "jotai"
// import { useEffect, useState } from "react";
// import QuestOverview from "./QuestOverview";
// import axios from "axios";

// export default function AllQuests(props) {

//     const [quests, setQuests] = useState([]);

//     useEffect(
//         () => {
//             axios.get("/quests").then(
//                 (resp) => {
//                     setQuests(resp.data);
//                 }
//             );
//         },
//         []
//     );



//     return (
//         <>
//             <div className="row gy-5 px-3">
//                 <div className="col-3">
//                     <div>
//                         <h2>Filter</h2>
//                         <select class="form-select" aria-label="Default select example">
//                             <option selected>Type</option>
//                             <option value="1">Dungeon</option>
//                             <option value="2">Monster Hunt</option>
//                             <option value="3">Village Defence</option>
//                             <option value="4">Errand</option>
//                             <option value="5">Bodyguard</option>
//                             <option value="6">Patrol</option>
//                         </select>

//                         <div>
//                             <select class="form-select" aria-label="Default select example">
//                                 <option selected>Min Rank</option>
//                                 <option value="1">D</option>
//                                 <option value="2">C</option>
//                                 <option value="3">B</option>
//                                 <option value="4">A</option>
//                                 <option value="5">S</option>
//                             </select>
//                             <select class="form-select" aria-label="Default select example">
//                                 <option selected>Max Rank</option>
//                                 <option value="5">S</option>
//                                 <option value="4">A</option>
//                                 <option value="3">B</option>
//                                 <option value="2">C</option>
//                                 <option value="1">D</option>
//                             </select>
//                         </div>
//                         <input type="number" placeholder="Min Reward" /><br />
//                         <input type="text" placeholder="Area" /><br />
//                         <input type="button" value="Filter" />
//                     </div>
//                 </div>
//                 <div className="col-9 pe-5">
//                     <div className="row gy-5">
//                         {
//                             quests
//                                 .map(q => <QuestOverview key={q.id} {...q} />)
//                         }
//                     </div>
//                 </div>
//             </div>
//         </>

//     )
// }


import { useEffect, useState } from "react";
import QuestOverview from "./QuestOverview";
import axios from "axios";

export default function AllQuests(props) {
    const [allQuests, setAllQuests] = useState([]);
    const [filteredQuests, setFilteredQuests] = useState([]);
    const [filterType, setFilterType] = useState("Type");
    const [minRank, setMinRank] = useState("Min Rank");
    const [maxRank, setMaxRank] = useState("Max Rank");
    const [minReward, setMinReward] = useState("");
    const [area, setArea] = useState("");

    useEffect(() => {
        axios.get("/quests").then((resp) => {
            setAllQuests(resp.data);
            setFilteredQuests(resp.data);
        });
    }, []);

    function handleFilter() {
        let filteredData = [...allQuests];

        let letteraToNum = { "S": 5, "A": 4, "B": 3, "C": 2, "D": 1 }

        if (filterType !== "Type") {
            filteredData = filteredData.filter((quest) => quest.type.toLowerCase() === filterType);
        }

        if (minRank !== "Min Rank") {
            filteredData = filteredData.filter((quest) => letteraToNum[quest.rank] >= letteraToNum[minRank]);
        }

        if (maxRank !== "Max Rank") {
            filteredData = filteredData.filter((quest) => letteraToNum[quest.rank] <= letteraToNum[maxRank]);
        }

        if (minReward !== "") {
            filteredData = filteredData.filter((quest) => quest.reward >= parseInt(minReward));
        }

        if (area !== "") {
            filteredData = filteredData.filter((quest) => quest.area.toLowerCase().includes(area.toLowerCase()));
        }

        setFilteredQuests(filteredData);
    }

    function resetFilter() {
        setFilterType("Type");
        setMinRank("Min Rank");
        setMaxRank("Max Rank");
        setMinReward("");
        setArea("");
        setFilteredQuests(allQuests);
    }

    return (
        <>
            <div className="row gy-5 px-3">
                <div className="col-3 text-center">
                    <div>
                        <h2>Filter</h2>
                        <select
                            className="form-select mt-4"
                            aria-label="Default select example"
                            onChange={(e) => setFilterType(e.target.value)}
                        >
                            <option value="Type">Type</option>
                            <option value="dungeon">Dungeon</option>
                            <option value="monster hunt">Monster Hunt</option>
                            <option value="village defence">Village Defence</option>
                            <option value="errand">Errand</option>
                            <option value="bodyguard">Bodyguard</option>
                            <option value="patrol">Patrol</option>
                        </select>

                        <div className="d-flex mt-3">
                            <select
                                className="form-select me-2"
                                aria-label="Default select example"
                                onChange={(e) => setMinRank(e.target.value)}
                            >
                                <option value="Min Rank">Min Rank</option>
                                <option value="S">S</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                            </select>
                            <select
                                className="form-select ms-2"
                                aria-label="Default select example"
                                onChange={(e) => setMaxRank(e.target.value)}
                            >
                                <option value="Max Rank">Max Rank</option>
                                <option value="S">S</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                            </select>
                        </div>

                        <input className="form-control mt-3"
                            type="number"
                            placeholder="Min Reward"
                            onChange={(e) => setMinReward(e.target.value)}
                        />
                        <input className="form-control mt-3"
                            type="text"
                            placeholder="Area"
                            onChange={(e) => setArea(e.target.value)}
                        />
                        <div className="">
                        <button className="btn btn-outline-success mt-3 me-3" onClick={handleFilter}>Filter</button>
                        <button className="btn btn-outline-danger mt-3" onClick={resetFilter}>Reset</button>
                        </div>
                    </div>
                </div>
                <div className="col-9 pe-5">
                    <div className="row gy-5">
                        {filteredQuests.map((q) => (
                            <QuestOverview key={q.id} {...q} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
