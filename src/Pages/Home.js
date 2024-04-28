import lodge from '../Images/lodge_day.jpg'
import '../CSS/Home.css'

const Home = () => {

    const trusteesInfo = (
        <div>
          <h3>Trustees</h3>
          <p>
            <u>Class I - 2025</u><br />
            Moly K. Hung, P '88<br /><br />
      
            <u>Class II - 2026</u><br />
            Marc A. Greenberger, P '81<br />
            David A. Lindsey, P '83<br /><br />
      
            <u>Class III - 2023</u><br />
            Scott E. M. DeNardo, P '86<br />
            David C. Hopkins, P '89<br /><br />
      
            <u>Class IV - 2024</u><br />
            William E. Newell Jr., P '65<br />
            Vincent LeBlon, P '77<br /><br />
          </p>
        </div>
      );

      const officersInfo = (
        <div>
          <h3>Officers</h3>
          <p>
            <u>President</u>
            <br />
            David C. Hopkins, P '89
            <br /><br />
            <u>Vice President</u>
            <br />
            Vacancy
            <br /><br />
            <u>Vice President Development</u>
            <br />
            Marc A. Greenberger, P '81
            <br /><br />
            <u>Secretary</u>
            <br />
            Anthony Eagelton P '07
            <br /><br />
            <u>Treasurer</u>
            <br />
            David A. Lindsey, P '83
          </p>
        </div>
      );
    
      const advisorsInfo = (
        <div>
            <h3>Advisors</h3>
            <p>
            Michael R. Duncan, P '08
            <br /><br />
            Dr. Patrick Nosker, P '11
            </p>
        </div>
      );

      const resourcesInfo = (
        <div>
          <h3>Resources</h3>
          <p>
          <a href="https://chipsirutgers.wixsite.com/chipsirutgers" target="_blank" rel="noopener noreferrer">Alpha Rho of ΧΨ</a>
          <br/>
          <br/>
          <a href="https://www.chipsi.org/" target="_blank" rel="noopener noreferrer">ΧΨ National Fraternity</a>
          <br/>
          <br/>
          <a href="https://www.facebook.com/RUChiPsi/photos/?ref=page_internal" target="_blank" rel="noopener noreferrer">Alpha Rho Facebook</a>
          <br />
          <br />
          <a href="https://www.chipsi.org/about-us/the-national-fraternity/trust/" target="_blank" rel="noopener noreferrer">Chi Psi Educational Trust</a>
          <br />
          <br />
          <a href="https://www.rutgers.edu/" target="_blank" rel="noopener noreferrer">Rutgers University</a>
          </p>
        </div>
      );

      const contactInfo = (
        <div>
          <h3>Contact the Foundation</h3>
          <a href="mailto:Info@AlphaRhoMemorialFoundation.org">Info@AlphaRhoMemorialFoundation.org</a>
        </div>
      );

    return (
        <div class="main">
           <img src={lodge} alt={lodge}></img>
            <div class="body">
                <h2 style={{ textAlign:'center' }}>ΧΨ | Alpha Rho Memorial Foundation</h2>
                <p>Brothers in Chi Psi embrace a strong tradition, a standard of Brotherly Assistance which, in a unique way, is the basis of the Alpha Rho Memorial Foundation. To paraphrase; Brothers are expected to be "an inalienable and unalterable friend" to every other Brother who may, during his lifetime, "need succor and assistance".
                <br /><br />The Foundation, incorporated in 1949 with the aims of encouraging academic excellence and assisting deserving student actives of Alpha Rho in time of need, provides practical demonstrations of that principle in all its activities. Brothers in Alpha Rho, then, have very real examples of Brotherly Assistance which very few other Alphas enjoy - the support, encouragement and aid of the Memorial Foundation promoting and contributing to the education of the undergraduate and graduate Brothers of Alpha Rho through the Foundation's organized ongoing programs.
                <br /><br />The purpose of the Foundation may be briefly stated as "to aid, encourage, promote and contribute to the education of members of the Chi Psi Fraternity who from time to time shall be enrolled as students at Rutgers University."
                </p>
                <hr />
                <div class="memberInfo">
                    {trusteesInfo}
                    {officersInfo}  
                    <div class="memberInfo, stack">
                      {advisorsInfo}
                      <hr />
                      {resourcesInfo}
                    </div>
                    
                </div>
                <hr />
                <div class="contact">
                  {contactInfo}
                </div>               
            </div>

        </div>
    );
};

export default Home;



