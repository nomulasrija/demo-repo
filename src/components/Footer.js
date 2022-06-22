import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faGoogle} from '@fortawesome/free-brands-svg-icons';


function Footer() {
    return (
        <MDBFooter bgColor='dark' className='text-center text-lg-start text-white'>
            <section className='d-flex justify-content-center justify-content-lg-between p-3 border-bottom'>
                <div className='me-5 d-none d-lg-block'>
                    <span>Get connected with us on:</span>
                </div>
                <div className='d-flex gap-4'>
                    <a href='https://www.facebook.com/TataStriveOfficial' className='link text-white'><FontAwesomeIcon icon={faFacebook} ></FontAwesomeIcon></a>
                    <a href='https://www.facebook.com/TataStriveOfficial' className='link text-white'><FontAwesomeIcon icon={faTwitter} ></FontAwesomeIcon></a>
                    <a href='https://www.facebook.com/TataStriveOfficial' className='link text-white'><FontAwesomeIcon icon={faGoogle} ></FontAwesomeIcon></a>
                    <a href='https://www.facebook.com/TataStriveOfficial' className='link text-white me-4'><FontAwesomeIcon icon={faInstagram} ></FontAwesomeIcon></a>  
                </div>
            </section>
            <div className='text-center p-2 text-muted' style={{ backgroundColor: 'white' }}>
            © TCIT 2021  |  All Rights Reserved  | <a href="https://www.tatastrive.com/PrivacyPolicy.html" class="text-muted"> Privacy and Cookies Policy</a> | <a href="https://www.tatastrive.com/LegalDisclaimer.html" class="text-muted"> Legal Disclaimer</a>
            </div>
        </MDBFooter>
    );
}

export default Footer;