export default function QuestOverview(props)
{
    return(
        <>
            <div className="col-3 d-flex justify-content-center text-center flex-wrap"style={{minWidth:"190px"}}>
                <div class="card">
                    <div class="card-body">
                       

                        <h3 class="card-title">Type: {props.type}</h3>
                        <h4 class="card-subtitle mb-2 text-muted">Rank: {props.rank}</h4>
                        <h5 class="card-subtitle mb-2 text-muted">Reward: {props.reward}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Area: {props.area}</h6>
                        <br/>
                     
                    </div>
                </div>
            </div>
        </>
    )
}