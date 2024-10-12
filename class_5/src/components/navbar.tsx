import Link from "next/link"

function Navbar(){
    return(
        <>
           <div className="nav_main">

            <div className="nav_div1"><h1 className="nav_text">TECH_INFO</h1></div>

            <nav className="nav_div2">
            <ul className="nav_ul">
                <li><Link href={"/"}>Home</Link></li>
                <li><Link href={"/about"}>About</Link></li>
                <li><Link href={"https://www.governorsindh.com/"}>Contact</Link></li>
                <li><Link href={"/login"}>Login</Link></li>
            </ul>
           </nav>

           </div>
        </>
    )
}

export default Navbar