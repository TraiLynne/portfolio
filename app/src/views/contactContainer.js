import React from 'react';
import '../styles/contact.css';

export default function ContactView(props){
    return (
        <div id='contact-container'>
                <h2>Questions, Comments, Concerns?</h2>
                <p>You can reach me the following ways:</p>
                <div className='contact-details'>
                <a class="typeform-share button" href="https://trailynnecompton.typeform.com/to/Oa5OYE" data-mode="popup" 
                data-hide-headers={true} 
                data-hide-footer={true} 
                data-submit-close-delay="0" 
                target="_blank" rel="noopener noreferrer">
                    <i class="fas fa-file-signature"></i>
                    Fill Out Contact Form 
                </a>
                <a href='mailto:trailynne@gmail.com' target='_blank' rel="noopener noreferrer">
                    <i class="fas fa-envelope-open-text"></i>
                     TraiLynne[@]gmail[dot]com
                    </a>

                <a href='https://www.linkedin.com/in/trai-lynne-compton/' target='_blank' rel="noopener noreferrer">
                    <i class="fab fa-linkedin-in"></i>
                     Trai Lynne Compton
                </a>

                <a href='https://github.com/trailynne' target='_blank' rel="noopener noreferrer">
                    <i class="fab fa-github"></i>
                     TraiLynne
                </a>

                <a href='https://www.instagram.com/trailynne/' target='_blank' rel="noopener noreferrer">
                    <i class="fab fa-instagram"></i>
                     @TraiLynne
                </a>

                <a href='https://twitter.com/trailynne/' target='_blank' rel="noopener noreferrer">
                    <i class="fab fa-twitter"></i>
                     @TraiLynne
                </a>
            </div>
        </div>
    )
}