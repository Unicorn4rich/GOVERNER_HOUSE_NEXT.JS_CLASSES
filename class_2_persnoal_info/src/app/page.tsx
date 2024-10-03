import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
<>

<div className="About">


<div className="first">
  <h1 className="myName">Hay` i m <br></br>SHOAIB</h1>

  <p className="para">Passionate software developer skilled in HTML, CSS, and TypeScript, and Next.Js focused  on  user-friendly, scalable solutions. Always eager to learn and tackle challenges creatively.</p>

  <div className="cv">
    <button className="btn2">Download CV</button>
    <h3>My Profile</h3>
  </div>

</div>


<div className="second">
  <Image className="profile" src={"/profile.png"} alt={"picture"} width={350} height={450}></Image>
</div>


</div>

   </>

  );
}
