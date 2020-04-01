import React, { useState } from 'react';
import './styles/contact.scss'
import Github from '../images/github.png'
import Linkedin from '../images/linkedin.png'
import Email from '../images/email.png'
import CheckMark from '../images/checkmark.png'
import {CopyToClipboard} from 'react-copy-to-clipboard';


const Contact = () => {

  const [contact, setContact] = useState({
    value: 'ijerrito26@gmail.com',
    copied: false,
  });

  return (
    <div id='contactContainer'>
      <div id='contactTitle'>CONTACT ME</div>
      <p style={{textAlign: "center"}}>If you'd like to contact me, click on any of the links below!</p>
      <div id='logos'>
        <div id='emailSection'>
          <CopyToClipboard text={contact.value}
            onCopy={() => setContact({...contact, copied: true})}>
            <img id = 'emailLogo' src={Email} alt=''/>
          </CopyToClipboard>
          {contact.copied === true ?
          <>
            <img src={CheckMark} id='checkmark' />
            <p id='emailCopied'>Email copied to clipboard!</p>
          </>
          : null}
        </div>
        <a href='https://github.com/JerryOsorio28'>
          <img id = 'githubLogo' src={Github} alt=''/>
        </a>
        <a href='https://www.linkedin.com/in/jerryosorio/'>
          <img id = 'linkedinLogo' src={Linkedin} alt=''/>
        </a>
      </div>
      <div id='footer'>©2020 Jerry Osorio Portolio Website</div>
    </div>
  )
}

export default Contact;