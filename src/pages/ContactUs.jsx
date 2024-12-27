import React from 'react'
import PizzalLeft from "../assets/pizzaLeft.jpg"
import "../style/Contact.css"

function ContactUs() {
    return (
        <div className="contact">
            <div className="leftSide" style={{ backgroundImage: `url(${PizzalLeft})` }}></div>
            <div className="contactRightSide">
                <form id="contact-form" method="POST">
                    <h1>Contact Us</h1>
                    <label htmlFor="name">Full Name</label>
                    <input name="name" type="text" placeholder="Enter full name..." />
                    <label htmlFor="email">Email</label>
                    <input name="email" type="email" placeholder="Enter email..." />
                    <label htmlFor="message">Message</label>
                    <textarea name="message" rows="6" placeholder='Enter message...' required ></textarea>
                    <button type = "submit">Send Message</button>
                </form>
            </div>

        </div>
    )
}

export default ContactUs
