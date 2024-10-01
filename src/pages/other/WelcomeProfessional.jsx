import React, { Fragment } from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";

export default function WelcomeProfessional() {
    let { pathname } = useLocation();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/choose-your-plans')
    };

    return (
        <Fragment>
            <SEO
                titleTemplate="Welcome Professional"
                description="Welcome Professional of Varified Calender"
            />
            <LayoutOne>
                {/* breadcrumb */}
                <Breadcrumb
                    pages={[
                        { label: "Home", path: process.env.PUBLIC_URL + "/" },
                        { label: "Welcome Professional", path: process.env.PUBLIC_URL + pathname }
                    ]}
                />
                <div className="login-register-area pt-100 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 ms-auto me-auto">
                                <div className="login-register-wrapper">
                                    <>
                                        <Nav variant="pills" className="login-register-tab-list">
                                            <Nav.Item>
                                                <Nav.Link eventKey="Welcome">
                                                    <h4>Let’s get started by creating your profile</h4>
                                                </Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <h4 className="text-center mb-3">Reach over 65 million homeowners on Verfied calender</h4>
                                        <div className="login-form-container">
                                            <div className="login-register-form">
                                                <form onSubmit={handleSubmit}>
                                                    <label htmlFor="">Business name</label>
                                                    <input
                                                        type="text"
                                                        name="business-name"
                                                        placeholder="Enter your business name here"
                                                    />
                                                    <label htmlFor="category">Professional category</label>
                                                    <select name="category" id="category" className='form-control'>
                                                        <option value="" disabled selected>e.g. General Contractor</option>
                                                        <option value="General Contractor">General Contractor</option>
                                                        <option value="Interior Designers & Decorators">Interior Designers & Decorators</option>
                                                        <option value="Kitchen & Bath Remodelors">Kitchen & Bath Remodelors</option>
                                                    </select>
                                                    <label htmlFor="">Phone number</label>
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <select name="countryCode" id="" className='form-control mb-0'>
                                                                <option data-countryCode="DZ" value="213">Algeria (+213)</option>
                                                                <option data-countryCode="AD" value="376">Andorra (+376)</option>
                                                                <option data-countryCode="AO" value="244">Angola (+244)</option>
                                                                <option data-countryCode="AI" value="1264">Anguilla (+1264)</option>
                                                                <option data-countryCode="AG" value="1268">Antigua &amp; Barbuda (+1268)</option>
                                                                <option data-countryCode="AR" value="54">Argentina (+54)</option>
                                                                <option data-countryCode="AM" value="374">Armenia (+374)</option>
                                                                <option data-countryCode="AW" value="297">Aruba (+297)</option>
                                                                <option data-countryCode="AU" value="61">Australia (+61)</option>
                                                                <option data-countryCode="AT" value="43">Austria (+43)</option>
                                                                <option data-countryCode="AZ" value="994">Azerbaijan (+994)</option>
                                                                <option data-countryCode="BS" value="1242">Bahamas (+1242)</option>
                                                                <option data-countryCode="BH" value="973">Bahrain (+973)</option>
                                                                <option data-countryCode="BD" value="880">Bangladesh (+880)</option>
                                                                <option data-countryCode="BB" value="1246">Barbados (+1246)</option>
                                                                <option data-countryCode="BY" value="375">Belarus (+375)</option>
                                                                <option data-countryCode="BE" value="32">Belgium (+32)</option>
                                                                <option data-countryCode="BZ" value="501">Belize (+501)</option>
                                                                <option data-countryCode="BJ" value="229">Benin (+229)</option>
                                                                <option data-countryCode="BM" value="1441">Bermuda (+1441)</option>
                                                                <option data-countryCode="BT" value="975">Bhutan (+975)</option>
                                                                <option data-countryCode="BO" value="591">Bolivia (+591)</option>
                                                                <option data-countryCode="BA" value="387">Bosnia Herzegovina (+387)</option>
                                                                <option data-countryCode="BW" value="267">Botswana (+267)</option>
                                                                <option data-countryCode="BR" value="55">Brazil (+55)</option>
                                                                <option data-countryCode="BN" value="673">Brunei (+673)</option>
                                                                <option data-countryCode="BG" value="359">Bulgaria (+359)</option>
                                                                <option data-countryCode="BF" value="226">Burkina Faso (+226)</option>
                                                                <option data-countryCode="BI" value="257">Burundi (+257)</option>
                                                                <option data-countryCode="KH" value="855">Cambodia (+855)</option>
                                                                <option data-countryCode="CM" value="237">Cameroon (+237)</option>
                                                                <option data-countryCode="CA" value="1">Canada (+1)</option>
                                                                <option data-countryCode="CV" value="238">Cape Verde Islands (+238)</option>
                                                                <option data-countryCode="KY" value="1345">Cayman Islands (+1345)</option>
                                                                <option data-countryCode="CF" value="236">Central African Republic (+236)</option>
                                                                <option data-countryCode="CL" value="56">Chile (+56)</option>
                                                                <option data-countryCode="CN" value="86">China (+86)</option>
                                                                <option data-countryCode="CO" value="57">Colombia (+57)</option>
                                                                <option data-countryCode="KM" value="269">Comoros (+269)</option>
                                                                <option data-countryCode="CG" value="242">Congo (+242)</option>
                                                                <option data-countryCode="CK" value="682">Cook Islands (+682)</option>
                                                                <option data-countryCode="CR" value="506">Costa Rica (+506)</option>
                                                                <option data-countryCode="HR" value="385">Croatia (+385)</option>
                                                                <option data-countryCode="CU" value="53">Cuba (+53)</option>
                                                                <option data-countryCode="CY" value="90392">Cyprus North (+90392)</option>
                                                                <option data-countryCode="CY" value="357">Cyprus South (+357)</option>
                                                                <option data-countryCode="CZ" value="42">Czech Republic (+42)</option>
                                                                <option data-countryCode="DK" value="45">Denmark (+45)</option>
                                                                <option data-countryCode="DJ" value="253">Djibouti (+253)</option>
                                                                <option data-countryCode="DM" value="1809">Dominica (+1809)</option>
                                                                <option data-countryCode="DO" value="1809">Dominican Republic (+1809)</option>
                                                                <option data-countryCode="EC" value="593">Ecuador (+593)</option>
                                                                <option data-countryCode="EG" value="20">Egypt (+20)</option>
                                                                <option data-countryCode="SV" value="503">El Salvador (+503)</option>
                                                                <option data-countryCode="GQ" value="240">Equatorial Guinea (+240)</option>
                                                                <option data-countryCode="ER" value="291">Eritrea (+291)</option>
                                                                <option data-countryCode="EE" value="372">Estonia (+372)</option>
                                                                <option data-countryCode="ET" value="251">Ethiopia (+251)</option>
                                                                <option data-countryCode="FK" value="500">Falkland Islands (+500)</option>
                                                                <option data-countryCode="FO" value="298">Faroe Islands (+298)</option>
                                                                <option data-countryCode="FJ" value="679">Fiji (+679)</option>
                                                                <option data-countryCode="FI" value="358">Finland (+358)</option>
                                                                <option data-countryCode="FR" value="33">France (+33)</option>
                                                                <option data-countryCode="GF" value="594">French Guiana (+594)</option>
                                                                <option data-countryCode="PF" value="689">French Polynesia (+689)</option>
                                                                <option data-countryCode="GA" value="241">Gabon (+241)</option>
                                                                <option data-countryCode="GM" value="220">Gambia (+220)</option>
                                                                <option data-countryCode="GE" value="7880">Georgia (+7880)</option>
                                                                <option data-countryCode="DE" value="49">Germany (+49)</option>
                                                                <option data-countryCode="GH" value="233">Ghana (+233)</option>
                                                                <option data-countryCode="GI" value="350">Gibraltar (+350)</option>
                                                                <option data-countryCode="GR" value="30">Greece (+30)</option>
                                                                <option data-countryCode="GL" value="299">Greenland (+299)</option>
                                                                <option data-countryCode="GD" value="1473">Grenada (+1473)</option>
                                                                <option data-countryCode="GP" value="590">Guadeloupe (+590)</option>
                                                                <option data-countryCode="GU" value="671">Guam (+671)</option>
                                                                <option data-countryCode="GT" value="502">Guatemala (+502)</option>
                                                                <option data-countryCode="GN" value="224">Guinea (+224)</option>
                                                                <option data-countryCode="GW" value="245">Guinea - Bissau (+245)</option>
                                                                <option data-countryCode="GY" value="592">Guyana (+592)</option>
                                                                <option data-countryCode="HT" value="509">Haiti (+509)</option>
                                                                <option data-countryCode="HN" value="504">Honduras (+504)</option>
                                                                <option data-countryCode="HK" value="852">Hong Kong (+852)</option>
                                                                <option data-countryCode="HU" value="36">Hungary (+36)</option>
                                                                <option data-countryCode="IS" value="354">Iceland (+354)</option>
                                                                <option data-countryCode="IN" value="91">India (+91)</option>
                                                                <option data-countryCode="ID" value="62">Indonesia (+62)</option>
                                                                <option data-countryCode="IR" value="98">Iran (+98)</option>
                                                                <option data-countryCode="IQ" value="964">Iraq (+964)</option>
                                                                <option data-countryCode="IE" value="353">Ireland (+353)</option>
                                                                <option data-countryCode="IL" value="972">Israel (+972)</option>
                                                                <option data-countryCode="IT" value="39">Italy (+39)</option>
                                                                <option data-countryCode="JM" value="1876">Jamaica (+1876)</option>
                                                                <option data-countryCode="JP" value="81">Japan (+81)</option>
                                                                <option data-countryCode="JO" value="962">Jordan (+962)</option>
                                                                <option data-countryCode="KZ" value="7">Kazakhstan (+7)</option>
                                                                <option data-countryCode="KE" value="254">Kenya (+254)</option>
                                                                <option data-countryCode="KI" value="686">Kiribati (+686)</option>
                                                                <option data-countryCode="KP" value="850">Korea North (+850)</option>
                                                                <option data-countryCode="KR" value="82">Korea South (+82)</option>
                                                                <option data-countryCode="KW" value="965">Kuwait (+965)</option>
                                                                <option data-countryCode="KG" value="996">Kyrgyzstan (+996)</option>
                                                                <option data-countryCode="LA" value="856">Laos (+856)</option>
                                                                <option data-countryCode="LV" value="371">Latvia (+371)</option>
                                                                <option data-countryCode="LB" value="961">Lebanon (+961)</option>
                                                                <option data-countryCode="LS" value="266">Lesotho (+266)</option>
                                                                <option data-countryCode="LR" value="231">Liberia (+231)</option>
                                                                <option data-countryCode="LY" value="218">Libya (+218)</option>
                                                                <option data-countryCode="LI" value="417">Liechtenstein (+417)</option>
                                                                <option data-countryCode="LT" value="370">Lithuania (+370)</option>
                                                                <option data-countryCode="LU" value="352">Luxembourg (+352)</option>
                                                                <option data-countryCode="MO" value="853">Macao (+853)</option>
                                                                <option data-countryCode="MK" value="389">Macedonia (+389)</option>
                                                                <option data-countryCode="MG" value="261">Madagascar (+261)</option>
                                                                <option data-countryCode="MW" value="265">Malawi (+265)</option>
                                                                <option data-countryCode="MY" value="60">Malaysia (+60)</option>
                                                                <option data-countryCode="MV" value="960">Maldives (+960)</option>
                                                                <option data-countryCode="ML" value="223">Mali (+223)</option>
                                                                <option data-countryCode="MT" value="356">Malta (+356)</option>
                                                                <option data-countryCode="MH" value="692">Marshall Islands (+692)</option>
                                                                <option data-countryCode="MQ" value="596">Martinique (+596)</option>
                                                                <option data-countryCode="MR" value="222">Mauritania (+222)</option>
                                                                <option data-countryCode="YT" value="269">Mayotte (+269)</option>
                                                                <option data-countryCode="MX" value="52">Mexico (+52)</option>
                                                                <option data-countryCode="FM" value="691">Micronesia (+691)</option>
                                                                <option data-countryCode="MD" value="373">Moldova (+373)</option>
                                                                <option data-countryCode="MC" value="377">Monaco (+377)</option>
                                                                <option data-countryCode="MN" value="976">Mongolia (+976)</option>
                                                                <option data-countryCode="MS" value="1664">Montserrat (+1664)</option>
                                                                <option data-countryCode="MA" value="212">Morocco (+212)</option>
                                                                <option data-countryCode="MZ" value="258">Mozambique (+258)</option>
                                                                <option data-countryCode="MN" value="95">Myanmar (+95)</option>
                                                                <option data-countryCode="NA" value="264">Namibia (+264)</option>
                                                                <option data-countryCode="NR" value="674">Nauru (+674)</option>
                                                                <option data-countryCode="NP" value="977">Nepal (+977)</option>
                                                                <option data-countryCode="NL" value="31">Netherlands (+31)</option>
                                                                <option data-countryCode="NC" value="687">New Caledonia (+687)</option>
                                                                <option data-countryCode="NZ" value="64">New Zealand (+64)</option>
                                                                <option data-countryCode="NI" value="505">Nicaragua (+505)</option>
                                                                <option data-countryCode="NE" value="227">Niger (+227)</option>
                                                                <option data-countryCode="NG" value="234">Nigeria (+234)</option>
                                                                <option data-countryCode="NU" value="683">Niue (+683)</option>
                                                                <option data-countryCode="NF" value="672">Norfolk Islands (+672)</option>
                                                                <option data-countryCode="NP" value="670">Northern Marianas (+670)</option>
                                                                <option data-countryCode="NO" value="47">Norway (+47)</option>
                                                                <option data-countryCode="OM" value="968">Oman (+968)</option>
                                                                <option data-countryCode="PK" value="92">Pakistan (+92)</option>
                                                                <option data-countryCode="PW" value="680">Palau (+680)</option>
                                                                <option data-countryCode="PA" value="507">Panama (+507)</option>
                                                                <option data-countryCode="PG" value="675">Papua New Guinea (+675)</option>
                                                                <option data-countryCode="PY" value="595">Paraguay (+595)</option>
                                                                <option data-countryCode="PE" value="51">Peru (+51)</option>
                                                                <option data-countryCode="PH" value="63">Philippines (+63)</option>
                                                                <option data-countryCode="PL" value="48">Poland (+48)</option>
                                                                <option data-countryCode="PT" value="351">Portugal (+351)</option>
                                                                <option data-countryCode="PR" value="1787">Puerto Rico (+1787)</option>
                                                                <option data-countryCode="QA" value="974">Qatar (+974)</option>
                                                                <option data-countryCode="RE" value="262">Reunion (+262)</option>
                                                                <option data-countryCode="RO" value="40">Romania (+40)</option>
                                                                <option data-countryCode="RU" value="7">Russia (+7)</option>
                                                                <option data-countryCode="RW" value="250">Rwanda (+250)</option>
                                                                <option data-countryCode="SM" value="378">San Marino (+378)</option>
                                                                <option data-countryCode="ST" value="239">Sao Tome &amp; Principe (+239)</option>
                                                                <option data-countryCode="SA" value="966">Saudi Arabia (+966)</option>
                                                                <option data-countryCode="SN" value="221">Senegal (+221)</option>
                                                                <option data-countryCode="CS" value="381">Serbia (+381)</option>
                                                                <option data-countryCode="SC" value="248">Seychelles (+248)</option>
                                                                <option data-countryCode="SL" value="232">Sierra Leone (+232)</option>
                                                                <option data-countryCode="SG" value="65">Singapore (+65)</option>
                                                                <option data-countryCode="SK" value="421">Slovak Republic (+421)</option>
                                                                <option data-countryCode="SI" value="386">Slovenia (+386)</option>
                                                                <option data-countryCode="SB" value="677">Solomon Islands (+677)</option>
                                                                <option data-countryCode="SO" value="252">Somalia (+252)</option>
                                                                <option data-countryCode="ZA" value="27">South Africa (+27)</option>
                                                                <option data-countryCode="ES" value="34">Spain (+34)</option>
                                                                <option data-countryCode="LK" value="94">Sri Lanka (+94)</option>
                                                                <option data-countryCode="SH" value="290">St. Helena (+290)</option>
                                                                <option data-countryCode="KN" value="1869">St. Kitts (+1869)</option>
                                                                <option data-countryCode="SC" value="1758">St. Lucia (+1758)</option>
                                                                <option data-countryCode="SD" value="249">Sudan (+249)</option>
                                                                <option data-countryCode="SR" value="597">Suriname (+597)</option>
                                                                <option data-countryCode="SZ" value="268">Swaziland (+268)</option>
                                                                <option data-countryCode="SE" value="46">Sweden (+46)</option>
                                                                <option data-countryCode="CH" value="41">Switzerland (+41)</option>
                                                                <option data-countryCode="SI" value="963">Syria (+963)</option>
                                                                <option data-countryCode="TW" value="886">Taiwan (+886)</option>
                                                                <option data-countryCode="TJ" value="7">Tajikstan (+7)</option>
                                                                <option data-countryCode="TH" value="66">Thailand (+66)</option>
                                                                <option data-countryCode="TG" value="228">Togo (+228)</option>
                                                                <option data-countryCode="TO" value="676">Tonga (+676)</option>
                                                                <option data-countryCode="TT" value="1868">Trinidad &amp; Tobago (+1868)</option>
                                                                <option data-countryCode="TN" value="216">Tunisia (+216)</option>
                                                                <option data-countryCode="TR" value="90">Turkey (+90)</option>
                                                                <option data-countryCode="TM" value="7">Turkmenistan (+7)</option>
                                                                <option data-countryCode="TM" value="993">Turkmenistan (+993)</option>
                                                                <option data-countryCode="TC" value="1649">Turks &amp; Caicos Islands (+1649)</option>
                                                                <option data-countryCode="TV" value="688">Tuvalu (+688)</option>
                                                                <option data-countryCode="UG" value="256">Uganda (+256)</option>
                                                                <option data-countryCode="GB" value="44">UK (+44)</option>
                                                                <option data-countryCode="UA" value="380">Ukraine (+380)</option>
                                                                <option data-countryCode="AE" value="971">United Arab Emirates (+971)</option>
                                                                <option data-countryCode="UY" value="598">Uruguay (+598)</option>
                                                                <option data-countryCode="US" value="1">USA (+1)</option>
                                                                <option data-countryCode="UZ" value="7">Uzbekistan (+7)</option>
                                                                <option data-countryCode="VU" value="678">Vanuatu (+678)</option>
                                                                <option data-countryCode="VA" value="379">Vatican City (+379)</option>
                                                                <option data-countryCode="VE" value="58">Venezuela (+58)</option>
                                                                <option data-countryCode="VN" value="84">Vietnam (+84)</option>
                                                                <option data-countryCode="VG" value="84">Virgin Islands - British (+1284)</option>
                                                                <option data-countryCode="VI" value="84">Virgin Islands - US (+1340)</option>
                                                                <option data-countryCode="WF" value="681">Wallis &amp; Futuna (+681)</option>
                                                                <option data-countryCode="YE" value="969">Yemen (North)(+969)</option>
                                                                <option data-countryCode="YE" value="967">Yemen (South)(+967)</option>
                                                                <option data-countryCode="ZM" value="260">Zambia (+260)</option>
                                                                <option data-countryCode="ZW" value="263">Zimbabwe (+263)</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-md-8">
                                                            <input
                                                                type="text"
                                                                className='mb-0'
                                                                name="potential-clients"
                                                                placeholder="For Potential clients to reach you"
                                                            />
                                                        </div>
                                                    </div>
                                                    <p className='text-muted mb-3'>Your phone number will be featured on your public profile and in Verfied Calendar search results.</p>
                                                    <label htmlFor="">Country</label>
                                                    <select name="country" class="form-control" id="country">
                                                        <option value="0" label="Select a country ... " selected="selected">Select a country ... </option>
                                                        <optgroup id="country-optgroup-Africa" label="Africa">
                                                            <option value="DZ" label="Algeria">Algeria</option>
                                                            <option value="AO" label="Angola">Angola</option>
                                                            <option value="BJ" label="Benin">Benin</option>
                                                            <option value="BW" label="Botswana">Botswana</option>
                                                            <option value="BF" label="Burkina Faso">Burkina Faso</option>
                                                            <option value="BI" label="Burundi">Burundi</option>
                                                            <option value="CM" label="Cameroon">Cameroon</option>
                                                            <option value="CV" label="Cape Verde">Cape Verde</option>
                                                            <option value="CF" label="Central African Republic">Central African Republic</option>
                                                            <option value="TD" label="Chad">Chad</option>
                                                            <option value="KM" label="Comoros">Comoros</option>
                                                            <option value="CG" label="Congo - Brazzaville">Congo - Brazzaville</option>
                                                            <option value="CD" label="Congo - Kinshasa">Congo - Kinshasa</option>
                                                            <option value="CI" label="Côte d’Ivoire">Côte d’Ivoire</option>
                                                            <option value="DJ" label="Djibouti">Djibouti</option>
                                                            <option value="EG" label="Egypt">Egypt</option>
                                                            <option value="GQ" label="Equatorial Guinea">Equatorial Guinea</option>
                                                            <option value="ER" label="Eritrea">Eritrea</option>
                                                            <option value="ET" label="Ethiopia">Ethiopia</option>
                                                            <option value="GA" label="Gabon">Gabon</option>
                                                            <option value="GM" label="Gambia">Gambia</option>
                                                            <option value="GH" label="Ghana">Ghana</option>
                                                            <option value="GN" label="Guinea">Guinea</option>
                                                            <option value="GW" label="Guinea-Bissau">Guinea-Bissau</option>
                                                            <option value="KE" label="Kenya">Kenya</option>
                                                            <option value="LS" label="Lesotho">Lesotho</option>
                                                            <option value="LR" label="Liberia">Liberia</option>
                                                            <option value="LY" label="Libya">Libya</option>
                                                            <option value="MG" label="Madagascar">Madagascar</option>
                                                            <option value="MW" label="Malawi">Malawi</option>
                                                            <option value="ML" label="Mali">Mali</option>
                                                            <option value="MR" label="Mauritania">Mauritania</option>
                                                            <option value="MU" label="Mauritius">Mauritius</option>
                                                            <option value="YT" label="Mayotte">Mayotte</option>
                                                            <option value="MA" label="Morocco">Morocco</option>
                                                            <option value="MZ" label="Mozambique">Mozambique</option>
                                                            <option value="NA" label="Namibia">Namibia</option>
                                                            <option value="NE" label="Niger">Niger</option>
                                                            <option value="NG" label="Nigeria">Nigeria</option>
                                                            <option value="RW" label="Rwanda">Rwanda</option>
                                                            <option value="RE" label="Réunion">Réunion</option>
                                                            <option value="SH" label="Saint Helena">Saint Helena</option>
                                                            <option value="SN" label="Senegal">Senegal</option>
                                                            <option value="SC" label="Seychelles">Seychelles</option>
                                                            <option value="SL" label="Sierra Leone">Sierra Leone</option>
                                                            <option value="SO" label="Somalia">Somalia</option>
                                                            <option value="ZA" label="South Africa">South Africa</option>
                                                            <option value="SD" label="Sudan">Sudan</option>
                                                            <option value="SZ" label="Swaziland">Swaziland</option>
                                                            <option value="ST" label="São Tomé and Príncipe">São Tomé and Príncipe</option>
                                                            <option value="TZ" label="Tanzania">Tanzania</option>
                                                            <option value="TG" label="Togo">Togo</option>
                                                            <option value="TN" label="Tunisia">Tunisia</option>
                                                            <option value="UG" label="Uganda">Uganda</option>
                                                            <option value="EH" label="Western Sahara">Western Sahara</option>
                                                            <option value="ZM" label="Zambia">Zambia</option>
                                                            <option value="ZW" label="Zimbabwe">Zimbabwe</option>
                                                        </optgroup>
                                                        <optgroup id="country-optgroup-Americas" label="Americas">
                                                            <option value="AI" label="Anguilla">Anguilla</option>
                                                            <option value="AG" label="Antigua and Barbuda">Antigua and Barbuda</option>
                                                            <option value="AR" label="Argentina">Argentina</option>
                                                            <option value="AW" label="Aruba">Aruba</option>
                                                            <option value="BS" label="Bahamas">Bahamas</option>
                                                            <option value="BB" label="Barbados">Barbados</option>
                                                            <option value="BZ" label="Belize">Belize</option>
                                                            <option value="BM" label="Bermuda">Bermuda</option>
                                                            <option value="BO" label="Bolivia">Bolivia</option>
                                                            <option value="BR" label="Brazil">Brazil</option>
                                                            <option value="VG" label="British Virgin Islands">British Virgin Islands</option>
                                                            <option value="CA" label="Canada">Canada</option>
                                                            <option value="KY" label="Cayman Islands">Cayman Islands</option>
                                                            <option value="CL" label="Chile">Chile</option>
                                                            <option value="CO" label="Colombia">Colombia</option>
                                                            <option value="CR" label="Costa Rica">Costa Rica</option>
                                                            <option value="CU" label="Cuba">Cuba</option>
                                                            <option value="DM" label="Dominica">Dominica</option>
                                                            <option value="DO" label="Dominican Republic">Dominican Republic</option>
                                                            <option value="EC" label="Ecuador">Ecuador</option>
                                                            <option value="SV" label="El Salvador">El Salvador</option>
                                                            <option value="FK" label="Falkland Islands">Falkland Islands</option>
                                                            <option value="GF" label="French Guiana">French Guiana</option>
                                                            <option value="GL" label="Greenland">Greenland</option>
                                                            <option value="GD" label="Grenada">Grenada</option>
                                                            <option value="GP" label="Guadeloupe">Guadeloupe</option>
                                                            <option value="GT" label="Guatemala">Guatemala</option>
                                                            <option value="GY" label="Guyana">Guyana</option>
                                                            <option value="HT" label="Haiti">Haiti</option>
                                                            <option value="HN" label="Honduras">Honduras</option>
                                                            <option value="JM" label="Jamaica">Jamaica</option>
                                                            <option value="MQ" label="Martinique">Martinique</option>
                                                            <option value="MX" label="Mexico">Mexico</option>
                                                            <option value="MS" label="Montserrat">Montserrat</option>
                                                            <option value="AN" label="Netherlands Antilles">Netherlands Antilles</option>
                                                            <option value="NI" label="Nicaragua">Nicaragua</option>
                                                            <option value="PA" label="Panama">Panama</option>
                                                            <option value="PY" label="Paraguay">Paraguay</option>
                                                            <option value="PE" label="Peru">Peru</option>
                                                            <option value="PR" label="Puerto Rico">Puerto Rico</option>
                                                            <option value="BL" label="Saint Barthélemy">Saint Barthélemy</option>
                                                            <option value="KN" label="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                                                            <option value="LC" label="Saint Lucia">Saint Lucia</option>
                                                            <option value="MF" label="Saint Martin">Saint Martin</option>
                                                            <option value="PM" label="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                                                            <option value="VC" label="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
                                                            <option value="SR" label="Suriname">Suriname</option>
                                                            <option value="TT" label="Trinidad and Tobago">Trinidad and Tobago</option>
                                                            <option value="TC" label="Turks and Caicos Islands">Turks and Caicos Islands</option>
                                                            <option value="VI" label="U.S. Virgin Islands">U.S. Virgin Islands</option>
                                                            <option value="US" label="United States">United States</option>
                                                            <option value="UY" label="Uruguay">Uruguay</option>
                                                            <option value="VE" label="Venezuela">Venezuela</option>
                                                        </optgroup>
                                                        <optgroup id="country-optgroup-Asia" label="Asia">
                                                            <option value="AF" label="Afghanistan">Afghanistan</option>
                                                            <option value="AM" label="Armenia">Armenia</option>
                                                            <option value="AZ" label="Azerbaijan">Azerbaijan</option>
                                                            <option value="BH" label="Bahrain">Bahrain</option>
                                                            <option value="BD" label="Bangladesh">Bangladesh</option>
                                                            <option value="BT" label="Bhutan">Bhutan</option>
                                                            <option value="BN" label="Brunei">Brunei</option>
                                                            <option value="KH" label="Cambodia">Cambodia</option>
                                                            <option value="CN" label="China">China</option>
                                                            <option value="GE" label="Georgia">Georgia</option>
                                                            <option value="HK" label="Hong Kong SAR China">Hong Kong SAR China</option>
                                                            <option value="IN" label="India">India</option>
                                                            <option value="ID" label="Indonesia">Indonesia</option>
                                                            <option value="IR" label="Iran">Iran</option>
                                                            <option value="IQ" label="Iraq">Iraq</option>
                                                            <option value="IL" label="Israel">Israel</option>
                                                            <option value="JP" label="Japan">Japan</option>
                                                            <option value="JO" label="Jordan">Jordan</option>
                                                            <option value="KZ" label="Kazakhstan">Kazakhstan</option>
                                                            <option value="KW" label="Kuwait">Kuwait</option>
                                                            <option value="KG" label="Kyrgyzstan">Kyrgyzstan</option>
                                                            <option value="LA" label="Laos">Laos</option>
                                                            <option value="LB" label="Lebanon">Lebanon</option>
                                                            <option value="MO" label="Macau SAR China">Macau SAR China</option>
                                                            <option value="MY" label="Malaysia">Malaysia</option>
                                                            <option value="MV" label="Maldives">Maldives</option>
                                                            <option value="MN" label="Mongolia">Mongolia</option>
                                                            <option value="MM" label="Myanmar [Burma]">Myanmar [Burma]</option>
                                                            <option value="NP" label="Nepal">Nepal</option>
                                                            <option value="NT" label="Neutral Zone">Neutral Zone</option>
                                                            <option value="KP" label="North Korea">North Korea</option>
                                                            <option value="OM" label="Oman">Oman</option>
                                                            <option value="PK" label="Pakistan">Pakistan</option>
                                                            <option value="PS" label="Palestinian Territories">Palestinian Territories</option>
                                                            <option value="YD" label="People's Democratic Republic of Yemen">People's Democratic Republic of Yemen</option>
                                                            <option value="PH" label="Philippines">Philippines</option>
                                                            <option value="QA" label="Qatar">Qatar</option>
                                                            <option value="SA" label="Saudi Arabia">Saudi Arabia</option>
                                                            <option value="SG" label="Singapore">Singapore</option>
                                                            <option value="KR" label="South Korea">South Korea</option>
                                                            <option value="LK" label="Sri Lanka">Sri Lanka</option>
                                                            <option value="SY" label="Syria">Syria</option>
                                                            <option value="TW" label="Taiwan">Taiwan</option>
                                                            <option value="TJ" label="Tajikistan">Tajikistan</option>
                                                            <option value="TH" label="Thailand">Thailand</option>
                                                            <option value="TL" label="Timor-Leste">Timor-Leste</option>
                                                            <option value="TR" label="Turkey">Turkey</option>
                                                            <option value="TM" label="Turkmenistan">Turkmenistan</option>
                                                            <option value="AE" label="United Arab Emirates">United Arab Emirates</option>
                                                            <option value="UZ" label="Uzbekistan">Uzbekistan</option>
                                                            <option value="VN" label="Vietnam">Vietnam</option>
                                                            <option value="YE" label="Yemen">Yemen</option>
                                                        </optgroup>
                                                        <optgroup id="country-optgroup-Europe" label="Europe">
                                                            <option value="AL" label="Albania">Albania</option>
                                                            <option value="AD" label="Andorra">Andorra</option>
                                                            <option value="AT" label="Austria">Austria</option>
                                                            <option value="BY" label="Belarus">Belarus</option>
                                                            <option value="BE" label="Belgium">Belgium</option>
                                                            <option value="BA" label="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                                            <option value="BG" label="Bulgaria">Bulgaria</option>
                                                            <option value="HR" label="Croatia">Croatia</option>
                                                            <option value="CY" label="Cyprus">Cyprus</option>
                                                            <option value="CZ" label="Czech Republic">Czech Republic</option>
                                                            <option value="DK" label="Denmark">Denmark</option>
                                                            <option value="DD" label="East Germany">East Germany</option>
                                                            <option value="EE" label="Estonia">Estonia</option>
                                                            <option value="FO" label="Faroe Islands">Faroe Islands</option>
                                                            <option value="FI" label="Finland">Finland</option>
                                                            <option value="FR" label="France">France</option>
                                                            <option value="DE" label="Germany">Germany</option>
                                                            <option value="GI" label="Gibraltar">Gibraltar</option>
                                                            <option value="GR" label="Greece">Greece</option>
                                                            <option value="GG" label="Guernsey">Guernsey</option>
                                                            <option value="HU" label="Hungary">Hungary</option>
                                                            <option value="IS" label="Iceland">Iceland</option>
                                                            <option value="IE" label="Ireland">Ireland</option>
                                                            <option value="IM" label="Isle of Man">Isle of Man</option>
                                                            <option value="IT" label="Italy">Italy</option>
                                                            <option value="JE" label="Jersey">Jersey</option>
                                                            <option value="LV" label="Latvia">Latvia</option>
                                                            <option value="LI" label="Liechtenstein">Liechtenstein</option>
                                                            <option value="LT" label="Lithuania">Lithuania</option>
                                                            <option value="LU" label="Luxembourg">Luxembourg</option>
                                                            <option value="MK" label="Macedonia">Macedonia</option>
                                                            <option value="MT" label="Malta">Malta</option>
                                                            <option value="FX" label="Metropolitan France">Metropolitan France</option>
                                                            <option value="MD" label="Moldova">Moldova</option>
                                                            <option value="MC" label="Monaco">Monaco</option>
                                                            <option value="ME" label="Montenegro">Montenegro</option>
                                                            <option value="NL" label="Netherlands">Netherlands</option>
                                                            <option value="NO" label="Norway">Norway</option>
                                                            <option value="PL" label="Poland">Poland</option>
                                                            <option value="PT" label="Portugal">Portugal</option>
                                                            <option value="RO" label="Romania">Romania</option>
                                                            <option value="RU" label="Russia">Russia</option>
                                                            <option value="SM" label="San Marino">San Marino</option>
                                                            <option value="RS" label="Serbia">Serbia</option>
                                                            <option value="CS" label="Serbia and Montenegro">Serbia and Montenegro</option>
                                                            <option value="SK" label="Slovakia">Slovakia</option>
                                                            <option value="SI" label="Slovenia">Slovenia</option>
                                                            <option value="ES" label="Spain">Spain</option>
                                                            <option value="SJ" label="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                                                            <option value="SE" label="Sweden">Sweden</option>
                                                            <option value="CH" label="Switzerland">Switzerland</option>
                                                            <option value="UA" label="Ukraine">Ukraine</option>
                                                            <option value="SU" label="Union of Soviet Socialist Republics">Union of Soviet Socialist Republics</option>
                                                            <option value="GB" label="United Kingdom">United Kingdom</option>
                                                            <option value="VA" label="Vatican City">Vatican City</option>
                                                            <option value="AX" label="Åland Islands">Åland Islands</option>
                                                        </optgroup>
                                                        <optgroup id="country-optgroup-Oceania" label="Oceania">
                                                            <option value="AS" label="American Samoa">American Samoa</option>
                                                            <option value="AQ" label="Antarctica">Antarctica</option>
                                                            <option value="AU" label="Australia">Australia</option>
                                                            <option value="BV" label="Bouvet Island">Bouvet Island</option>
                                                            <option value="IO" label="British Indian Ocean Territory">British Indian Ocean Territory</option>
                                                            <option value="CX" label="Christmas Island">Christmas Island</option>
                                                            <option value="CC" label="Cocos [Keeling] Islands">Cocos [Keeling] Islands</option>
                                                            <option value="CK" label="Cook Islands">Cook Islands</option>
                                                            <option value="FJ" label="Fiji">Fiji</option>
                                                            <option value="PF" label="French Polynesia">French Polynesia</option>
                                                            <option value="TF" label="French Southern Territories">French Southern Territories</option>
                                                            <option value="GU" label="Guam">Guam</option>
                                                            <option value="HM" label="Heard Island and McDonald Islands">Heard Island and McDonald Islands</option>
                                                            <option value="KI" label="Kiribati">Kiribati</option>
                                                            <option value="MH" label="Marshall Islands">Marshall Islands</option>
                                                            <option value="FM" label="Micronesia">Micronesia</option>
                                                            <option value="NR" label="Nauru">Nauru</option>
                                                            <option value="NC" label="New Caledonia">New Caledonia</option>
                                                            <option value="NZ" label="New Zealand">New Zealand</option>
                                                            <option value="NU" label="Niue">Niue</option>
                                                            <option value="NF" label="Norfolk Island">Norfolk Island</option>
                                                            <option value="MP" label="Northern Mariana Islands">Northern Mariana Islands</option>
                                                            <option value="PW" label="Palau">Palau</option>
                                                            <option value="PG" label="Papua New Guinea">Papua New Guinea</option>
                                                            <option value="PN" label="Pitcairn Islands">Pitcairn Islands</option>
                                                            <option value="WS" label="Samoa">Samoa</option>
                                                            <option value="SB" label="Solomon Islands">Solomon Islands</option>
                                                            <option value="GS" label="South Georgia and the South Sandwich Islands">South Georgia and the South Sandwich Islands</option>
                                                            <option value="TK" label="Tokelau">Tokelau</option>
                                                            <option value="TO" label="Tonga">Tonga</option>
                                                            <option value="TV" label="Tuvalu">Tuvalu</option>
                                                            <option value="UM" label="U.S. Minor Outlying Islands">U.S. Minor Outlying Islands</option>
                                                            <option value="VU" label="Vanuatu">Vanuatu</option>
                                                            <option value="WF" label="Wallis and Futuna">Wallis and Futuna</option>
                                                        </optgroup>
                                                    </select>
                                                    <label htmlFor="">Contact Name</label>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <input
                                                                type="text"
                                                                name="first-name"
                                                                placeholder="First Name"
                                                            />
                                                        </div>
                                                        <div className="col-md-6">
                                                            <input
                                                                type="text"
                                                                name="last-name"
                                                                placeholder="Last Name"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="co-md-12 d-flex gap-2 mb-3">
                                                            <input className="mt-1" type="checkbox" value="" id="flexCheckDefault" />
                                                            <label className="form-check-label" for="flexCheckDefault">
                                                                Enable text messages (recommended)
                                                                <br />
                                                                <small className='text-muted'>
                                                                    I agree to receive text messages about new business leads, product news, and best practices at the number provided pursuant to
                                                                    <Link to="" className='text-primary'> Verfied Calendar Terms of Use.</Link>
                                                                </small>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="button-box">
                                                        <button className="w-100" type="submit">
                                                            <span>Next</span>
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutOne>
        </Fragment>
    )
}
