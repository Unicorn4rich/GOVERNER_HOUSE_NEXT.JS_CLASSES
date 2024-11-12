import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar"
import Footer from "@/components/footer";



export default function Home() {
  return (
    <>

{/* Navbar component */}
     <Navbar/>


{/* Header section Work start */}

     <section className="section">

      <div className="sec_div1">
        <h1 className="sec_heading">Teaching The Next Generation of Smart Contract <span>Developers</span></h1>

        <p className="sec_para">Smart contracts are revolutionizing blockchain by enabling secure, automated transactions. They eliminate the need for intermediaries, streamlining processes across industries. As this technology grows, training new developers is key to driving innovation. Preparing the next generation will ensure smart contracts remain at the forefront of decentralized solutions, fostering a robust ecosystem that enhances trust and efficiency in digital transactions.
       </p>


        <button className="sec_button"><Link href={"/web3"} >Read Info</Link></button>
      </div>


      <div className="sec_div2">
        <Image className="main_image" src={"/develpers.jpg"} alt="Tech" width={500} height={200} />
      </div>

     </section>


{/* Cards Section Start */}

    <section className="card_sec">

      <div className="Card">
        <Image src={"/ai.jpg"} alt="Card" width={400} height={200} />

        <h2 className="C_headings">Artificial Intelligence (AI)</h2>

        <p>
        Development of machines and systems that can mimic human intelligence, such as learning, reasoning, and decision-making. It powers innovations like voice assistants, self-driving cars, and smart recommendations. AI is reshaping industries by automating tasks and enabling advanced problem-solving.
         </p>

         <button className="C_btn"> <Link href={"/ai"}>Read More</Link> </button>
      </div>


      <div className="Card">
        <Image src={"/block.jpg"} alt="Card" width={400} height={150} />

        <h2 className="C_headings">Blockchain</h2>

        <p>
           Blockchain is a decentralized digital ledger technology that securely records transactions across multiple computers, ensuring transparency and immutability. It underpins cryptocurrencies and enables secure, peer-to-peer transactions without intermediaries, with applications extending to various industries.   
        </p>

         <button className="C_btn"><Link href={"/blockchain"}>Read More</Link></button>
      </div>


      <div className="Card">
        <Image src={"/meta.jpg"} alt="Card" width={400} height={200} />

        <h2 className="C_headings">Metaverse</h2>

        <p>
          The Metaverse is a collective virtual shared space that combines augmented reality (AR), virtual reality (VR), and the internet, allowing users to interact in immersive digital environments. It represents the next evolution of the internet, where people can socialize, work, and play, blurring the lines between physical.
        </p>

         <button className="C_btn"><Link href={"/metavers"}>Read More</Link></button>
      </div>

    </section>


    {/* Cards Section_2 Start */}

    <section className="card_sec">

      <div className="Card">
        <Image src={"/cloud.jpg"} alt="Card" width={400} height={200} />

        <h2 className="C_headings">Cloud Computing</h2>

        <p>  
         Cloud Computing is a technology that delivers computing services such as storage, processing, and software over the internet, allowing users to access resources on-demand. It offers flexibility, scalability, and cost efficiency, enabling businesses and individuals to manage data and applications without needing.        </p>

         <button className="C_btn"><Link href={"/cloud"}>Read More</Link></button>
      </div>


      <div className="Card">
        <Image src={"/cyber.jpg"} alt="Card" width={400} height={200} />

        <h2 className="C_headings">Cybersecurity</h2>

        <p>
        Cybersecurity refers to the practice of protecting systems, networks, and data from digital attacks, unauthorized access, and damage. It encompasses a range of technologies, processes, and practices designed to safeguard sensitive information and ensure the integrity and availability of digital assets.
         </p>

         <button className="C_btn"><Link href={"/cyber"}>Read More</Link></button>
      </div>


      <div className="Card">
        <Image src={"/robot.jpg"} alt="Card" width={400} height={200} />

        <h2 className="C_headings">Robotics</h2>

        <p>
        Robotics is the branch of technology focused on designing, building, and operating robots to perform tasks autonomously or semi-autonomously. It combines engineering, computer science, and artificial intelligence to create machines that can assist in various industries, from manufacturing.
         </p>

         <button className="C_btn"><Link href={"/robo"}>Read More</Link></button>
      </div>

    </section>


{/* Footer work start     */}

     <Footer/>


    </>
  );
}





































/* CLass 5 Topics NOTES

blog card => image heading and text
css box shaddow genrater website => CSS scan
Arrowed Link Animation On Hover
transition animation + keyframe animation
image kitne types ki hoti hain => recomended webpag
trasition duration + transition delay
responsive design in Media query and Tailwind css
SEO Optimization => heading herarky => active voice + passive voice
framer motion => Next.js animation 
animista website
colours related theory 
colours type => primary secondry tertiary
Hue Saturarion value
color Harmony 
color pilate genrater websitec
Home Work Bloging Website Complete
Next class Topics
SSR
CSR
Dynamic Renedering
STatic Rendering






















*/