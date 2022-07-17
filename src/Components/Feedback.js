import React, { useState } from 'react';
import {FormContainer, InputContainer,SubmitButton,Textarea,Input, Ptag} from './Contact.style';
import {useAddUsersMutation} from './Services/Services';

function Feedback() {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [message,setMessage]=useState('');

  const  [AddUsers]=useAddUsersMutation();
  const handleUsers=async(e)=>{
        e.preventDefault();
        setEmail('')
        setName('')
        setMessage('')
       const user ={
        name,
        email,
        message
      };
      await AddUsers(user);
  console.log(name)
  }

  return (
    <div>
       
        <InputContainer>
        <Ptag>Reach Out To us!</Ptag>
        <FormContainer onSubmit={handleUsers} >
            <Input  type='text' placeholder='Your name*' value={name} onChange={(e)=>setName(e.target.value)}/><br />
            <Input type='text' placeholder='Your email*'   value={email} onChange={(e)=>setEmail(e.target.value)}/><br />
            <Textarea  type='text' placeholder='Your message*'    value={message} onChange={(e)=>setMessage(e.target.value)}/><br/>
            <SubmitButton type='submit' value='Send Message'/>
        </FormContainer>
        </InputContainer>
    </div>
  )
}

export default Feedback