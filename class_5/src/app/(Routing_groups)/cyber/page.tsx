import React from 'react'
import Image from "next/image"
import Navbar from '@/components/navbar'
import Footer from "@/components/footer"

function Web3() {
  return (
    <>
    <Navbar/>
    <div className='rout_main'>

      <div className='rout_div1'>
        <Image src={"/cyber.jpg"} alt="Cyber Security" height={100}  width={690} className='h-[440px] w-[600px]' />
      </div>

      <div className='rout_div2'>
      <h1 className='rout_heading'>Cybersecurity: Safeguarding Digital Information in an Evolving Threat Landscape</h1>

        <p className='rout_para'>
        In an increasingly digital world, cybersecurity has become a critical concern for individuals, businesses, and governments alike. As technology advances, so do the tactics and techniques employed by cybercriminals. Cybersecurity encompasses the measures and practices designed to protect systems, networks, and data from unauthorized access, theft, and damage. It plays a vital role in maintaining the integrity, confidentiality, and availability of information. Understanding Cybersecurity
        Cybersecurity involves multiple layers of protection across networks, devices, and applications. Key components include:
        Network Security: Protects the integrity and usability of networks by implementing security measures such as firewalls, intrusion detection systems, and virtual private networks (VPNs).
        Application Security: Focuses on keeping software and devices free from threats. This includes securing applications during development and regularly updating them to patch vulnerabilities.
        Information Security: Protects the integrity and privacy of data, both in storage and in transit. This involves encryption, access controls, and secure data storage practices.
        Endpoint Security: Secures end-user devices, such as computers and mobile devices, from threats by employing antivirus software, endpoint detection and response.
        </p>

      </div>

    </div>

    <Footer/>
    </>
  )
}

export default Web3