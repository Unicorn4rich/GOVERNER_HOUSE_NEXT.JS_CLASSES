"use client"
import Image from "next/image";
import { useState } from "react";

export default function Home() {

let [Counter, setCounter] = useState<number>(0)

  return (
  <>

   <h1>Word Counter</h1>

   <h2>{Counter}</h2>

  <button onClick={()=>{setCounter(Counter = Counter + 1)}}>Click</button>
  
  </>
  );
}


/* NOTES 


Todo number counter

ISR all server
API  => rest api + graph url + web sokit  => methods mujhe data chahiye => mera data lo + mera data delete karo + 
API => Get + post + put + delete
Compoenent kitne hoty hain API ke liye
3 component hoty hain => Clinet => Server => DataBase
http = https  = FTP  => wht is thisa  data transfer protocol

assigment Crypto currency webpage pe show krwani hai rates ke sath




















*/