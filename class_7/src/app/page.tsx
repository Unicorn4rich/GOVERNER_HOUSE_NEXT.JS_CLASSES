import React from 'react'
import Image from "next/image"

export default function Home() {
  return (
    <>
    <div className='nav_main'>

     <div><Image src={'/logo.png'} alt={'logo'} width={70} height={42.71} /></div>

     <div>
         <nav>
             <ul className='ul_list'>
                 <li><u>MAIN</u></li>
                 <li>GALLERY</li>
                 <li>PROJECTS</li>
                 <li>CERTIFICATIONS</li>
                 <li>CONTACTS</li>
             </ul>
         </nav>
     </div>

    </div>


   {/* Header */}

   <div className='header_main'>

    <div className='head_div1'>
      <div className='m_top'><h1 className='h1'>PROJECT</h1>
      <p className='p'>LORUM</p></div>
    </div>

    <div className='head_div2'>
    <Image src={'/header.png'} alt={'logo'} width={500} height={450} />
    </div>

   </div>



{/* section    */}


   <section>

    <div>
      <div><Image src={'/first_sec.png'} alt={'logo'} width={200} height={200} /></div>
      <div><Image src={'/first_sec.png'} alt={'logo'} width={200} height={200} /></div>
      <div></div>
    </div>

    <div></div>
    <div></div>

   </section>



 </>
  );
}





















/* Topics Notes

dribble website for designs
behance for designs
figma for design
adobe xt for design




class 8

server side rendering
client side rendering
Hybrid rendering
npx create-next-app@latest
fetching large dependenciese data server side rendering and client side rendering
SSR
CSR
SSG
component life Cycle
jab wo dunya mein aya (mounting) => (Updating) => (unmounting)
component => state => props
persnoal data and inheritent data
compoent ka State directly update karenge to UI UPDATE nahi hogi.
2g





*/
