import '../CSS/History.css';
import React, { useState, useEffect } from 'react';  // Import React and useState hook


const History = () => {

    const page1 = (
        <div >
            <h2>Overview</h2>
            <p>
            While, over the years Alpha Rho alumni had given "aid and assistance to needy active members" the first recorded move toward a student aid program was in 1933 during the depths of the great depression when in order to keep a senior in college the Trustees of the Alpha Rho Alumni Association appealed to the alumni members of Alpha Rho for contributions to a Student Aid Fund. The same year, 1933, marked the introduction of the Insurance Program which the Trustees urged the Alpha to adopt. While student aid was not a prime purpose of the Insurance Program, it was a stated objective that, once the mortgage was liquidated, funds would be set aside for student aid. The Insurance Program which provided for a pledge of $250 to be made by each member was approved unanimously by the Alpha and was continued as a mandatory condition of membership until the adoption of the Alpha Building Program of Chi Psi approved by the 121st Convention of the Fraternity in Ann Arbor, June 1962. The program adopted by the Alpha in 1933 provided a substantial base for student aid.
            <br /><br />
            The desire to provide additional funds for student aid was enhanced by the members of the 1931 delegation when they made the first group effort to establish a fund in memory of their classmate, G. L. C. Strieder, P 1931, "for the purpose of establishing additional means of student aid." This initial effort, during 1939, was increased by contributions from members of the 1931 delegation and friends in the years that followed and particularly several gifts in memory of John R. Armstrong, P 1931. In 1978 these gifts, along with the Strieder Fund, formed the core of the 1931 Delegation Fund.
            <br /><br />
            During 1940, a modest legacy from Mrs. D. W. Skellenger in memory of her husband of the class of 1882, was received by the Association Trustees and was set aside as the Daniel W. Skellenger Fund. The Strieder and Skellenger Funds, modest at their inception, were increased by dividing the 1933 Student Aid Fund, which had been repaid, between them.
            <br /><br />
            Before the actual hostilities had started during World War II, the Alpha was saddened to learn that Walter W. Winika, P 1936, (Lt. U. S. Naval Air Force) had been killed while on patrol duty at Trinidad. To the money received from his participation in the Insurance Program was added several gifts from friends and classmates to establish the Walter W. Winika, P 1936 Fund. As the war went on, the list of fine young Brothers of our Alpha who lost their lives in the service of their country during the period 1942-1946 increased to eleven. With the report of each fatality, the Association Trustees took immediate action to memorialize the Brother and established a Fund in his memory, in most instances using proceeds of the individual's participation in the Insurance Program as the initial basis of the Fund. In addition, families, friends and the trustees also contributed to the established Fund. The Brothers lost during World War II along with a casualty of the Vietnam (E. K. Kissam, Jr., P 1955) and Korean (J. Clendinning, III, P 1947) conflicts constitute the Gold Star Funds of the Foundation. 
            </p>   


        
            <div class="history-row">
            <div class="history-section">
            <p>
                <u>Gold Star Fund</u>
                <br />
                Walter W. Winika, P 1936
                <br />
                William H. MacDonald, P 1939
                <br />
                Edward F. Drake, P 1932
                <br />
                Charles E. Sutton, P 1945
                <br />
                E. Ellsworth Sutphin, III, P 1940
                <br />
                Richard E. Bradley, P 1945
                <br />
                Alfred C. Gregory, Jr., P 1945
                <br />
                Edward L. Stahl, P 1945
                <br />
                H. Dean Krafft, Jr., P 1945
                <br />
                Norman K. Eypper, P 1920
                <br />
                Richard P. Steinberg, P 1943
                <br />
                John Clendinning, III, P 1947
                <br />
                Edward K. Kissam, Jr., P 1955
            </p>
        </div>
        <div class="history-section">
        <p>
            <u>Year Established</u>
            <br />
            1942
            <br />
            1943
            <br />
            1944
            <br />
            1944
            <br />
            1944
            <br />
            1944
            <br />
            1945
            <br />
            1945
            <br />
            1945
            <br />
            1946
            <br />
            1946
            <br />
            1963
            <br />
            1963
        </p>
        </div>
        </div>
        <p>In 1948, Henry G. Atwater, P 1904, President of the Alpha Rho Alumni Association, took steps to formalize and to incorporate the Alpha Rho Memorial Foundation. David Kelly, P 1920, gave generously of his time and services, preparing the incorporation documents and framing the by laws. The Certificate of Incorporation is dated March 12, 1949, just two days before the 70th anniversary date of Alpha Rho on March 14.
        <br /><br />
        The certificate provided for a corporation, not for pecuniary profit, but "to aid, encourage, promote and contribute to the education of members of Alpha Rho." The certificate also provided that all alumni of Alpha Rho and all non Chi Psis who contribute to the Foundation are members and receive a copy of the annual report issued by the Foundation. The fledgling Foundation, dedicated to serving the undergraduate members of Alpha Rho, was launched with the transfer of $5,901.84, representing the memorial funds held by the Trustees of the Alpha Rho Alumni Association, to the Foundation.
        </p>

        </div>
    );

    const page2 = (
        <div>
            <h2>The Early Years to 1978</h2>
            <p>
            During the early years of the Foundation, modest additions were made to the several established Funds by members and friends and by transfer of Association funds. Then in 1954, a Fund was established in memory of Henry G. Atwater, P 1904, whose death occurred On July 20, 1950. Another Fund was established in 1955 in memory of William A. Fisher, P 1903, whose death occurred on December 22, 1954. He was an active and devoted alumnus who served the Alpha in many capacities during his lifetime. In 1961, a Fund was established in memory of Alan R. Kemp, P 1927 (died February 14, 1961), who was elected a Trustee of the Foundation in 1951, Vice President in 1952, serving until the year of his death. During the 85th Anniversary fund campaign, 1963-1964, four funds were established. A Fund in memory of Asher Atkinson, P 1885, and William E. Florance, P 1885, was established by their sons, Asher Atkinson, Jr., P 1924 and Edwin Florance, P 1916. The two Brothers memorialized were officers and trustees of the Alumni Association during the early years of the Alpha.
            <br /><br />
            Friends and classmates of E. Macy Irish, P 1930, a popular and loyal member of the Alpha, established a Fund in his memory in 1963. It was also during the year 1963 that the two additional Gold Star Funds, as already noted, were established.
            <br /><br />
            After a long period of consultation and preparation by Edwin Florance, P 1916, Secretary Treasurer of the Foundation, a special meeting was called for the purpose of changing the charter of the Foundation as demanded by the Internal Revenue Service. With the changes made at the meeting called on February 15, 1969, the District Director of the Internal Revenue Service granted a tax exempt status to the Foundation on March 21, 1969 (the exact date an which the balance of the founders of Alpha Rho were initiated in 1879). All contributions since the 1969 date have been tax deductible on United States income tax returns.
            <br /><br />
            During the spring of 1969, the Alumni Association recommended to the Foundation that in addition to the student aid program adopted by the Foundation that a scholastic improvement and incentive award be adopted. It was suggested that incentive awards based upon cumulative scholarship averages be given to members living in the Lodge. The Foundation promptly approved the recommendation made by the Association Trustees and in the annual report for the Foundation in 1969, it was noted that the awards "will be made to members in good standing living in the Lodge and will be based on mid-year cumulative grades starting in 1970".
            <br /><br />
            The successful tax decision received by the Foundation in 1969 and the effective scholarship program helped to focus attention on the growth of the Foundation assets. Friends, families and the Association Trustees provided funds to establish the following memorials. In 1965 a Fund in memory of Oliver A. Deakin, P 1929, a former Trustee of the Association. In 1968 a Fund in memory of John N. Gulick, P 1937, who had served as Trustee and Officer of the Alumni Association and will be remembered as the Chairman of the highly successful Chi Psi convention hold on the Rutgers Campus on the occasion of the Alpha's 85th Anniversary.
            <br /><br />
            In 1969, a Fund in memory of Eugene S. Brokaw, P 1908, was established by his family. He seldom missed a gathering at the Lodge and served on the boards of both the Association and the Foundation, maintaining an active interest until his death on March 23, 1972.
            <br /><br />
            Herbert V. Young, P 1929, encouraged by the tax exempt status of the Foundation, established the first endowment Fund to be added to the Foundation. Also during 1969 the first delegation Fund, the 1924 Delegation Fund was established following receipt of a legacy provided by the will of W. Duncan Liddle, P 1924. Prior to his death, Brother Liddle had mode known his desire to have a Fund established in the name of his delegation. Every living member of the delegation contributed liberally to the Fund.
            <br /><br />
            At a dinner honoring Harold G. Lundberg, P 1924, on April 6, 1974, the Alpha and alumni provided a generous contribution for the establishment of a Fund in his name. The scholarship awards program proved to be singularly successful. The scholarship of the Alpha improved and at the 136th Convention of Chi Psi hold in Atlanta, June 1977, Alpha Rho was awarded the Goodbody Trophy for excellence in scholarship. This was a first for Alpha Rho.
            <br /><br />
            Following the action of the 1924 delegation, Funds were established by the 1925 Delegation in 1972, the 1936 Delegation in 1973; the 1954 Delegation in 1976; and the 1931 Delegation in 1978; using as already noted, contributions by the delegation and friends in memory of their classmates.
            <br /><br />
            In 1978, the William F. Plumley, P 1899 Fund was established following receipt of a generous legacy provided by his will. Also during 1978, a legacy provided by the will of William H. MacDonald, Sr., P 1911, provided a substantial increment for the Gold Star memorial established for his son William H. MacDonald, Jr., P 1939.
            </p>
            
        </div>
    );

    const page3 = (
        <div>
            <h2>100th Anniversary of Alpha Rho</h2>
            <p>
            With the approach of the 100th Anniversary of Alpha Rho in 1979, the Alpha Rho Alumni Association launched a campaign to raise $100,000. The anniversary campaign was identified as the Century Fund with a Lodge renovation objective of $75,000 and a goal of $25,000 for an increase in the principal funds of the Foundation. When formal solicitation ceased on August 31, 1979, a total of $35,339 had been credited to the Foundation portion of the campaign – a very gratifying 141% of the objective.
            <br /><br />
            At the annual meeting of the Foundation hold in conjunction with the 100th Anniversary banquet of Alpha Rho, the 200 alumni present unanimously approved a resolution proposed by the trustees of the Foundation which would allow the trustees to aid graduate as well as undergraduate members of Alpha Rho to complete their education. This forward looking action would become effective when justified by the income of the Foundation.
            <br /><br />
            By 1979, the modest student aid program of 1933 had become an impressive vehicle for aiding and encouraging the undergraduate, and in the future the graduate members of Chi Psi at Rutgers University. While many alumni gave freely of their time and money to the Foundation and its successful record through 1979, two members were singled out for the part they played in the establishment of the Foundation. Henry G. Atwater, P 1904, a long time advocate for student aid, promised that once the mortgage on the Lodge was paid, funds would be set aside for student aid. His persistence resulted in the establishment of the Alpha Rho Memorial Foundation.
            <br /><br />
            Elected secretary of the Alpha Rho Alumni Association during October 1925, Edwin Florance, P 1916, held the office almost continuously until the establishment of the Foundation and then he become Secretary Treasurer of the Foundation. His meticulous records, patience and dedication made the Foundation a model with tax exempt status. Brother Florance served the Alpha in many capacities until his death on March 23, 1972.
            <br /><br />
            When the Foundation was incorporated in 1949, its capital totaled $5,901.84 in memorial funds previously held by the Alumni Association. The 1979 report issued by the Foundation for the year ending August 31, 1979, recorded a total of $54,250 in principal funds. Since the inception of the Student Aid and Scholarship Incentive programs through 1979, the Foundation had provided $10,341 for 68 grants in aid and $17,400 for 204 Scholarship Incentive Awards.
            <br /><br />
            In the Spring of 1982, additional fund categories were established within the Foundation. These included a Memorial Fund in the name of G. E. Jenkins, P 1883, an endowment Fund honoring the Simms Brothers, Gene Simms, P 1958, Bob Simms, P 1960, Steve Simms, P 1962, and Dick Simms, P 1964, and a General Fund to act as a repository for those who wished to begin contributions for a future fund or who simply felt no specific attachment for any of the established funds. Also, in November of 1982, Farris S. Swackhamer, P1936, Secretary¬-Treasurer since 1972 and former Alumni Association President and active alumnus, passed away. His duties were assumed by J. F. Schwanhausser, P 1946 and his unexpired term as Trustee was filled by Roger B. Parsons, P 1960. When Bob Blunt resigned because of a transfer to Europe, William E. Newell, P 1965, became a Trustee and Chairman of the Investment Committee.
            <br /><br />
            In 1984, the Foundation underwrote the expenses of the Chi Psi/Rutgers Academic Forum, a lecture/commentary program for the College community nurtured by Dr. Michael C. Illuzzi, P 1977, and designed to enhance and broaden the knowledge of undergraduates, especially Rho actives.
            <br /><br />
            Bequests from wills resulted in establishment of the R. C. Roberson, P 1939 Fund in 1986 and the W. F. Davey, P 1933 Fund in 1988, the latter largely through the efforts of "Wa" Babcock, P 1933, an early beneficiary of the Alumni Association assistance program predating the Foundation.
            <br /><br />
            Also during 1988, partly as a result in changes in the income tax law, several contributions of appreciated stock were made, resulting, after their sale, in over a 35% increase in Principal Funds. At the end of the 1988-1989 fiscal year (August 31, 1989) the total amount contributed over the years stood at $118,235. With these funds invested, increased income permitted adding two categories of Scholarship Awards, one to recognize the five most improved scholars, the other to reward the Alpha for improvement in its GPA as a whole. Incentive Award eligibility was also revised to benefit brothers living outside the Lodge who were unable, due to space limitations or other valid reasons, to live there, providing their activity in Fraternity affairs was exemplary.
            <br /><br />
            After receipt of a $5,400 gift earmarked for the purpose, the Foundation added funds to complete a $10,000 payment to the Chi Psi Educational Trust to perpetually endow delivery to active Rho Brothers both the Alpha Management Retreat (to train active officer candidates) and the Program for Self Development (to promote individual growth). In recognition and appreciation for the first such funding by an Alpha Foundation, an award was presented during the 148th Convention at New Brunswick to T. Girard Wharton, P 1925, President of the Foundation since 1952.
            <br /><br />
            By 1989, the Foundation had provided 166 Grants in Aid totaling $46,611 and 425 Awards totaling $39,200, which, added to the grant for AMR/PSD, totals $95,411 given for the benefit of the brotherhood.
            </p>
        </div>
    );

    const page4 = (
        <div>
            <h2>The 1990's</h2>
            <p>
            Approximately one of every three Brothers had received a monetary benefit of some kind by 1993 and the Foundation had provided over 450 awards totaling over $47,000 and more than 180 Grants-in-Aid totaling over $57,000. In addition, it had financially supported Academic Forums and had contributed $10,000 to the Chi Psi Educational Trust to assure that an Alpha Management Retreat and the National Leadership Training Program would take place at Alpha Rho every year as long as the Trust offers these programs. More than half of these benefits had been provided since January, 1984, during the last one fifth of the Foundation's existence.
            <br /><br />
            In June 1991, long-time President Jerry Wharton, P 1925, proposed that the Foundation Board be expanded from five to seven Trustees, that the position of Secretary-Treasurer be split into two functions, that the position of Chairman of the Board be created and that the 1949 By-Laws be amended and restated to reflect these changes and to conform to present-day law governing tax-exempt organizations. Brother Wharton would occupy the Chairman of the Board post and Jack F. Schwanhausser, P 1946, would advance to President. Mark W. Musser, P 1986, assumed the Secretary title and stood for one of the new Trustee slots. Roger Parsons, P 1960, would be the new Treasurer and John R. McCabe, P 1970, Financial Assistance Officer for the University, would stand for the other Trustee position. The Certificate changes would require formal presentation for consideration at the Spring Annual Meeting, but in accordance with the existing By-Laws, the Foundation began operating with its new assignments in place.
            <br /><br />
            Also in 1991, two new Memorial Funds were established; one, announced in 1990, in honor of Brother A. Dudley Watson, P 1915, whose $5,000 bequest was received in 1991, the other in honor of Brother Thomas E. Phillips, P 1931, who passed away August 18 and whose widow requested donations to the Foundation in lieu of flowers. By the end of the fiscal year, $1,430 had been received in the name of Brother Philips. Another loss in 1991 was stalwart supporter Brother Foster B. Whitlock, P 1936, a regular and generous donor to the Class of '36 Fund.
            <br /><br />
            Through the efforts of Bill Newell, P 1965, Investment Committee Chair, the "Balance of Accumulated Income" was once again positive and the funding of AMR and PSD was recovered within two years. In the Fund Application area, two more "firsts" were notable. The Foundation provided a Grant-in-Aid to a graduate student who is studying at an institution other than Rutgers. Then, in the interest of educating in Fraternity Awareness, the Foundation supported on a "this year only" basis, the attendance of four non-officer active Brothers at the 150th Convention, each at $100. AMR and PSD for Rho continued through the Foundation's funding. Coincidentally, a pilot for a new Educational Trust course Program for Leadership Development (largely the effort of Brother Al Riester, Rho '1962, was conducted at Rho in 1991.
            <br /><br />
            In 1992, Brother T. Girard Wharton, P 1925, passed away. As noted in the 1992 Annual Report, "We might speculate that 'Jerry' had a premonition of the event last year when he proposed to 'step upstairs' and transfer the executive direction of the Foundation -- so typical of our selfless, thoughtful and highly organized Brother, who also directed where, the number of speakers and how they should conduct his memorial service." A score of Brothers were there to celebrate the life of a kindred soul who, for over 70 years, exemplified being "an inalienable and unalterable friend" to all Chi Psis. We who were privileged to serve with him as Foundation Trustees will factor "what 'Jerry' might have thought" into our future deliberations.
            <br /><br />
            Fortuitously, at the last meeting he attended, the Foundation recognized his tireless contributions by designating the Honor Society Awards as the "T. Girard Wharton, P 1925 Scholastic Excellence Awards". As an additional honor, on September 15, 1992, the Foundation established the "T. Girard Wharton, P 1925 Memorial Fund", seeding it with a $3,500 transfer from the General Fund. The Alumni Association generously provided a gift of $2,000 to the Wharton Fund, for a beginning total of $5,500. In so doing, the Fraternity paid tribute to the man who had led the Foundation so effectively for over 40 years.
            <br /><br />
            On September 15, 1992, the Foundation elected Herb Young, P 1929, Chairman of the Board, Roger Parsons, P 1960, Vice President and Raymond J. Katz, P 1987, Trustee and Treasurer of the Foundation. In the 1992 Annual Report, Brother Schwanhausser, P 1946, recognized the service of Brother Mark W. Musser, P 1986, in revising the Bylaws, producing superior minutes and providing legal counsel as the Foundation sought to establish new initiatives in concert with the Alumni Association.
            <br /><br />
            While the Principal Funds totaled over $150,000, just about twice their total in 1915, many changes affected the Foundation in 1993. The delegates to the 1992 Convention passed a resolution supporting a $100 "contribution" by initiates to the four-component National Leadership Training Program (NLTP), with a lesser fee for those Brothers whose Alphas, like Rho, had endowed PSD's. The Educational Trust, however, elected to collect $100 from all, with the presumption that endowments could benefit all Alphas in Chi Psi, rather than one. Since the Foundation's By-Laws required it to assist only Rho Brothers, the Foundation could not agree to the change, hence its endowment was effectively negated by the Chi Psi Educational Trust's actions. The solution was to transfer the balance of the former PSD endowment to the AMR endowment with two AMRs being available to Rho each year, desirable because there were often two sets of officers or prospectives who could benefit.
            <br /><br />
            In response to a proposal from the Alumni Association, the Foundation began contributing to the cost of the Lodge Resident Educational Advisor in proportion to his time spent on Foundation matters. In reviewing Scholarship Incentive Award data, the Foundation discovered that the all-men's average was above its lowest award level, resulting in rewarding less than average performance, so the Foundation revised the levels: 2.8-3.199, $100; 3.2-3.599, $150; 3.6-4, $200.
            <br /><br />
            1994 brought Alpha Rho's 115th Anniversary Celebration. Those Brothers who gathered "On the Banks" for the 115th celebration were reminded that the Rho undergraduates were following a course of social action to keep Chi Psi a fraternity to be reckoned with on the Rutgers campus. While the Foundation pursued its sole purpose of educational enhancement, it encouraged and endorsed the Alumni Association Trustees' parallel effort to meet their "bricks and mortar" responsibilities through a plan to conduct a major campaign for much-needed Lodge rehabilitation.
            <br /><br />
            The Foundation's Principal Fund increases in 1994 included two $1,000 bequests from the wills of Bob Wright, P 1927 and Helen Galbraith, widow of Bob Galbraith, P 1924 and an additional $500 gift from Mary Elizabeth Phillips, widow of T. E. Phillips, P 1931.
            <br /><br />
            In 1995 and in the spirit of "succor and assistance", the Foundation shared with the Alumni Association a sizable contribution from a Brother who spent less than two years at Rho, then transferred and graduated from another college and another Alpha. He had been financially assisted by Rho before the Foundation was established, had never forgotten the help he received and wished to acknowledge the favor after these many years. Another more recent Brother "repaid" in full the amount of a Grant he had received as an undergraduate.
            <br /><br />
            The Trustees doubled the Foundation's underwriting of the Resident Educational Advisor position in 1996. The Foundation revised its Awards Program to emphasize Scholarship Achievement, recognizing real merit by increasing the grade point averages required for awards and eliminating some of the programs it felt were not very effective in stimulating educational improvement. The Wharton Scholastic Excellence, Drake and Slifer Awards would remain available, with better than half the Foundation's income budgeted for the Awards and Grant-in-Aid programs. Disappointingly, a request to the Chi Psi Educational Trust to accommodate our unique Charter requirements by adding a separate internal PSD account so that our late 1980s $10,000 endowment would support both PSD and AMR (as originally intended, rather than AMR alone as at present) was not granted.
            <br /><br />
            In 1997, Herb Young, P 1929, after nearly a third of a century of service to the Foundation, decided not to accept another term as Trustee and Chairman of the Board. Herb, a Brother of enthusiastic conviction to the Foundation objective to assist other Brothers, thoroughly demonstrated his zeal by establishing the Foundation's first endowment fund and by regularly contributing both ideas and dollars throughout his tenure. Jack Schwanhausser, P 1946, assumed the role of Chairman of the Board, vacated with the departure of Brother Young from the Foundation board. Also in 1997, the Foundation's Principal Funds gained nearly forty thousand dollars, mostly via a gift of stock from Hank Bartels, P 1945, in connection with the "Bones Lundberg Lodge Renovation" program.
            </p>    
        </div>
    );

    const page5 = (
        <div>
            <h2>Alpha Refounding to Today</h2>
            <p>
            In 2004, the Chi Psi National Fraternity voted to restore Alpha Rho to colony status after several years of dormancy. In 2005, the Foundation was able to provide $5,150 in scholarship monies to 16 of the newest Brothers given their academic accomplishments. By the end of August 2005, the Foundation had a net worth of almost $504,000.
            <br /><br />
            In 2006, the Foundation was especially pleased to award $12,790 in scholarships and awards. The Foundation also received a very generous gift in 2006. As set forth in his will, Brother T. Girard Wharton's estate contributed a remainder estate worth $58, 292 to the Foundation. The contribution was recorded to the T. G. Wharton P 1925 Fund.
            <br /><br />
            Also in 2006, the Foundation acted on Brother Ray Katz's vision to streamline the investment operations of the Foundation with an investment advisor. In late November 2006, the Foundation's Investment Committee voted to reallocate the Foundation's portfolio from one existing investment account with limited diversification into three accounts; two separate investment accounts (Fixed Income & Growth) with broader diversification and specific objectives and one operating account (Checking). Because the Foundation's assets were primarily in individual bonds, stocks or specific sector or indexed mutual funds (primarily large capitalization entities), the Investment Committee, on the advice of the Foundation's investment advisor, agreed it was prudent to better diversify the Foundation's portfolio with the twin goals of increasing return on a portion of the portfolio and establishing a fixed income account to meet the Foundation's annual expenses.
            <br /><br />
            In sum, three accounts replaced the former investment account: (1) a fixed income account, aptly named 'Fixed Income" and invested in fixed income assets that are expected to provide about $18,000 in annual income for the Foundation's programs and expenses; (2) an investment account invested in growth assets and focused on growing the Foundation's corpus for the road ahead named "Compass" and (3) a checking account for paying awards and expenses named "Checking."
            <br /><br />
            The Foundation was delighted to learn that the Alpha had won the Thayer Trophy at the 2007 Chi Psi National Convention. The Trustees were especially pleased about the almost $11,000 in scholarship awards and academic programs funded by the Foundation for our undergraduate Brothers in the same year.
            <br /><br />
            The Foundation ended the 2007 fiscal year with a record net worth of approximately $605,000. With the revised strategy paying handsome returns, the Alpha Rho Memorial Foundation continues to be well endowed to carry on its core mission of providing educational programs, scholarships and awards to Brothers of Alpha Rho of Chi Psi Fraternity.
            </p>
        </div>

    );

    const [currentPage, setCurrentPage] = useState('page1');
    const [showScrollTopButton, setShowScrollTopButton] = useState(false);
    
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 50) {  
                setShowScrollTopButton(true);
            } else {
                setShowScrollTopButton(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const renderPage = () => {
        switch (currentPage) {
            case 'page1':
                return page1;
            case 'page2':
                return page2;
            case 'page3':
                return page3;
            case 'page4':
                return page4;
            case 'page5':
                return page5;
            default:
                return page1;
        }
    };


    
    


    return (
        <div className="history-main">
                    <div className="history-body">
                    <h1>History of the Foundation</h1>
                        <div className="history-buttons">
                            <button className="history-button" onClick={() => setCurrentPage('page1')}>Overview</button>
                            <button className="history-button" onClick={() => setCurrentPage('page2')}>Early Years to 1978</button>
                            <button className="history-button" onClick={() => setCurrentPage('page3')}>100th Anniversary</button>
                            <button className="history-button" onClick={() => setCurrentPage('page4')}>The 1990s</button>
                            <button className="history-button" onClick={() => setCurrentPage('page5')}>Refounding to Today</button>
                        </div>
                        {renderPage()}
                        {showScrollTopButton && (
                        <button className="scroll-to-top" onClick={scrollToTop} title="Scroll to top">
                            ↑
                        </button>
                        )}
                    </div>
                </div>
    );
};

export default History;