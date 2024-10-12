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
        <Image src={"/ai.jpg"} alt="web3" height={200}  width={640} className='h-[440px] w-[600px]'/>
      </div>

      <div className='rout_div2'>
      <h1 className='rout_heading'>Artificial Intelligence (AI): Transforming the Future of Technology</h1>

        <p className='rout_para'>
        Artificial Intelligence (AI) has rapidly emerged as one of the most transformative technologies of our time, reshaping industries and altering how we interact with the digital world. By mimicking human cognitive functions, AI enables machines to learn from experience, analyze data, and make decisions with minimal human intervention. From personal assistants like Siri and Alexa to advanced applications in healthcare, finance, and autonomous vehicles, AI is redefining what is possible in the realm of technology.Understanding A
        At its core, AI encompasses a variety of subfields, including machine learning, natural language processing (NLP), robotics, and computer vision.
        Machine Learning (ML) is a subset of AI that focuses on the development of algorithms that allow computers to learn from and make predictions based on data. ML algorithms identify patterns and improve their accuracy over time without explicit programming.
        Natural Language Processing (NLP) enables machines to understand and interpret human language, facilitating seamless interaction between humans and computers. NLP is behind technologies like chatbots, language translation services, and voice recognition systems.
        </p>

      </div>

    </div>

    <Footer/>
    </>
  )
}

export default Web3