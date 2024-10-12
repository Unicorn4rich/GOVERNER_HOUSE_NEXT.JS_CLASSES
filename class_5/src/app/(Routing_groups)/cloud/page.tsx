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
        <Image src={"/cloud.jpg"} alt="Cloud Computing" height={100}  width={690} className='h-[440px] w-[600px]'/>
      </div>

      <div className='rout_div2'>
      <h1 className='rout_heading'>Cloud Computing: Transforming the Way We Access and Manage Data</h1>

        <p className='rout_para'>
        Cloud computing has revolutionized the way businesses and individuals access and manage data, applications, and services. By leveraging remote servers hosted on the internet, cloud computing enables users to store, process, and analyze information without the need for local infrastructure. This technology has become essential in today's digital landscape, offering scalability, flexibility, and cost-efficiency. Understanding Cloud Computing
        At its core, cloud computing refers to the delivery of computing services over the internet. These services can be categorized into three main models:
        Infrastructure as a Service (IaaS): Provides virtualized computing resources over the internet, allowing users to rent servers, storage, and networks. This model enables businesses to scale their IT infrastructure without the need for physical hardware.
        Platform as a Service (PaaS): Offers a platform for developers to build, deploy, and manage applications without worrying about the underlying infrastructure. PaaS provides tools and services that simplify the development process.
        Software as a Service (SaaS): Delivers software applications over the internet, allowing users to access them through web browsers without installation. Popular examples include Google Workspace, Microsoft 365, and Salesforce.
        </p>

      </div>

    </div>

    <Footer/>
    </>
  )
}

export default Web3