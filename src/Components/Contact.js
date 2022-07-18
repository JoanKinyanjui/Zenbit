import React from 'react';
import {ContactContainer, MapContainer,YellowSmileyImg,SmileyDiv,YellowSmiley,SmileyImg} from './Contact.style'
import Feedback from './Feedback';
import Footer from './Footer';


function Contact() {
  return (
<ContactContainer>

    <MapContainer>
    <YellowSmiley>
            <YellowSmileyImg src='/images/goodie1.png'/>
        </YellowSmiley>
        <SmileyDiv>
            <SmileyImg src='/images/goodie2.png'/>
        </SmileyDiv>
    </MapContainer>

    <Feedback />
    <Footer />
</ContactContainer>
  )
}

export default Contact