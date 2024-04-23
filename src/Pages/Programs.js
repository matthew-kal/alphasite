import React, { useState } from 'react';
import '../CSS/Programs.css';
import Neophyte from '../Images/Neophyte.jpg';
import Jack from '../Images/Jack.jpg';
import Seger from '../Images/Seger.jpg';
import Wharton from '../Images/Wharton.jpg';
import download_icon from '../Images/download_icon1.png';
import file1 from '../Files/armf-application-macdowell-award-v20230123.doc';
import file2 from '../Files/armf-application-royce_scholarship-award-v20230302.doc';
import file3 from '../Files/armf-application-scholarship-improvement-award-v20230123.doc';
import file4 from '../Files/armf-application-scholarship-incentive-award-v20230123 (2).doc';
import file5 from '../Files/armf-application-wharton-award-v20230123.doc';
import file6 from '../Files/armf-gia-v20230123.doc';

const Programs = () => {

    const scholarshipInfo = (
        <div>
            <p>An undergraduate member, current in all financial obligations to the Alpha and the Alpha Rho Alumni Association, living in the Lodge or, at the Trustees' discretion, a member who applied to live in the Lodge, but was excluded due to space limitations or unavoidable housing contracts, is eligible to apply annually for both Incentive and Improvement Awards which may be awarded by the Trustees based on each eligible member's application and the listed criteria including Chi Psi Conduct.</p>
            <h3>Scholarship Incentive Awards</h3>
            <p>Eligible members may apply annually for a Scholarship Incentive Awards on the basis of their cumulative grades at the close of the Fall Term. An application recommended by the Trustees of the Alpha Rho Alumni Association will be considered by the Trustees of the Foundation. The following awards are available:</p>
            <div className="programs-row">
                <div className="programs-section">
                    <u>GPA</u><br/>
                    3.4 - 3.699<br/>
                    3.7 or higher 
                </div>
                <div className="programs-section">
                    <u>Award</u><br/>
                    $200<br/>
                    $300
                </div>
            </div>
            <h3>Scholarship Improvement Awards</h3>
            <p>Eligible members may also apply annually for Scholarship Improvement Awards. An award is available to the five (5) eligible members whose cumulative Grade Point Averages have improved the most of all members applying for the awards. Improvement is measured by comparing cumulative final grades from two successive Fall Terms, the second of which shall be the Fall Term immediately preceding the date of the application. An application recommended by the Trustees of the Alpha Rho Alumni Association will be considered by the Trustees of the Foundation. Five $250 awards are available. </p>
        </div>
    );

    const buttonNames = [
        "Neophyte Award", 
        "T. Girard Wharton, P'25 Scholastic Excellence Awards", 
        "H. Seger Slifer, E'12 Award", 
        "J. F. 'Jack' Schwanhausser, P'46 Leadership Award", 
        "Dave MacDowell, P’59 Armed Forces Service Award",
        "William Andrew Royce P’78 Spirit Award", 
        "E. F. Drake, P'32 Award", 
        "Student Grant-In-Aid", 
        "Forms & Applications"
    ];

    const [selectedScholarship, setSelectedScholarship] = useState(buttonNames[0]);

    const scholarshipDescriptions = {
        "Neophyte Award": (
            <span>
                During their first year as a Brother, our newest Brothers are invited to apply for the Neophyte Award. An award is available to the Brother who, the semester after his initiation, has the highest Grade Point Average of all Brothers with whom he pledged.
                <br /><br />
                The Neophyte Award is given twice annually: once to a member of the Fall pledge class and once to a member of the Spring pledge class. The awards are distributed during the Spring Initiation Banquet. Awards of $150 are available.
                <br /><br />
                <img src={Neophyte} alt="Neophyte Award"/>
            </span>
        ),
        "T. Girard Wharton, P'25 Scholastic Excellence Awards": (
            <span>
                The Trustees established the T. Girard Wharton, P'25 Scholastic Excellence Awards in June 1992 in recognition of Brother Wharton's forty years of service to the Foundation.
                <br /><br />
                Awards of $200 per societal induction to Phi Beta Kappa, Tau Beta Pi, Sigma Xi, and Cap and Skull are available. 
                <br /><br />
                Awards of $100 per societal induction to Association of College Honor Societies (ACHS) are also available. For a full list of the more than 60 ACHS member societies visit the ACHS Member Society Search page and select "search" while leaving the search fields blank.
                <br /><br />
                Brothers are eligible for a maximum of $500.00 in cumulative T. Girard Wharton, P'25 Scholastic Excellence Awards during their tenure as an undergraduate Brother.
                <br /><br />
                <img src={Wharton} alt="T. Girard Wharton Award"/>
            </span>
        ),
        "H. Seger Slifer, E'12 Award": (
            <span>
                The Senior Award, established in 1924, was subsequently adopted as an annual award in memory of Brother H. Seger Slifer, E'12, who served as President of the Chi Psi National Fraternity from 1961-1967.
                <br /><br />
                The members of the Alpha may nominate a senior member for the award based on "scholarship, activities, fraternal service and Chi Psi conduct." An application recommended by the Trustees of the Alpha Rho Alumni Association will be considered by the Trustees of the Foundation. An award of $250 is available.
                <br /><br />
                <img src={Seger} alt="H. Seger Slifer Award"/>
            </span>
        ),
        "J. F. 'Jack' Schwanhausser, P'46 Leadership Award": (
            <span>
                In January 2009, the Trustees of the Foundation voted to establish and fund the J.F. "Jack" Schwanhausser, P'46 Leadership Award. The Award is named after Jack Schwanhausser who was the first recipient of a Grant-in-Aid from the Foundation and who spent a lifetime "paying it back" over and over again. Jack's college career was interrupted, as many were, by the Second World War. Jack served 195 days in front line combat during that war in Belgium, Holland and Germany. Jack was Honorably Discharged November 1945 after earning: the rank of Sergeant, Company Communications Chief, The Combat Infantryman's Badge, The Bronze Star and three Campaign Ribbons. Jack graduated from Rutgers in 1949.
                <br /><br />
                The Chi Psi experience has always been an important part of Jack's life. Through his father, Jack has roots that reach to the founding of Alpha Rho in 1879 at Rutgers and to the founding of the Fraternity itself in 1841 at Union College. Jack's wife of 60 years, Jane Schwanhausser, had this to say about the importance of the Chi Psi experience for Jack and other returning veterans: "The brotherhood to which they returned helped to stabilize their lives for all they wanted to do at that time was get on with it and try to make up for lost time."
                <br /><br />
                At the time the Award was established, Jack had been out of college for almost 60 years, had served on the Foundation for more than 35 years and, before that, had served on the Alumni Association. Jack therefore demonstrated, by example, Chi Psi's values and traditions with some of Alpha Rho's most celebrated personalities: Bones Lundberg, P'24, Gerry Wharton, P'25 and Hank Bartels, P'45 to name a few.
                <br /><br />
                The Award was named in honor of Brother Schwanhausser because he represents, for many of us, the best of Chi Psi and his life of service, leadership and sacrifice are beacons for the young men who are asked to lead Alpha Rho at the highest level. The Foundation believes that a successful organization needs leaders at every level and especially needs a leader who sets the right tone at the top. The Schwanhausser Award is directed to the individual who is responsible for setting the tone at the top at the Alpha – the #1. Through this Award, the Foundation recognizes that to meet the challenges of being #1, you soon learn that you are well served to look to yourself and the qualities your peers saw in you, the fraternity's ideals and its exemplary leaders, like Jack, who have preceded you, persisted and succeeded.
                <br /><br />
                The award is provided annually to the #1 of Alpha Rho of Chi Psi, half payable at the initiation banquet next following his taking of office and half payable at the initiation banquet next following his favorable term of service as judged by the Trustees of the Foundation with input from the Trustees of the Alpha Rho Alumni Association; the amount of the award shall be $1,000 in total.
                <br /><br />
                <img src={Jack} alt="J. F. 'Jack' Schwanhausser Award"/>
            </span>
        ),
        "Dave MacDowell, P’59 Armed Forces Service Award": (
            <span>
                The Dave MacDowell, P’59 Armed Forces Service Award is given annually in honor of Dave MacDowell, P’59, who served as President of the Alpha Rho Alumni Association and Trustee of the Alpha Rho Memorial Foundation following his graduation from Rutgers College and proud service in the United States Navy, serving in the Pacific from 1960 to 1963. The members of the Alpha may nominate a senior member for the award based on "scholarship, fraternal service, Chi Psi conduct, and leadership in their respective armed forces officer training program." Preference is given to participation in Reserve Officers Training Corps (ROTC) followed by admission to the Army, Marine Corps, Navy, or Cost Guard’s Officer Candidate School (OCS), or the Air Force’s Officer Training School (OTS).
                <br /><br />
                An application recommended by the Trustees of the Alpha Rho Alumni Association will be considered by the Trustees of the Foundation. An award of $200 is available. Multiple awards in a single year may be given at the sole discretion of the Trustees of the Foundation.
            </span>
        ),
        "William Andrew Royce P’78 Spirit Award": (
            <span>
                The William Andrew Royce P’78 Spirit Award is given annually in honor of William A. Royce, P’78, who continues to exemplify the Spirit of Chi Psi through his commitment to our silver bonds, personification of his belief that our greatest gifts are our relationships and memories, and through the gifts he has bestowed upon countless Brothers including, but not limited to, initiating generations of our newest Brothers into our silver bonds.
                <br /><br />
                The award is available each year to members of Alpha Rho of Chi Psi’s senior class. It is granted to a graduating Brother that has demonstrated that “Chi Psi is a Thing Of The Spirit.” The candidate need not have been an officer but nevertheless must have served the brotherhood as an inspirational leader in any area of life at the Lodge by his actions and the example he set. Special consideration is given to those candidates that have served accordingly as a mentor and role model to their underclass Brothers. The Foundation seeks specific examples of such conduct of the demonstration of these qualities, as a true Chi Psi gentleman.
                <br /><br />
                The candidate must be in good standing as a Chi Psi, current in all financial obligations to both the Alpha and the Alpha Rho Alumni Association and lived in the Lodge for at least one year. Applicants who applied to live in the Lodge but were excluded due to space limitations or other unavoidable circumstances may be considered for this award by the Alpha Rho Memorial Foundation at their sole discretion.
            </span>
        ),
        "E. F. Drake, P'32 Award": (
            <span>
                The Trustees established the E. F. Drake, P'32 Award in 1980 in memory of Brother Edwin Francis Drake, P'32 who was a member of Phi Beta Kappa, Class President, Editor-in-Chief of the Scarlet Letter and associate editor of the Targum. Brother Drake played football, basketball, and raced at the Penn Relays as a member of the track team. In September 1932, he was the youngest of five men from the Mid-Atlantic Region to receive a Rhodes Scholarship to Oxford.
                <br /><br />
                Brother Drake served with the Intelligence Division of the Army Air Forces for 16 months in North Africa. While there, he gathered information that resulted in a successful attack on the German airbase at Foggia, Italy. He died in a plane crash over the Mediterranean shortly after being promoted to Major. He was awarded the Legion of Merit for exceptionally meritorious conduct in the performance of outstanding service in the Northwest African Strategic Air Force.
                <br /><br />
                The members of the Alpha may nominate an undergraduate member for consideration by the Trustees of the Alpha Rho Alumni Association and by the Trustees of the Foundation for this prestigious and infrequently given award. The Trustees closely review the application to determine if the nominee excels in both scholarship and campus activities in a manner similar to that of Brother Drake. An award of $500 is available.
            </span>
        ),
        "Student Grant-In-Aid": (
            <span>
                Grants-In-Aid are made to both undergraduate and graduate student Brothers who attend institutions approved by the Trustees. Grants-In-Aid are provided with the understanding that recipients will endeavor to contribute to the Foundation whenever possible in the future in order to perpetuate and increase its endowment for those needing assistance in future years.
                <br /><br />
                Grants-In-Aid vary in amount and are considered by the Foundation trustees based on demonstrated need and the recommendations of the #1 and #4 of the Alpha and the recommendation of the Joint Committee on Grant-In-Aid Applications of the Alpha Rho Alumni Association and the Alpha Rho Memorial Foundation. The Trustees may make such Grants-In-Aid as they deem reasonable in light of the foregoing recommendations and their own investigation.
                <br /><br />
                Brothers must apply for all Grants-In-Aid. Applications recommended by the #1 and the #4 of the Alpha, the Trustees of the Alpha Rho Alumni Association or the Joint Committee on Grants-In-Aid Applications of the Alpha Rho Alumni Association and the Alpha Rho Memorial Foundation, as the case may be, will be considered by the Trustees of the Foundation, who will, in due course, approve or disapprove applications in their sole and absolute discretion.
            </span>
        ),
        "Forms & Applications": (
            
            <span>   
             <a class="programs-roundedButton2" href={file1} download="armf-application-scholarship-incentive-award-v20230123.doc">
            <img src={download_icon} alt="download"></img>
            Scholarship Incentive Award Application
            </a>
            <br />
            <a class="programs-roundedButton2" href={file2} download="armf-application-scholarship-improvement-award-v20230123.doc">
            <img src={download_icon} alt="download"></img>
            Scholarship Improvement Award Application
            </a>
            <br />
            <a class="programs-roundedButton2" href={file3} download="armf-application-macdowell-award-v20230123.doc">
            <img src={download_icon} alt="download"></img>
            Dave MacDowell, P’59 Armed Forces Service Award Application
            </a>
            <br />
            <a class="programs-roundedButton2" href={file4} download="armf-application-royce_scholarship-award-v20230302.doc">
            <img src={download_icon} alt="download"></img>
            William Andrew Royce, P'78 Spirit Award Application
            </a>
            <br />
            <a class="programs-roundedButton2" href={file5} download="armf-application-wharton-award-v20230123.doc">
            <img src={download_icon} alt="download"></img>
            T. Girard Wharton, P'25 Awards Application
            </a>
            <br />
            <a class="programs-roundedButton2" href={file6} download="armf-gia-v20230123.doc">
            <img src={download_icon} alt="download"></img>
            Grant-In-Aid Application
            </a>

        </span>
        
        ),
    };

    const handleButtonClick = name => {
        setSelectedScholarship(name);
    };

    const buttons = buttonNames.map(name => (
        <button key={name} className="programs-roundedButton" onClick={() => handleButtonClick(name)}>
            {name}
        </button>
    ));

    return (
        <div className="programs-main">
            <div className="programs-body">
                <h2>Scholarship Awards</h2>
                {scholarshipInfo}
                <hr />
                <div className="programs-flexContainer">
                    <div className="programs-buttonContainer">
                        {buttons}
                    </div>
                    <div className="programs-contentContainer">
                        <h3>{selectedScholarship}</h3>
                        <p>{scholarshipDescriptions[selectedScholarship]}</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Programs;

