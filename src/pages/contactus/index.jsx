import React, { useRef } from "react";
import "./contactstyle.css"
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const divStyles = {
    boxShadow: '1px 3px 5px #1C2833',
    margin: '2em',
    padding: '1em',
    background: '#797D7F',



  };
  

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_CONTACTUS_TEMPLATE_ID, form.current, process.env.REACT_APP_CONTACTUS_PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };
  return (

    <div style={{ backgroundColor: "white" }} className="container1">

      <form style={divStyles} ref={form} onSubmit={sendEmail}>
        <h1 style={{ color: "white" }}><center>----------CONTACT US----------</center></h1>
        <br /><br /><br />
        <input type="text" id="firstName" placeholder="First Name" required name='firstName' />
        <input type="text" id="lastName" placeholder="Last Name" required name='lastName' />
        <input type="email" id="email" placeholder="Email" required name='userEmail' />
        <input type="text" id="mobile" placeholder="mobile" required name='mobileNumber' />

        <h4>Type Your Message Here....</h4>
        <textarea required name='userMessage'></textarea>
        <input type="submit" value="Send" id="button"></input>
      </form>

    </div>
  );
}
export default ContactUs