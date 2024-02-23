import { useEffect, useState } from "react";
import axios from "axios";
import { guildLogged } from '../../App';
import QuestOverview from "../quests/QuestOverview";
import { useAtom } from "jotai";
import '../../styles.css';

export default function HomepageGuild(props) {
    const [allQuests, setAllQuests] = useState([]);
    const [gilda, setGilda] = useAtom(guildLogged);

    useEffect(() => {
        axios.get("/guilds/"+gilda.id+"/quests").then((resp) => {
            setAllQuests(resp.data.postedQuests);
        });
    }, []);


    return (
        <>
            <div className="mainOverview row gy-5 px-3">
                <div className="col-3 text-center">
                    <div>
                        
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
