import React from 'react';
import '../CSS/Footer.css';
import f1 from '../Images/footer.jpg';
import f2 from '../Images/footer1.jpg';
import f3 from '../Images/footer2.jpg';

const Footer = () => {
    return (
        <div> 
            <div className='footer'>
                <img style={{ paddingLeft: '100px' }} className="footerPic" src={f1} alt="footer1" />
                <img className="footerPic2" src={f2} alt="footer2" />
                <img style={{ paddingRight: '100px' }} className="footerPic" src={f3} alt="footer3" />
            </div>
            <div className='bottomText'> 
                Copyright © 2024 Alpha Rho Memorial Foundation. All Rights Reserved.
                <br/>
                <br/>
            </div>
        </div>
    );
};

export default Footer;

