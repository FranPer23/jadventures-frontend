import '../../styles.css';
import { guildLogged, partyLogged } from "../../App";
import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function QuestOverview(props) {

    const [party, setParty] = useAtom(partyLogged);
    const [guild, setGuild] = useAtom(guildLogged);

    const [questOwner, setQuestOwner] = useState(() => {
        if (props.patron && props.patron.id) {
            return props.patron.id;
        }
        return guild.id;
    });

    // const [questId, setQuestId] = useState(() => {
    //     if (props.postedQuest.id) {
    //         return props.postedQuest.id;
    //     }
    //     return props.id;
    // });


    return (
        <>
            <div className="questOverview col-4 d-flex justify-content-center text-center flex-wrap">
                <div className="card">
                    <div className="card-body d-flex flex-column">
                    {(guild || party) && (guild.id || party.id) == questOwner ? (
                            <>
                                <div className='mb-3 d-flex justify-content-between'>
                                    <button className='btn btn-outline-success btn-sm'>UPD</button>
                                    <button className='btn btn-outline-danger btn-sm' onClick={()=> props.deleteQuest(props.id)}>DEL</button>
                                </div>
                            </>
                        ) : null}
                        <div className="mb-auto">
                            <h3 className="card-title"><b>Type:</b> {props.type}</h3>
                            <h4 className="card-subtitle mb-2 text-muted">Rank: {props.rank}</h4>
                            <h5 className="card-subtitle mb-2 text-muted">Reward: {props.reward}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Area: {props.area}</h6>
                        </div>
                        <div className="mt-auto">
                            <img style={{ width: "100%", maxHeight: "150px" }} src={props.map_url} alt="Map" />
                            <Link className='btn btn-outline-dark mt-3' to={"questdetails/"+props.id}>Details</Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}