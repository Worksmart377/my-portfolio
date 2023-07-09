import React from 'react'

const Contact = () => {
    return (
    <div name='contact ' className='contact-container'>
        <form className='contact' action="https://getform.io/f/373d80be-f0e9-4179-bf31-4943a4af40cf" method="POST">
            <div>
                <h2>Contact</h2>
                <p>Submit the form below to contact me</p>
            </div>
            <input type="text" placeholder='Name' name='name' />
            <input type="email" placeholder='Email' name='email' />
            <textarea type="message" rows='10' placeholder='Message' name='message'></textarea>
            <button>Contact Me</button>
        </form>
    </div>
    )
}

export default Contact