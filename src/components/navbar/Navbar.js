import { Link } from "react-router-dom";

const Navbar = () =>
{
    return(
        <>
            <nav class="navbar navbar-expand-lg navbar-expand-sm bg-success mb-5">
                <div className="container">
                    <div class="navbar-nav">
                        <Link class="btn btn-outline-light" to="/" >All Quests</Link>
                    </div>
                    <div class="navbar-nav">
                        <Link class="btn disabled text-light" to="/" >My Quest</Link>
                    </div>
                    <div class="navbar-nav">
                        <Link class="btn btn-outline-light" to="/login" >Login</Link>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;