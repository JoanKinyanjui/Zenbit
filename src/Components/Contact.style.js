import styled from "styled-components";
import MapImg from '../images/map.png';

export const ContactContainer =styled.div`
       height: max-content;
       width: 100vw;
       left: -720px;
       top: -564px;
       border-radius: 0px;
       background: rgba(255, 255, 255, 1);

`
export const MapContainer =styled.div`
height: 970px;
width: 50%;
position:absolute;
right: 0;
top: -28px;
border-radius: 0px;
/* border: 1px green solid; */
background-image: url(${MapImg});
background-size: cover;
border-radius:100% 0px 0px 100%;
box-shadow: inset 0px 16px 42px rgba(0, 0, 0, 0.1);
@media (max-width:768px){
height: 870px;
}
`

export const InputContainer =styled.div`
width: 40%;
height:670px;
position:absolute;
left:0;
margin-top:2rem;
`
export const FormContainer =styled.form`
display:block;
margin-top: 2rem;
`
export const SubmitButton =styled.input`
height: 60px;
width: 200px;
/* left: 150px;
top: 681px; */
border:none;
border-radius: 500px;
background: rgba(250, 211, 79, 1);
text-align:center;
line-height:60px;
font-family: Apercu Arabic Pro;
font-size: 15px;
color: rgba(255, 255, 255, 1);
@media (max-width:768px){
height: 30px;
width: 100px;
font-size: 8px;
line-height:8px;
}
`

export const Input =styled.input`
height:90px;
width: 500px;
left: 150px;
top: 368px;
border-radius: 10px;
margin-top:1rem;
border: 1px solid #DCDCDC;
@media (max-width:768px){
height:70px;
width: 400px;
left: 100px;
top: 358px;
border-radius: 5px;
}


`
export const Textarea =styled.textarea`
height:180px;
width: 500px;
margin-top:1rem;
left: 150px;
top: 368px;
border: 1px solid #DCDCDC;
border-radius: 10px;
border-radius: 10px;
@media (max-width:768px){
height:100px;
width: 400px;
left: 100px;
top: 358px;
border-radius: 5px;
}

`
export const SmileyDiv =styled.div`
height: 207.99998007368455px;
width: 214.00001045662182px;
left: -76.9px;
position:absolute;
top: 55%;
border-radius: 0px;
/* border:2px solid orange; */

`
export const YellowSmiley =styled.div`
height: 207.99998007368455px;
width: 214.00001045662182px;
left: -74.9px;
position:absolute;
top: 50%;
border-radius: 0px;
/* border:2px solid orange; */

`
export const FooterContainer =styled.div`
box-sizing: border-box;
position: absolute;
width: 100vw;
height: max-content;
left: 0px;
top: 900px;
background: #FAFAFA;
display: flex;
@media (max-width:768px){
height: max-content;
top:800px;
}
`
export const PinkSmileyDiv=styled.div`
height: 207.99998007368455px;
width: 214.00001045662182px;
left: 157.78814697265625px;
top: 0.15362548828125px;
border-radius: 0px;


`
export const SocialsDiv=styled.div`
height: 85.84411209780487px;
width: 88.3204150797413px;
top: 100.780517578125px;
left:25%;
position:absolute;
@media (max-width:768px){
top: 12.00px;
}
`

export const TurqoiseSmileyDiv=styled.div`
position: absolute;
height: 85.84411209780487px;
width: 88.3204150797413px;
top: 0.780517578125px;
right:10%;
`
export const TinyYellowSmileyDiv=styled.div`
position: absolute;
height: 85.84411209780487px;
width: 88.3204150797413px;
top: 50.780517578125px;
right:0;

`
export const TopYellowSmileyDiv=styled.div`
position: absolute;
height: 85.84411209780487px;
width: 88.3204150797413px;
top: 0.780517578125px;
left:0;

`

export const Ptag=styled.p`
font-size:28px;
width:100%;
@media (max-width:768px){
font-size: 23px;
}
@media (max-width:600px){
font-size: 18px;
}

`
