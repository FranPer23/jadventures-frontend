import '../../styles.css';

export default function QuestOverview(props) {
    return (
        <>
            <div className="questOverview col-4 d-flex justify-content-center text-center flex-wrap">
                <div className="card">
                    <div className="card-body d-flex flex-column">
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