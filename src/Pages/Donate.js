import '../CSS/Donate.css';
import paypal_icon from '../Images/paypal.png';

const Donate = () => {

    const donationInfo = (
        <div>
            <h3>Donation by Mail</h3>
            <p>The Foundation appreciates your gifts which can be made payable to:
            "Alpha Rho Memorial Foundation"
            and mailed to the following address:
            <br /><br />
            <div class="center">
            Alpha Rho Memorial Foundation
            <br />
            P.O. Box 46
            <br />
            Morristown, NJ 07963
            <br /><br />
            </div>
            Please specify to which Memorial, Endowment or Gold Start fund you wish allocate your gift.
            In the event that a fund is not specified, gifts will be allocated to the general endowment fund.
            </p>
            <h3>Donation via PayPal</h3>
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
        <a href="https://www.paypal.com/donate?token=phFUgjGD5EKeg_5YCuh45OEyJdr_sEBGyTIhl4T8aubpbp9ln2_aeYZZEecnH41qL1PxVXOBGSvDInBc" target="_blank" rel="noreferrer">
            <img src={paypal_icon} alt="paypal link" className="paypal-image"/>
        </a>
    );
    
    


    return (
        <div class="main">
            <div class="body">
                <h2>Make a Donation</h2>
                {donationInfo}
                {donationButton}
            </div>
        </div>
    );
};

export default Donate;