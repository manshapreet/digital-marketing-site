import React from 'react'
import './Contact.css'
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineAttachEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";


const Contact = () => {
  return (

    <div className='Contact'>
        
        <div className='ContactMainBox'>
            <div className='SendMsgBox'>
                
                <div className='sendMsgHead'>
                    Reach out for a new project 
                    <br />or just say hello
                </div>

                <input type="text" placeholder='your name'/>
                <input type="text" placeholder='your email'/>
                <input type="text" placeholder='enter your message'/>

                <button className='contactBtn'>SEND</button>
            </div> 
        </div>

        <div className='ContactSubBox'>
            <div>
                <div className='sendMsgHead'>
                    Get In Touch
                </div>

                <div className='sendMsgContent'>
                    <div className='contactInfoIcons'>
                        <IoLocationOutline className='icon'/> 
                        32, Avenue Lorem, <br />Ipsum, 120004
                    </div>
                    <div className='contactInfoIcons'>
                        <MdOutlineAttachEmail className='icon'/> 
                        abc@gmail.com
                    </div>
                    <div className='contactInfoIcons'>
                        <IoCallOutline className='icon'/> 
                        9898989898
                    </div>
                    <div className='contactInfoIcons'>
                        <FaInstagram className='icon'/> 
                        Digital Marketing
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Contact

{/* <div>
            
        </div>

        */}