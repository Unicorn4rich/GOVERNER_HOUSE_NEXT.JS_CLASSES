import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <>

    <div className='footer'>

      <h1 className='footer_heading'>© 2024 All Rights Reserved by = SHOAIB</h1>
      <h1 className='F_heading'>Contact Us</h1>

       <div className='social'>
       <h1><Link href={"https://github.com/Unicorn4rich"}>Github</Link></h1>
       <h1><Link href={"https://www.linkedin.com/in/shoaib-khan-0679562b4/"}>Linkdin</Link></h1>
       <h1><Link href={"https://mail.google.com/mail/u/0/#inbox"}>Email</Link></h1>
      </div>

    </div>

    </>
  )
}

export default Footer