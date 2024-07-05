import React from 'react'
import { FaInstagram} from "react-icons/fa"
import { CiMail } from "react-icons/ci"
import { FaLinkedinIn } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
const Contact = () => {
  return (
    <>
    <div className="contact" id='contact' >
      <div className="contact_icon">
        <a  href="https://www.instagram.com/iamanasmit/" className="items_contact" target='_blank'>
        <FaInstagram className='icons'></FaInstagram>
        </a> 
        <a href="https://www.linkedin.com/in/anasmit-mitra-14a518286/"  className="items_contact" target='_blank'>
          <FaLinkedinIn className='icons'></FaLinkedinIn>
        </a>
        <a href="https://github.com/iamanasmit"  className="items_contact" target='_blank'>
          <FaGithub className='icons'></FaGithub>
        </a>
        <a  href="mailto:23b2445@iitb.ac.in" className="items_contact" target='_blank'>
          <CiMail className='icons'></CiMail>
        </a>
      </div>
    </div></>
  )
}

export default Contact
