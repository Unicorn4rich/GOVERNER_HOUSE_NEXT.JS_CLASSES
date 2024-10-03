import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Navbar  */}
     <div className="Main">
      <div className="mini">

      <div className="navbar">
        <div><h1 className="name">SHOAIB.</h1></div>

        <div>

          <nav>
          <ul className="ul">

          <li><Link href={"/home"}>Home</Link></li>
          <li><Link href={"/about"}>About</Link></li>
          <li><Link href={"/section"}>Section</Link></li>
          <li><Link href={"/portfolio"}>Portfolio</Link></li>
          <li><Link href={"/update"}>Update</Link></li>
          <li><Link href={"/info"}>Info</Link></li>

          </ul>
          </nav>

          </div>

        <div><button className="btn">Join Me</button></div>
      </div>

      

      {/* section */}

      <div className="About">

        <div className="first">
          <h1 className="myName">Hay` i m <br></br>SHOAIB</h1>

          <p className="para">Passionate software developer skilled in HTML, CSS, and TypeScript, and Next.Js focused <br/> on  user-friendly, scalable solutions. Always eager to learn and tackle challenges creatively.</p>

          <div className="cv">
            <button className="btn2">Download CV</button>
            <h3>My Profile</h3>
          </div>

          <div className="Bpara lastHeadings">
            <div>
            <Link href={"https://github.com/Unicorn4rich"}>
            <p>Code</p>
            <h4>Github</h4>
            </Link>
            </div>

            <div>
            <Link href={"https://www.linkedin.com/in/shoaib-khan-0679562b4/"}><p>Social</p>
            <h4>LinkdIn</h4></Link>
            </div>

            <div>
            <Link href={"https://mail.google.com/mail/u/0/#inbox"}>
            <p>Contact</p>
            <h4>sk9952908@gmail.com</h4>
           </Link>
            </div>

          </div>

        </div>

        <div className="second">
          <div className="yellow"></div>
          <Image className="profile" src={"/profile.png"} alt={"picture"} width={350} height={450}></Image>

          <div className="icons">
            <p>✔</p>
            <p>🤖</p>
            <p>❤</p>
            </div>
          

        </div>
       

      </div>

      </div>

     </div>

    </>
  );
}
