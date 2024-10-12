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
        <Image  src={"/robot.jpg"} alt="Robot" height={300}  width={1000} className='h-[440px] w-[600px]'/>
      </div>

      <div className='rout_div2'>
      <h1 className='rout_heading'>Robotics: Shaping the Future of Automation and Innovation</h1>

        <p className='rout_para'>
        Robotics is an interdisciplinary field that combines engineering, computer science, and artificial intelligence to design, build, and operate robots. These machines are capable of performing tasks autonomously or with minimal human intervention, revolutionizing industries and everyday life. As technology advances, robotics continues to evolve, offering innovative solutions to complex problems across various sectors.Understanding Robotics
        At its core, robotics involves the development of machines that can carry out a range of tasks. Key components of robotics include:
        Sensors: Devices that collect data from the robot's environment, such as cameras, lidar, and proximity sensors. These inputs help robots perceive and navigate their surroundings.
        Actuators: Mechanical components that enable movement and control, such as motors and servos. Actuators translate commands from the robot's control system into physical actions.
        Control Systems: Algorithms and software that process data from sensors and make decisions to guide the robot's actions. Control systems can range from simple programmed instructions to advanced AI-driven decision-making processes.
        Robots are being utilized in a wide array of industries, including:
        Manufacturing: Industrial robots automate tasks such as assembly, welding, and painting, increasing efficiency, precision, and safety in manufacturing processes.
        Healthcare: Robots assist in surgeries, patient care.
        </p>

      </div>

    </div>

    <Footer/>
    </>
  )
}

export default Web3