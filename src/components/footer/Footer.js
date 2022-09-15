import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import "./Footer.css"

function Footer() {
    return (

        <div className='footer'>
            <hr />
            <div className='footer-wrapper'>

                <div className='footer-left'>
                    <img src='https://icon-library.com/images/movie-icon-app/movie-icon-app-25.jpg' alt='icon' />
                    <div className='footer-para'>
                        <p>
                            Our eminent clientele is spread across the world. Stackroots is your perfect partner to handle your key operations with a passion to deliver prolific results without compromising on quality at any stage.
                        </p>
                    </div>
                </div>

                <div className='footer-center'>
                    <p>Home</p>
                    <p>About</p>
                    <p>Services</p>
                    <p>Company</p>
                </div>

                <div className='footer-right'>
                    <p>Follow us on</p>
                    <div className='footer-social'>
                        <FacebookIcon />
                        <TwitterIcon />
                        <InstagramIcon />
                        <LinkedInIcon />
                    </div>
                </div>
            </div>

            <div className='footer-copyright'>
                <p>Copyright © 2022. Movie Man</p>
            </div>

        </div>
    )
}

export default Footer