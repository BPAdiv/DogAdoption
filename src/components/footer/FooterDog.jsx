import emailjs from 'emailjs-com';
import './footer.css'

function FooterDog() {

    function sendEmail(e) {
        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

        emailjs.sendForm('service_ibcx8m4', 'template_mnm57go', e.target, 'Q-46vOQMp6zZnQjZI')
            .then((result) => {
                window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div className="footer-page">
            <div className='wrap-footer'>
                <div className='footer-form'>
                    <form className="form-contact" onSubmit={sendEmail}>
                        {/* <label>Name</label> */}
                        <input type="text" name="from_name" placeholder='Name' required />
                        {/* <label>Email</label> */}
                        <input type="email" name="from_email" placeholder='Email' required />
                        {/* <label>Subject</label> */}
                        <input type="text" name="subject" placeholder='Subject' required />
                        {/* <label>Message</label> */}
                        {/* <textarea name="html_message" placeholder='Message' required /> */}
                        {/* <label>phonenumber</label> */}
                        <input type="text" name="number" placeholder='Phone Number' required />
                        <input type="submit" value="Send" required />
                    </form>
                </div>



                <div className='footer-contact'>
                    <span>: שעות פעילות</span>
                    <span>א'-ה' 10:00-15:00</span>
                    <span>שישי וערבי חג 10:00-15:00</span>
                    <span>שבת וימי חג 10:00-15:00</span>
                </div>
            </div>
        </div>
    )
}
export default FooterDog