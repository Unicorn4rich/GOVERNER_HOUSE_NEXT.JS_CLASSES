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
        <Image src={"/block.jpg"} alt="Blockchain" height={100}  width={690} className='h-[440px] w-[600px]' />
      </div>

      <div className='rout_div2'>
      <h1 className='rout_heading'>Blockchain: A Revolutionary Technology for Secure Transactions:</h1>

        <p className='rout_para'>
        Blockchain technology has emerged as a transformative force in the digital age, providing a secure, transparent, and decentralized method of recording transactions. Originally designed to support cryptocurrencies like Bitcoin, blockchain's unique properties have made it applicable across various industries, reshaping how we conduct business, share information, and establish trust.
        Understanding Blockchain
        At its core, blockchain is a distributed ledger that records transactions across multiple computers, or nodes, in a way that ensures security and integrity. Each block in the chain contains a list of transactions, a timestamp, and a cryptographic hash of the previous block, creating a chain of information that cannot be altered retroactively. This decentralization minimizes the risk of data manipulation and enhances security.
        Key Features of Blockchain
        Decentralization: Unlike traditional databases controlled by a single entity, blockchain operates on a peer-to-peer network where all participants have access to the entire ledger, ensuring transparency and trust.
        Immutability: Once data is recorded on the blockchain, it cannot be changed or deleted, providing a reliable and permanent record of transactions.


        </p>

      </div>

    </div>

    <Footer/>
    </>
  )
}

export default Web3