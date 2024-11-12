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
        <Image className='rout_img' src={"/web3.webp"} alt="web3" height={100}  width={700} className='h-[440px w-[600px]'/>
      </div>

      <div className='rout_div2'>
      <h1 className='rout_heading'>Web 1.0, Web 2.0, and Web 3.0 The Evolution of the Web:</h1>

        <p className='rout_para'>
        The internet has drastically evolved over the years, starting from its early days of Web 1.0, often called the "read-only" web. In this phase, users could only consume information from static websites without any interaction. It was primarily made for information sharing, like an online library or a digital brochure.
        Then came Web 2.0, transforming the internet into an interactive platform. This is the "read-write" web, where users could not only read but also create and share content. Social media, user-generated content, and platforms like Facebook, YouTube, and Twitter thrived during this period. Web 2.0 made the internet a two-way street, enabling user engagement through comments, likes, shares, and multimedia uploads.
        Now, we are transitioning into Web 3.0, the decentralized web. Powered by blockchain, AI, and smart contracts, Web 3.0 aims to give control back to users. Instead of relying on large corporations, data and transactions are handled in a decentralized, transparent manner. Users can own digital assets through NFTs, transact securely via cryptocurrencies, and interact with decentralized applications (dApps) that ensure privacy and security.
        </p>

      </div>

    </div>

    <Footer/>
    </>
  )
}

export default Web3