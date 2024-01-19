import React, {useEffect} from 'react'
import './footer.css'
import video2 from '../../Assets/video (2).mp4'
import { GrSend } from "react-icons/gr";
import { SiYourtraveldottv } from "react-icons/si";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";

import Aos from 'aos'
import 'aos/dist/aos.css'

function Footer() {

  useEffect(()=>{
    Aos.init({duration: 2000})
  })

  return (
    <section className='footer'>
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input data-aos="fade-up" type="text" placeholder='Enter Email Address' />
            <button data-aos="fade-up" className="btn flex" type='submit' >
              SEND <GrSend className='icon' />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <SiYourtraveldottv className='icon' />
                Travel.
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nulla non ex orci. Curabitur pulvinar quam odio,
              euismod auctor lorem lacinia sit amet.
              Mauris a egestas velit. Nunc tincidunt odio nec velit
              porttitor, et pulvinar lorem laoreet.
            </div>

            <div data-aos="fade-up" className="footerSocials flex">
              <AiOutlineTwitter className='icon' />
              <AiFillYoutube className='icon' />
              <AiFillInstagram className='icon' />
              <FaTripadvisor className='icon' />
            </div>
          </div>

          <div className="footerLinks grid">

            <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
              <span className="groupTitle">
                OUR AGENCY
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Services
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Insurance
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Agency
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Tourism
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Payment
              </li>

            </div>

            <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
              <span className="groupTitle">
                PARTNERS
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Bookings
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Rebtcars
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Hostelworld
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Tivago
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                TripAdvisor
              </li>

            </div>

            <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
              <span className="groupTitle">
                LAST MİNUTE
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                London
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                California
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Indonesia
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Europe
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Oceania
              </li>

            </div>
          </div>

          <div className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE THEME</small>
            <small>COPYRIGHTS RESERVED - ISRATECT 2022</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer