import React from 'react';
import {ContactContainer, MapContainer,SmileyDiv,YellowSmiley} from './Contact.style'
import Feedback from './Feedback';
import Footer from './Footer';


function Contact() {
  return (
<ContactContainer>

    <MapContainer>
    <YellowSmiley>
            <img src='/images/goodie1.png'/>
        </YellowSmiley>
        <SmileyDiv>
            <img src='/images/goodie2.png'/>
        </SmileyDiv>
    </MapContainer>

    <Feedback />
    <Footer />
</ContactContainer>
  )
}

export default Contact