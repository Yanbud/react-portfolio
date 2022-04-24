import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

export default function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [info, setInfo] = useState('');


  const inputName = document.querySelector('#name')
  const inputEmail = document.querySelector('#email')
  const textMessage = document.querySelector('#message')
  const submit = document.querySelector('#submit')

  const handleValidation = (e) => {
    const { target } = e;
    const inputId = target.id;
    if (inputId === 'name') {
      setName(target.value);
      if (!target.value) {
        setInfo('Name is required.')
      }
      else (setInfo(''))

    }
    if (inputId === 'email') {
      setEmail(target.value);
      if (!target.value) {
        setInfo('Email is required.')
      }
      else if (!validateEmail(email)) {
        setInfo('Your Email is invalid.')
      }
      else (setInfo(''));

    }
    if (inputId === 'message') {
      setMessage(target.value);
      if (!target.value) {
        setInfo('Message is required.')
      }
      else (setInfo(''));

    }
    if (name && email && message && validateEmail(email)) {
      submit.classList.remove('disabled');
    }
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && message && validateEmail(email)) {
      setInfo('Thank you!');
      inputName.value = '';
      inputEmail.value = '';
      textMessage.value = '';
      setName('');
      setEmail('');
      setMessage('');
      submit.className += ' disabled';
    }
  }
  return (<div className="paddsection">
    <div className="container">
      <h2>Contact</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" className="form-control" id="name"
            placeholder="Enter name" onChange={handleValidation} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address:</label>
          <input type="email" className="form-control" id="email"
            placeholder="Enter email" onChange={handleValidation} />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea className="form-control" id="message" placeholder="Enter message" row="3" onChange={handleValidation} ></textarea>
        </div>
        {info && (<div id="alertInfo" className="alert alert-secondary" role="alert">
          {info}
        </div>)}


        <button type="button" id="submit" className="btn btn-custom disabled" onClick={handleSubmit} >Submit</button>
      </form>
    </div></div>
  );
}
