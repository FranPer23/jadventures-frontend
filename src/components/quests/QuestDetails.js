import '../../styles.css';
import { guildLogged, partyLogged } from "../../App";
import { useAtom } from 'jotai';
import { useState } from 'react';

export default function QuestDetails(props)
{

    const [party, setParty] = useAtom(partyLogged);
    const [guild, setGuild] = useAtom(guildLogged);

    const [questOwner, setQuestOwner] = useState(() => {
        if (props.patron && props.patron.id) {
            return props.patron.id;
        }
        return guild.id;
    });


    return (
        <>
            <div className="col-4 d-flex justify-content-center text-center">
                <div className="card">
                    <div className="card-body ">
                    {(guild || party) && (guild.id || party.id) == questOwner ? (
                            <>
                                <div className="mb-3 d-flex justify-content-between">
                                    <button className='btn btn-outline-success btn-sm'>UPDATE</button>
                                    <button className='btn btn-outline-danger btn-sm' onClick={()=> props.deleteQuest(props.id)}>DELETE</button>
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
                          
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}