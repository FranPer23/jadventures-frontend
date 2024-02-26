import { useEffect, useState } from "react";

export default function QuestDetails()
{

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
        patron: ""
    });

    useEffect(() => {
        axios.get("/quests/"+id).then((resp) => {
            setAllQuests(resp.data.postedQuests);
            if (reRender) {
                setReRender(false);
            }
        });
    }, [gilda.id, reRender]);

}