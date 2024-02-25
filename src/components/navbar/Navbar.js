import { useAtom } from "jotai";
import { Link } from "react-router-dom";
import { guildLogged, partyLogged } from "../../App";



const Navbar = () =>
{

    const [party, setParty] = useAtom(partyLogged);
    const [guild, setGuild] = useAtom(guildLogged);

    function logout() {
        if(guild){
            setGuild(null);
        }
        if(party){
            setParty(null);
        }
    }

    return(
        <>
            <nav class="navbar navbar-expand-lg navbar-expand-sm bg-success mb-5">
                <div className="container">
                    <div class="navbar-nav">
                        <Link class="btn btn-outline-light" to="/" >All Quests</Link>
                    </div>
                    <div class="navbar-nav">
                    <Link className={`btn ${guild || party ? 'btn-outline-light' : 'disabled text-light'}`} to={guild ? `guilds/${guild.id}/quests` : '/login'} >My Quest</Link>
                    </div>
                    <div class="navbar-nav">
                    <Link className={`btn btn-outline-light ${guild || party ? 'invisible' : ''}`} to="/login">Login</Link>
                        {guild || party ? (
                            <>
                                <h5 className="text-light text-center me-3" style={{margin:"auto"}}>{guild.name}</h5>
                                <img className="border border-light" style={{width:"50px",borderRadius:"30px", cursor:"pointer"}} onClick={logout} src={guild.seal_img_url} alt="Guild Seal" />
                            </>
                        ) : null}
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;