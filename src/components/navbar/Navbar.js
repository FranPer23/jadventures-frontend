import { Link } from "react-router-dom";

const Navbar = () =>
{
    return(
        <>
            <nav class="navbar navbar-expand-lg navbar-expand-sm bg-primary text-light mb-5">
                <div>
                <div class="navbar-nav">
                    <ul class="navbar-nav me-auto my-3 mb-lg-0 ">
                        <li><Link class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" to="/" >All Guilds</Link></li>
                        <li><Link class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" to="/" >Login</Link></li>
                    </ul>
                </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;