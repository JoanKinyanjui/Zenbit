import React from 'react';
import {FooterContainer,PinkSmileyDiv,SocialsDiv,TinyYellowSmileyDiv,TurqoiseSmileyDiv} from './Contact.style'

function Footer() {
  return (
    <FooterContainer>
        <PinkSmileyDiv>
            <img src='/images/pink-smiley.png'/>
        </PinkSmileyDiv>
        <SocialsDiv>
            <img src='/images/socials.png'/>
        </SocialsDiv>
        <TurqoiseSmileyDiv>
            <img src='/images/turqoise.png'/>
        </TurqoiseSmileyDiv>
        <TinyYellowSmileyDiv>
            <img src='/images/goodie3.png'/>
        </TinyYellowSmileyDiv>
    </FooterContainer>
  )
}

export default Footer