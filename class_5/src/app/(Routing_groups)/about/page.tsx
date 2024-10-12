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
        <Image src={"/kamo.png"} alt="web3" height={200}  width={640} className='h-[440px] w-[600px]'/>
      </div>

      <div className='rout_div2'>
      <h1 className='rout_heading'>Governor Kamran Tessori’s Free Web 3.0 Course Initiative for Karachi Residents</h1>

        <p className='rout_para'>
        In an exciting initiative to empower Karachi's residents, Governor Sindh, Kamran Tessori, has launched a free course on Web 3.0 technology for the people of Karachi. This initiative is part of his broader vision to equip the youth with cutting-edge skills that will make them competitive in the ever-evolving digital landscape. Web 3.0, the next generation of the internet, is quickly gaining traction, and this free course offers a significant opportunity for individuals from all walks of life to learn and advance in this futuristic domain.
        Web 3.0 is the next evolution of the internet, focusing on decentralization, blockchain technology, artificial intelligence (AI), and data ownership. Unlike the current Web 2.0, where large tech companies control most of the data and platforms, Web 3.0 aims to give users more control over their data and online identity.
        Decentralization: Rather than relying on centralized platforms (like Facebook, Google, etc.), Web 3.0 runs on decentralized networks, often using blockchain technology.
        Blockchain: The underlying technology behind cryptocurrencies like Bitcoin and Ethereum, blockchain ensures transparency and security by maintaining decentralized ledgers.
        </p>

      </div>

    </div>

    <Footer/>
    </>
  )
}

export default Web3