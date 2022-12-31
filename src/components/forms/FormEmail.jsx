
import './contactUs.css'
import React from 'react';
import emailjs from 'emailjs-com';

export default function ContactUs(props) {

    function sendEmail(e) {
        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

        emailjs.sendForm('service_ibcx8m4', 'template_mnm57go', e.target, 'Q-46vOQMp6zZnQjZI')
            .then((result) => {
                window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
            }, (error) => {
                console.log(error.text);
            });
    }

    return (props.trigger) ? (
        <div className='popup'>
            <form className="contact-form" onSubmit={sendEmail}>
                <h1>Enter your details</h1>
                {/* <input type="hidden" name="contact_number" /> */}
                {/* <label>Name</label> */}
                <input type="text" name="from_name" placeholder='Name' required />
                {/* <label>Email</label> */}
                <input type="email" name="from_email" placeholder='Email' required />
                {/* <label>Subject</label> */}
                <input type="text" name="subject" placeholder='Subject' required />
                {/* <label>Message</label> */}
                {/* <textarea name="html_message" required />/ */}
                {/* <label>Phone Number</label> */}
                <input type="text" name="number" placeholder='Phone Number' required />
                <input type="submit" value="Send" required />
                <button className='close-button' onClick={() => props.setTrigger(!props.trigger)}>close </button>
            </form>
        </div>
    ) : "";
}