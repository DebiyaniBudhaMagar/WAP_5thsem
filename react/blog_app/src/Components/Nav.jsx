import { Link } from "react-router-dom"

export default function Nav(){
    return(
        <nav>
            <ul>

                <li><Link to='/Dog'>Dog</Link></li>
                <li><Link to='/Cat'>Cat</Link></li>
                <li><Link to='/Lion'>Lion</Link></li>
                <li><Link to='/'>Home</Link></li>
            </ul>
        </nav>
    )
}