import React from 'react';
import '../CSS/Donate.css'; 
import paypal from '../Images/paypal.png'; 

const Donate = () => {

    const donationInfo = (
        <div>
            <h2>Donation by Mail</h2>
            <p>The Foundation appreciates your gifts which can be made payable to:
            "Alpha Rho Memorial Foundation"
            and mailed to the following address:
            <br /><br />
            <div className="donate-center">
            Alpha Rho Memorial Foundation
            <br />
            P.O. Box 46
            <br />
            Morristown, NJ 07963
            <br /><br />
            </div>
            Please specify to which Memorial, Endowment or Gold Start fund you wish to allocate your gift.
            In the event that a fund is not specified, gifts will be allocated to the general endowment fund.
            </p>
            <h2>Donation via PayPal</h2>
            <p>
            By selecting the Donate button below, you will be redirected to the PayPal website
            and an Alpha Rho Memorial Foundation donation page.
            <br /><br />
            Please note that you will have the opportunity to specify the
            Memorial, Endowment or Gold Star fund to which you wish to allocate your gift.
            The option appears on PayPal's "review your donation" page.  
            In the event that a fund is not specified, gifts will be allocated to the general endowment fund.
            </p>
        </div>
    );

    const donationButton = (
        <div style={{ paddingTop: '1vw' }}>
            <a href="https://www.paypal.com/cgi-bin/webscr" target="_blank" rel="noreferrer">
                <img src={paypal} alt="paypal link"/>
            </a>
        </div>
    );

    return (
        <div className="donate-main">
            <div className="donate-body">
                <h1>Make a Donation</h1>
                {donationInfo}
                {donationButton}
            </div>
        </div>
    );
};

export default Donate;
