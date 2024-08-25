import React, { useRef, useState } from 'react'
import './ProfileHeader.css'
import img1 from '../../../assets/img/Pepsi.png'
import { Link, useLocation } from 'react-router-dom'
const ProfileHeader = () => {

    const [profileImage, setProfileImage] = useState(null);
    const inputRef = useRef(null);

    let { pathname } = useLocation()
    let UserPathname = pathname;

    function handleImageUpload(event) {
        const file = event.target.files[0];
        const imageUrl = URL.createObjectURL(file);
        setProfileImage(imageUrl);
    }

    const handleImage = () => {
        inputRef.current.click()
    }

    return (
        <>

            <div className='container mt-4 mb-4'>
                <div className='row' >
                    <div className='col-md-4 text-center ' >
                        <h4 className='' >Upload Profile Image</h4>
                        <input type="file" ref={inputRef} style={{ display: 'none' }} onChange={handleImageUpload} />
                        <img className='profile-image' onClick={() => handleImage()} src={profileImage ? profileImage : img1} alt="Profile" />
                        <div className='text-center'>
                            <button className='btn btn-primary mt-4 '  > Upload Profile </button>
                        </div>
                    </div>

                    <div className='col-md-6 d-flex flex-column mt-4'  >
                        <h3 className='mt-4' >User</h3>
                        <span className='mt-2'>0 followers | 0 following</span>
                    </div>
                </div>

                <div className='row d-flex   mt-5  mb-3'   >
                    <ul className="nav nav-pills nav-fill ml-4" >
                        <Link to={"/professional/verifiedcalender"} >
                            <li className="nav-item ml-2" >
                                <span className={UserPathname === "/professional/verifiedcalender" ? 'nav-link active' : 'nav-link'} aria-current="page" >Your Ooridoo</span>
                            </li>
                        </Link>
                        <Link to={"/professional/projects"} >
                            <li className="nav-item" >
                                <span className={UserPathname === "/professional/projects"
                                    ? 'nav-link active'
                                    : UserPathname === "/professional/projectsupload"
                                        ? 'nav-link active'
                                        : 'nav-link'} aria-current="page" >Projects</span>
                            </li>
                        </Link>
                        <Link to={"/professional/ideabooks"} >
                            <li className="nav-item" >
                                <span className={UserPathname === "/professional/ideabooks" ? 'nav-link active' : 'nav-link'} aria-current="page" >Ideabooks</span>
                            </li>
                        </Link>
                        <Link to={"/professional/review"} >
                            <li className="nav-item" >
                                <span className=
                                    {
                                           UserPathname === "/professional/review" ? 'nav-link active' 
                                        :  UserPathname === "/professional/reviewrequest" ? 'nav-link active'
                                        :  UserPathname === "/professional/pastreviewrequest" ? 'nav-link active' 
                                        : 'nav-link'
                                    }
                                  aria-current="page" >Review</span>
                        </li>
                    </Link>

                    <Link to={"/professional/questions"} >
                        <li className="nav-item" >
                            <span className={UserPathname === "/professional/questions" ? 'nav-link active' :
                             UserPathname === "/professional/unansweredquestions" ? 'nav-link active':
                            'nav-link'} aria-current="page" >Questions</span>
                        </li>
                    </Link>
                    <Link to={"/professional/activityupdates"} >
                        <li className="nav-item" >
                            <span className={UserPathname === "/professional/activityupdates" ? 'nav-link active' :
                                             UserPathname  ===  "/professional/activitycomments" ? 'nav-link active' :
                                             UserPathname  ===  "/professional/activitypostshare" ? 'nav-link active' :
                                             UserPathname  ===  "/professional/activityreviews" ? 'nav-link active' :
                                             UserPathname  ===  "/professional/activityphoto" ? 'nav-link active'
                            : 'nav-link'} aria-current="page" >Activity</span>
                        </li>
                    </Link>
                    <Link to={"#"} >
                        <li className="nav-item" >
                            <span className={UserPathname === "HomeFashion" ? 'nav-link active' : 'nav-link'} aria-current="page" >Message</span>
                        </li>
                    </Link>
                    <Link to={"/professional/orders"} >
                        <li className="nav-item" >
                            <span className={UserPathname === "/professional/orders" ? 'nav-link active' :
                                             UserPathname === "/professional/ordermessage" ? 'nav-link active' :
                                             UserPathname === "/professional/ordersent" ? 'nav-link active'  
                             : 'nav-link'} aria-current="page" >Orders</span>
                        </li>
                    </Link>

                </ul>
            </div>

            <div className='hr-line' />


        </div >


        </>

    )
}

export default ProfileHeader