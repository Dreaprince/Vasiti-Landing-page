import React from 'react'
import { Link } from 'react-router-dom'
import face from '../images/facebook.png'
import inn from '../images/in.png'
import ig from '../images/ig.png'
import tw from '../images/tw.png'
import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-now'>
                        <div className='footer-link-items'>
                            <h2>Company</h2>
                            <Link to='/sign-up'>About us</Link>
                            <Link to='/'> Term of Use</Link>
                            <Link to='/'>Priate Policy</Link>
                            <Link to='/'>Press & Media</Link>
                        </div>
                        <div className='footer-link-items'>
                            <h2>Production</h2>
                            <Link to='/sign-up'>Marketplace</Link>
                            <Link to='/'>Magazine</Link>
                            <Link to='/'>Seller</Link>
                            <Link to='/'>Wholeseller</Link>
                            <Link to='/'>Services</Link>
                        </div>
                    </div>  
                    <div className='footer-link-now'> 
                        <div className='footer-link-items'>
                            <h2>Careers</h2>
                            <Link to='/sign-up'>Become a Campus Rep</Link>
                            <Link to='/'> Become a Vasiti Influencer</Link>
                            <Link to='/'>Become a Campus Writer</Link>
                            <Link to='/'>Become an Affiliate</Link>
                        </div>
                        <div className='footer-link-items'>
                            <h2>Get in touch </h2>
                            <Link to='/contact-us'>Contact us</Link>
                            <Link to='/'>Partner with us</Link>
                            <Link to='/'>Advertise with us</Link>
                            <Link to='/'>Help/FAQs</Link>
                        </div>
                    </div>  
                    <div className='footer-link-now'>    
                        <div className='footer-link-items'>
                            <h2>Join our community </h2>
                            <div className='row'>
                                <Link to='/'>
                                    <div className="imageWrapper">
                                    <img src={face} alt=""/>
                                    </div>                             
                                </Link>
                                <Link to='/'>
                                    <div className="imageWrapper">
                                    <img src={inn} alt=""/>
                                    </div>                             
                                </Link>
                                <Link to='/'>
                                    <div className="imageWrapper">
                                    <img src={tw} alt=""/>
                                    </div>                             
                                </Link>
                                <Link to='/'>
                                    <div className="imageWrapper">
                                    <img src={ig} alt=""/>
                                    </div>                             
                                </Link>
                            </div>
                            <Link to='/'>Email Newsletter</Link>
                        </div>
                    </div>     
                </div>
            </div>
        </div>
    )
}

export default Footer
