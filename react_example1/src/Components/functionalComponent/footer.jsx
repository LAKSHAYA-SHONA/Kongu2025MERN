import React from 'react'
import '../../assets/css/footer.css'

var Footer = () => {
    return(
        <div className='Foot'>
        <footer>
            <form>
                <label>Name:</label><br/>
                <input type='text' placeholder='Enter your Name'></input>
                <br/>
                <label>Email:</label><br/>
                <input type='email' placeholder='Enter your Email'></input>
                <br/>
                <label>Phone number:</label><br/>
                <input type='text' placeholder='Enter your Phone Number'></input>
                <br/>
                <button type='button' placeholder='Submit'>Submit</button>
            </form>
        </footer>
        </div>
    )
}
export default Footer;