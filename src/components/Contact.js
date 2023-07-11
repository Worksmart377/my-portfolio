import React from 'react'

const Contact = () => {
    return (
    <div name='contact ' className='contact-container'>
        <form className='form-group contact' action="https://getform.io/f/373d80be-f0e9-4179-bf31-4943a4af40cf" method="POST">
            <div>
                <h2>Contact</h2>
                <p>Submit the form below to contact me</p>
            </div>
            <label for="name" class="form-label mt-4">Name</label>
            <input type="text" class="form-control" placeholder='Name' name='name' />
            <label for="exampleInputEmail1" class="form-label mt-4">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name='email'/>            
            <label for="Textarea" class="form-label mt-4">Message</label>
            <textarea class="form-control" id="exampleTextarea" rows="10" placeholder='Enter Message' name='message'></textarea>            
            <button className='btn btn-outline-dark'>Contact Me</button>
        </form>
    </div>
    )
}

export default Contact